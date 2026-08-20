#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Gaijin Entertainment'"],
	['Activision\u2019', "Gaijin Entertainment'"],
	['Activision services', 'Gaijin Entertainment services'],
	['Activision service', 'Gaijin Entertainment service'],
	['Activision platform', 'Gaijin Entertainment platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Gaijin Entertainment bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'War Thunder Support'],
	['Activision War Thunder', 'War Thunder'],
	['Activision Support', 'War Thunder Support'],
	['Activision', 'Gaijin Entertainment'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromwar-thunder.com/support'],
	['www.epicgames.com/war-thunder', 'www.escapefromwar-thunder.com'],
	['www.war-thunder.com/competitive', 'www.escapefromwar-thunder.com'],
	['https://www.war-thunder.com/', 'https://warthunder.com/'],
	['War Thunder.com', 'War Thunder'],
	['War Thunder Competitive', 'War Thunder'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
