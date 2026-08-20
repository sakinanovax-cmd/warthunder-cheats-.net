#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'war thunder cheats', espWallhack: 'war thunder cheats wallhack', aimbotCombat: 'war thunder cheats aimbot', squadFight: 'war thunder cheats', playerEsp: 'war thunder cheats esp', headerArt: 'war thunder cheats aimbot', cheatsPackage: 'war thunder cheats radar', rebootFight: 'war thunder cheats aimbot', battleRoyale: 'war thunder cheats', battleRoyaleIsland: 'war thunder cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'War Thunder ESP player tags hack'", "imageAlt: 'war thunder cheats esp'"],
	["imageAlt: 'War Thunder ESP radar hack'", "imageAlt: 'war thunder cheats radar'"],
	["imageAlt: 'War Thunder aimbot sniper kill'", "imageAlt: 'war thunder cheats aimbot'"],
	["imageAlt: 'War Thunder aimbot skeleton targeting'", "imageAlt: 'war thunder cheats aimbot'"],
	["imageAlt: 'War Thunder cheats ADS combat'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats setup PC activation'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats FAQ ESP aimbot'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats support license help'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'Undetected war thunder cheats ESP wallhack'", "imageAlt: 'undetected war thunder cheats'"],
	["imageAlt: 'War Thunder wallhack skeleton ESP'", "imageAlt: 'war thunder cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass war-thunder ESP aimbot'", "imageAlt: 'war thunder cheats eac'"],
	["imageAlt: 'War Thunder cheats 2026 ESP aimbot'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats combat aimbot'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheat download ESP aimbot'", "imageAlt: 'war thunder cheats download'"],
	["imageAlt: 'War Thunder mod menu ESP aimbot'", "imageAlt: 'war thunder cheats mod menu'"],
	["imageAlt: 'War Thunder soft aim aimbot settings'", "imageAlt: 'war thunder cheats soft aim'"],
	["imageAlt: 'Best war thunder cheats 2026 ESP'", "imageAlt: 'best war thunder cheats'"],
	["imageAlt: 'War Thunder aimbot hack combat'", "imageAlt: 'war thunder cheats aimbot'"],
	["imageAlt: 'War Thunder ESP hack wallhack'", "imageAlt: 'war thunder cheats esp'"],
	["imageAlt: 'War Thunder unlock all ESP aimbot guide'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats privacy policy'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats refund policy'", "imageAlt: 'war thunder cheats'"],
	["imageAlt: 'War Thunder cheats terms of use'", "imageAlt: 'war thunder cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `War Thunder ${meta.altKeyword}`")
	.join("imageAlt: 'war thunder cheats'")
	.split("galleryTitle: `War Thunder Cheats ${topicName}`")
	.join("galleryTitle: 'war thunder cheats'")
	.split("imageAlt: `War Thunder cheats ${kind} policy`")
	.join("imageAlt: 'war thunder cheats'")
	.split("galleryTitle: `War Thunder Cheats ${kind} resources`")
	.join("galleryTitle: 'war thunder cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
