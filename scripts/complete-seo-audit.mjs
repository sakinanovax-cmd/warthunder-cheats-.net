#!/usr/bin/env node
/**
 * Completes war-thunder-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'war-thunder-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'war-thunder-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'war-thunder-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'war-thunder-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-war-thunder-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'war-thunder-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'war-thunder-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'war-thunder-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/war-thunder-war-thunder/g, 'war-thunder'],
	[/eac-bypass-war-thunder/g, 'eac-bypass'],
	[/War Thunder/g, 'War Thunder'],
	[/War Thunder/g, 'War Thunder'],
	[/Call of Duty/g, 'War Thunder'],
	[/War Thunder Wallhack/g, 'War Thunder Wallhack'],
	[/War Thunder Radar Hack/g, 'War Thunder Radar Hack'],
	[/War Thunder Cheat Features/g, 'War Thunder Cheat Features'],
	[/War Thunder Cheat Pricing/g, 'War Thunder Cheat Pricing'],
	[/War Thunder Cheat Setup/g, 'War Thunder Cheat Setup'],
	[/War Thunder Cheat Status/g, 'War Thunder Cheat Status'],
	[/War Thunder Cheat Support/g, 'War Thunder Cheat Support'],
	[/War Thunder squad fight/g, 'War Thunder squad fight'],
	[/War Thunder squad builder/g, 'War Thunder loadout builder'],
	[/War Thunder store header/g, 'War Thunder header'],
	[/War Thunder wasteland combat/g, 'War Thunder battle royale combat'],
	[/War Thunder loadout builder/g, 'War Thunder loadout builder'],
	[/War Thunder pricing/g, 'War Thunder pricing'],
	[/War Thunder Easy Anti-Cheat/g, 'War Thunder Easy Anti-Cheat'],
	[/on War Thunder/g, 'on War Thunder'],
	[/for War Thunder/g, 'for War Thunder'],
	[/War Thunder guides/g, 'War Thunder guides'],
	[/War Thunder guide/g, 'War Thunder guide'],
	[/War Thunder hileleri/g, 'War Thunder hileleri'],
	[/War Thunder hile/g, 'War Thunder hile'],
	[/War Thunder hileleri/g, 'War Thunder hileleri'],
	[/cheatów War Thunder/g, 'cheatów War Thunder'],
	[/cheat War Thunder/g, 'cheat War Thunder'],
	[/cheats War Thunder/g, 'cheats War Thunder'],
	[/trucos War Thunder/g, 'trucos War Thunder'],
	[/triche War Thunder/g, 'triche War Thunder'],
	[/trucchi War Thunder/g, 'trucchi War Thunder'],
	[/Wallhack War Thunder/g, 'War Thunder Wallhack'],
	[/cheat War Thunder undetected/g, 'cheat War Thunder undetected'],
	[/cheats War Thunder undetected/g, 'cheats War Thunder undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/war-thunder-cheats/g, 'war-thunder-cheats'],
	[/war-thunder/g, 'war-thunder'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for War Thunder'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after War Thunder anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy War Thunder Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/War Thunder guides/g, 'War Thunder guides');
	content = content.replace(/War Thunder guide/g, 'War Thunder guide');
	content = content.replace(/War Thunder hileleri/g, 'War Thunder hileleri');
	content = content.replace(/War Thunder hile/g, 'War Thunder hile');
	content = content.replace(/cheat War Thunder/g, 'cheat War Thunder');
	content = content.replace(/cheats War Thunder/g, 'cheats War Thunder');
	content = content.replace(/trucos War Thunder/g, 'trucos War Thunder');
	content = content.replace(/triche War Thunder/g, 'triche War Thunder');
	content = content.replace(/trucchi War Thunder/g, 'trucchi War Thunder');
	content = content.replace(/cheatów War Thunder/g, 'cheatów War Thunder');
	content = content.replace(/читов War Thunder/g, 'читов War Thunder');
	content = content.replace(/читів War Thunder/g, 'читів War Thunder');
	content = content.replace(/War Thunderチート/g, 'War Thunderチート');
	content = content.replace(/War Thunder 치트/g, 'War Thunder 치트');
	content = content.replace(/War Thunder作弊/g, 'War Thunder作弊');
	content = content.replace(/War Thunder rehberleri/g, 'War Thunder rehberleri');
	content = content.replace(/War Thunder gidsen/g, 'War Thunder gidsen');
	content = content.replace(/War Thunder průvodce/g, 'War Thunder průvodce');
	content = content.replace(/War Thunder guider/g, 'War Thunder guider');
	content = content.replace(/War Thunder related/g, 'War Thunder related');
	content = content.replace(/War Thunder ガイド/g, 'War Thunder ガイド');
	content = content.replace(/War Thunder 가이드/g, 'War Thunder 가이드');
	content = content.replace(/War Thunder指南/g, 'War Thunder指南');
	content = content.replace(/War Thunder गाइड/g, 'War Thunder गाइड');
	content = content.replace(/War Thunder panduan/g, 'War Thunder panduan');
	content = content.replace(/War Thunder คู่มือ/g, 'War Thunder คู่มือ');
	content = content.replace(/War Thunder hướng dẫn/g, 'War Thunder hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== War Thunder Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
