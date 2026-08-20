/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'War Thunder Cheats',
	/** Short product label if needed */
	shortName: 'War Thunder',
	/** Canonical origin — no trailing slash */
	url: 'https://warthundercheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warthundercheats.net',
	checkoutUrl: 'https://zadeyo.com/go/SAKINA?to=%2Fproducts%2Fwar-thunder',

	/** Game this template instance targets */
	game: 'War Thunder',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/war-thunder-cheats-logo.webp',
	logoRaster: '/images/war-thunder-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'War Thunder Cheats logo',
	defaultOgImage: '/images/war-thunder-cheats-hero-1024w.webp',
	heroImage: '/images/war-thunder-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#ff6a12',
		bg: '#070708',
		soft: '#ffb27a',
		deep: '#c2410c',
		hover: '#ff8539',
		panel: '#0d0d0f',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'war thunder cheats',
		list: [
			'war thunder cheats',
			'war thunder hacks',
			'war thunder esp',
			'war thunder aimbot',
			'war thunder wallhack',
			'war thunder radar hack',
			'undetected war thunder cheats',
			'best war thunder cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /war-thunder-cheats/ owns the head term. */
		homeTitle: 'War Thunder Cheats | Official Windows PC Site',
		homeDescription:
			'Official War Thunder Cheats site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, vehicle tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a battle on Windows PC today.',
		/** Money page meta — primary target for "war thunder cheats". */
		previewTitle: 'War Thunder Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected war thunder cheats for War Thunder on Windows PC. ESP, soft aim, radar, and Easy Anti-Cheat patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Follow each short setup step in order so you can queue a battle on your first session.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for War Thunder — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for War Thunder on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — battle tips, ESP, aimbot, map reads, and {antiCheat} update coverage for Windows PC players who queue.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for War Thunder on Windows PC.',
		blogLabel: 'War Thunder Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'{brand} for War Thunder — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-19',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/war-thunder-cheats-esp.webp',
				title: 'ESP overlay in War Thunder',
				caption: 'Player ESP boxes and distance readouts during a battle',
			},
			{
				src: '/images/war-thunder-cheats-wallhack.webp',
				title: 'Wallhack visibility for War Thunder battles',
				caption: 'Tank, aircraft, and ship outlines through terrain',
			},
			{
				src: '/images/war-thunder-cheats-aimbot.webp',
				title: 'Soft aim assist for War Thunder',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/war-thunder-cheats-aimbot-view.webp',
				title: 'Aimbot view in War Thunder Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/war-thunder-cheats-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near capture points',
			},
			{
				src: '/images/war-thunder-cheats-raid.webp',
				title: 'War Thunder Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
