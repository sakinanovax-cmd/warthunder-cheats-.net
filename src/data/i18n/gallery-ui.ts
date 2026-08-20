import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'war thunder cheats',
		title: 'war thunder cheats gallery',
		subtitle: 'Simple war thunder cheats visuals — ESP, wallhack, aimbot, and radar for War Thunder on PC.',
		lead: 'War Thunder Cheats helps you spot enemy vehicles, AI units, and capture points with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'war thunder cheats esp', copy: 'See players through walls with war thunder cheats esp and wallhack overlays.' },
			{ title: 'war thunder cheats radar', copy: 'Track nearby threats with war thunder cheats radar before you push or capture point.' },
			{ title: 'war thunder cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for War Thunder battles on Windows PC.' },
		],
		updatesLabel: 'war thunder cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galería War Thunder',
		subtitle: 'Visuales de War Thunder con loadouts, peleas de escuadrón y combate battles — junto a herramientas ESP, radar y Aimbot.',
		lead: 'War Thunder Cheats está pensado para el loop BR de War Thunder: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al capture point.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Sinai y Kursk para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot War Thunder', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones War Thunder Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galerie War Thunder',
		subtitle: 'Visuels War Thunder — loadouts, combats d\'escouade et battles — avec ESP, radar et Aimbot.',
		lead: 'War Thunder Cheats suit la boucle BR de War Thunder : lire la carte, suivre les escouades, loot et survivre au capture point.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Sinai et Kursk pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot War Thunder', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour War Thunder Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder Galerie',
		subtitle: 'War Thunder-Bilder zu Loadouts, Squad-Kämpfen und battles — mit ESP, Radar und Aimbot.',
		lead: 'War Thunder Cheats passt zur Raid-Schleife von War Thunder: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Sinai und Kursk für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'War Thunder Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'War Thunder Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galeria War Thunder',
		subtitle: 'Visuais de War Thunder com loadouts, combates de esquadrão e battles — com ESP, radar e Aimbot.',
		lead: 'War Thunder Cheats segue o loop BR do War Thunder: ler o mapa, rastrear esquadrões, lootar e sobreviver ao capture point.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Sinai e Kursk para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot War Thunder', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações War Thunder Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galleria War Thunder',
		subtitle: 'Immagini War Thunder — loadout, scontri di squadra e battles — con ESP, radar e Aimbot.',
		lead: 'War Thunder Cheats è pensato per il loop BR di War Thunder: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al capture point.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Sinai e Kursk per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot War Thunder', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti War Thunder Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder galerij',
		subtitle: 'War Thunder-beelden van loadouts, squadgevechten en battles — met ESP, radar en Aimbot.',
		lead: 'War Thunder Cheats volgt de battle-loop va War Thunder: kaart lezen, vijandelijke squads volgen, looten en de capture point overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Sinai en Kursk voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'War Thunder Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'War Thunder Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galeria War Thunder',
		subtitle: 'Grafiki War Thunder — loadouty, walki drużynowe i battles — z ESP, radar i Aimbot.',
		lead: 'War Thunder Cheats pasuje do pętli BR War Thunder: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj capture point.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Sinai i Kursk dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot War Thunder', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje War Thunder Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'War Thunder Cheats',
		title: 'Галерея War Thunder',
		subtitle: 'Визуалы War Thunder — лоадауты, бои отрядов и battles — с ESP, радаром и Aimbot.',
		lead: 'War Thunder Cheats создан для рейд-циклу War Thunder: читать карту, отслеживать вражеские отряды, лут и выживать в capture point.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Sinai и Kursk для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot War Thunder', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления War Thunder Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder galerisi',
		subtitle: 'Loadout, takım savaşları ve battles görselleri — ESP, radar ve Aimbot ile.',
		lead: 'War Thunder Cheats, War Thunder BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve capture point\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Sinai ve Kursk\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'War Thunder Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'War Thunder Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'War Thunder Cheats',
		title: 'معرض War Thunder',
		subtitle: 'صور War Thunder — loadouts ومعارك الفرق وbattles — مع ESP ورادار وAimbot.',
		lead: 'War Thunder Cheats مبني لحلقة BR في War Thunder: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في capture point.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Sinai و Kursk لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot War Thunder', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات War Thunder Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのWar Thunderビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'War Thunder CheatsはWar ThunderのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてcapture pointを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'SinaiとKurskで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'War Thunderエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'War Thunder Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 War Thunder 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'War Thunder Cheats는 War Thunder BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, capture point 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Sinai와 Kursk에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'War Thunder 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'War Thunder Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder 图库',
		subtitle: 'War Thunder 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'War Thunder Cheats 为 War Thunder BR 循环设计：读图、追踪敌方小队、搜刮并在 capture point 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Sinai 和 Kursk 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'War Thunder 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'War Thunder Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder गैलरी',
		subtitle: 'Loadout, squad fights और battles visuals — ESP, radar और Aimbot के साथ।',
		lead: 'War Thunder Cheats War Thunder BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और capture point survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Sinai और Kursk पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'War Thunder Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'War Thunder Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galeri War Thunder',
		subtitle: 'Visual War Thunder — loadout, pertempuran squad, dan battles — dengan ESP, radar, dan Aimbot.',
		lead: 'War Thunder Cheats untuk loop BR War Thunder: baca peta, lacak squad musuh, loot, dan selamat di capture point.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Sinai dan Kursk untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot War Thunder', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update War Thunder Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'War Thunder Cheats',
		title: 'แกลเลอรี War Thunder',
		subtitle: 'ภาพ War Thunder — loadout การต่อสู้ทีม และ battles — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'War Thunder Cheats สำหรับลูป BR ของ War Thunder: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด capture point',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Sinai และ Kursk เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot War Thunder', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต War Thunder Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'War Thunder Cheats',
		title: 'Thư viện War Thunder',
		subtitle: 'Hình ảnh War Thunder — loadout, chiến đấu squad và battles — với ESP, radar và Aimbot.',
		lead: 'War Thunder Cheats cho vòng BR War Thunder: đọc bản đồ, theo dõi squad địch, loot và sống sót capture point.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Sinai và Kursk để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot War Thunder', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật War Thunder Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'War Thunder Cheats',
		title: 'Галерея War Thunder',
		subtitle: 'Візуали War Thunder — loadout, бої загонів і battles — з ESP, радаром і Aimbot.',
		lead: 'War Thunder Cheats для рейд-циклу War Thunder: читати карту, відстежувати ворожі загони, лут і виживати в capture point.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Sinai і Kursk для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot War Thunder', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення War Thunder Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galerie War Thunder',
		subtitle: 'War Thunder vizuály — loadouty, squad souboje a battle — s ESP, radarem a Aimbot.',
		lead: 'War Thunder Cheats pro BR smyčku War Thunder: číst mapu, sledovat nepřátelské squady, loot a přežít capture point.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Sinai a Kursk pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot War Thunder', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace War Thunder Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'War Thunder Cheats',
		title: 'Galerie War Thunder',
		subtitle: 'Vizualuri War Thunder — loadout, lupte de squad și battles — cu ESP, radar și Aimbot.',
		lead: 'War Thunder Cheats pentru bucla BR War Thunder: citește harta, urmărește squad-uri inamice, loot și supraviețuiește capture point.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Sinai și Kursk pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot War Thunder', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări War Thunder Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'War Thunder Cheats',
		title: 'War Thunder galleri',
		subtitle: 'War Thunder-bilder — loadouts, squadstrider och battles — med ESP, radar och Aimbot.',
		lead: 'War Thunder Cheats för War Thunder:s battle-loop: läs kartan, spåra fiendesquads, loota och överlev capture point.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Sinai och Kursk för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'War Thunder Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'War Thunder Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
