export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global War Thunder Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'War Thunder Cheats Blog | Raid Guides',
		blogDescription:
			'War Thunder guides — battle tips, ESP, aimbot notes, map reads, and Easy Anti-Cheat update coverage. English blog at warthundercheats.net/blog/.',
		blogH1: 'War Thunder Cheats Intel',
		blogIntro:
			'Short War Thunder guides for Air, Ground, and Naval battles. Pair these tips with the War Thunder Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'War Thunder Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de War Thunder Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para War Thunder en PC Windows.',
		blogH1: 'Blog War Thunder Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos War Thunder indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías War Thunder relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio War Thunder Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog War Thunder Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour War Thunder sur PC Windows.',
		blogH1: 'Blog War Thunder Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches War Thunder indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides War Thunder associés',
		allPosts: 'Tous les articles',
		home: 'Accueil War Thunder Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'War Thunder Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'War Thunder Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für War Thunder auf Windows PC.',
		blogH1: 'War Thunder Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected War Thunder Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte War Thunder Guides',
		allPosts: 'Alle Beiträge',
		home: 'War Thunder Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog War Thunder Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para War Thunder no PC.',
		blogH1: 'Blog War Thunder Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats War Thunder indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias War Thunder relacionados',
		allPosts: 'Todos os posts',
		home: 'Início War Thunder Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog War Thunder Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per War Thunder su PC Windows.',
		blogH1: 'Blog War Thunder Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat War Thunder indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide War Thunder correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home War Thunder Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'War Thunder Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'War Thunder Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor War Thunder op Windows PC.',
		blogH1: 'War Thunder Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected War Thunder cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde War Thunder gidsen',
		allPosts: 'Alle posts',
		home: 'War Thunder Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog War Thunder Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla War Thunder na PC.',
		blogH1: 'Blog War Thunder Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów War Thunder, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki War Thunder',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna War Thunder Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог War Thunder Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог War Thunder Cheats: undetected ESP, wallhack, radar и Aimbot для War Thunder на Windows PC.',
		blogH1: 'Блог War Thunder Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам War Thunder, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды War Thunder',
		allPosts: 'Все статьи',
		home: 'Главная War Thunder Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'War Thunder Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'War Thunder Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri War Thunder Windows PC.',
		blogH1: 'War Thunder Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected War Thunder hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili War Thunder rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'War Thunder Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة War Thunder Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة War Thunder Cheats: غش undetected وESP wallhack ورadar وAimbot لـ War Thunder على Windows PC.',
		blogH1: 'مدونة War Thunder Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش War Thunder undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة War Thunder ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية War Thunder Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'War Thunder Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'War Thunder Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。War Thunder Windows PC向け。',
		blogH1: 'War Thunder Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected War Thunderチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連War Thunderガイド',
		allPosts: 'すべての記事',
		home: 'War Thunder Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'War Thunder Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'War Thunder Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. War Thunder Windows PC.',
		blogH1: 'War Thunder Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected War Thunder 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 War Thunder 가이드',
		allPosts: '모든 게시물',
		home: 'War Thunder Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'War Thunder Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'War Thunder Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于War Thunder Windows PC。',
		blogH1: 'War Thunder Cheats 博客 — 全球指南',
		blogIntro:
			'undetected War Thunder作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关War Thunder指南',
		allPosts: '所有文章',
		home: 'War Thunder Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'War Thunder Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'War Thunder Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड War Thunder Windows PC के लिए।',
		blogH1: 'War Thunder Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected War Thunder cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित War Thunder गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'War Thunder Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog War Thunder Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk War Thunder di PC Windows.',
		blogH1: 'Blog War Thunder Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat War Thunder undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua War Thunder terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda War Thunder Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก War Thunder Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก War Thunder Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ War Thunder บน PC',
		blogH1: 'บล็อก War Thunder Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat War Thunder undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ War Thunder ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก War Thunder Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog War Thunder Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho War Thunder trên PC.',
		blogH1: 'Blog War Thunder Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat War Thunder undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn War Thunder liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ War Thunder Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог War Thunder Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог War Thunder Cheats: undetected ESP, wallhack, radar та Aimbot для War Thunder на Windows PC.',
		blogH1: 'Блог War Thunder Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів War Thunder, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди War Thunder",
		allPosts: 'Усі статті',
		home: 'Головна War Thunder Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog War Thunder Cheats: undetected ESP, wallhack, radar a Aimbot pro War Thunder na Windows PC.',
		blogH1: 'Blog War Thunder Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected War Thunder cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související War Thunder průvodce',
		allPosts: 'Všechny články',
		home: 'Domů War Thunder Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog War Thunder Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog War Thunder Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru War Thunder pe PC.',
		blogH1: 'Blog War Thunder Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri War Thunder undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri War Thunder related',
		allPosts: 'Toate articolele',
		home: 'Acasă War Thunder Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'War Thunder Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'War Thunder Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för War Thunder på PC.',
		blogH1: 'War Thunder Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected War Thunder cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade War Thunder guider',
		allPosts: 'Alla inlägg',
		home: 'War Thunder Cheats hem',
		language: 'Språk',
	},
};
