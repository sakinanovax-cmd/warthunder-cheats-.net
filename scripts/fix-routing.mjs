#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea War Thunder source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['war-thunder-esp', 'war-thunder-esp'],
	['war-thunder-aimbot', 'war-thunder-aimbot'],
	['eac', 'eac'],
	['undetected-war-thunder-cheats', 'undetected-war-thunder-cheats'],
	['war-thunder-wallhack', 'war-thunder-wallhack'],
	['war-thunder-radar-hack', 'war-thunder-radar-hack'],
	['war-thunder-cheats-2026', 'war-thunder-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['warthundercheats.net', 'warthundercheats.net'],
	['trucos-war-thunder', 'trucos-war-thunder'],
	['triche-war-thunder', 'triche-war-thunder'],
	['war-thunder-cheats', 'war-thunder-cheats'],
	['cheats-war-thunder', 'cheats-war-thunder'],
	['trucchi-war-thunder', 'trucchi-war-thunder'],
	['cheaty-war-thunder', 'cheaty-war-thunder'],
	['chity-war-thunder', 'chity-war-thunder'],
	['chitov-war-thunder', 'chitov-war-thunder'],
	['chitiv-war-thunder', 'chitiv-war-thunder'],
	['cheatow-war-thunder', 'cheatow-war-thunder'],
	['hile-war-thunder', 'hile-war-thunder'],
	['war-thunder-hile', 'war-thunder-hile'],
	['war-thunder-esp-chity', 'war-thunder-esp-chity'],
	['war-thunder-aimbot-chity', 'war-thunder-aimbot-chity'],
	['unentdeckte-war-thunder-cheats', 'unentdeckte-war-thunder-cheats'],
	['cheats-war-thunder-indetectaveis', 'cheats-war-thunder-indetectaveis'],
	['trucchi-war-thunder-indetectabili', 'trucchi-war-thunder-indetectabili'],
	['niewykrywalne-cheats-war-thunder', 'niewykrywalne-cheats-war-thunder'],
	['nedecektiruemye-chity-war-thunder', 'nedecektiruemye-chity-war-thunder'],
	['tespit-edilemeyen-war-thunder-hileleri', 'tespit-edilemeyen-war-thunder-hileleri'],
	['nedecektovani-chity-war-thunder', 'nedecektovani-chity-war-thunder'],
	['cheats-war-thunder-nedetectabile', 'cheats-war-thunder-nedetectabile'],
	['basta-war-thunder-cheats', 'basta-war-thunder-cheats'],
	['eac-bypass-trucos-war-thunder', 'eac-bypass-trucos-war-thunder'],
	['eac-bypass-triche-war-thunder', 'eac-bypass-triche-war-thunder'],
	['eac-bypass-cheats-war-thunder', 'eac-bypass-cheats-war-thunder'],
	['eac-bypass-chity-war-thunder', 'eac-bypass-chity-war-thunder'],
	['eac-bypass-war-thunder', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich war-thunder-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/war-thunder-cheats-hero.webp',
	'war-thunder-esp': '/images/war-thunder-cheats-esp-wallhack.webp',
	'war-thunder-aimbot': '/images/war-thunder-cheats-aimbot-combat.webp',
	features: '/images/war-thunder-cheats-package.webp',
	pricing: '/images/war-thunder-cheats-cover.webp',
	setup: '/images/war-thunder-loadout-builder.webp',
	updates: '/images/war-thunder-header-art.webp',
	faq: '/images/war-thunder-squad-fight.webp',
	support: '/images/war-thunder-cheats-package.webp',
	undetected: '/images/war-thunder-battle-royale-combat.webp',
	wallhack: '/images/war-thunder-cheats-esp-wallhack.webp',
	radar: '/images/war-thunder-player-esp.webp',
	'eac': '/images/war-thunder-reboot-van-fight.webp',
	'cheats-2026': '/images/war-thunder-cheats-hero.webp',
	privacy: '/images/war-thunder-cheats-aimbot-combat.webp',
	refund: '/images/war-thunder-cheats-cover.webp',
	terms: '/images/war-thunder-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'war-thunder-esp', 'war-thunder-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'war-thunder-esp' | 'war-thunder-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
