#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from War Thunder source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['war-thunder-esp', 'war-thunder-esp'],
	['war-thunder-aimbot', 'war-thunder-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-war-thunder-cheats', 'undetected-war-thunder-cheats'],
	['war-thunder-wallhack', 'war-thunder-wallhack'],
	['war-thunder-radar-hack', 'war-thunder-radar-hack'],
	['war-thunder-cheats-2026', 'war-thunder-cheats-2026'],
	['war-thunder-cheats', 'war-thunder-cheats'],
	['war-thunder', 'war-thunder'],
	['War Thunder', 'War Thunder'],
	['War Thunder', 'War Thunder'],
	['War Thunder Cheats', 'War Thunder Cheats'],
	['War Thunder cheats', 'War Thunder cheats'],
	['War Thunder cheat', 'War Thunder cheat'],
	['War Thunder ESP', 'War Thunder ESP'],
	['War Thunder Aimbot', 'War Thunder Aimbot'],
	['War Thunder wallhack', 'War Thunder wallhack'],
	['War Thunder radar', 'War Thunder radar'],
	['War Thunder firefights', 'War Thunder firefights'],
	['War Thunder combat', 'War Thunder combat'],
	['War Thunder patches', 'War Thunder patches'],
	['War Thunder updates', 'War Thunder updates'],
	['War Thunder setup', 'War Thunder setup'],
	['War Thunder license', 'War Thunder license'],
	['War Thunder licenses', 'War Thunder licenses'],
	['War Thunder sessions', 'War Thunder sessions'],
	['in War Thunder', 'in War Thunder'],
	['for War Thunder', 'for War Thunder'],
	['War Thunder on', 'War Thunder on'],
	['War Thunder or', 'War Thunder or'],
	['War Thunder\'s', 'War Thunder\'s'],
	['War Thunder ', 'War Thunder '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@warthundercheats.net', 'support@warthundercheats.net'],
	['Sinai, Kursk, and Berlin', 'Sinai, Kursk, and Berlin'],
	['Sinai, Kursk and Berlin', 'Sinai, Kursk and Berlin'],
	['spawn fights', 'spawn fights'],
	['spawn fight', 'spawn fight'],
	['raid rounds', 'raid rounds'],
	['capture point', 'capture point'],
	['enemy vehicles', 'players'],
	['operator', 'player'],
	['enemy vehicles', 'Players'],
	['Operator', 'Player'],
	['ticket timer', 'ticket timer'],
	['Air, Ground, and Naval battles', 'Air, Ground, and Naval battles'],
	['Air, Ground, and Naval battles', 'Air, Ground, and Naval battles'],
	['Air & Ground', 'Air & Ground'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'War Thunder combat pace'],
	['COD', 'War Thunder'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'War Thunder Cheats',
	game: 'War Thunder',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Sinai, Kursk, and Berlin'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
