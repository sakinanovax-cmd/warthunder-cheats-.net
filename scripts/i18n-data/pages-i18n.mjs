import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'War Thunder Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos War Thunder indetectables para War Thunder en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'War Thunder Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para War Thunder en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galería War Thunder Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen War Thunder Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en Arcade y Realistic.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'War Thunder Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches War Thunder indétectables pour War Thunder sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'War Thunder Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour War Thunder sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galerie War Thunder Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir War Thunder Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en Arcade et Realistic.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'War Thunder Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected War Thunder Cheats für War Thunder auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für War Thunder: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'War Thunder Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum War Thunder Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in Arcade und Realistic zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'War Thunder Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats War Thunder indetectáveis para War Thunder no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'War Thunder Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para War Thunder no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galeria War Thunder Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher War Thunder Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em Arcade e Realistic.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'War Thunder Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat War Thunder indetectable per War Thunder su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'War Thunder Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per War Thunder su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galleria War Thunder Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere War Thunder Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in Arcade e Realistic.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'War Thunder Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected War Thunder cheats voor War Thunder op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor War Thunder: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'War Thunder Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom War Thunder Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in Arcade en Realistic.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'War Thunder Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty War Thunder dla War Thunder na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla War Thunder na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galeria War Thunder Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego War Thunder Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w Arcade i Realistic.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'War Thunder Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы War Thunder для War Thunder на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для War Thunder на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Галерея War Thunder Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают War Thunder Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в Arcade и Realistic.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'War Thunder Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'War Thunder için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'War Thunder Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'War Thunder Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden War Thunder Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'Arcade ve Realistic\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'War Thunder Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش War Thunder undetected لـ War Thunder على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'War Thunder Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ War Thunder على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'معرض War Thunder Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا War Thunder Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في Arcade و Realistic.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'War Thunder Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'War Thunder向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'War Thunder Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'War Thunder Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'War Thunder cheats hero ESP aimbot wallhack', gallery: 'War Thunder Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にWar Thunder Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'ArcadeとRealisticで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'War Thunder Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'War Thunder undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'War Thunder Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'War Thunder cheats hero ESP aimbot wallhack', gallery: 'War Thunder Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 War Thunder Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'Arcade 및 Realistic에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'War Thunder Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'War Thunder undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'War Thunder Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'War Thunder Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'War Thunder cheats hero ESP aimbot wallhack', gallery: 'War Thunder Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择War Thunder Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在Arcade和Realistic中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'War Thunder Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'War Thunder undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'War Thunder Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'War Thunder cheats hero ESP aimbot wallhack', gallery: 'War Thunder Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में War Thunder Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'Arcade और Realistic में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'War Thunder Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat War Thunder undetected untuk War Thunder di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected War Thunder di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galeri War Thunder Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa War Thunder Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di Arcade dan Realistic.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'War Thunder Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat War Thunder undetected สำหรับ War Thunder บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ War Thunder บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'War Thunder ESP player tags hack', gallery: 'แกลเลอรี War Thunder Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก War Thunder Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน Arcade และ Realistic', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'War Thunder Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat War Thunder undetected cho War Thunder trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected War Thunder trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Thư viện War Thunder Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn War Thunder Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong Arcade và Realistic.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'War Thunder Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти War Thunder для War Thunder на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для War Thunder на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Галерея War Thunder Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому War Thunder Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у Arcade і Realistic.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'War Thunder Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected War Thunder cheaty pro War Thunder na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro War Thunder na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galerie War Thunder Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč War Thunder Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v Arcade a Realistic.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'War Thunder Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats War Thunder undetected pentru War Thunder pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected War Thunder pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'Galerie War Thunder Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce War Thunder Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în Arcade și Realistic.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'War Thunder Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected War Thunder cheats för War Thunder på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'War Thunder Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för War Thunder på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'War Thunder ESP player tags hack', gallery: 'War Thunder Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför War Thunder Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i Arcade och Realistic.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'war-thunder-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, vehicle markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'war-thunder-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for War Thunder hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 War Thunder cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the War Thunder hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying War Thunder cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for War Thunder', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'war-thunder-esp': 'Cajas de jugador y wallhack',
		'war-thunder-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'war-thunder-esp': 'Boîtes joueur et wallhack',
		'war-thunder-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'war-thunder-esp': 'Spielerboxen & Wallhack',
		'war-thunder-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'war-thunder-esp': 'Caixas de jogador e wallhack',
		'war-thunder-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'war-thunder-esp': 'Box giocatore e wallhack',
		'war-thunder-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'war-thunder-esp': 'Боксы игроков и wallhack',
		'war-thunder-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'War Thunder Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — War Thunder Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'war-thunder-esp': { en: 'War Thunder ESP', es: 'ESP War Thunder', fr: 'ESP War Thunder', de: 'War Thunder ESP', pt: 'ESP War Thunder', it: 'ESP War Thunder', nl: 'War Thunder ESP', pl: 'ESP War Thunder', ru: 'ESP War Thunder', tr: 'War Thunder ESP', ar: 'ESP War Thunder', ja: 'War Thunder ESP', ko: 'War Thunder ESP', zh: 'War Thunder ESP', hi: 'War Thunder ESP', id: 'ESP War Thunder', th: 'War Thunder ESP', vi: 'ESP War Thunder', uk: 'ESP War Thunder', cs: 'War Thunder ESP', ro: 'ESP War Thunder', sv: 'War Thunder ESP' },
	'war-thunder-aimbot': { en: 'War Thunder Aimbot', es: 'Aimbot War Thunder', fr: 'Aimbot War Thunder', de: 'War Thunder Aimbot', pt: 'Aimbot War Thunder', it: 'Aimbot War Thunder', nl: 'War Thunder Aimbot', pl: 'Aimbot War Thunder', ru: 'Aimbot War Thunder', tr: 'War Thunder Aimbot', ar: 'Aimbot War Thunder', ja: 'War Thunder Aimbot', ko: 'War Thunder Aimbot', zh: 'War Thunder Aimbot', hi: 'War Thunder Aimbot', id: 'Aimbot War Thunder', th: 'War Thunder Aimbot', vi: 'Aimbot War Thunder', uk: 'Aimbot War Thunder', cs: 'War Thunder Aimbot', ro: 'Aimbot War Thunder', sv: 'War Thunder Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'War Thunder Wallhack', es: 'Wallhack War Thunder', fr: 'Wallhack War Thunder', de: 'War Thunder Wallhack', pt: 'Wallhack War Thunder', it: 'Wallhack War Thunder', nl: 'War Thunder Wallhack', pl: 'Wallhack War Thunder', ru: 'Wallhack War Thunder', tr: 'War Thunder Wallhack', ar: 'Wallhack War Thunder', ja: 'War Thunder Wallhack', ko: 'War Thunder Wallhack', zh: 'War Thunder Wallhack', hi: 'War Thunder Wallhack', id: 'Wallhack War Thunder', th: 'War Thunder Wallhack', vi: 'Wallhack War Thunder', uk: 'Wallhack War Thunder', cs: 'War Thunder Wallhack', ro: 'Wallhack War Thunder', sv: 'War Thunder Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'War Thunder Cheats 2026', es: 'Trucos War Thunder 2026', fr: 'Triches War Thunder 2026', de: 'War Thunder Cheats 2026', pt: 'Cheats War Thunder 2026', it: 'Cheat War Thunder 2026', nl: 'War Thunder Cheats 2026', pl: 'Cheaty War Thunder 2026', ru: 'Читы War Thunder 2026', tr: 'War Thunder Hileleri 2026', ar: 'غش War Thunder 2026', ja: 'War Thunder Cheats 2026', ko: 'War Thunder Cheats 2026', zh: 'War Thunder作弊 2026', hi: 'War Thunder Cheats 2026', id: 'Cheat War Thunder 2026', th: 'War Thunder Cheats 2026', vi: 'Cheat War Thunder 2026', uk: 'Чіти War Thunder 2026', cs: 'War Thunder cheaty 2026', ro: 'Cheats War Thunder 2026', sv: 'War Thunder Cheats 2026' },
	hacks: { en: 'War Thunder Cheats', es: 'Trucos War Thunder', fr: 'Triches War Thunder', de: 'War Thunder Cheats', pt: 'Cheats War Thunder', it: 'Cheat War Thunder', nl: 'War Thunder Cheats', pl: 'Cheaty War Thunder', ru: 'Читы War Thunder', tr: 'War Thunder Hileleri', ar: 'غش War Thunder', ja: 'War Thunder Cheats', ko: 'War Thunder Cheats', zh: 'War Thunder作弊', hi: 'War Thunder Cheats', id: 'Cheat War Thunder', th: 'War Thunder Cheats', vi: 'Cheat War Thunder', uk: 'Чіти War Thunder', cs: 'War Thunder cheaty', ro: 'Cheats War Thunder', sv: 'War Thunder Cheats' },
	'cheat-download': { en: 'War Thunder Cheat Download', es: 'Descarga War Thunder Cheats', fr: 'Téléchargement War Thunder Cheats', de: 'War Thunder Cheat Download', pt: 'Download War Thunder Cheats', it: 'Download War Thunder Cheats', nl: 'War Thunder Cheat Download', pl: 'Pobieranie War Thunder Cheats', ru: 'Скачать War Thunder Cheats', tr: 'War Thunder Hile İndir', ar: 'تحميل War Thunder Cheats', ja: 'War Thunder Cheat Download', ko: 'War Thunder Cheat Download', zh: 'War Thunder作弊下载', hi: 'War Thunder Cheat Download', id: 'Download Cheat War Thunder', th: 'ดาวน์โหลด War Thunder Cheats', vi: 'Tải Cheat War Thunder', uk: 'Завантаження War Thunder Cheats', cs: 'Stáhnout War Thunder Cheats', ro: 'Descărcare War Thunder Cheats', sv: 'War Thunder Cheat Download' },
	'mod-menu': { en: 'War Thunder Mod Menu', es: 'Menú mod War Thunder', fr: 'Menu mod War Thunder', de: 'War Thunder Mod-Menü', pt: 'Menu mod War Thunder', it: 'Mod menu War Thunder', nl: 'War Thunder Mod Menu', pl: 'Mod menu War Thunder', ru: 'Мод-меню War Thunder', tr: 'War Thunder Mod Menü', ar: 'قائمة مود War Thunder', ja: 'War Thunder Mod Menu', ko: 'War Thunder 모드 메뉴', zh: 'War Thunder修改菜单', hi: 'War Thunder Mod Menu', id: 'Menu mod War Thunder', th: 'เมนูมอด War Thunder', vi: 'Mod menu War Thunder', uk: 'Мод-меню War Thunder', cs: 'War Thunder mod menu', ro: 'Meniu mod War Thunder', sv: 'War Thunder Mod-meny' },
	'soft-aim': { en: 'War Thunder Soft Aim', es: 'Soft aim War Thunder', fr: 'Soft aim War Thunder', de: 'War Thunder Soft Aim', pt: 'Soft aim War Thunder', it: 'Soft aim War Thunder', nl: 'War Thunder Soft Aim', pl: 'Soft aim War Thunder', ru: 'Soft aim War Thunder', tr: 'War Thunder Soft Aim', ar: 'Soft aim War Thunder', ja: 'War Thunder Soft Aim', ko: 'War Thunder Soft Aim', zh: 'War Thunder Soft Aim', hi: 'War Thunder Soft Aim', id: 'Soft aim War Thunder', th: 'War Thunder Soft Aim', vi: 'Soft aim War Thunder', uk: 'Soft aim War Thunder', cs: 'War Thunder Soft Aim', ro: 'Soft aim War Thunder', sv: 'War Thunder Soft Aim' },
	'best-cheats': { en: 'Best War Thunder Cheats', es: 'Mejores trucos War Thunder', fr: 'Meilleures triches War Thunder', de: 'Beste War Thunder Cheats', pt: 'Melhores cheats War Thunder', it: 'Migliori cheat War Thunder', nl: 'Beste War Thunder Cheats', pl: 'Najlepsze cheaty War Thunder', ru: 'Лучшие читы War Thunder', tr: 'En İyi War Thunder Hileleri', ar: 'أفضل غش War Thunder', ja: '最強War Thunderチート', ko: '최고의 War Thunder 치트', zh: '最佳War Thunder作弊', hi: 'सर्वश्रेष्ठ War Thunder Cheats', id: 'Cheat War Thunder terbaik', th: 'Cheat War Thunder ที่ดีที่สุด', vi: 'Cheat War Thunder tốt nhất', uk: 'Найкращі чіти War Thunder', cs: 'Nejlepší War Thunder cheaty', ro: 'Cele mai bune cheats War Thunder', sv: 'Bästa War Thunder Cheats' },
	'aimbot-hack': { en: 'War Thunder Aimbot Hack', es: 'Hack aimbot War Thunder', fr: 'Hack aimbot War Thunder', de: 'War Thunder Aimbot Hack', pt: 'Hack aimbot War Thunder', it: 'Hack aimbot War Thunder', nl: 'War Thunder Aimbot Hack', pl: 'Hack aimbot War Thunder', ru: 'Хак aimbot War Thunder', tr: 'War Thunder Aimbot Hilesi', ar: 'هاك Aimbot War Thunder', ja: 'War Thunder Aimbot Hack', ko: 'War Thunder 에임봇 핵', zh: 'War Thunder自瞄外挂', hi: 'War Thunder Aimbot Hack', id: 'Hack aimbot War Thunder', th: 'Hack Aimbot War Thunder', vi: 'Hack aimbot War Thunder', uk: 'Хак aimbot War Thunder', cs: 'War Thunder aimbot hack', ro: 'Hack aimbot War Thunder', sv: 'War Thunder Aimbot Hack' },
	'esp-hack': { en: 'War Thunder ESP Hack', es: 'Hack ESP War Thunder', fr: 'Hack ESP War Thunder', de: 'War Thunder ESP Hack', pt: 'Hack ESP War Thunder', it: 'Hack ESP War Thunder', nl: 'War Thunder ESP Hack', pl: 'Hack ESP War Thunder', ru: 'Хак ESP War Thunder', tr: 'War Thunder ESP Hilesi', ar: 'هاك ESP War Thunder', ja: 'War Thunder ESP Hack', ko: 'War Thunder ESP 핵', zh: 'War Thunder ESP外挂', hi: 'War Thunder ESP Hack', id: 'Hack ESP War Thunder', th: 'Hack ESP War Thunder', vi: 'Hack ESP War Thunder', uk: 'Хак ESP War Thunder', cs: 'War Thunder ESP hack', ro: 'Hack ESP War Thunder', sv: 'War Thunder ESP Hack' },
	'unlock-all': { en: 'War Thunder Unlock All', es: 'Unlock all War Thunder', fr: 'Unlock all War Thunder', de: 'War Thunder Unlock All', pt: 'Unlock all War Thunder', it: 'Unlock all War Thunder', nl: 'War Thunder Unlock All', pl: 'Unlock all War Thunder', ru: 'Unlock all War Thunder', tr: 'War Thunder Unlock All', ar: 'Unlock all War Thunder', ja: 'War Thunder Unlock All', ko: 'War Thunder Unlock All', zh: 'War Thunder Unlock All', hi: 'War Thunder Unlock All', id: 'Unlock all War Thunder', th: 'War Thunder Unlock All', vi: 'Unlock all War Thunder', uk: 'Unlock all War Thunder', cs: 'War Thunder Unlock All', ro: 'Unlock all War Thunder', sv: 'War Thunder Unlock All' },
};

const CTA2_HREF = {
	'war-thunder-esp': '/war-thunder-cheats/',
	'war-thunder-aimbot': '/war-thunder-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/war-thunder-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/war-thunder-cheats/',
	wallhack: '/war-thunder-esp/',
	radar: '/war-thunder-esp/',
	eac: '/updates/',
	'cheats-2026': '/war-thunder-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/war-thunder-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/war-thunder-aimbot/',
	'esp-hack': '/war-thunder-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | War Thunder Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for War Thunder Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for warthundercheats.net and War Thunder licenses.`),
		imageAlt: 'war thunder cheats',
		galleryTitle: 'war thunder cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on warthundercheats.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@warthundercheats.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
