import type { StaticImageData } from "next/image";
import { images } from "./images";

// Sample content carried over from the design canvas. Swap for a CMS or API
// once the theatre's real feeds are available.

export const site = {
  name: "Муқимий",
  fullName: "Муқимий номидаги Ўзбекистон давлат академик мусиқали театри",
  dayOff: "сешанба",
  address: {
    full: "Тошкент шаҳри, Чилонзор тумани, Маҳмуджон Ғофуров кўчаси, 187",
    short: "Тошкент, Чилонзор тумани, Маҳмуджон Ғофуров кўчаси, 187",
    street: "Чилонзор тумани, Маҳмуджон Ғофуров кўчаси, 187",
    metro: "Халқлар дўстлиги",
    landmark: "Миллий боғ",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Muqimiy+Theatre+Tashkent",
  },
  phones: [
    { label: "+998 71 245 16 33", href: "tel:+998712451633" },
    { label: "+998 90 959 34 56", href: "tel:+998909593456" },
  ],
  fax: "+998 71 245 36 55",
  email: "info@muqimiyteatr.uz",
  socials: [
    { label: "Telegram", href: "https://t.me/Muqimiyteatruz" },
    { label: "Instagram", href: "https://instagram.com/muqimiyteatruz" },
    { label: "Facebook", href: "https://facebook.com/muqimiyteatr.uz" },
  ],
};

export const nav = [
  { href: "/", label: "Бош саҳифа" },
  { href: "/repertoire", label: "Репертуар" },
  { href: "/shows", label: "Спектакллар" },
  { href: "/news", label: "Янгиликлар" },
  { href: "/team", label: "Ижодий жамоа" },
  { href: "/album", label: "Фотоальбом" },
  { href: "/contact", label: "Алоқа" },
] as const;

export type Performance = {
  date: string;
  day: string;
  time: string;
  title: string;
  author: string;
  genre: string;
};

export const repertoire = {
  month: "сентябрь",
  label: "2026 йил сентябрь",
  performances: (
    [
      ["1", "Сешанба", "18:00", "Замон Авлонийси", "Қ. Норқобил", "Драма"],
      ["2", "Чоршанба", "18:00", "Осмон ҳамма гапни эшитади", "Қ. Норқобил", "Драма"],
      ["3", "Пайшанба", "18:00", "Жадидлар", "Т. Мирзо", "Драма"],
      ["4", "Жума", "18:00", "Ҳалима", "", "—"],
      ["5", "Шанба", "18:00", "Майсара", "Х. Х. Ниёзий асари асосида Б. Ҳамроев талқини", "Комедия"],
      ["6", "Якшанба", "18:00", "Қайнона", "М. Шамхалов", "Комедия"],
      ["7", "Душанба", "18:00", "Тонгни кулиб қарши ол", "Қ. Норқобил", "Драма"],
      ["9", "Чоршанба", "18:00", "Асл хазина", "Ш. Маҳкамов", "Комедия"],
      ["10", "Пайшанба", "18:00", "Олифта", "Ф. Мусажон", "Комедия"],
      ["11", "Жума", "18:00", "Қобил ила Ҳобил", "Н. Шодмонов", "Драма"],
      ["12", "Шанба", "17:00 / 19:00", "Кампирга совчи келди", "М. Мамадалиева", "Комедия"],
      ["13", "Якшанба", "17:00 / 19:00", "Қайтар дунё", "Х. Хурсандов", "Трагик комедия"],
      ["14", "Душанба", "18:00", "Бахши", "Ш. Маҳкамов", "Драма"],
      ["16", "Чоршанба", "18:00", "Тонгни кулиб қарши ол", "Қ. Норқобил", "Драма"],
      ["17", "Пайшанба", "18:00", "Отабек ва Кумушбиби", "А. Қодирий", "Драма"],
      ["18", "Жума", "18:00", "Нодирабегим", "Т. Тўла", "Драма"],
      ["19", "Шанба", "17:00 / 19:00", "Куёвнинг омонати", "Ҳ. Расул", "Комедия"],
      ["20", "Якшанба", "17:00 / 19:00", "Майсара", "Х. Х. Ниёзий асари асосида Б. Ҳамроев талқини", "Комедия"],
      ["21", "Душанба", "18:00", "Жайдари келин", "Н. Аббосхон", "Комедия"],
      ["23", "Чоршанба", "18:00", "Аршин мололон", "У. Хожибеков", "Комедия"],
      ["24", "Пайшанба", "18:00", "Ҳаёт эшиги", "С. Сирожиддинов", "Комедия"],
      ["25", "Жума", "18:00", "Қайтар дунё", "Х. Хурсандов", "Трагик комедия"],
      ["26", "Шанба", "17:00 / 19:00", "Ақлдан озиш ҳеч гапмас", "Ш. Маҳкамов", "Комедия"],
      ["27", "Якшанба", "17:00 / 19:00", "Кампирга совчи келди", "М. Мамадалиева", "Комедия"],
      ["28", "Душанба", "18:00", "Усмон Носир", "Ж. Жовлиев", "Драма"],
      ["30", "Чоршанба", "18:00", "Замон Авлонийси", "Қ. Норқобил", "Драма"],
    ] as const
  ).map(([date, day, time, title, author, genre]): Performance => ({ date, day, time, title, author, genre })),
};

/** The four dates the home page highlights. */
export const upcomingPerformances = repertoire.performances.filter((p) =>
  ["12", "13", "14", "17"].includes(p.date),
);

export const featuredShow = {
  title: "Антиқа совчилар",
  genre: "Мусиқали комедия",
  credits: "Исфандиёр асари, О. Комилжонов мусиқаси.",
  image: images.antiqaSovchilar,
};

export type Show = { title: string; author: string; genre: string; note?: string };

export const shows: Show[] = [
  { title: "Бахши", author: "Н. Шодмонов", genre: "Драма", note: "Режиссёр Д. Ҳақбердиев, композитор О. Комилжонов." },
  { title: "Усмон Носир", author: "Ж. Жовлиев", genre: "Драма", note: "Саҳналаштирувчи режиссёр Д. Ҳақбердиев, композитор М. Бафоев." },
  { title: "Отабек ва Кумушбиби", author: "А. Қодирий", genre: "Драма", note: "Ўзбек адабиётининг машҳур романи асосида." },
  { title: "Қайтар дунё", author: "Х. Хурсандов", genre: "Трагик комедия" },
  { title: "Майсара", author: "Х. Х. Ниёзий асари асосида Б. Ҳамроев талқини", genre: "Комедия" },
  { title: "Кампирга совчи келди", author: "М. Мамадалиева", genre: "Комедия" },
  { title: "Замон Авлонийси", author: "Қ. Норқобил", genre: "Драма" },
  { title: "Жадидлар", author: "Т. Мирзо", genre: "Драма" },
  { title: "Нодирабегим", author: "Т. Тўла", genre: "Драма" },
  { title: "Аршин мололон", author: "У. Хожибеков", genre: "Комедия" },
  { title: "Олифта", author: "Ф. Мусажон", genre: "Комедия" },
  { title: "Қобил ила Ҳобил", author: "Н. Шодмонов", genre: "Драма" },
];

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
  image: StaticImageData;
  imageAlt: string;
};

export const news: NewsItem[] = [
  {
    slug: "xotira-kechasi-otkazildi",
    date: "10.10.2026",
    title: "Хотира кечаси ўтказилди",
    summary:
      "9 октябрь куни Муқимий номидаги театрда Ўзбекистонда хизмат кўрсатган артист, устоз санъаткор Равшан Солиҳов таваллудининг 80 йиллигига бағишланган хотира кечаси ўтказилди. Тадбирда маданият ва санъат вакиллари, театр жамоаси, шогирдлар ва мухлислар иштирок этди.",
    body: [
      "9 октябрь куни Муқимий номидаги Ўзбекистон давлат академик мусиқали театрида Ўзбекистонда хизмат кўрсатган артист, устоз санъаткор Равшан Солиҳов таваллудининг 80 йиллигига бағишланган хотира кечаси ўтказилди.",
      "Тадбирда маданият ва санъат соҳаси вакиллари, театр жамоаси, санъаткорнинг шогирдлари, ҳамкасблари, яқинлари ҳамда театр мухлислари иштирок этди.",
    ],
    image: images.xotiraKechasi,
    imageAlt: "Афиша: Равшан Солиҳов 80 йиллик хотира кечаси, 9 октябрь, 18:00",
  },
  {
    slug: "bugun-xotira-kechasi",
    date: "09.10.2026",
    title: "Бугун соат 18:00 да хотира кечаси",
    summary: "Барча санъат ихлосмандларини таклиф этамиз.",
    body: ["Барча санъат ихлосмандларини таклиф этамиз."],
    image: images.xotiraKechasi,
    imageAlt: "Афиша: Равшан Солиҳов 80 йиллик хотира кечаси",
  },
  {
    slug: "fotih-jalolov-direktor",
    date: "07.10.2026",
    title: "Фотих Жалолов театр директори этиб тайинланди",
    summary: "Ўзбекистон Республикасида хизмат кўрсатган артист.",
    body: ["Ўзбекистон Республикасида хизмат кўрсатган артист."],
    image: images.fotihJalolov,
    imageAlt: "Фотих Жалолов",
  },
  {
    slug: "oqituvchilar-kuni",
    date: "01.10.2026",
    title: "Ўқитувчи ва мураббийлар куни муборак",
    summary: "Театр жамоасидан барча устоз ва мураббийларга самимий табрик.",
    body: ["Театр жамоасидан барча устоз ва мураббийларга самимий табрик."],
    image: images.oqituvchilarKuni,
    imageAlt: "Ўқитувчи ва мураббийлар куни табриги",
  },
];

export type Album = {
  slug: string;
  title: string;
  photoCount: number;
  date: string;
  cover: StaticImageData;
};

export const albums: Album[] = [
  { slug: "sarviqomat-dilbarim", title: "Сарвиқомат дилбарим", photoCount: 19, date: "22.01.2019", cover: images.sahna },
  { slug: "aktyorlar-va-aktrisalar", title: "Актёрлар ва актрисалар", photoCount: 34, date: "22.01.2019", cover: images.zal },
  { slug: "tomaris", title: "Тўмарис", photoCount: 13, date: "30.10.2019", cover: images.tomoshabinlarZali },
  { slug: "biz-sogingan-qoshiqlar", title: "Биз соғинган қўшиқлар", photoCount: 7, date: "22.01.2019", cover: images.bizSoginganQoshiqlar },
  { slug: "xonuma", title: "Хонума", photoCount: 10, date: "22.01.2019", cover: images.binoKechqurun },
  { slug: "tohir-va-zuhra", title: "Тоҳир ва Зуҳра", photoCount: 31, date: "22.01.2019", cover: images.bino },
];

/** Placeholder gallery shown for every album until real photos are loaded. */
export const samplePhotos: { image: StaticImageData; alt: string }[] = [
  { image: images.sahna, alt: "Саҳнадаги спектакль" },
  { image: images.zal, alt: "Театр зали, ўймакор шифт" },
  { image: images.bizSoginganQoshiqlar, alt: "Афиша: Биз соғинган қўшиқлар" },
  { image: images.tomoshabinlarZali, alt: "Томошабинлар зали" },
  { image: images.binoKechqurun, alt: "Театр биноси кечқурун" },
  { image: images.antiqaSovchilar, alt: "Спектаклдан лавҳа" },
  { image: images.bino, alt: "Театр биноси" },
];

export const teamGroups = [
  { title: "Театр раҳбарияти", description: "Директор, бош режиссёр ва бош рассом.", href: "/team#leadership" },
  { title: "Солист вокалистлар", description: "Театр саҳнасининг етакчи овозлари.", href: "https://muqimiyteatr.uz/uz/soloist_vocalist" },
  { title: "Хор артистлари", description: "Хор жамоаси ва ансамбль ижрочилари.", href: "https://muqimiyteatr.uz/uz/choral_artist" },
  { title: "Режиссёрлар", description: "Спектаклларни саҳналаштирувчи режиссёрлар.", href: "https://muqimiyteatr.uz/uz/producer" },
  { title: "Устоз актёрлар", description: "Театрнинг тажрибали санъаткорлари.", href: "https://muqimiyteatr.uz/uz/teacher_actors" },
];

export const history = [
  {
    year: "1919",
    text: "Туркистон Халқ Комиссарлари Совети қарорига мувофиқ Карл Маркс номидаги театр труппаси ташкил қилинди.",
  },
  {
    year: "1939",
    text: "14 июлда Республика ўзбек мусиқали комедия театри ташкил қилинди. Биринчи спектакль: Ҳамзанинг «Майсаранинг иши».",
  },
  {
    year: "1940",
    text: "11 ноябрда театр Муқимий номидаги республика ўзбек мусиқали драма ва комедия театрига айлантирилди.",
  },
];

export const historyUrl = "https://muqimiyteatr.uz/uz/history";
