import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'War Thunder Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'War Thunder cheats for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.',
		h1: 'War Thunder Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'War Thunder Cheats is the undetected war thunder cheats package for Windows PC — built for War Thunder on Windows PC. War Thunder esp wallhack, 2D radar, and war thunder aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "War Thunder Cheats homepage hero — ESP and aimbot for War Thunder",
		galleryTitle: 'War Thunder Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose War Thunder cheats in 2026',
				'War Thunder rewards map awareness. War Thunder Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on Arcade, Realistic, and Simulator battles.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.official} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/war-thunder-cheats/">War Thunder cheats pillar</a>, <a href="/war-thunder-esp/">ESP guide</a>, <a href="/war-thunder-aimbot/">Aimbot controls</a>, and <a href="/war-thunder-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, War Thunder Cheats bundles player ESP wallhack, vehicle markers, 2D radar overlays, and Aimbot profiles in one undetected package built for Air, Ground, and Naval battles — covering “war thunder cheats” and “war thunder hacks” search intent.',
				'Browse the <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-esp/">wallhack</a>, and <a href="/war-thunder-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Gaijin Entertainment service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'war-thunder-esp': {
		title: 'War Thunder ESP 2026 | Player Boxes & Wallhack',
		description:
			'War Thunder ESP for Windows PC — player boxes, vehicle markers, and distance readouts. Part of our undetected war thunder cheats for War Thunder.',
		h1: 'War Thunder ESP — Player Boxes & Wallhack',
		intro:
			'War Thunder esp visibility tools for Air and Ground battles. Read enemy squads, enemy vehicles, AI units, loot, and distance before you commit — toggleable war thunder esp wallhack overlays bundled in our war thunder cheats package.',
		imageAlt: "War Thunder ESP player boxes and distance readouts in a battle",
		galleryTitle: 'War Thunder ESP overlay visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'War Thunder wallhack guide',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'What War Thunder ESP solves in battles',
				'War Thunder maps punish incomplete information. War Thunder Cheats ESP wallhack helps you spot enemy squads early, spot tanks and aircraft before they push your angle, and mark high-value targets worth the detour.',
				'On Arcade, Realistic, and Simulator battles, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`War Thunder’s live seasons and map updates are published by Gaijin Entertainment (${EXT.official}). When maps or spawn rules shift, ESP categories stay useful because they track players and vehicles — not a single static landmark.`,
			),
			section(
				'Player, vehicle, and spawn ESP wallhack categories',
				'Toggle enemy player outlines, spawn markers, capture point cues, and vehicle pins so only battle-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Air, Ground, and Naval battles lobbies alike.',
				'Compare category detail on the <a href="/war-thunder-esp/">wallhack page</a> and pair visibility with the <a href="/war-thunder-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and capture point awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'War Thunder Cheats ESP wallhack is maintained for War Thunder with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first battle.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/war-thunder-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/war-thunder-cheats/">War Thunder cheats pillar</a> and <a href="/war-thunder-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'war-thunder-aimbot': {
		title: 'War Thunder Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'War Thunder aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our war thunder cheats package.',
		h1: 'War Thunder Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for War Thunder firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "War Thunder aimbot and soft aim controls on Windows PC",
		galleryTitle: 'War Thunder Aimbot combat previews',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'Aimbot tuned for War Thunder combat pace',
				'War Thunder mixes long-range AR fights with close-quarters SMG pushes. War Thunder Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range vehicle fights.',
				`Weapon balance and season rules change via ${EXT.official}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and close-range maps clears without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/war-thunder-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/war-thunder-esp/">ESP wallhack</a> and <a href="/war-thunder-radar-hack/">2D radar</a> in the same War Thunder Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'War Thunder Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major War Thunder patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'War Thunder Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full war thunder cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'War Thunder Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the War Thunder Cheats package for War Thunder on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "War Thunder Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'War Thunder Cheats feature gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, spawn and capture point awareness cues, vehicle and spawn markers, distance readouts, snaplines, and toggleable ESP categories for battle-critical overlays only.',
				'Team and enemy colour coding supports Air, Ground, and Naval battles. Deep-dive the <a href="/war-thunder-esp/">ESP page</a> and <a href="/war-thunder-esp/">wallhack guide</a> for category-level detail.',
				`Map and spawn systems evolve with ${EXT.official} patch and map updates — toggleable ESP categories keep overlays useful when maps rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-battle capture points, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live War Thunder sessions. See <a href="/war-thunder-radar-hack/">radar</a> and <a href="/war-thunder-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/war-thunder-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@warthundercheats.net.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/war-thunder-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'War Thunder Cheats Pricing | $35/mo or $150 Life',
		description:
			'War Thunder cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'War Thunder Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected War Thunder Cheats — ESP wallhack, radar hack, and Aimbot for War Thunder on Windows PC. Instant digital delivery after payment.',
		imageAlt: "War Thunder Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'War Thunder Cheats package visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime War Thunder Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected War Thunder Cheats package — ideal if you play War Thunder regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, vehicle markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major War Thunder patches.',
				`Season calendars and client updates come from ${EXT.official}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/war-thunder-cheats/">War Thunder cheats</a>, <a href="/war-thunder-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'War Thunder Cheats Setup | Windows PC Guide',
		description:
			'Set up war thunder cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.',
		h1: 'War Thunder Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure War Thunder Cheats for War Thunder on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.',
		imageAlt: "War Thunder Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'War Thunder Cheats setup visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install War Thunder Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching War Thunder.',
				`Also glance at ${EXT.status} if Gaijin Entertainment services look unstable on patch day — a platform outage is not a license fault.`,
				'War Thunder Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemy vehicles, AI units, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, and <a href="/war-thunder-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/war-thunder-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After War Thunder or Easy Anti-Cheat patches',
				'When Gaijin Entertainment ships a major War Thunder update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/war-thunder-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'War Thunder Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'War Thunder cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'War Thunder Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and War Thunder patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "War Thunder Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'War Thunder patch and maintenance visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/war-thunder-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'War Thunder and Easy Anti-Cheat receive frequent patches. War Thunder Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Gaijin Entertainment platform health and this page for War Thunder Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on Air and Ground battles.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/war-thunder-cheats/">undetected War Thunder cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.official}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'War Thunder Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'War Thunder cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'War Thunder Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected War Thunder Cheats — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and War Thunder compatibility on Windows PC.',
		imageAlt: "War Thunder Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'War Thunder Cheats FAQ visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is War Thunder Cheats?',
				'War Thunder Cheats is an undetected cheat package for War Thunder on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover Air and Ground battles. Explore <a href="/features/">Features</a> for the full control list and <a href="/war-thunder-esp/">ESP</a> / <a href="/war-thunder-aimbot/">Aimbot</a> for module detail.',
				`War Thunder itself is published by Gaijin Entertainment (${EXT.official}). Cheats are third-party tools and may violate Gaijin's rules — use is at your own risk.`,
			),
			section(
				'Are War Thunder Cheats undetected in 2026?',
				'War Thunder Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/war-thunder-cheats/">undetected War Thunder cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@warthundercheats.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'War Thunder Cheats Support | Help & Contact',
		description:
			'Contact war thunder cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'War Thunder Cheats Support — Contact Us',
		intro:
			'Get help with War Thunder Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for War Thunder on Windows PC.',
		imageAlt: "War Thunder Cheats support page for license and setup help",
		galleryTitle: 'War Thunder Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. War Thunder Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Gaijin Entertainment bans.',
				`Account and game policy questions belong with Gaijin Entertainment. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@warthundercheats.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected War Thunder Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected war thunder cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected War Thunder Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How War Thunder Cheats stays maintained for War Thunder after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "War Thunder Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected War Thunder Cheats visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for War Thunder Cheats',
				'Undetected War Thunder Cheats means the package is actively maintained against Easy Anti-Cheat and major War Thunder patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; War Thunder client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or War Thunder updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass War Thunder guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/war-thunder-cheats/">War Thunder cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'War Thunder Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'War Thunder wallhack ESP with player boxes and vehicle markers for Windows PC. Undetected war thunder cheats — learn overlays and buy.',
		h1: 'War Thunder Wallhack — ESP Boxes & Visibility',
		intro:
			'War Thunder wallhack ESP for War Thunder — see players, tanks, aircraft, and ships through toggleable wallhack overlays built for Air, Ground, and Naval battles.',
		imageAlt: "War Thunder wallhack visibility through walls in a battle",
		galleryTitle: 'War Thunder wallhack ESP gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'War Thunder ESP page',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A War Thunder wallhack focuses on information — player outlines, loot pins, spawn threat cues — rather than automatic aiming. War Thunder Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and capture point holds.',
				'For the broader ESP keyword page see <a href="/war-thunder-esp/">War Thunder ESP</a>; for combat assist see <a href="/war-thunder-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support Arcade, Realistic, and Simulator battles with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.official}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/war-thunder-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/war-thunder-cheats/">undetected War Thunder cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/war-thunder-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'War Thunder Radar Hack 2026 | 2D Threat Overlay',
		description:
			'War Thunder radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our war thunder cheats package.',
		h1: 'War Thunder Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for War Thunder — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "War Thunder 2D radar overlay showing nearby threats",
		galleryTitle: 'War Thunder radar hack visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'Why radar hack matters in War Thunder',
				'Air and Ground fights happen in three dimensions — ridgelines, clouds, and flanks. A 2D radar overlay shows nearby vehicle threats outside direct line of sight so you can reposition before a third party.',
				'War Thunder Cheats radar complements <a href="/war-thunder-esp/">ESP wallhack</a> markers during squad pushes and capture point camp fights.',
				`Mode rules and seasonal changes come from ${EXT.official}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight capture point holds. Directional cues highlight flanks during building clears and flank pushes across Air and Ground battles.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/war-thunder-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/war-thunder-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full War Thunder Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major War Thunder patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/war-thunder-cheats/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass War Thunder | War Thunder Cheats Maintenance',
		description:
			'How war thunder cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Easy Anti-Cheat Bypass — War Thunder Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for War Thunder Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after War Thunder security updates.',
		imageAlt: "War Thunder Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is the anti-cheat War Thunder uses on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`War Thunder Cheats monitors Easy Anti-Cheat patch notes and War Thunder seasonal updates from ${EXT.official} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Gaijin Entertainment service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/war-thunder-cheats/">undetected War Thunder cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'War Thunder Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best war thunder cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected war thunder cheats with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'War Thunder Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 War Thunder Cheats package for War Thunder — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "War Thunder Cheats product overview for War Thunder",
		galleryTitle: 'War Thunder Cheats 2026 gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why war thunder cheats buyers choose War Thunder Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. War Thunder Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.official}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover Air and Ground battles — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, vehicle markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/war-thunder-cheats/">War Thunder cheats pillar</a>, <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-esp/">wallhack</a>, <a href="/war-thunder-radar-hack/">radar</a>, <a href="/war-thunder-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/war-thunder-cheats/">War Thunder cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/war-thunder-cheats/">War Thunder cheats</a> checklist, <a href="/blog/war-thunder-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@warthundercheats.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'War Thunder Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'War Thunder cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare war thunder cheats options and buy the full package.',
		h1: 'War Thunder Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'War Thunder cheats for Air and Ground battles combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for war thunder cheats in 2026.',
		imageAlt: "War Thunder Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'War Thunder cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/war-thunder-cheats/',
		sections: [
			section(
				'What War Thunder cheats include in 2026',
				'Players searching for War Thunder cheats usually want visibility and combat tools without stacking separate downloads. War Thunder Cheats bundles player ESP wallhack, vehicle markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called war thunder cheats.',
				'Coverage spans Air and Ground battles with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.official}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this War Thunder cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/war-thunder-cheats/">war thunder cheats 2026</a> and <a href="/war-thunder-cheats/">War Thunder cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/war-thunder-esp/">War Thunder ESP</a>, <a href="/war-thunder-aimbot/">War Thunder Aimbot</a>, <a href="/war-thunder-esp/">wallhack</a>, <a href="/war-thunder-radar-hack/">radar hack</a>, and <a href="/war-thunder-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/war-thunder-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/war-thunder-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-war-thunder-cheats-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'War Thunder cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. War Thunder Cheats maps the full battle loop: read enemy squads, track tanks and aircraft, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/war-thunder-cheats/">mod menu</a>, <a href="/war-thunder-aimbot/">aimbot</a>, <a href="/war-thunder-esp/">ESP</a>.',
			),
			section(
				'Undetected War Thunder cheats with Easy Anti-Cheat maintenance',
				'Undetected War Thunder cheats require rebuilds after Easy Anti-Cheat and major War Thunder patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href="/war-thunder-cheats/">undetected War Thunder cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'War Thunder Hack Download 2026 | Instant Access',
		description:
			'War Thunder cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'War Thunder Hack Download — Instant License Delivery',
		intro:
			'How War Thunder cheat download works for War Thunder — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "War Thunder Cheats download and install delivery flow",
		galleryTitle: 'War Thunder cheat download visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How War Thunder cheat download delivery works',
				'After checkout confirms payment, War Thunder Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Gaijin Entertainment services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every War Thunder cheat download includes player ESP wallhack, vehicle and spawn markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Air, Ground, and Naval battles.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When War Thunder or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/war-thunder-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'War Thunder Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'War Thunder mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected war thunder cheats package.',
		h1: 'War Thunder Mod Menu — In-Client Control Panel',
		intro:
			'War Thunder mod menu controls for War Thunder — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your War Thunder session on Windows PC.',
		imageAlt: "War Thunder Cheats in-game menu controls",
		galleryTitle: 'War Thunder mod menu gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a War Thunder mod menu controls',
				'A War Thunder mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. War Thunder Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, vehicle markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of War Thunder.',
				'Control deep-dives: <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for Air, Ground, and Naval battles',
				'Separate ESP wallhack categories for players, tanks, aircraft, and ships let you reduce overlay noise during rotations and capture point holds.',
				`Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.official} seasons change fight distances and mobility.`,
				'Soft tracking players should start with <a href="/war-thunder-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'War Thunder mod menu behavior is rebuilt when Easy Anti-Cheat or major War Thunder updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'War Thunder Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'War Thunder soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our war thunder cheats with ESP boxes.',
		h1: 'War Thunder Soft Aim — Smooth Aimbot Controls',
		intro:
			'War Thunder soft aim settings for War Thunder — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "War Thunder soft aim FOV and smoothness settings",
		galleryTitle: 'War Thunder soft aim gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/war-thunder-aimbot/',
		sections: [
			section(
				'What War Thunder soft aim means',
				'War Thunder soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. War Thunder Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/war-thunder-aimbot/">War Thunder Aimbot</a>. Alternate wording: <a href="/war-thunder-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.official} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/war-thunder-esp/">ESP wallhack</a> and <a href="/war-thunder-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Easy Anti-Cheat maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best War Thunder Cheats 2026 | Buyer Guide',
		description:
			'Best war thunder cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best War Thunder Cheats — 2026 Buyer Guide',
		intro:
			'Compare the War Thunder cheats for War Thunder in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "War Thunder Cheats overview for War Thunder on PC",
		galleryTitle: 'Best War Thunder cheats gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the War Thunder cheats in 2026',
				'The War Thunder cheats combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'War Thunder Cheats covers Air and Ground battles with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best War Thunder cheats feature checklist',
				'Look for player ESP wallhack, vehicle markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after War Thunder patches.',
				'Review <a href="/features/">Features</a>, <a href="/war-thunder-cheats/">undetected status</a>, and <a href="/war-thunder-cheats/">War Thunder cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-cheats/">hacks</a>.',
			),
			section(
				'Buying the War Thunder cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Gaijin Entertainment terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'War Thunder Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'War Thunder aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our war thunder cheats package.',
		h1: 'War Thunder Aimbot Hack — Soft Aim Assist',
		intro:
			'War Thunder aimbot hack tools for War Thunder — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "War Thunder aimbot hack controls and bone priority",
		galleryTitle: 'War Thunder aimbot hack gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/war-thunder-aimbot/',
		sections: [
			section(
				'War Thunder aimbot hack vs visibility tools',
				'A War Thunder aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. War Thunder Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for War Thunder combat pace across Air, Ground, and Naval battles.',
				'Prefer softer tracking language? See <a href="/war-thunder-aimbot/">soft aim</a>. Full settings: <a href="/war-thunder-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-battle capture points.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.official} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/war-thunder-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'War Thunder ESP Hack 2026 | Player Boxes & Loot',
		description:
			'War Thunder ESP hack with player boxes and vehicle markers for Windows PC. Undetected war thunder cheats with — see overlays and buy.',
		h1: 'War Thunder ESP Hack — Player Boxes Guide',
		intro:
			'War Thunder ESP hack overlays for War Thunder — player outlines, spawn threat cues, vehicle and spawn markers with distance readouts across Air and Ground battles.',
		imageAlt: "War Thunder ESP hack boxes and vehicle markers",
		galleryTitle: 'War Thunder ESP hack gallery',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'What a War Thunder ESP hack shows',
				'A War Thunder ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/war-thunder-esp/">War Thunder ESP</a>. Wallhack wording: <a href="/war-thunder-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for battles',
				'Toggle player ESP hack, vehicle markers, spawn pins, and vehicle cues independently so only battle-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Air, Ground, and Naval battles.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and War Thunder patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/war-thunder-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/war-thunder-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'War Thunder Unlock All 2026 | What It Really Means',
		description:
			'War Thunder unlock all explained vs real war thunder cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'War Thunder Unlock All — What Players Search For',
		intro:
			'War Thunder unlock all is a common search term for War Thunder — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools War Thunder Cheats actually provides on Windows PC.',
		imageAlt: "War Thunder Cheats license features overview",
		galleryTitle: 'War Thunder unlock all guide visuals',
		ctaPrimary: 'Buy War Thunder Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What War Thunder unlock all usually means',
				'War Thunder unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'War Thunder Cheats focuses on in-match awareness — player ESP, vehicle markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Golden Eagle items are sold through ${EXT.official}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy tanks, aircraft, and capture points during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, vehicle and spawn markers speed map rotations — see the <a href="/war-thunder-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/war-thunder-cheats/">War Thunder cheats</a> and <a href="/war-thunder-cheats/">War Thunder cheats</a>.',
			),
			section(
				'Buying War Thunder Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for War Thunder on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | War Thunder Cheats',
		description:
			'Privacy policy for War Thunder Cheats. How we handle support emails, order data, and checkout for war thunder cheats licenses on warthundercheats.net.',
		h1: 'Privacy Policy',
		intro: 'How War Thunder Cheats handles information when you browse warthundercheats.net or contact support about a War Thunder license.',
		imageAlt: "War Thunder Cheats privacy policy page",
		galleryTitle: 'War Thunder Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual War Thunder Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@warthundercheats.net with your request details.',
				'Policy updates publish on this page. Continued use of warthundercheats.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | War Thunder Cheats',
		description:
			'Refund policy for War Thunder Cheats. Digital delivery terms and eligibility for war thunder cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for War Thunder Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for War Thunder.',
		imageAlt: "War Thunder Cheats refund policy page",
		galleryTitle: 'War Thunder Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'War Thunder Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@warthundercheats.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | War Thunder Cheats Rules',
		description:
			'Terms of use for warthundercheats.net and War Thunder Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of warthundercheats.net and War Thunder Cheats licenses for War Thunder on Windows PC.',
		imageAlt: "War Thunder Cheats terms of use page",
		galleryTitle: 'War Thunder Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using War Thunder Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for War Thunder on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in War Thunder may violate Gaijin Entertainment terms and result in account penalties. War Thunder Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/war-thunder-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@warthundercheats.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
