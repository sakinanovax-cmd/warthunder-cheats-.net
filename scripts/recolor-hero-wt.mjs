import sharp from 'sharp';
import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

function rgbToHsl(r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	if (max === min) return { h: 0, s: 0, l };
	const d = max - min;
	const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	let h = 0;
	if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
	else if (max === g) h = ((b - r) / d + 2) / 6;
	else h = ((r - g) / d + 4) / 6;
	return { h, s, l };
}

function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}

function hslToRgb(h, s, l) {
	if (s === 0) {
		const v = Math.round(l * 255);
		return [v, v, v];
	}
	const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	const p = 2 * l - q;
	return [
		Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
		Math.round(hue2rgb(p, q, h) * 255),
		Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
	];
}

function recolorPixels(data) {
	for (let i = 0; i < data.length; i += 4) {
		const { h, s, l } = rgbToHsl(data[i], data[i + 1], data[i + 2]);
		if (s > 0.12 && l > 0.04 && l < 0.92 && h >= 0.62 && h <= 0.95) {
			const t = (h - 0.62) / 0.33;
			const [r, g, b] = hslToRgb(0.045 + t * 0.04, Math.min(1, s * 1.08), Math.min(0.78, l * 1.02));
			data[i] = r;
			data[i + 1] = g;
			data[i + 2] = b;
		}
	}
}

function lum(r, g, b) {
	return (r + g + b) / 3;
}

function isNameLetter(r, g, b) {
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const sat = max === 0 ? 0 : (max - min) / max;
	const l = lum(r, g, b);
	return l > 72 && sat < 0.34 && r > 70 && g > 65 && b > 55;
}

function inpaintLetters(data, width, height, box) {
	const idx = (x, y) => (y * width + x) * 4;
	const mask = new Uint8Array(width * height);
	for (let y = box.top; y < box.top + box.height; y++) {
		for (let x = box.left; x < box.left + box.width; x++) {
			const i = idx(x, y);
			if (isNameLetter(data[i], data[i + 1], data[i + 2])) mask[y * width + x] = 1;
		}
	}
	const dilate = mask;
	const src = Buffer.from(data);
	for (let pass = 0; pass < 6; pass++) {
		for (let y = box.top; y < box.top + box.height; y++) {
			for (let x = box.left; x < box.left + box.width; x++) {
				if (!dilate[y * width + x]) continue;
				let r = 0;
				let g = 0;
				let b = 0;
				let n = 0;
				for (let dy = -2; dy <= 2; dy++) {
					for (let dx = -2; dx <= 2; dx++) {
						const nx = x + dx;
						const ny = y + dy;
						if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
						if (dilate[ny * width + nx] && pass < 5) continue;
						const i = idx(nx, ny);
						r += src[i];
						g += src[i + 1];
						b += src[i + 2];
						n++;
					}
				}
				if (!n) continue;
				const i = idx(x, y);
				data[i] = Math.round(r / n);
				data[i + 1] = Math.round(g / n);
				data[i + 2] = Math.round(b / n);
			}
		}
		src.set(data);
	}
}

function inpaintBright(data, width, height, box, minL) {
	const idx = (x, y) => (y * width + x) * 4;
	const mask = new Uint8Array(width * height);
	for (let y = box.top; y < box.top + box.height; y++) {
		for (let x = box.left; x < box.left + box.width; x++) {
			const i = idx(x, y);
			if (lum(data[i], data[i + 1], data[i + 2]) >= minL) mask[y * width + x] = 1;
		}
	}
	const src = Buffer.from(data);
	for (let pass = 0; pass < 7; pass++) {
		for (let y = box.top; y < box.top + box.height; y++) {
			for (let x = box.left; x < box.left + box.width; x++) {
				if (!mask[y * width + x]) continue;
				let r = 0;
				let g = 0;
				let b = 0;
				let n = 0;
				for (let dy = -2; dy <= 2; dy++) {
					for (let dx = -2; dx <= 2; dx++) {
						const nx = x + dx;
						const ny = y + dy;
						if (nx < box.left || ny < box.top || nx >= box.left + box.width || ny >= box.top + box.height) continue;
						if (mask[ny * width + nx] && pass < 4) continue;
						const i = idx(nx, ny);
						r += src[i];
						g += src[i + 1];
						b += src[i + 2];
						n++;
					}
				}
				if (!n) continue;
				const i = idx(x, y);
				data[i] = Math.round(r / n);
				data[i + 1] = Math.round(g / n);
				data[i + 2] = Math.round(b / n);
			}
		}
		src.set(data);
	}
}

function stampSvg(w, h) {
	const sx = w / 80;
	const sy = h / 48;
	return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <g transform="translate(${w / 2},${h / 2}) rotate(-7) skewX(-9) scale(${sx * 0.95},${sy * 0.9}) translate(-40,-24)" fill="#e2dccf" fill-opacity="0.9">
    <path d="M16 10 L21 10 L26 30 L28.5 18 L32.5 18 L35 30 L40 10 L45 10 L38 38 L33 38 L30.5 26 L28 38 L23 38 Z"/>
    <path d="M49 10 L67 10 L67 16 L60.5 16 L60.5 38 L55.5 38 L55.5 16 L49 16 Z"/>
  </g>
</svg>`);
}

function printLetters(base, stamp, left, top, stampW, stampH, imgW) {
	for (let y = 0; y < stampH; y++) {
		for (let x = 0; x < stampW; x++) {
			const si = (y * stampW + x) * 4;
			const a = stamp[si + 3] / 255;
			if (a < 0.05) continue;
			const dx = left + x;
			const dy = top + y;
			const di = (dy * imgW + dx) * 4;
			const br0 = base[di];
			const bg0 = base[di + 1];
			const bb0 = base[di + 2];
			const leftI = (dy * imgW + Math.max(0, dx - 3)) * 4;
			const rightI = (dy * imgW + dx + 3) * 4;
			const slope = (lum(base[rightI], base[rightI + 1], base[rightI + 2]) - lum(base[leftI], base[leftI + 1], base[leftI + 2])) / 255;
			const light = Math.min(1.25, Math.max(0.38, lum(br0, bg0, bb0) / 95));
			const warm = Math.max(0, slope) * 0.55 + x / stampW * 0.18;
			const inkR = Math.min(255, br0 * 0.32 + (210 + warm * 55) * light * 0.68);
			const inkG = Math.min(255, bg0 * 0.32 + (198 + warm * 16) * light * 0.68);
			const inkB = Math.min(255, bb0 * 0.32 + (178 - warm * 12) * light * 0.68);
			const t = a * (0.58 + light * 0.18);
			base[di] = Math.round(br0 * (1 - t) + inkR * t);
			base[di + 1] = Math.round(bg0 * (1 - t) + inkG * t);
			base[di + 2] = Math.round(bb0 * (1 - t) + inkB * t);
		}
	}
}

const dir = 'public/images';
const origPath = path.join(dir, '_hero-orig.png');
const fullPath = path.join(dir, 'war-thunder-cheats-hero-full.png');
await copyFile(origPath, fullPath);

const { data, info } = await sharp(fullPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
recolorPixels(data);
inpaintLetters(data, info.width, info.height, { left: 848, top: 172, width: 74, height: 40 });
inpaintBright(data, info.width, info.height, { left: 848, top: 208, width: 76, height: 32 }, 40);

const stampW = 80;
const stampH = 48;
const stampHi = await sharp(stampSvg(stampW, stampH))
	.ensureAlpha()
	.resize(stampW * 4, stampH * 4)
	.blur(0.55)
	.resize(stampW, stampH)
	.raw()
	.toBuffer({ resolveWithObject: true });
printLetters(data, stampHi.data, 850, 172, stampW, stampH, info.width);

const composed = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
	.png({ compressionLevel: 9 })
	.toBuffer();

await writeFile(fullPath, composed);
await writeFile(path.join(dir, 'war-thunder-cheats-hero.png'), composed);

const sizes = [
	{ w: 1536, h: 614, png: true, name: 'war-thunder-cheats-hero-1536w' },
	{ w: 1024, h: 409, png: true, name: 'war-thunder-cheats-hero-1024w' },
	{ w: 640, h: 256, png: false, name: 'war-thunder-cheats-hero-640w' },
];
for (const s of sizes) {
	await writeFile(
		path.join(dir, `${s.name}.webp`),
		await sharp(composed).resize(s.w, s.h, { fit: 'fill' }).webp({ quality: s.w <= 640 ? 74 : 82, effort: 6 }).toBuffer(),
	);
	if (s.png) {
		await writeFile(
			path.join(dir, `${s.name}.png`),
			await sharp(composed).resize(s.w, s.h, { fit: 'fill' }).png({ compressionLevel: 9 }).toBuffer(),
		);
	}
}
await writeFile(path.join(dir, 'war-thunder-cheats-hero.webp'), await sharp(composed).webp({ quality: 82, effort: 6 }).toBuffer());
console.log('hero recolored + printed WT tape');
