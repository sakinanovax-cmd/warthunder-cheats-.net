#!/usr/bin/env node
/** Final pass: fix remaining War Thunder references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['warThunderImages', 'warThunderImages'],
	["from '../data/war-thunder'", "from '../data/war-thunder'"],
	["from './war-thunder'", "from './war-thunder'"],
	['/undetected-war-thunder-cheats/', '/undetected-war-thunder-cheats/'],
	['/war-thunder-wallhack/', '/war-thunder-wallhack/'],
	['/war-thunder-radar-hack/', '/war-thunder-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/war-thunder-cheats-2026/', '/war-thunder-cheats-2026/'],
	['/war-thunder-aimbot/', '/war-thunder-aimbot/'],
	['/war-thunder-esp/', '/war-thunder-esp/'],
	['/war-thunder-cheats/', '/war-thunder-esp/'],
	['War Thunder Cheats', 'War Thunder Cheats'],
	['War Thunder cheats', 'War Thunder cheats'],
	['War Thunder wallhack', 'War Thunder wallhack'],
	['War Thunder radar', 'War Thunder radar'],
	['War Thunder Aimbot', 'War Thunder Aimbot'],
	['War Thunder ESP', 'War Thunder ESP'],
	['War Thunder', 'War Thunder'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['warthundercheats.net', 'warthundercheats.net'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
