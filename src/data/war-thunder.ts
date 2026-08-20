import { siteConfig } from './site';

/** Screenshots used across product pages — simple war thunder cheats keyword alts. */
export const warThunderImages = {
	hero: '/images/war-thunder-cheats-hero-full.png',
	espWallhack: '/images/war-thunder-cheats-wallhack.webp',
	aimbotCombat: '/images/war-thunder-cheats-aimbot.webp',
	aimbotSkeleton: '/images/war-thunder-cheats-aimbot-view.webp',
	playerEsp: '/images/war-thunder-cheats-radar.webp',
	cheatsCombat: '/images/war-thunder-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/war-thunder-cheats-raid.webp',
	loadoutBuilder: '/images/war-thunder-cheats-radar.webp',
	squadFight: '/images/war-thunder-cheats-aimbot-view.webp',
	cheatsPackage: '/images/war-thunder-cheats-radar.webp',
	headerArt: '/images/war-thunder-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/war-thunder-cheats-raid.webp',
	extractFight: '/images/war-thunder-cheats-aimbot.webp',
	rebootFight: '/images/war-thunder-cheats-aimbot.webp',
	arcadeCombat: '/images/war-thunder-cheats-wallhack.webp',
	arcadeMode: '/images/war-thunder-cheats-esp.webp',
	battleRoyaleIsland: '/images/war-thunder-cheats-esp.webp',
	raidMap: '/images/war-thunder-cheats-esp.webp',
	product: [
		{ src: '/images/war-thunder-cheats-esp.webp', alt: 'ESP vehicle boxes in a War Thunder battle' },
		{ src: '/images/war-thunder-cheats-wallhack.webp', alt: 'Wallhack outlines for tanks and aircraft' },
		{ src: '/images/war-thunder-cheats-aimbot.webp', alt: 'Soft aim assist overlay for War Thunder' },
		{ src: '/images/war-thunder-cheats-esp.webp', alt: 'Capture zone and vehicle ESP markers' },
		{ src: '/images/war-thunder-cheats-wallhack.webp', alt: 'Through-terrain visibility during a battle' },
		{ src: '/images/war-thunder-cheats-aimbot.webp', alt: 'Aimbot lead and FOV settings' },
	],
	gallery: [
		{ src: '/images/war-thunder-cheats-esp.webp', alt: 'ESP overlay showing enemy vehicle distance', featured: true },
		{ src: '/images/war-thunder-cheats-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/war-thunder-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/war-thunder-cheats-esp.webp', alt: 'Tank and aircraft ESP pins' },
		{ src: '/images/war-thunder-cheats-wallhack.webp', alt: 'Air and Ground wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/war-thunder-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/war-thunder-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/war-thunder-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/war-thunder-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/war-thunder-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/war-thunder-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
