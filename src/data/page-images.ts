import { siteConfig } from './site';
import { warThunderImages } from './war-thunder';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	warThunderImages.espWallhack,
	warThunderImages.aimbotCombat,
	warThunderImages.aimbotSkeleton,
	warThunderImages.playerEsp,
	warThunderImages.cheatsCombat,
	'/images/war-thunder-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/war-thunder-cheats-hero-1024w.webp',
	'war-thunder-esp': warThunderImages.playerEsp,
	'war-thunder-aimbot': warThunderImages.aimbotCombat,
	features: warThunderImages.aimbotSkeleton,
	pricing: warThunderImages.cheatsCombat,
	setup: warThunderImages.playerEsp,
	updates: '/images/war-thunder-cheats-hero-1024w.webp',
	faq: warThunderImages.aimbotSkeleton,
	support: warThunderImages.cheatsCombat,
	undetected: warThunderImages.espWallhack,
	wallhack: warThunderImages.espWallhack,
	radar: warThunderImages.playerEsp,
	eac: warThunderImages.aimbotCombat,
	'cheats-2026': '/images/war-thunder-cheats-hero-1024w.webp',
	hacks: warThunderImages.cheatsCombat,
	'cheat-download': warThunderImages.cheatsCombat,
	'mod-menu': warThunderImages.playerEsp,
	'soft-aim': warThunderImages.aimbotSkeleton,
	'best-cheats': '/images/war-thunder-cheats-hero-1024w.webp',
	'aimbot-hack': warThunderImages.aimbotSkeleton,
	'esp-hack': warThunderImages.espWallhack,
	'unlock-all': warThunderImages.playerEsp,
	privacy: warThunderImages.aimbotCombat,
	refund: warThunderImages.cheatsCombat,
	terms: warThunderImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
