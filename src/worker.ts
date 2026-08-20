/**
 * Cloudflare Worker — host + path canonicalization before static assets.
 * Canonical site: https://warthundercheats.net (matches brand.url)
 *
 * Locale cannibal redirects live in functions/cannibal-redirects.json
 * (not public/_redirects — CF Workers Assets limit is 100 rules).
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'warthundercheats.net';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/** Old apex still 301 → current canonical. Keep empty unless a prior domain exists. */
const LEGACY_HOSTS = new Set<string>([]);

/** Keep aligned with public/_redirects + functions/_middleware.js PATH_REDIRECTS. */
const PATH_REDIRECTS: Record<string, string> = {
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/escape-from-tarkov-cheats': '/war-thunder-cheats/',
	'/escape-from-tarkov-cheats/': '/war-thunder-cheats/',
	'/war-thunder-esp-hack': '/war-thunder-esp/',
	'/war-thunder-esp-hack/': '/war-thunder-esp/',
	'/war-thunder-aimbot-hack': '/war-thunder-aimbot/',
	'/war-thunder-aimbot-hack/': '/war-thunder-aimbot/',
	'/best-war-thunder-cheats': '/war-thunder-cheats/',
	'/best-war-thunder-cheats/': '/war-thunder-cheats/',
	'/war-thunder-cheats-2026': '/war-thunder-cheats/',
	'/war-thunder-cheats-2026/': '/war-thunder-cheats/',
	'/undetected-war-thunder-cheats': '/war-thunder-cheats/',
	'/undetected-war-thunder-cheats/': '/war-thunder-cheats/',
	'/war-thunder-mod-menu': '/war-thunder-cheats/',
	'/war-thunder-mod-menu/': '/war-thunder-cheats/',
	'/war-thunder-unlock-all': '/war-thunder-cheats/',
	'/war-thunder-unlock-all/': '/war-thunder-cheats/',
	'/war-thunder-soft-aim': '/war-thunder-aimbot/',
	'/war-thunder-soft-aim/': '/war-thunder-aimbot/',
	'/war-thunder-wallhack': '/war-thunder-esp/',
	'/war-thunder-wallhack/': '/war-thunder-esp/',
	'/war-thunder-cheat-download': '/setup/',
	'/war-thunder-cheat-download/': '/setup/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
	'/reviews/war-thunder-radar-hack-review-vanlifefn': '/reviews/war-thunder-radar-hack-review-vanlifewt/',
	'/reviews/war-thunder-radar-hack-review-vanlifefn/': '/reviews/war-thunder-radar-hack-review-vanlifewt/',
	'/reviews/war-thunder-radar-hack-review-vanlifewz': '/reviews/war-thunder-radar-hack-review-vanlifewt/',
	'/reviews/war-thunder-radar-hack-review-vanlifewz/': '/reviews/war-thunder-radar-hack-review-vanlifewt/',
	'/reviews/war-thunder-radar-hack-review-vanlifeeft': '/reviews/war-thunder-radar-hack-review-vanlifewt/',
	'/reviews/war-thunder-radar-hack-review-vanlifeeft/': '/reviews/war-thunder-radar-hack-review-vanlifewt/',
	'/blog/war-thunder-scav-run-aggressive-strategies': '/blog/war-thunder-arcade-battle-strategies/',
	'/blog/war-thunder-scav-run-aggressive-strategies/': '/blog/war-thunder-arcade-battle-strategies/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99':
		'/reviews/war-thunder-soft-aim-review-ctrl-player99/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99/':
		'/reviews/war-thunder-soft-aim-review-ctrl-player99/',
};

function hostCanonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

function pathRedirect(pathname: string): string | null {
	return (
		PATH_REDIRECTS[pathname] ??
		(CANNIBAL_REDIRECTS as Record<string, string>)[pathname] ??
		null
	);
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const hostTarget = hostCanonicalUrl(request);
		if (hostTarget) {
			const mapped = pathRedirect(hostTarget.pathname);
			if (mapped) {
				hostTarget.pathname = mapped;
			}
			return Response.redirect(hostTarget.toString(), 301);
		}

		const url = new URL(request.url);
		const mappedPath = pathRedirect(url.pathname);
		if (mappedPath) {
			return Response.redirect(new URL(mappedPath + url.search, CANONICAL_ORIGIN).toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
