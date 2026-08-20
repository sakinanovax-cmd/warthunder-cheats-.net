#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts — NLP-first War Thunder Intel posts.
 * Natural language, entity-rich copy for Google semantic matching.
 * Run: node scripts/generate-blog-posts.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');

const LOCALES = ['en'];

const EXT = {
	official:
		'<a href="https://warthunder.com/" target="_blank" rel="noopener noreferrer">War Thunder</a>',
	status:
		'<a href="https://warthunder.com/support/" target="_blank" rel="noopener noreferrer">War Thunder Support</a>',
	eac:
		'<a href="https://www.easy.ac/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>',
};

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, sections: Section[] }} SourcePost */

/** @type {SourcePost[]} */
const sources = [
	{
		id: 'patch-notes-breakdown',
		imageKey: 'squadFight',
		published: '2026-07-29',
		updated: '2026-08-13',
		category: 'Patch Notes',
		featured: false,
		slug: 'war-thunder-patch-notes-guide',
		title: 'How to Read War Thunder Patch Notes',
		metaDescription:
			'Learn how War Thunder patch notes change vehicle loadouts, ammo economy, and maps. What to do after Easy Anti-Cheat and wipe updates in 2026.',
		h1: 'How to Read War Thunder Patch Notes Without Guessing',
		intro:
			'When Gaijin Entertainment drops a patch, most players skim the headline and queue anyway. That is how you walk into Sinai with the wrong ammo and a gun that just lost its armor pen. Here is a calmer way to read War Thunder patch notes so your next battle still makes sense.',
		keywords: [
			'war thunder patch notes',
			'war thunder patch update',
			'eac patch',
			'vehicle lineup',
			'war-thunder intel',
		],
		imageAlt: 'Player reviewing War Thunder patch notes before a vehicle raid',
		sections: [
			{
				h2: 'What actually matters in a War Thunder patch?',
				paragraphs: [
					`Official notes live on ${EXT.official}. Treat that page as the source of truth — Discord rumors and streamer hot takes come second. Ask three plain questions for every bullet: Does this change how I kill armored enemy vehicles? Does this change what loot is worth looting? Does this change which capture point or map I should run tonight?`,
					'Ammo tables, armor classes, boss spawn rates, and trader unlocks move the real economy. A small recoil tweak on an M4 looks boring in a video title, but it quietly reshapes mid-range fights on Kursk and the Rhine. Cosmetic lines and UI polish almost never decide whether you survive close-range maps.',
					`If you also run third-party tools, separate game balance from anti-cheat maintenance. After a ${EXT.eac} or client update, check our <a href="/updates/">War Thunder Cheats status page</a> before you blame your own aim.`,
				],
			},
			{
				h2: 'Buffs, nerfs, and removed items — a simple framework',
				paragraphs: [
					'When an item is removed from reward pools, delete it from your mental shopping list the same day. Heavy nerfs demote a weapon from “default kit” to “situational.” Light nerfs are fine if you already shoot cleaner than most lobbies. Buffs deserve a short test block — ten focused battles — before you rebuild your entire stash around them.',
					'Armor and ammunition changes usually matter more than a single gun’s recoil number. If a popular round loses penetration against class-five plates, your Sinai push into three-stacks suddenly needs a different mag. Pair this reading habit with our <a href="/blog/war-thunder-weapon-tier-list/">War Thunder weapon tier list</a> so you are not chasing streamer kits that ignore your budget.',
				],
			},
			{
				h2: 'How patches reshuffle loadouts and map plans',
				paragraphs: [
					'When mid-range rifles feel strong, prioritize optics and ammo that win 40–70 meter peeks. When healing items get tighter, play more conservatively near capture points and avoid ego third-parties. When a map POI shifts — new locked rooms, moved spawns, boss path changes — rewrite your first three minutes on that map before you farm it for quests.',
					'Keep cosmetic shop chatter out of patch-day focus. Skin talk is fun; time-to-kill and capture point camping patterns are what get you killed. For aggressive Arcade timing after a meta shift, see our <a href="/blog/war-thunder-Arcade-aggressive-strategies/">Arcade battle strategies</a>.',
					`On big mornings, confirm ${EXT.status} looks healthy before you assume your client is broken. Then run a short checklist: note removed items, update your hangar “buy list,” play five intentional battles, and only then lock a new main kit.`,
				],
			},
		],
	},
	{
		id: 'war-thunder-skin-leaks',
		imageKey: 'headerArt',
		published: '2026-07-27',
		updated: '2026-08-13',
		category: 'Cosmetics',
		featured: false,
		slug: 'war-thunder-skin-leaks-guide',
		title: 'War Thunder Cosmetics & Skin Leaks: What Is Worth Buying',
		metaDescription:
			'Sensible advice on War Thunder cosmetics and skin leaks — what to buy on the Gaijin Marketplace, what to skip, and how looks affect raid readability.',
		h1: 'War Thunder Cosmetics and Skin Leaks: Buy Smart, Not Impulsive',
		intro:
			'Leaks make every wipe feel like a fashion drop. Before you dump Silver Lions into another loud outfit, decide whether the skin helps you play War Thunder — or just looks cool in a screenshot.',
		keywords: [
			'war-thunder skins',
			'war-thunder cosmetics',
			'flea market skins',
			'war thunder apparel',
			'war-thunder intel',
		],
		imageAlt: 'War Thunder character cosmetics and gear appearance options',
		sections: [
			{
				h2: 'Why most impulse cosmetic buys feel bad after a week',
				paragraphs: [
					`Shop rotations and official apparel come from ${EXT.official}. Leaks are entertainment, not a shopping list. Many players spend hard-earned Silver Lions the night before a wipe, then realize they still need meds, ammo, and a backup kit.`,
					'Controversial but useful: most cosmetics do not raise your survival rate. Some loud patterns even make you easier to spot in bushes on Kursk or in dark the Rhine hallways. Pros often prefer quieter silhouettes so enemy outlines stay readable in chaotic peeks.',
				],
			},
			{
				h2: 'A simple worth-it checklist for War Thunder cosmetics',
				paragraphs: [
					'Buy if you will still wear it in ninety days and it stays readable in night battles. Pause if it overlaps three outfits you already own. Skip FOMO bundles packed with fillers you will never equip. Always keep a Silver Lions floor for ammo and healing before fashion.',
					'Do the math on bundles. Paying extra for two fillers you hate is worse than waiting for a single piece on the Gaijin Marketplace. If a leak only hypes one jacket, wait for confirmation instead of panic-buying a full set.',
				],
			},
			{
				h2: 'How to use leaks without getting played',
				paragraphs: [
					'Treat late-wipe leak waves as theme previews, not release dates. Decide a budget before something hits the store, not during the five-minute panic. A quiet daily habit works: open the shop for one minute, check your wishlist, then leave.',
					'For competitive readability tips that actually affect fights, pair this with our <a href="/blog/war-thunder-pro-settings-guide/">pro settings guide</a>. Looking clean matters less than seeing the other vehicle first.',
				],
			},
		],
	},
	{
		id: 'war-thunder-weapon-tier-list',
		imageKey: 'aimbotCombat',
		published: '2026-07-25',
		updated: '2026-08-13',
		category: 'Weapons',
		featured: true,
		slug: 'war-thunder-weapon-tier-list',
		title: 'War Thunder Weapon Tier List: Best Guns for Raids',
		metaDescription:
			'A practical War Thunder weapon tier list for tank and aircraft raids — ARs, SMGs, bolt-actions, ammo, and when each gun actually wins fights.',
		h1: 'War Thunder Weapon Tier List: What Wins Raids in 2026',
		intro:
			'Creator tier lists love flashy guns. War Thunder rewards expected value: armor penetration, recoil you can control, and a kit you can rebuild after you die. Here is how to rank weapons for real battles — not highlight reels.',
		keywords: [
			'war-thunder weapon tier list',
			'best war-thunder guns',
			'war-thunder meta weapons',
			'm4a1 war-thunder',
			'war-thunder intel',
		],
		imageAlt: 'War Thunder weapons laid out for a vehicle loadout comparison',
		sections: [
			{
				h2: 'How should you define S-tier in War Thunder?',
				paragraphs: [
					'S-tier means the best expected value across a hundred vehicle fights on maps like Sinai, Kursk, and the Rhine — not the gun that looks strongest in a controlled offline range. Mid-range rifles win many of the fights that actually decide raids: forty to seventy meters through doorways, parking lots, and tree lines.',
					'Shotguns still own tight interiors. Bolt-actions still punish long peeks on Maginot and Poland. Everything between those extremes is usually assault-rifle country, which is why a well-built M4A1 or similar 5.56 platform stays relevant wipe after wipe when ammo and mods are available.',
					`Always re-check live values after patches on ${EXT.official}. The hierarchy logic stays useful even when numbers nudge.`,
				],
			},
			{
				h2: 'Ammo, TTK, and peek discipline matter more than brand names',
				paragraphs: [
					'Time-to-kill in War Thunder is really time-to-pen. A soft gun with the right rounds beats a loud meta rifle feeding trash ammo into class-five armor. Learn which rounds you can afford this wipe, then pick a platform that controls recoil at your skill level.',
					'First-shot accuracy decides many peeks. A clean cadence — peek, fire a short burst, jiggle back, re-peek — beats standing still for ego sprays. Pair this mid-range plan with loot discipline from our <a href="/blog/war-thunder-loot-routes-guide/">loot routes guide</a> so you actually spawn with the ammo you planned to use.',
				],
			},
			{
				h2: 'Loadout pairings and common mistakes',
				paragraphs: [
					'A durable kit is usually a reliable mid rifle, a close-range option for close-range maps or Poland, enough meds, and an armor class you can replace after deaths. In Arcade battles, that same spine supports the aggression patterns in our <a href="/blog/war-thunder-Arcade-aggressive-strategies/">Arcade strategies article</a>.',
					'Common mistakes: full-spraying from eighty meters, re-peeking the same pixel, swapping to an SMG at forty meters out of habit, and never practicing controlled bursts offline. If you also use aim-assist tooling, lock sensitivity and fundamentals first, then review <a href="/war-thunder-aimbot/">War Thunder aimbot settings</a>.',
				],
			},
		],
	},
	{
		id: 'war-thunder-arcade-battle-meta',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-22',
		updated: '2026-08-19',
		category: 'Arcade Battles',
		featured: true,
		slug: 'war-thunder-arcade-battle-strategies',
		title: 'War Thunder Arcade Battle Strategies That Actually Work',
		metaDescription:
			'Five aggressive but smart War Thunder Arcade strategies — spawn timings, capture points, third-parties, and how to leave battles with tickets instead of empty losses.',
		h1: 'War Thunder Arcade Strategies: How to Hold Capture Points',
		intro:
			'Passive Arcade players wait behind a bush while two vehicle teams erase each other, then spray into the mess and die. Strong Arcade battles manufacture a short advantage, grab what matters, and capture point before the map collapses on you.',
		keywords: [
			'war thunder arcade battles',
			'arcade battle strategies',
			'war thunder arcade',
			'war-thunder capture points',
			'war thunder esp',
		],
		imageAlt: 'Arcade player moving toward capture point with loot in War Thunder',
		sections: [
			{
				h2: 'Why so many Arcade battles feel soft',
				paragraphs: [
					'Starting lineups are random, timers are limited, and player AI units can turn on you. Waiting forever for a “perfect” third-party often means you arrive late to a wiped lobby with nothing left. Information tools like <a href="/war-thunder-esp/">War Thunder ESP</a> can help you see fights early — but you still need an exit plan.',
					'Decide your capture point before you swing. Take a clear damage window, grab high-value targets, then leave. The usual third-party clock in hot POIs is only a few seconds long once gunfire starts.',
				],
			},
			{
				h2: 'Five aggressive habits that still work',
				paragraphs: [
					'Pre-aim common corners on Sinai close-range maps and the Rhine tech stores so you clear angles in under a second. Enter rooms with an exit path, not a panic turn. Fake one side of a doorway, then finish from the safer angle when their magazine is weak.',
					`Stay close to hard cover while you move — never more than a short sprint from a wall or vehicle. Pressure late rotates near capture points when players are silhouetted and greedy. Mode rules evolve with ${EXT.official} wipes; the geometry of first-shot advantage does not.`,
				],
			},
			{
				h2: 'Warmup checklist before you queue Arcade',
				paragraphs: [
					'Know your map’s main capture points, bring a simple med plan, and pick two POIs with cover ladders instead of open fields. Pair this article with <a href="/blog/war-thunder-loot-routes-guide/">loot routes</a>, <a href="/blog/war-thunder-weapon-tier-list/">weapon tiers</a>, and <a href="/blog/war-thunder-warmup-maps-ranked/">warmup routines</a>.',
					'Try one session where you force early contact only when you have armor and a usable gun — then track whether you capture pointed before the third-party window closed.',
				],
			},
		],
	},
	{
		id: 'war-thunder-tournament-meta',
		imageKey: 'rebootFight',
		published: '2026-07-20',
		updated: '2026-08-13',
		category: 'Competitive',
		featured: false,
		slug: 'war-thunder-tournament-meta-guide',
		title: 'What Competitive War Thunder Players Optimize For',
		metaDescription:
			'What strong War Thunder competitors optimize — spawn plans, loadouts, mid-battle habits, and which tournament habits help normal vehicle queues.',
		h1: 'What Competitive War Thunder Players Optimize For',
		intro:
			'Tournament winners and high-level duos are not lucky spawn gods. They optimize expected value: safer loot paths, cleaner mid-battle habits, and fights they choose on purpose. Here is what translates into your normal War Thunder queues.',
		keywords: [
			'war-thunder competitive',
			'war-thunder tournament',
			'war-thunder meta',
			'pmc habits',
			'war-thunder intel',
		],
		imageAlt: 'Competitive War Thunder players reviewing raid strategy',
		sections: [
			{
				h2: 'Watch competitive VODs like a coach, not a fan',
				paragraphs: [
					`Start with schedules and film from ${EXT.official} community events or trusted creators, then tag habits instead of memorizing a single POI name. Note the landing plan, first heal, first rotate, first voluntary fight, and the key late-battle decision.`,
					'Five clear timestamps beat a full passive watch. You are stealing decision patterns, not cosplaying someone else’s spawn.',
				],
			},
			{
				h2: 'Spawn EV and loadout patterns that keep showing up',
				paragraphs: [
					'Score every spawn on contest rate, loot quality in the first few minutes, capture point pain, exit paths, and split potential with teammates. Edge spawns with clean exits often beat “sexy” mid-map landmarks that look good on stream and then get third-partied.',
					'Expect a reliable mid rifle, a close-range option, mobility or stamina management, and enough meds. High-tier loot is taken when free, not forced — matching the mindset in our <a href="/blog/war-thunder-weapon-tier-list/">weapon tier list</a>.',
				],
			},
			{
				h2: 'What actually translates to normal raids',
				paragraphs: [
					'Steal loot-timer discipline, a simple loadout spine, earlier rotates, and selective fights. Do not blindly mirror a trio drop when you solo queue. Winners rotate early enough to choose sides — the same idea shows up in our <a href="/blog/war-thunder-Arcade-aggressive-strategies/">Arcade aggression guide</a>.',
					'Try this: watch fifteen minutes of a strong VOD with five timestamps. Steal one mid-battle habit only. Run it for a six-raid vehicle block before adding another.',
				],
			},
		],
	},
	{
		id: 'war-thunder-loot-routes',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-07-18',
		updated: '2026-08-13',
		category: 'Loot Routes',
		featured: true,
		slug: 'war-thunder-loot-routes-guide',
		title: 'War Thunder Loot Routes That Leave Spawn Ready to Fight',
		metaDescription:
			'High-percentage War Thunder loot routes for Sinai, Kursk, and the Rhine — how to leave spawn with guns, armor, and meds that win mid-battle fights.',
		h1: 'War Thunder Loot Routes: Leave Spawn Ready to Fight',
		intro:
			'Winning in War Thunder starts before the first gunfight. Random looting gets you killed with a pistol and no meds. These route habits consistently convert a spawn into a kit you can actually fight with.',
		keywords: [
			'war-thunder loot routes',
			'customs loot path',
			'interchange loot',
			'war-thunder spawn guide',
			'war thunder esp',
		],
		imageAlt: 'Loot route planning across a War Thunder map',
		sections: [
			{
				h2: 'Why early inventory is the real bottleneck',
				paragraphs: [
					'Many early raid deaths happen because players loot like tourists. Strong players treat the first ninety seconds like a shopping list: usable gun, enough ammo, basic armor, and a heal. Drop spot matters less than sequence — a mediocre POI with discipline beats a stacked landmark with panic looting.',
					'Secure a primary weapon and meds before hunting kills. Early ego chases are how hot-spawn players stay broke.',
				],
			},
			{
				h2: 'Three route archetypes that keep printing gear',
				paragraphs: [
					'Contested edge POI: land outer loot, snake inward, leave before late third parties. Uncontested chain: sacrifice early fights for a fuller kit by minute three. Mid-map surge: vacuum piles ninety to one hundred fifty seconds after hot spawns empty out.',
					`Timing targets help: first gun quickly, clear a cluster, grab heals, then upgrade or leave. Slot priority is usually gun, ammo, armor, meds, then flex loot. POI names shift with ${EXT.official} wipes — keep the geometry, not just the landmark brand.`,
				],
			},
			{
				h2: 'Convert a strong spawn into a win',
				paragraphs: [
					'Pair these routes with <a href="/blog/war-thunder-Arcade-aggressive-strategies/">Arcade aggression</a> and <a href="/blog/war-thunder-weapon-tier-list/">weapon tiers</a>. Leave spawn rich so mid-battle becomes a skill check instead of a spawn panic.',
					'If you practice with vehicle markers, read <a href="/war-thunder-esp/">War Thunder ESP</a> for category toggles — then still run the timer so your habits stay sharp without overlays.',
				],
			},
		],
	},
	{
		id: 'war-thunder-pro-settings',
		imageKey: 'cheatsPackage',
		published: '2026-07-12',
		updated: '2026-08-13',
		category: 'Settings',
		featured: false,
		slug: 'war-thunder-pro-settings-guide',
		title: 'War Thunder Pro Settings That Actually Help You See Enemies',
		metaDescription:
			'Practical War Thunder settings used by strong players — visibility, audio cues, sensitivity, and what to copy vs ignore from pro configs.',
		h1: 'War Thunder Settings Guide: See More, Panic Less',
		intro:
			'Copying a champion’s entire config will not make you one. But a few War Thunder settings reliably improve visibility, audio reads, and aim consistency. Here is what is worth stealing.',
		keywords: [
			'war-thunder settings',
			'war-thunder sensitivity',
			'war-thunder visibility',
			'war-thunder audio settings',
			'war-thunder intel',
		],
		imageAlt: 'War Thunder graphics and control settings menu',
		sections: [
			{
				h2: 'Visibility and performance before fancy numbers',
				paragraphs: [
					'If your frame rate collapses in Stalingrad or the Rhine interiors, no sensitivity tip will save you. Prioritize a stable FPS and readable shadows over maximum eye candy. Many strong players lower clutter so vehicle silhouettes pop sooner in tree lines and warehouse lighting.',
					'Test changes in offline mode or a a quiet Arcade match before locking them for serious vehicle battles. Your eyes adapt in a few sessions — give settings that long before declaring them useless.',
				],
			},
			{
				h2: 'Sensitivity, ADS, and muscle memory',
				paragraphs: [
					'Pick one hip-fire and ADS relationship and stick with it for at least a week. Constantly rewriting sens after every death trains nothing. Warm up with the routine in our <a href="/blog/war-thunder-warmup-maps-ranked/">warmup guide</a> so your hands match the new numbers.',
					'If you later add soft aim tooling, match the in-game sens first, then tune FOV in the <a href="/war-thunder-aimbot/">aimbot guide</a>. Tools on top of a chaotic sens feel robotic and obvious.',
				],
			},
			{
				h2: 'Audio cues that win capture points',
				paragraphs: [
					'Footsteps, magazine reloads, and capture point buzzing often matter more than a tiny graphics slider. Use headphones, keep voice chat from drowning game audio, and learn the sound difference between a AI vehicle shuffle and a player vehicle push.',
					'Settings are leverage, not a cheat code. Pair them with map knowledge from our <a href="/blog/war-thunder-loot-routes-guide/">loot routes</a> article so you know where those sounds are coming from.',
				],
			},
		],
	},
	{
		id: 'war-thunder-warmup-maps',
		imageKey: 'playerEsp',
		published: '2026-07-10',
		updated: '2026-08-13',
		category: 'Warmup',
		featured: false,
		slug: 'war-thunder-warmup-maps-ranked',
		title: 'War Thunder Warmup Routine Before Serious vehicle Raids',
		metaDescription:
			'A short War Thunder warmup routine before vehicle battles — aim, peeks, audio focus, and what to practice offline so your first fight is not your warmup.',
		h1: 'War Thunder Warmup Routine Before You Queue vehicle',
		intro:
			'Queuing cold into Poland or close-range maps is how you donate a kit. A short War Thunder warmup — even ten to fifteen minutes — makes your first real fight feel like your third.',
		keywords: [
			'war-thunder warmup',
			'war-thunder aim practice',
			'pmc warmup routine',
			'war-thunder offline practice',
			'war-thunder intel',
		],
		imageAlt: 'Player warming up aim before a War Thunder vehicle raid',
		sections: [
			{
				h2: 'Why your first raid should not be the warmup',
				paragraphs: [
					'Most players boot the game, slap on a kit, and die to the first clean peeker. Hands are cold, audio is not dialed, and map timing feels off. Treat warmup as part of the session, not optional fluff.',
					'Offline practice, shooting range habits, and a couple of low-stakes Arcade battles exist so your expensive vehicle kit is not the experiment.',
				],
			},
			{
				h2: 'A simple 15-minute routine that scales',
				paragraphs: [
					'Minutes 1–5: tracking and short bursts on a range or offline bots. Minutes 6–10: peek practice on common angles — jiggle, counter-strafe, pre-aim head height. Minutes 11–15: one focused Arcade or test-drive fight block where you only work one habit, like holding a capture point or clearing a room.',
					'Keep the routine identical for a week so improvements are measurable. Rotate maps later — Sinai one day, Kursk the next — after the habit sticks.',
				],
			},
			{
				h2: 'What to do right before you ready up',
				paragraphs: [
					'Check hangar meds and ammo, confirm your map capture points, and skim <a href="/updates/">cheat status</a> if you use overlays after a patch. Pair warmup with <a href="/blog/war-thunder-pro-settings-guide/">settings</a> and <a href="/blog/war-thunder-weapon-tier-list/">weapon tiers</a> so you are not reinventing the kit every night.',
					'If the first two vehicle deaths feel mechanical, stop stacking kits and repeat five minutes of peek practice. Ego queueing while tilted is not a strategy.',
				],
			},
		],
	},
	{
		id: 'war-thunder-cheats-complete-guide',
		imageKey: 'espWallhack',
		published: '2026-07-30',
		updated: '2026-08-13',
		category: 'Cheats Guide',
		featured: true,
		slug: 'war-thunder-cheats-complete-guide-2026',
		title: 'War Thunder Cheats 2026: Complete Undetected Guide',
		metaDescription:
			'A clear 2026 guide to war thunder cheats — what ESP, soft aim, and radar actually do in War Thunder, how Easy Anti-Cheat maintenance works, and how to buy safely.',
		h1: 'War Thunder Cheats in 2026: What They Are and How to Use Them Carefully',
		intro:
			'People search “war thunder cheats” for a simple reason: War Thunder is information-heavy, punishing, and full of capture point campers. This guide explains what modern undetected packages actually include, how Easy Anti-Cheat maintenance works, and how to decide whether a tool fits your play style.',
		keywords: [
			'war thunder cheats',
			'undetected war thunder cheats',
			'war thunder esp',
			'war thunder aimbot',
			'eac',
		],
		imageAlt: 'Overview of War Thunder Cheats ESP soft aim and radar tools for 2026',
		sections: [
			{
				h2: 'What do people mean when they say war thunder cheats?',
				paragraphs: [
					'In plain language, war thunder cheats are third-party tools that add information or aim assistance on top of the War Thunder client. The common stack is ESP wallhack for players and loot, a 2D radar for threats outside your view, and configurable soft aim for firefights. One license should cover that loop instead of forcing you to juggle separate downloads.',
					'Searchers also say “war thunder cheats,” “war thunder hacks,” or “war-thunder wallhack.” Those phrases usually point at the same intent: survive battles with better reads. Start at our <a href="/war-thunder-cheats/">war thunder cheats pillar</a> if you want the product overview without the long essay.',
				],
			},
			{
				h2: 'ESP, soft aim, and radar — what each tool is for',
				paragraphs: [
					'ESP answers “who is near me and what is worth looting?” Soft aim answers “can I finish the fight once I choose it?” Radar answers “is someone flanking while I heal?” Used together, they cover information and combat. Used badly, they create noisy overlays and obvious aim corrections.',
					'Deep dives live on <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">aimbot</a>, <a href="/war-thunder-wallhack/">wallhack</a>, and <a href="/war-thunder-radar-hack/">radar</a>. Read those before you buy if you only need one job done well.',
				],
			},
			{
				h2: 'Easy Anti-Cheat, “undetected,” and honest expectations',
				paragraphs: [
					`${EXT.eac} protects War Thunder. No seller can promise permanent undetected status. What a serious vendor can offer is maintenance: rebuilds after patches, a public status note, and clear setup steps. That workflow is documented on <a href="/undetected-war-thunder-cheats/">undetected war thunder cheats</a> and <a href="/eac-bypass/">Easy Anti-Cheat maintenance</a>.`,
					'Before every patch-day queue, read <a href="/updates/">Updates</a>. If status is quiet, wait. Responsible settings matter as much as the binary itself.',
				],
			},
			{
				h2: 'How to buy and set up without wasting a night',
				paragraphs: [
					'Compare monthly and lifetime on <a href="/pricing/">Pricing</a>, then follow <a href="/setup/">Setup</a> after delivery. Keep your order ID ready for <a href="/support/">Support</a>. If you are still shopping, the <a href="/blog/war-thunder-cheats-buyers-guide/">buyers guide</a> lists the checklist we wish every shopper used.',
					'War Thunder Cheats is built for Windows PC tank and aircraft play. It will not replace map knowledge — it amplifies the reads you already practice in battles.',
				],
			},
		],
	},
	{
		id: 'war-thunder-cheats-buyers-guide',
		imageKey: 'cheatsPackage',
		published: '2026-07-28',
		updated: '2026-08-13',
		category: 'Buyers Guide',
		featured: true,
		slug: 'war-thunder-cheats-buyers-guide',
		title: 'War Thunder Cheats Buyers Guide',
		metaDescription:
			'What to check before you buy war thunder cheats — status pages, ESP features, soft aim, refunds, pricing, and red flags in 2026.',
		h1: 'War Thunder Cheats: What to Check Before You Buy',
		intro:
			'Buying war thunder cheats is noisy. Every storefront promises “undetected,” instant delivery, and god mode. This buyers guide slows you down with a practical checklist so you spend money on maintenance and clarity — not banners.',
		keywords: [
			'war thunder cheats',
			'war thunder cheats buyers guide',
			'buy war thunder cheats',
			'undetected war thunder cheats',
			'war-thunder pricing',
		],
		imageAlt: 'Checklist for buying War Thunder cheats safely',
		sections: [
			{
				h2: 'Start with status, not screenshots',
				paragraphs: [
					'Ask whether the seller publishes a dated status page after Easy Anti-Cheat or client patches. Fancy galleries do not help if the tool is offline for three days. War Thunder Cheats posts rebuild notes on <a href="/updates/">Updates</a> for that reason.',
					'If a shop only answers in private Discord and never writes public notes, assume you will miss patch windows.',
				],
			},
			{
				h2: 'Feature checklist that matches real War Thunder battles',
				paragraphs: [
					'For War Thunder, useful features usually mean player ESP with distance, loot filters, capture point awareness, radar for flanks, and soft aim you can tone down. “Unlock all” marketing and battle-royale leftovers are red flags that the page was cloned from another game.',
					'Compare the stack on <a href="/features/">Features</a>, <a href="/war-thunder-esp/">ESP</a>, and <a href="/war-thunder-aimbot/">Aimbot</a>. If radar matters to how you hold capture points, confirm it exists before checkout.',
				],
			},
			{
				h2: 'Price, delivery, and support questions worth asking',
				paragraphs: [
					'Know whether you are paying monthly or lifetime, how the license arrives, and how fast support replies with an order ID. Read the <a href="/refund-policy/">refund policy</a> before you pay — digital tools often have narrow windows.',
					'Our plans live on <a href="/pricing/">Pricing</a>. Setup steps are on <a href="/setup/">Setup</a>. If something fails after a patch, <a href="/support/">Support</a> needs your order details, Windows version, and what you already tried.',
				],
			},
		],
	},
	{
		id: 'war-thunder-cheats-2026-whats-new',
		imageKey: 'hero',
		published: '2026-07-26',
		updated: '2026-08-13',
		category: 'Product Updates',
		featured: false,
		slug: 'war-thunder-cheats-2026-whats-new',
		title: 'War Thunder Cheats 2026: What Changed This Year',
		metaDescription:
			'What changed for war thunder cheats in 2026 — wipe cadence, Easy Anti-Cheat maintenance habits, ESP focus, and how War Thunder Cheats adapted for War Thunder.',
		h1: 'What Changed for War Thunder Cheats in 2026',
		intro:
			'2026 did not invent cheating in War Thunder — it raised the bar for maintenance. Wipes, Easy Anti-Cheat pushes, and map updates punish stale builds. Here is what changed in how serious war thunder cheats packages need to operate.',
		keywords: [
			'war thunder cheats 2026',
			'war thunder cheats 2026',
			'eac 2026',
			'war thunder patch',
			'war thunder cheats updates',
		],
		imageAlt: '2026 updates for War Thunder Cheats on War Thunder',
		sections: [
			{
				h2: 'Why 2026 buyers care more about status pages',
				paragraphs: [
					'Players got tired of “undetected forever” slogans. They want a dated note after patches. That is why we invest in the <a href="/updates/">Updates</a> log and the <a href="/undetected-war-thunder-cheats/">undetected explainer</a> instead of empty guarantees.',
					`${EXT.eac} and Gaijin client updates still force rebuilds. The shops that survive are the ones that communicate during those windows.`,
				],
			},
			{
				h2: 'Feature focus shifted toward raid information',
				paragraphs: [
					'The winning feature set in 2026 is still ESP, radar, and tunable soft aim — because War Thunder fights are about information and first peeks. Loud rage features matter less than readable overlays you can turn down near capture points.',
					'See the current stack on <a href="/features/">Features</a> and the pillar at <a href="/war-thunder-cheats/">war thunder cheats</a>.',
				],
			},
			{
				h2: 'What we recommend you do differently this year',
				paragraphs: [
					'Check status before patch-day queues. Keep soft aim conservative. Use loot ESP filters so your screen stays clean. Read the <a href="/blog/war-thunder-cheats-complete-guide-2026/">complete 2026 guide</a> if you are new to the category.',
					'Pricing remains monthly and lifetime on <a href="/pricing/">Pricing</a> with digital delivery after payment.',
				],
			},
		],
	},
	{
		id: 'war-thunder-aimbot-settings-guide',
		imageKey: 'aimbotCombat',
		published: '2026-07-24',
		updated: '2026-08-13',
		category: 'Aimbot',
		featured: false,
		slug: 'war-thunder-aimbot-settings-guide',
		title: 'War Thunder Aimbot Settings: Smooth FOV Without Looking Robotic',
		metaDescription:
			'How to tune war thunder aimbot and soft aim settings — FOV, smoothness, bone priority, and per-weapon profiles that feel natural in War Thunder battles.',
		h1: 'War Thunder Aimbot Settings That Feel Natural',
		intro:
			'A harsh aimbot gets you killed by reports and by your own bad habits. Soft, tunable aim assistance is what most War Thunder players actually want. Here is how to think about FOV, smoothness, and weapon profiles.',
		keywords: [
			'war thunder aimbot settings',
			'war-thunder soft aim',
			'aimbot fov',
			'war-thunder aim assist',
			'war thunder cheats',
		],
		imageAlt: 'Soft aim and FOV settings for War Thunder aimbot on Windows PC',
		sections: [
			{
				h2: 'Start softer than you think you need',
				paragraphs: [
					'Begin with a smaller FOV and higher smoothness so the assist helps tracking instead of snapping. Play five raids on Sinai or Poland and only then widen FOV. If friends watching a demo say it looks robotic, you went too far.',
					'Full control docs live on <a href="/war-thunder-aimbot/">War Thunder Aimbot</a> and <a href="/war-thunder-soft-aim/">soft aim</a>.',
				],
			},
			{
				h2: 'Per-weapon profiles beat one global slider',
				paragraphs: [
					'ARs, SMGs, and bolt-actions want different assist. Save separate profiles so close-range maps sprays and long Kursk peeks do not share the same magnet. Bone priority should favor what you can actually hit under stress — usually upper chest to head transitions, not miracles.',
					'Hotkeys matter mid-battle. You need to disable assist when you are looting friendlies or holding a suspicious angle where obvious corrections would look wrong.',
				],
			},
			{
				h2: 'Pair aim settings with information tools',
				paragraphs: [
					'Soft aim finishes fights that ESP and radar help you choose. If your overlays are noisy, fix <a href="/war-thunder-esp/">ESP categories</a> before blaming aim. After Easy Anti-Cheat patches, confirm <a href="/updates/">Updates</a> before you tune anything on an old build.',
				],
			},
		],
	},
	{
		id: 'war-thunder-esp-wallhack-explained',
		imageKey: 'espWallhack',
		published: '2026-07-21',
		updated: '2026-08-13',
		category: 'ESP',
		featured: false,
		slug: 'war-thunder-esp-wallhack-explained',
		title: 'War Thunder ESP and Wallhack Explained in Plain English',
		metaDescription:
			'What war-thunder ESP and wallhack actually show in War Thunder — players, loot, distance, capture points — and how to keep overlays readable in battles.',
		h1: 'War Thunder ESP and Wallhack Explained Clearly',
		intro:
			'“ESP” and “wallhack” get used interchangeably. In War Thunder they both mean information through walls — but the useful details are distance, filters, and what you choose to hide so your screen stays readable.',
		keywords: [
			'war thunder esp',
			'war-thunder wallhack',
			'war thunder esp',
			'loot esp war-thunder',
			'war thunder cheats',
		],
		imageAlt: 'ESP wallhack overlay showing players and loot in War Thunder',
		sections: [
			{
				h2: 'What ESP shows during a real raid',
				paragraphs: [
					'Player ESP outlines tanks and aircraft through walls and terrain, often with distance. Loot ESP highlights containers or high-value items. Extract cues help you avoid camping surprises. That information gap is why people search for war thunder esp in the first place.',
					'Read the dedicated pages for <a href="/war-thunder-esp/">ESP</a> and <a href="/war-thunder-wallhack/">wallhack</a> if you want category-level detail.',
				],
			},
			{
				h2: 'How to keep overlays from becoming noise',
				paragraphs: [
					'Toggle categories. During a hot push you may want players only. During a loot route you may want containers. Near capture point you may want threats and exits. Too many boxes at once create hesitation — the opposite of an advantage.',
					'Pair ESP with <a href="/war-thunder-radar-hack/">radar</a> for flanks outside your field of view. Visibility wins information wars; aim tools cover the firefight afterward.',
				],
			},
			{
				h2: 'Maintenance and responsible use',
				paragraphs: [
					'ESP modules rebuild after Easy Anti-Cheat patches like everything else. Check <a href="/updates/">Updates</a> and the <a href="/undetected-war-thunder-cheats/">undetected guide</a>. No overlay replaces listening and map knowledge — it shortens the time between “I heard something” and “I know where.”',
				],
			},
		],
	},
	{
		id: 'undetected-war-thunder-cheats-eac',
		imageKey: 'playerEsp',
		published: '2026-07-19',
		updated: '2026-08-13',
		category: 'Undetected',
		featured: true,
		slug: 'undetected-war-thunder-cheats-eac',
		title: 'Undetected War Thunder Cheats and Easy Anti-Cheat Reality',
		metaDescription:
			'What “undetected war thunder cheats” really means under Easy Anti-Cheat — maintenance, patch days, risk, and how to read status before you queue War Thunder.',
		h1: 'Undetected War Thunder Cheats: What Easy Anti-Cheat Reality Looks Like',
		intro:
			'“Undetected” is the most abused word in cheat marketing. Under Easy Anti-Cheat, it means a package is being maintained against current detections — not that bans are impossible. Here is the honest version for War Thunder players.',
		keywords: [
			'undetected war thunder cheats',
			'eac war-thunder',
			'war-thunder ban risk',
			'war thunder undetected',
			'war-thunder status',
		],
		imageAlt: 'Easy Anti-Cheat maintenance status for undetected War Thunder cheats',
		sections: [
			{
				h2: 'What undetected can honestly mean',
				paragraphs: [
					`Easy Anti-Cheat is documented at ${EXT.eac}. It evolves. Vendors who care publish rebuild notes when ESP, radar, or aim modules need work. War Thunder Cheats does that on <a href="/updates/">Updates</a> and explains the workflow on <a href="/eac-bypass/">Easy Anti-Cheat maintenance</a>.`,
					'If a seller says “100% undetected forever,” treat it as advertising. Your risk also depends on how obviously you play.',
				],
			},
			{
				h2: 'Patch-day habits that reduce pain',
				paragraphs: [
					`After a War Thunder or Easy Anti-Cheat update, wait for a status note before queueing. Confirm Gaijin services on ${EXT.status} if the launcher itself is failing. Do not run yesterday’s build into today’s anti-cheat and call it bad luck.`,
					'Keep soft aim conservative and avoid highlight-reel rage settings that attract reports even when the binary is clean.',
				],
			},
			{
				h2: 'Where to go next',
				paragraphs: [
					'Read <a href="/undetected-war-thunder-cheats/">undetected war thunder cheats</a>, the <a href="/blog/war-thunder-cheats-complete-guide-2026/">2026 complete guide</a>, and <a href="/pricing/">Pricing</a> if you want the maintained stack. Undetected status is a process you check — not a sticker on the box.',
				],
			},
		],
	},
	{
		id: 'war-thunder-cheats-vs-cheatvault',
		imageKey: 'cheatsPackage',
		published: '2026-07-15',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'war-thunder-cheats-vs-cheatvault-comparison',
		title: 'War Thunder Cheats vs Typical Budget WT Shops',
		metaDescription:
			'How War Thunder Cheats compares to typical budget War Thunder cheat shops — ESP depth, radar, status pages, pricing, and what “cheap” usually skips.',
		h1: 'War Thunder Cheats vs Typical Budget WT Cheat Shops',
		intro:
			'Budget War Thunder stores often look identical: neon banners, “undetected” badges, and a low weekly price. War Thunder Cheats costs more than the cheapest tier on purpose. Here is what you usually trade when you chase the lowest sticker.',
		keywords: [
			'war thunder cheats comparison',
			'budget war thunder cheats',
			'war thunder cheats vs other shops',
			'esp radar pricing',
			'war thunder cheats',
		],
		imageAlt: 'Comparing War Thunder Cheats features against budget WT cheat shops',
		sections: [
			{
				h2: 'What budget shops usually optimize for',
				paragraphs: [
					'Low entry price and fast checkout. That can be fine for a weekend experiment. The common gaps are thin loot ESP, no real radar, Discord-only status, and slow rebuild communication after Easy Anti-Cheat pushes.',
					'War Thunder Cheats focuses on a full raid stack — player ESP, loot filters, radar, soft aim profiles — with a public <a href="/updates/">Updates</a> page. See <a href="/features/">Features</a> for the list.',
				],
			},
			{
				h2: 'Price versus what you touch every match',
				paragraphs: [
					'If you only want basic player boxes in casual raids, a cheaper shop might feel enough. If you hold capture points, run loot routes, and hate dying to unseen flanks, radar and clean filters pay for themselves quickly.',
					'Our monthly and lifetime options are on <a href="/pricing/">Pricing</a>. Read the <a href="/blog/war-thunder-cheats-buyers-guide/">buyers guide</a> before you compare three storefronts at once.',
				],
			},
			{
				h2: 'How to decide without brand loyalty',
				paragraphs: [
					'Write down must-haves: dated status, loot ESP, radar, soft aim profiles, Windows PC support. Open each seller’s status channel and feature list side by side. If a shop fails the status test, price does not matter.',
					'Then return to <a href="/war-thunder-cheats/">war thunder cheats</a> and <a href="/undetected-war-thunder-cheats/">undetected notes</a> if that checklist matches what we ship.',
				],
			},
		],
	},
	{
		id: 'elitefn-two-week-test',
		imageKey: 'aimbotSkeleton',
		published: '2026-07-08',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'elitefn-vs-war-thunder-cheats-two-week-test',
		title: 'I Tested Another War Thunder Cheat for 2 Weeks First',
		metaDescription:
			'A two-week test of another War Thunder cheat before switching to War Thunder Cheats — ESP feel, soft aim, patch downtime, and support differences.',
		h1: 'I Tested Another War Thunder Cheat for Two Weeks Before Switching',
		intro:
			'My Discord kept recommending a popular War Thunder cheat brand. I gave it fourteen days on the same PC and playlists, then moved to War Thunder Cheats. This is what actually differed — without the usual affiliate script.',
		keywords: [
			'war thunder cheats review',
			'war thunder cheat comparison',
			'war thunder cheat downtime',
			'soft aim test',
			'war thunder cheats',
		],
		imageAlt: 'Two week hands-on comparison between War Thunder cheat providers',
		sections: [
			{
				h2: 'Week one — setup and first impressions',
				paragraphs: [
					'Delivery was fine: license in email, loader as admin, overlays disabled. Menu learning took a couple evenings. Player ESP was readable. Loot ESP felt secondary. I ran several nights with information tools only and no aim assist so I could judge visibility on its own.',
					'War Thunder Cheats later felt similar on install time, but filters for loot and capture points were easier to toggle independently during loot routes.',
				],
			},
			{
				h2: 'Soft aim and the mid-battle feel',
				paragraphs: [
					'Conservative FOV soft aim helped SMG and AR tracking. Sniping needed manual profile swaps that slowed me down. When I pushed smoothness too low, corrections looked obvious in review clips. Tuning toward smoother tracking fixed kills and reduced the robotic look.',
					'On War Thunder Cheats I relied more on per-weapon profiles so close-range maps and long peeks did not share one magnet. Details are in the <a href="/war-thunder-aimbot/">aimbot guide</a>.',
				],
			},
			{
				h2: 'The patch window that ended the trial',
				paragraphs: [
					'A War Thunder plus Easy Anti-Cheat update landed mid-test. The other tool’s status went quiet without a clear ETA. I skipped queues while my group played without me. A rebuild arrived days later; stability was mixed. That downtime — not a single feature screenshot — pushed me to switch.',
					'War Thunder Cheats won me over with written notes on <a href="/updates/">Updates</a>. I still do not queue blind after patches on any tool.',
				],
			},
			{
				h2: 'After switching — what improved for my raids',
				paragraphs: [
					'Independent loot and player toggles cleaned late-battle screens. Radar helped capture point holds. Support replies with order ID were fast enough during setup week. Pricing math favored a single full stack over stacking weekly subs — see <a href="/pricing/">Pricing</a>.',
					'If you run your own test, measure patch downtime hours, not just day-one vibes. Then read <a href="/setup/">Setup</a> before you buy anything.',
				],
			},
		],
	},
	{
		id: 'war-thunder-cheats-vs-ghostware',
		imageKey: 'espWallhack',
		published: '2026-07-05',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'war-thunder-cheats-vs-ghostware-features-pricing',
		title: 'Full-Stack War Thunder Cheats vs Minimal ESP Tools',
		metaDescription:
			'Full-stack War Thunder Cheats versus minimal ESP-only War Thunder tools — feature depth, radar, soft aim, pricing, and who should buy which style.',
		h1: 'Full-Stack War Thunder Cheats vs Minimal ESP-Only Tools',
		intro:
			'Some War Thunder tools sell a slim ESP module and call it a day. War Thunder Cheats ships the wider raid stack. Neither philosophy is automatically wrong — they fit different players. Here is a clear comparison.',
		keywords: [
			'war thunder esp only cheat',
			'war thunder cheats features',
			'radar vs esp',
			'war thunder cheat pricing',
			'war thunder cheats',
		],
		imageAlt: 'Full stack War Thunder Cheats compared with minimal ESP-only tools',
		sections: [
			{
				h2: 'Two philosophies: minimal surface vs full battle loop',
				paragraphs: [
					'Minimal tools focus on player boxes and light assist. Fewer features can mean a simpler menu and a lower price. Full-stack tools add loot filters, radar, and soft aim profiles so one menu covers information and fights.',
					'War Thunder Cheats is intentionally full-stack. If you only need outlines in quiet raids, a slim ESP product may feel enough. If you rotate, loot, and hold capture points, missing radar becomes obvious.',
				],
			},
			{
				h2: 'Feature and pricing reality check',
				paragraphs: [
					'War Thunder Cheats monthly is $35 and lifetime is $150 for ESP, radar, and soft aim together. Slimmer competitors often undercut sticker price while charging extra for modules you assumed were included. Always read the feature list, not the banner.',
					'Our public comparison points live on <a href="/features/">Features</a>, <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-radar-hack/">radar</a>, and <a href="/pricing/">Pricing</a>.',
				],
			},
			{
				h2: 'Detection talk without fairy tales',
				paragraphs: [
					'Smaller user bases generate fewer public ban screenshots — that is not proof of safety. Larger brands generate more noise even when maintenance is solid. Judge sellers by patch communication speed and whether you can find a dated status note.',
					'War Thunder Cheats documents maintenance on <a href="/eac-bypass/">Easy Anti-Cheat workflow</a> and <a href="/undetected-war-thunder-cheats/">undetected notes</a>.',
				],
			},
			{
				h2: 'Which style should you buy?',
				paragraphs: [
					'Choose minimal ESP if budget is tight, you play casually, and you accept Discord-only status tracking. Choose War Thunder Cheats if radar, loot filters, configurable soft aim, and a public Updates URL are must-haves.',
					'Decide your must-haves on paper first. Then open <a href="/war-thunder-cheats/">war thunder cheats</a> or keep shopping slim tools — but do not skip patch-day checks on either path.',
				],
			},
		],
	},
];

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	const translations = LOCALES.map((code) => `\t\t${code}: ${translationBlock(src)},`).join('\n');
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
${translations}
		},
	}`;
}

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);
console.log(`Wrote ${sources.length} NLP blog posts → ${OUT}`);
