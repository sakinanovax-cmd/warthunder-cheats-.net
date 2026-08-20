#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → War Thunder Cheats.
 * Domain: warthundercheats.net
 * Run from project root: node scripts/adapt-war-thunder.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'war-thunder-aimbot'],
	['tarkov-esp', 'war-thunder-esp'],
	['tarkov-wallhack', 'war-thunder-wallhack'],
	['tarkov-radar-hack', 'war-thunder-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-war-thunder-cheats'],
	['tarkov-cheats-2026', 'war-thunder-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'war-thunder-cheats'],
	['tarkov-cheat-download', 'war-thunder-cheat-download'],
	['tarkov-mod-menu', 'war-thunder-mod-menu'],
	['tarkov-soft-aim', 'war-thunder-soft-aim'],
	['best-tarkov-cheats', 'best-war-thunder-cheats'],
	['tarkov-aimbot-hack', 'war-thunder-aimbot-hack'],
	['tarkov-esp-hack', 'war-thunder-esp-hack'],
	['tarkov-unlock-all', 'war-thunder-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://warthundercheats.net'],
	['https://www.tarkovcheats.org', 'https://www.warthundercheats.net'],
	['www.tarkovcheats.org', 'www.warthundercheats.net'],
	['support@tarkovcheats.org', 'support@warthundercheats.net'],
	['tarkovcheats.org', 'warthundercheats.net'],
	['besttarkovcheats.com', 'warthundercheats.net'],
	['www.besttarkovcheats.com', 'www.warthundercheats.net'],
	['besttarkovcheats', 'warthundercheats'],
	['project-name=tarkovcheats', 'project-name=warthundercheats'],
	['name = "tarkovcheats"', 'name = "warthundercheats"'],
	['"name": "tarkov-cheats"', '"name": "war-thunder-cheats"'],
	['/products/escape-from-tarkov', '/products/war-thunder'],
	['tarkov-esp-player-tags', 'war-thunder-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'war-thunder-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'war-thunder-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'war-thunder-aimbot-skeleton'],
	['tarkov-esp-radar', 'war-thunder-esp-radar'],
	['tarkov-cheats-combat', 'war-thunder-cheats-combat'],
	['tarkov-cheats-logo', 'war-thunder-cheats-logo'],
	['tarkov-cheats-hero', 'war-thunder-cheats-hero'],
	['tarkov-hero-banner', 'war-thunder-hero-banner'],
	['tarkov-hero-ghost', 'war-thunder-hero-ghost'],
	['tarkov-hero-source', 'war-thunder-hero-source'],
	['undetected-tarkov-cheats', 'undetected-war-thunder-cheats'],
	['best-tarkov-cheats', 'best-war-thunder-cheats'],
	['tarkov-cheat-download', 'war-thunder-cheat-download'],
	['tarkov-cheats-2026', 'war-thunder-cheats-2026'],
	['tarkov-radar-hack', 'war-thunder-radar-hack'],
	['tarkov-aimbot-hack', 'war-thunder-aimbot-hack'],
	['tarkov-esp-hack', 'war-thunder-esp-hack'],
	['tarkov-unlock-all', 'war-thunder-unlock-all'],
	['tarkov-soft-aim', 'war-thunder-soft-aim'],
	['tarkov-mod-menu', 'war-thunder-mod-menu'],
	['tarkov-wallhack', 'war-thunder-wallhack'],
	['tarkov-cheats', 'war-thunder-cheats'],
	['tarkov-aimbot', 'war-thunder-aimbot'],
	['tarkov-esp', 'war-thunder-esp'],
	['tarkov-hack-overlays', 'war-thunder-hack-overlays'],
	['fetch-tarkov-images', 'fetch-war-thunder-images'],
	['fix-tarkov-copy', 'fix-war-thunder-copy'],
	['fix-bsg-copy', 'fix-gaijin-copy'],
	['tarkovImages', 'warThunderImages'],
	["from './tarkov'", "from './war-thunder'"],
	["from '../data/tarkov'", "from '../data/war-thunder'"],
	["from '../../data/tarkov'", "from '../../data/war-thunder'"],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['https://www.battleye.com/', 'https://www.easy.ac/'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['escape-from-tarkov-cheats', 'war-thunder-cheats'],
	['escape-from-tarkov', 'war-thunder'],
	['Escape from Tarkov', 'War Thunder'],
	['Tarkov Cheats', 'War Thunder Cheats'],
	['Tarkov cheats', 'War Thunder cheats'],
	['Tarkov cheat', 'War Thunder cheat'],
	['TarkovCheatsSite', 'WarThunderCheatsSite'],
	['Tarkov Intel', 'War Thunder Intel'],
	['Buy Tarkov Cheats', 'Buy War Thunder Cheats'],
	['tarkov hacks', 'war thunder hacks'],
	['tarkov cheats', 'war thunder cheats'],
	['tarkov hack', 'war thunder cheat'],
	['tarkov cheat', 'war thunder cheat'],
	['trucos-tarkov', 'trucos-war-thunder'],
	['triche-tarkov', 'triche-war-thunder'],
	['cheats-tarkov', 'cheats-war-thunder'],
	['trucchi-tarkov', 'trucchi-war-thunder'],
	['cheaty-tarkov', 'cheaty-war-thunder'],
	['chity-tarkov', 'chity-war-thunder'],
	['chitov-tarkov', 'chitov-war-thunder'],
	['chitiv-tarkov', 'chitiv-war-thunder'],
	['cheatow-tarkov', 'cheatow-war-thunder'],
	['hile-tarkov', 'hile-war-thunder'],
	['tarkov-hile', 'war-thunder-hile'],
	['Customs, Woods, and Streets of Tarkov', 'Sinai, Kursk, and Berlin'],
	['Customs, Woods and Streets of Tarkov', 'Sinai, Kursk and Berlin'],
	['Customs, Woods et Streets of Tarkov', 'Sinai, Kursk et Berlin'],
	['Customs, Woods e Streets of Tarkov', 'Sinai, Kursk e Berlin'],
	['Customs, Woods und Streets of Tarkov', 'Sinai, Kursk und Berlin'],
	['Streets of Tarkov', 'Stalingrad'],
	['PMC raids and Scav runs', 'Air, Ground, and Naval battles'],
	['PMC and Scav runs', 'Air and Ground battles'],
	['PMC raids and Scav', 'Air and Ground'],
	['PMC & Scav', 'Air & Ground'],
	['PMCs and Scavs', 'tanks and aircraft'],
	['PMC and Scav', 'tank and aircraft'],
	['Scav runs', 'Arcade battles'],
	['Scav run', 'Arcade battle'],
	['Scavs', 'AI units'],
	['PMCs', 'enemy vehicles'],
	['PMC', 'vehicle'],
	['Battlestate Games', 'Gaijin Entertainment'],
	['https://www.escapefromtarkov.com/support/', 'https://warthunder.com/support/'],
	['https://www.escapefromtarkov.com/', 'https://warthunder.com/'],
	['before you raid', 'before you queue'],
	['during a raid', 'during a battle'],
	['in raids', 'in battles'],
	['every raid', 'every match'],
	['next raid', 'next battle'],
	['a raid', 'a battle'],
	['raid flow', 'battle flow'],
	['near extracts', 'near capture points'],
	['extracts', 'capture points'],
	['extract fights', 'spawn fights'],
	['extract fight', 'spawn fight'],
	['extract timer', 'ticket timer'],
	['extract', 'capture point'],
	['queue a raid', 'queue a match'],
	['dorms, Factory', 'urban maps'],
	['dorms', 'close-range maps'],
	['Factory', 'Poland'],
	['Woods', 'Kursk'],
	['Customs', 'Sinai'],
	['Interchange', 'the Rhine'],
	['tarkov esp', 'war thunder esp'],
	['tarkov aimbot', 'war thunder aimbot'],
	['Tarkov ESP', 'War Thunder ESP'],
	['Tarkov Aimbot', 'War Thunder Aimbot'],
	['Tarkov Radar', 'War Thunder Radar'],
	['Tarkov', 'War Thunder'],
	['tarkov', 'war-thunder'],
	['EFT', 'WT'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-war-thunder.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'war-thunder.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → war-thunder.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-war-thunder-images.mjs'],
		['tarkov-hack-overlays.mjs', 'war-thunder-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-war-thunder-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'war-thunder-aimbot': 'war-thunder-aimbot',
		'war-thunder-esp': 'war-thunder-esp',
		'war-thunder-wallhack': 'wallhack',
		'war-thunder-radar-hack': 'radar',
		'undetected-war-thunder-cheats': 'undetected',
		'war-thunder-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'war-thunder-cheats': 'hacks',
		'war-thunder-cheat-download': 'cheat-download',
		'war-thunder-mod-menu': 'mod-menu',
		'war-thunder-soft-aim': 'soft-aim',
		'best-war-thunder-cheats': 'best-cheats',
		'war-thunder-aimbot-hack': 'aimbot-hack',
		'war-thunder-esp-hack': 'esp-hack',
		'war-thunder-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'war-thunder');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → War Thunder Cheats (warthundercheats.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: polish brand.ts, generate images, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
