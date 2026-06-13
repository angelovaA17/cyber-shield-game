let currentLevel = 0;
let score = 0;
let lives = 3;
let credibility = 100;
let darkBotHP = 450; // Балансирано за 15 прашања по поглавје (15 * 30 dmg = 450)
let achievements = [];
let timeLeft = 600;
let gameInterval;
let combo = 0;
let playerName = "Студент";

// Следење на состојбата на секое поглавје
let chapterStatus = { 1: 'active', 2: 'active', 3: 'active', 4: 'active', 5: 'active' };

const levels = [
    // === ПОГЛАВЈЕ 1: КАКО НЀ ЛАЖАТ НА ИНТЕРНЕТ ===
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L1 - Чудни линкови", question: "Добиваш линк со шокантна вест, но веб-сајтот изгледа чудно (на пример: 'skopje-vesti-xyz.com'). Што правиш?", answers: ["Веднаш го споделувам на социјалните мрежи", "Не верувам слепо и проверувам дали и други големи медиуми го пишуваат истото", "Оставам лут коментар без да го отворам"], correct: 1, achievement: "🔍 Детектив за линкови" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L2 - Чувари на вести", question: "Кој одлучува кои вести ќе ги видиш на насловната страна на некој портал, а кои ќе бидат избришани?", answers: ["Уредниците на порталот (Чувари на портите)", "Самиот компјутер без никаква човечка контрола", "Министерството за култура"], correct: 0, achievement: "🚪 Специјалист за филтри" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L3 - Големо влијание", question: "Ако некоја панична вест те натера веднаш да истрчаш во маркет и да купиш 20 кила брашно, каков ефект имала таа вест?", answers: ["Никаков ефект", "Веста имала погрешен превод", "Имала директно и моќно влијание врз твоето однесување"], correct: 2, achievement: "📊 Аналитичар на ефекти" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L4 - Хиподермична игла", question: "Кога некој постар член на семејството ќе види нешто на ТВ и веднаш верува 100% без да праша ништо, ова се нарекува:", answers: ["Теорија на хиподермична игла (директно вбризгување во мозокот)", "Селективно читање", "Случајна грешка"], correct: 0, achievement: "💉 Деконструктор на стапици" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L5 - Различни мислења", question: "Зошто е важно во една држава да има многу различни независни медиуми и портали?", answers: ["За да има повеќе забавни емисии за гледање", "За да се слушнат различни мислења и да не се крие вистината", "За државата полесно да ги контролира"], correct: 1, achievement: "🏛️ Бранител на слободата" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L6 - Само мојот клуб", question: "Твој другар чита само портали што го фалат неговиот омилен фудбалски клуб, а ги игнорира сите други. Ова е:", answers: ["Селективна изложеност (си бира содржини што му одговараат)", "Масовна хипноза", "Професионално истражување"], correct: 0, achievement: "🎯 Филтер за пристрасност" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L7 - Лидери на мислење", question: "Познат инфлуенсер на Инстаграм рекламира нов крем против мозолчиња и сите млади веднаш го купуваат. Инфлуенсерот во медиумите е:", answers: ["Државен орган", "Лидер на мислење (Opinion Leader)", "Вештачка интелигенција"], correct: 1, achievement: "🗣️ Набљудувач на трендови" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L8 - Страшни серии", question: "Ако некој по цел ден гледа само црни хроники и криминални серии, па почне да се плаши да излезе на улица, тоа е ефект на:", answers: ["Култивација (ТВ програмата му ја обликува перцепцијата за реалноста)", "Чиста случајност", "Кликбејт"], correct: 0, achievement: "📺 Критичар на екрани" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L9 - Зошто користиме нет?", question: "Теоријата на 'Корист и задоволство' вели дека публиката не е глупава, туку користи социјални мрежи за да:", answers: ["Биде лесно изманипулирана од ботови", "Задоволи специфични потреби (забава, дружење, информации)", "Го троши преостанатиот интернет намерно"], correct: 1, achievement: "⚡ Активен корисник" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L10 - Главни теми", question: "Ако сите телевизии три дена по ред зборуваат само за поскапувањето на кафето, тие ја одредуваат главната тема на дискусија. Тоа се вика:", answers: ["Агенда сетинг (Аgenda setting)", "Астротурфинг", "Медиумски спин"], correct: 0, achievement: "📋 Декодер на агенди" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L11 - Знаци и Лајкови", question: "Која научна дисциплина проучува што значат знаците и симболите (на пример, зошто црвеното срце на социјалните мрежи значи поддршка)?", answers: ["Семиотика", "Психологија", "Кибернетика"], correct: 0, achievement: "🔣 Мастер за симболи" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L12 - Реклама со лага", question: "Гледаш реклама за сок каде тврдат дека е 100% здрав, но ти го вртиш пакувањето, го читаш ситниот текст и сфаќаш дека е полн со шеќер. Ти направи:", answers: ["Опозициско читање (ја одби доминантната порака со критичко размислување)", "Веднаш ја прифати пораката", "Престана да гледаш ТВ засекогаш"], correct: 0, achievement: "🛡️ Бунтовен деформатор" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L13 - Прајминг", question: "Пред да почне дебатата на ТВ, водителот те потсетува на сите стари скандали на гостинот за да те подготви како да судиш. Ова е:", answers: ["Прајминг (Priming)", "Гаслајтинг", "Кликбејт"], correct: 0, achievement: "🧠 Аналитичар на умот" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L14 - Сѐ во едно", question: "Како се нарекува спојувањето на традиционалните медиуми (радио, весник, ТВ) во еден единствен дигитален простор - твојот телефон?", answers: ["Медиумска конвергенција", "Диверзификација", "Технолошки колапс"], correct: 0, achievement: "🌐 Дигитален стратег" },
    { chapterId: 1, chapterName: "Поглавје 1: Како нѐ лажат на интернет", title: "L15 - Јавна сфера", question: "Како се нарекува просторот (денес тоа се Фејсбук, Твитер, кафулињата) каде граѓаните слободно дебатираат за проблеми и политика?", answers: ["Јавна сфера", "Приватна соба", "Државен бункер"], correct: 0, achievement: "👑 Комуникациски Оверлорд" },

    // === ПОГЛАВЈЕ 2: ФАБРИКУВАЊЕ ВЕСТИ И МЕДИУМСКИ СПИН ===
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и медиумски спин", title: "L1 - Спин стратегија", question: "Политичар е фатен како прави сообраќаен прекршок, но неговиот ПР тим веднаш објавува дека тој всушност 'тестирал безбедност на патиштата'. Ова е:", answers: ["Бришење архиви", "Класичен ПР Спин (вртење на вистината под одреден агол)", "Пишување реална вест"], correct: 1, achievement: "🌀 Разбивач на спинови" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L2 - Кликбејт стапици", question: "Наслов на портал вели: 'НЕМА ДА ВЕРУВАТЕ ШТО СЕ СЛУЧИ И ВЧЕРА ВО СКОПЈЕ! (ВИДЕО)'. Ова е:", answers: ["Сериозно истражување", "Кликбејт (Clickbait) создаден само за кликови и заработка од реклами", "Официјално соопштение"], correct: 1, achievement: "🎣 Избегнувач на јадици" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L3 - Ера на емоции", question: "Луѓето масовно споделуваат лажна вест за некоја позната личност само затоа што емотивно им се допаѓа, иако има докази дека е лага. Живееме во ера на:", answers: ["Целосна вистина", "Пост-вистина (каде емоциите се поважни од објективните факти)", "Крај на интернетот"], correct: 1, achievement: "👁️ Сидро на реалноста" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L4 - Жолт печат", question: "Кои теми најчесто доминираат во т.н. 'жолт печат' и таблоидни портали?", answers: ["Економски анализи за инфлацијата", "Трачеви, приватниот живот на познатите, сензационализам и шокантни наслови", "Научни откритија"], correct: 1, achievement: "🟡 Анти-Таблоид агент" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L5 - Моќта на парите", question: "Според Ноам Чомски, од што најмногу зависи независноста на приватните големи медиуми?", answers: ["Од желбата на новинарот", "Од парите на моќните огласувачи кои плаќаат скапи реклами", "Од бројот на лајкови"], correct: 1, achievement: "📖 Чомски аналитичар" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L6 - Претерување", question: "Паднал мал пролетен дожд во Скопје, а некој портал става наслов: 'АПОКАЛИПСА И КАТАСТРОФА ГО ПОГОДИ ГРАДОТ!'. Ова е пример за:", answers: ["Сензационализам", "Објективно известување", "Длабока научна анализа"], correct: 0, achievement: "📢 Смирувач на паника" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L7 - Врамување", question: "Два медиуми известуваат за ист протест. Едниот вели 'Хероите бараат права', а другиот 'Хулиганите прават хаос'. Ова е:", answers: ["Врамување (Framing - ставање на веста во различен ментален контекст)", "Случајна грешка во текстот", "Плурализам"], correct: 0, achievement: "🖼️ Декодер на рамки" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L8 - Лажни граѓани", question: "Некоја фирма отвора 500 лажни Фејсбук профили (ботови) за да пишуваат коментари дека нивната кампања е супер. Оваа појава се вика:", answers: ["Садење трева", "Astroturfing (вештачко креирање лажна слика дека зад нешто стои реално граѓанско движење)", "Хакирање сајтови"], correct: 1, achievement: "🌱 Разоткривач на ботови" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L9 - Напад на личност", question: "Наместо да дебатира со факти, некој медиум почнува да објавува приватни слики од професорот за да го посрамоти и да му го уништи угледот. Тоа е:", answers: ["Карактерен атентат (Character Assassination)", "Правна заштита", "Физички напад"], correct: 0, achievement: "⚔️ Штит на честа" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L10 - Точно но лажно", question: "Кога една информација содржи точни факти но тие се намерно извртени и изменети за да те заведат на погрешен заклучок, тоа е:", answers: ["Целосна лага", "Полувистина", "Апсолутна вистина"], correct: 1, achievement: "🌓 Детектор на полувистини" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L11 - Гаслајтинг", question: "Твојот омилен портал упорно ти тврди со денови дека нешто не се случило, иако ти самиот си го видел со свои очи, па почнуваш да се сомневаш во својот разум. Ова е:", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Прајминг", "Gatekeeping"], correct: 0, achievement: "🕯️ Гасач на лажни светилки" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L12 - Нема трета опција", question: "Кога некој медиум во дебата ти нуди само две екстремни решенија (Или си со нас, или си против нас!), игнорирајќи го средниот разумен пат, прави:", answers: ["Лажна дихотомија", "Објективен избор", "Плурализам"], correct: 0, achievement: "⚖️ Чувар на логиката" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L13 - Извадено од контекст", question: "Некој исекол само 3 секунди од видео на Јутјубер за да изгледа дека тој навредува некого, а го тргнал целото претходно објаснување. Ова е:", answers: ["Деконтекстуализација (Вадење од контекст)", "Врамување", "Проверка на факти"], correct: 0, achievement: "🧩 Враќач на контекстот" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L14 - Инфотејнмент", question: "Вестите на една ТВ повеќе личат на забавно шоу со смешни видеа, естрада и трачеви отколку на сериозни информации. Ова се нарекува:", answers: ["Научна програма", "Инфотејнмент (Infotainment - спој на вести и забава заради комерцијален профит)", "Државен извештај"], correct: 1, achievement: "🎬 Медиумски критичар" },
    { chapterId: 2, chapterName: "Поглавје 2: ...", title: "L15 - Ширење страв", question: "Порталите секој ден објавуваат панични наслови: 'НОВ ОПАСЕН ВИРУС СТИГНА, КУПЕТЕ ГИ ОВИЕ АПЧИЊА ВЕДНАШ!'. Оваа стратегија се вика:", answers: ["Fearmongering (Намерно ширење страв и паника за контрола и профит)", "Култивација", "Агенда сетинг"], correct: 0, achievement: "🛡️ Ум без страв" },

    // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И СОЦИЈАЛНИ МЕДИУМИ ===
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L1 - Истомисленици", question: "Кога на Фејсбук комуницираш само со луѓе кои го делат истото мислење како тебе, па почнуваш да мислиш дека сите во светот се согласуваат со тебе, ти си во:", answers: ["Аудио студио", "Ехо комора (Echo chamber)", "Интернет кафе"], correct: 1, achievement: "🚪 Рушач на ѕидови" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L2 - Филтер меур", question: "Зошто алгоритмите на Гугл или Инстаграм ти покажуваат само содржини и реклами слични на она што го пребаруваше вчера?", answers: ["Затоа што те изолираат во т.н. 'Филтер меур' (Filter bubble) прилагоден на твојот профил", "Ги бришат вирусите од твојот уред", "Носат нови пријатели од маало"], correct: 0, achievement: "🧼 Пукач на меурчиња" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L3 - FOMO ефект", question: "Кој психолошки ефект те тера постојано да го рефрешираш Инстаграм на секои 2 минути од страв да не пропуштиш некое стори или настан?", answers: ["FOMO (Fear of Missing Out - Страв дека нешто пропушташ додека си офлајн)", "Параноја", "Еуфорија"], correct: 0, achievement: "📱 Дигитален детокс" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L4 - Лутина за профит", question: "Зошто алгоритмите на социјалните мрежи најмногу ти пуштаат објави каде што луѓето се караат и се лути во коментарите?", answers: ["Затоа што луѓето се посреќни кога се караат", "Бидејќи лутината носи најголем ангажман (Engagement), што на платформите им носи профит од реклами", "Тоа е случаен софтверски баг"], correct: 1, achievement: "⚡ Смирувач на гнев" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L5 - Твоите траги", question: "Како се нарекуваат сите ваши лајкови, пребарувања, кликови и локации кои засекогаш остануваат запишани на интернет?", answers: ["Привремен код", "Дигитален отисок (Digital Footprint)", "ИД картичка"], correct: 1, achievement: "👣 Свесен за отисокот" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L6 - Пристрасен код", question: "Што е тоа 'Алгоритамска пристрасност' (Algorithmic Bias), на пример кога АИ филтрите на социјалните мрежи фаворизираат само одредени лица?", answers: ["Кога кодот рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам се гаси од жештина", "Грешка во интернетот"], correct: 0, achievement: "🤖 Ревизор на кодови" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L7 - Купени лајкови", question: "Како се нарекуваат компаниите кои продаваат илјадници лажни лајкови и следачи преку ботови за некој инфлуенсер да изгледа популарен?", answers: ["Клик-фарми", "Дата центри", "Блокчејн мрежи"], correct: 0, achievement: "🚜 Уништувач на бот-фарми" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L8 - Блок во сенка", question: "Кога Инстаграм или ТикТок дискретно ја намалува видливоста на твојот профил и твоите видеа без да те извести, тоа е:", answers: ["Shadowbanning (Блокирање во сенка)", "Траен бан", "Приватен профил"], correct: 0, achievement: "👤 Ловец на сенки" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L9 - Специфична реклама", question: "Зборуваше со другарот дека ти требаат нови патики, и по 5 минути добиваш точна реклама за тие патки на Фејсбук. Ова е:", answers: ["Психолошко микротаргетирање врз основа на твојот дигитален профил", "Рекламирање на мали производи", "Чиста магија"], correct: 0, achievement: "🎯 Снајперист за таргети" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L10 - Изборен скандал", question: "Која компанија беше во центарот на големиот скандал со крадење на приватни податоци од Фејсбук профили за влијание на избори?", answers: ["Cambridge Analytica", "Google Inc", "OpenAI"], correct: 0, achievement: "📊 Чувар на податоци" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L11 - Среќа на телефон", question: "Зошто се чувствуваш убаво кога ќе добиеш лајкови и нотификации, па сакаш уште повеќе да скролаш?", answers: ["Затоа што тие создаваат допаминска јамка на зависност во твојот мозок", "Ти го подобруваат сонот навечер", "Немаат никакво влијание врз мозокот"], correct: 0, achievement: "🧠 Допамински мастер" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L12 - Инфодемија", question: "Како се нарекува преплавеноста со илјадници точни и лажни панични вести одеднаш за време на некоја глобална криза (пр. пандемија)?", answers: ["Инфодемија", "Пандемија", "Дигитална блокада"], correct: 0, achievement: "🧪 Кризен аналитичар" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L13 - Стапици во дизајн", question: "Кога сакаш да избришеш профил, но копчето е сокриено, со најситни букви и со сива боја за да се откажеш. Тоа е пример за:", answers: ["Темни шеми (Dark Patterns) во дизајнот", "Убав кориснички интерфејс", "Отворен код"], correct: 0, achievement: "🕸️ Инспектор за стапици" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L14 - Doomscrolling", question: "Постојаното скролање низ лоши, тажни и депресивни вести на социјалните мрежи пред спиење се нарекува:", answers: ["Doomscrolling", "Брзо читање", "Медиумско опуштање"], correct: 0, achievement: "📉 Скршувач на депресија" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L15 - Бесплатни мрежи", question: "Што е главниот извор на заработка за бесплатните социјални мрежи (Фејсбук, ТикТок) на кои седиме?", answers: ["Твоето време, внимание и лични податоци кои им ги продаваат на фирми за реклами", "Месечни претплати од корисниците", "Државни донации"], correct: 0, achievement: "💰 Економист за внимание" },

    // === ПОГЛАВЈЕ 4: ПРОВЕРКА НА ФАКТИ ===
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L1 - Лага со намера", question: "Што претставува дезинформацијата на интернет?", answers: ["Обична печатна грешка на новинарот", "Намерно креирана лажна вест со цел да се измамат луѓето или да се направи штета", "Превод на текст од странски јазик"], correct: 1, achievement: "🔬 Уништувач на лаги" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L2 - Лага без намера", question: "Баба ти споделува лажна вест на нејзиниот Фејсбук профил бидејќи навистина верува дека е вистина и сака да помогне. Ова е:", answers: ["Мизинформација (споделување лага, но без лоша намера)", "Официјален државен извештај", "Злонамерен компјутерски вирус"], correct: 0, achievement: "👵 Семеен едукатор" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L3 - АИ видеа", question: "Гледаш видео каде познат политичар изговара шокантни работи, но неговата уста се движи чудно и гласот му звучи роботски. Ова е:", answers: ["Обичен филмски колаж", "Дипфејк (Deepfake) дезинформација направена со Вештачка Интелигенција", "Обична фотографија со филтер"], correct: 1, achievement: "🤖 АИ Инвестигатор" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L4 - Смешни вести", question: "Сајтови како 'Кооперација' или 'Пара вести' објавуваат измислени смешни вести. Како се вика овој хумористичен жанр?", answers: ["Државна пропаганда", "Сатира", "Официјална хроника"], correct: 1, achievement: "🎭 Детектор за иронија" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L5 - Навивачки медиум", question: "Кога еден портал известува само за успесите на една политичка партија, а ги крие сите нивни грешки, тој покажува:", answers: ["Професионализам", "Медиумска пристрасност (Media Bias)", "Апсолутна точност"], correct: 1, achievement: "⚖️ Неутрализатор на пристрасност" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L6 - Слика од минатото", question: "Објавена е слика од пожар во Скопје, но се сомневаш дека е стара. Која алатка ќе ја искористиш за да провериш?", answers: ["Обратно пребарување слики (Google Reverse Image Search)", "Фотошоп", "Инстаграм филтер"], correct: 0, achievement: "🔍 Сликовен детектив" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L7 - Скриени податоци", question: "Каде се сокриени информациите за точниот датум, час и со кој телефон е направена една дигитална слика?", answers: ["Во метаподатоците на сликата (EXIF)", "Во името на фајлот", "Никаде, тоа не постои"], correct: 0, achievement: "💾 Мета-хакер" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L8 - Прва рака", question: "Што претставува 'примарен извор' кога се проверува дали некоја сообраќајка навистина се случила?", answers: ["Трач што го прочитав на Твитер", "Оригинален документ од полицијата или изјава од сведок кој бил на лице место", "Прераскажана вест од трет сајт"], correct: 1, achievement: "📜 Проверувач на извори" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L9 - Клониран сајт", question: "Напаѓач купува домен кој изгледа како `googlee.com` или `faceebook.com` за да ти ја украде лозинката. Ова е:", answers: ["Клониран домен (Typosquatting)", "Маркетинг трик", "Официјално партнерство"], correct: 0, achievement: "🌐 Инспектор за линкови" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L10 - Синтетика", question: "Како се нарекуваат сите слики, текстови и видеа кои се целосно генерирани преку софтвер на Вештачка Интелигенција?", answers: ["Традиционални медиуми", "Синтетички медиуми", "Органски содржини"], correct: 1, achievement: "🦾 АИ Синтетичар" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L11 - Сертификат", question: "Која меѓународна организација ги проверува и сертифицира независните проверувачи на факти (Fact-checkers) во светот?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "НАТО", "УНЕСКО"], correct: 0, achievement: "🌍 Глобален проверувач" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L12 - Повеќе табови", question: "Што подразбира техниката 'Латерално читање' кога ќе отвориш сомнителен сајт?", answers: ["Читање на текстот од почеток до крај многу брзо", "Отворање нови табови на Гугл за да провериш што велат други извори за тој сајт и за таа вест", "Читање на текстот наопаку"], correct: 1, achievement: "📑 Латерален читател" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L13 - Моја вистина", question: "Веруваш во некоја лажна вест за вонземјанци само затоа што таа се совпаѓа со твоите лични теории во кои веруваш од мал. Имаш:", answers: ["Потврдувачка пристрасност (Confirmation bias)", "Критичко размислување", "Добра интуиција"], correct: 0, achievement: "🧠 Победник над егото" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L14 - Лажен скриншот", question: "Гледаш скриншот од Твитер каде познат пејач наводно напишал глупост. Како ќе провериш дали е вистински?", answers: ["Му верувам на скриншотот веднаш бидејќи има слика од него", "Проверувам на неговиот официјален профил, бидејќи скриншотот лесно се монтира преку 'Inspect Element'", "Го споделувам со пријателите"], correct: 1, achievement: "🐦 Разоткривач на твитови" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти", title: "L15 - Лажен глас", question: "АИ технологијата со која измамници можат да го клонираат гласот на твојот брат преку кратка снимка и да ти побараат пари се вика:", answers: ["Deep Voice / Гласовен клон", "Аудио Спикер", "Радио бран"], correct: 0, achievement: "🎙️ Специјалист за аудио" },

    // === ПОГЛАВЈЕ 5: КРИЗНА КОМУНИКАЦИЈА И ЕТИКА ===
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L1 - ПР во криза", question: "Се случува голем дефект во голема фабрика. Што мора да направи нивната ПР служба за да спречи паника кај граѓаните?", answers: ["Да молчи и да чека да помине кризата", "Итно, искрено и континуирано да ја информира јавноста за реалната состојба", "Да ги исклучи телефоните и сајтот"], correct: 1, achievement: "📢 Кризен лидер" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L2 - Лоши зборови", question: "Јавна комуникација на социјалните мрежи со која се поттикнува, шири или оправдува насилство и омраза кон одредена група луѓе е:", answers: ["Остра политичка критика", "Говор на омраза (Hate speech)", "Лоша филмска рецензија"], correct: 1, achievement: "🕊️ Заштитник на мирот" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L3 - Сите молчат", question: "Зошто луѓето често одбиваат да го напишат своето мислење под некој Фејсбук статус ако сите претходни коментатори мислат поинаку?", answers: ["Поради 'Спиралата на молчењето' (страв од социјална изолација и напади во коментари)", "Поради технички дефект на тастатурата", "Затоа што не ги интересира темата"], correct: 0, achievement: "🐚 Скршувач на спиралата" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L4 - Новинарски страв", question: "Кога еден новинар сам одлучува да НЕ ја објави својата точна сторија за корупција бидејќи се плаши дека газдата на медиумот ќе го избрка од работа:", answers: ["Државна цензура", "Автоцензура (Self-censorship)", "Правна уредба"], correct: 1, achievement: "🖋️ Храбар глас" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L5 - Кодекс на честа", answers: ["Брза заработка по секоја цена", "Обврската за точност, проверка на информациите од два независни извори и служење на јавноста", "Слушање на партиските наредби"], question: "Што е најважната обврска во официјалниот Етички кодекс на новинарите?", correct: 1, achievement: "👑 Врховен медиумолог" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L6 - Лага против углед", question: "Ако некој намерно измисли и објави на интернет целосна лага за тебе со цел да ти го уништи угледот пред пријателите, тој прави:", answers: ["Навреда", "Клевета (изнесување невистинити тврдења за факти)", "Правен совет"], correct: 1, achievement: "⚖️ Правен експерт" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L7 - Таен извор", question: "Кое право му дозволува на новинарот на суд да одбие да го каже името на човекот кој му го предал тајниот владин документ?", answers: ["Правото на заштита на новинарски извори", "Државна тајна", "Приватност на фирмата"], correct: 0, achievement: "🤫 Чувар на тајни" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L8 - Братска фирма", question: "Новинар пишува голема пофална вест за една фирма, намерно криејќи од јавноста дека сопственик на таа фирма е неговиот роден брат. Ова е:", answers: ["Конфликт на интереси", "Професионален развој", "Истражувачки процес"], correct: 0, achievement: "🧼 Витез на интегритетот" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L9 - Приватен разговор", question: "Кога некој политичар ти кажува важна информација во доверба, но ти вели 'Off the record'. Што значи ова?", answers: ["Може веднаш да се стави во наслов со негово име", "Информацијата служи само за да ја сфатиш позадината, но не смееш да ја објавиш или цитираш во медиум", "Тоа е сигурно лажна вест"], correct: 1, achievement: "🕵️ Таен контакт" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L10 - Стоп до утре", question: "Кога една компанија им ја дава новата вест на новинарите однапред, но со забрана да ја објават пред утре во 10 часот, таа бара:", answers: ["Ембарго за вести", "Трајна цензура", "Правна казна"], correct: 0, achievement: "⏳ Мастер за ембарга" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L11 - Уцена за пари", question: "Ако сопственик на портал му се јави на бизнисмен и му побара 5000 евра за да НЕ објави негови приватни слики, тој прави:", answers: ["Медиумски рекет и кривично дело", "Маркетинг соработка", "Спонзорство"], correct: 0, achievement: "🚨 Борец против криминал" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L12 - Избриши ме", question: "Кое право ти овозможува да побараш од Гугл да тргне некој стар и неточен напис за тебе од пред 10 години кој ти штети денес?", answers: ["Право на бесплатен интернет", "Право да бидеш заборавен (Right to be forgotten)", "Исклучување на мрежата"], correct: 1, achievement: "🧹 Дигитален бришач" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L13 - Скриена реклама", question: "Твојот омилен инфлуенсер во видеото постојано пие одреден енергетски сок, без никаде да означи дека е платен за тоа. Ова е:", answers: ["Прикриена (скриена) реклама која ги мами гледачите", "Обична препорака од срце", "Професионален совет"], correct: 0, achievement: "🕵️ Ловец на реклами" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L14 - Внимателно известување", question: "Зошто медиумите по закон не смеат со сензационалистички наслови и слики да известуваат за семејни трагедии и самоубиства?", answers: ["За да заштедат простор во весникот", "Поради ризик од поттикнување на бранови на имитација кај други ранливи луѓе (Вертеров ефект)", "Поради државни даноци"], correct: 1, achievement: "📉 Чувар на емпатијата" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L15 - Тајно снимање", question: "Кога е етички оправдано новинар да искористи скриена камера и тајно да снима некого во канцеларија?", answers: ["За забава и за лајкови на Јутјуб", "Само кога се открива голем криминал од исклучителен Јавен интерес (пр. корупција) кој не може да се докаже поинаку", "Никогаш не е оправдано"], correct: 1, achievement: "🛡️ Врховен медиумски херој" }
];

const chapterStarts = { 1: 0, 2: 15, 3: 30, 4: 45, 5: 60 };

let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
document.getElementById("highScoreValue").innerText = savedHighScore;

const introScreen = document.getElementById("intro");
const mapScreen = document.getElementById("levelSelectorPage");
const gameScreen = document.getElementById("gamePage");
const finalScreen = document.getElementById("finalScreen");
const avatar = document.getElementById("avatarSprite");

document.getElementById("startBtn").addEventListener("click", () => {
    const inputVal = document.getElementById("usernameInput").value.trim();
    if (inputVal !== "") playerName = inputVal;

    introScreen.classList.add("hidden");
    mapScreen.classList.remove("hidden");
    document.getElementById("playerGreeting").innerText = playerName;

    setupChangeUserButton();
    buildMapDashboard();
    loadComments();
    initTimer();
});

document.getElementById("backToMapBtn").addEventListener("click", () => {
    gameScreen.classList.add("hidden");
    mapScreen.classList.remove("hidden");
    buildMapDashboard();
});

// Додадено: Копче за најава како друг корисник
function setupChangeUserButton() {
    let logoutBtn = document.getElementById("changeUserBtn");
    if (!logoutBtn) {
        logoutBtn = document.createElement("button");
        logoutBtn.id = "changeUserBtn";
        logoutBtn.className = "cyber-btn";
        logoutBtn.innerText = "👥 Најави се како друг корисник";
        logoutBtn.style.marginLeft = "15px";
        logoutBtn.style.padding = "6px 14px";
        logoutBtn.style.fontSize = "13px";
        logoutBtn.style.background = "#374151";

        const greetingEl = document.getElementById("playerGreeting");
        if (greetingEl && greetingEl.parentNode) {
            greetingEl.parentNode.insertBefore(logoutBtn, greetingEl.nextSibling);
        }
    }

    logoutBtn.onclick = () => {
        mapScreen.classList.add("hidden");
        introScreen.classList.remove("hidden");
        document.getElementById("usernameInput").value = "";
    };
}

function initTimer() {
    if(gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        if (gameScreen.classList.contains("hidden")) return;
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            let currentChapterId = levels[currentLevel].chapterId;
            chapterStatus[currentChapterId] = 'failed';
            finishGame(false);
        }
    }, 1000);
}

function getLocalIndex(globalIndex) {
    let targetChapterId = levels[globalIndex].chapterId;
    let count = 0;
    for (let i = 0; i < globalIndex; i++) {
        if (levels[i].chapterId === targetChapterId) {
            count++;
        }
    }
    return count;
}

function buildMapDashboard() {
    const container = document.getElementById("chaptersContainer");
    container.innerHTML = "";

    const chapters = {};
    levels.forEach((level, index) => {
        if (!chapters[level.chapterId]) {
            chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
        }
        chapters[level.chapterId].nodes.push({ level, globalIndex: index });
    });

    for (let id in chapters) {
        const card = document.createElement("div");
        card.classList.add("chapter-card");

        const title = document.createElement("h4");
        title.innerText = chapters[id].name;
        card.appendChild(title);

        const status = chapterStatus[id];

        if (status === 'success') {
            const btnContainer = document.createElement("div");
            btnContainer.style.display = "flex";
            btnContainer.style.gap = "10px";
            btnContainer.style.marginTop = "15px";

            const successBtn = document.createElement("button");
            successBtn.className = "cyber-btn";
            successBtn.innerText = "ЗАВРШЕНО ✓";
            successBtn.style.background = "#22c55e";
            successBtn.style.color = "#ffffff";
            successBtn.style.boxShadow = "0 0 12px #22c55e";
            successBtn.style.flex = "1";
            successBtn.style.cursor = "default";

            const replayBtn = document.createElement("button");
            replayBtn.className = "cyber-btn";
            replayBtn.innerText = "ИГРАЈ ПОВТОРНО ↺";
            replayBtn.style.background = "#8b5cf6";
            replayBtn.style.flex = "1";
            replayBtn.onclick = () => { launchGameAtLevel(chapterStarts[id]); };

            btnContainer.appendChild(successBtn);
            btnContainer.appendChild(replayBtn);
            card.appendChild(btnContainer);

        } else if (status === 'failed') {
            const btnContainer = document.createElement("div");
            btnContainer.style.display = "flex";
            btnContainer.style.marginTop = "15px";

            const retryBtn = document.createElement("button");
            retryBtn.className = "cyber-btn";
            retryBtn.innerText = "ОБИДИ СЕ ПОВТОРНО ↻";
            retryBtn.style.background = "#000000";
            retryBtn.style.color = "#ef4444";
            retryBtn.style.border = "2px solid #ef4444";
            retryBtn.style.boxShadow = "0 0 15px #ef4444";
            retryBtn.style.width = "100%";
            retryBtn.style.fontWeight = "bold";
            retryBtn.onclick = () => { launchGameAtLevel(chapterStarts[id]); };

            btnContainer.appendChild(retryBtn);
            card.appendChild(btnContainer);

        } else {
            const grid = document.createElement("div");
            grid.classList.add("nodes-grid");

            chapters[id].nodes.forEach((item, localIndex) => {
                const node = document.createElement("div");
                node.classList.add("map-node");
                node.innerText = localIndex + 1;

                if (localIndex === 0) {
                    node.classList.add("active");
                    node.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
                } else {
                    node.classList.add("locked");
                }
                grid.appendChild(node);
            });
            card.appendChild(grid);
        }

        container.appendChild(card);
    }
}

function launchGameAtLevel(index) {
    currentLevel = index;
    lives = 3;
    credibility = 100;
    darkBotHP = 450;
    combo = 0;
    score = 0;

    mapScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    updateAvatarPosition();
    loadLevel();
}

function updateAvatarPosition() {
    let localIdx = getLocalIndex(currentLevel);
    let percent = (localIdx / 14) * 90;
    avatar.style.left = percent + "%";
}

function updateStats() {
    document.getElementById("lives").innerText = lives;
    document.getElementById("credibility").innerText = credibility;
    document.getElementById("scoreValue").innerText = score;
    document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
    document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
}

function loadLevel() {
    updateStats();
    let level = levels[currentLevel];
    document.getElementById("gameChapterTitle").innerText = level.chapterName;
    document.getElementById("levelTitle").innerText = level.title;
    document.getElementById("question").innerText = level.question;

    const ansDiv = document.getElementById("answers");
    ansDiv.innerHTML = "";
    level.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answerBtn");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index);
        ansDiv.appendChild(btn);
    });

    let progressPercent = Math.max(0, (darkBotHP / 450) * 100);
    document.getElementById("progressBar").style.width = progressPercent + "%";
}

function checkAnswer(selected) {
    let level = levels[currentLevel];
    const buttons = document.querySelectorAll(".answerBtn");
    buttons.forEach(btn => btn.disabled = true);

    if (selected === level.correct) {
        buttons[selected].classList.add("correct");
        combo++;
        let multiplier = combo > 1 ? combo : 1;
        score += 25 * multiplier;
        darkBotHP -= 30;
        credibility = Math.min(100, credibility + 5);
        if (!achievements.includes(level.achievement)) achievements.push(level.achievement);

        avatar.classList.add("celebrate");
        setTimeout(() => avatar.classList.remove("celebrate"), 1200);
    } else {
        buttons[selected].classList.add("wrong");
        buttons[level.correct].classList.add("correct");
        combo = 0;
        lives--;
        credibility -= 20;
    }

    updateStats();

    if (lives <= 0 || credibility <= 0) {
        let currentChapterId = levels[currentLevel].chapterId;
        chapterStatus[currentChapterId] = 'failed';

        document.getElementById("holeElement").classList.remove("hidden");
        avatar.style.left = "50%";
        setTimeout(() => {
            avatar.classList.add("fall-in-hole");
            setTimeout(() => { finishGame(false); }, 1400);
        }, 500);
        return;
    }

    document.getElementById("nextBtn").classList.remove("hidden");
}

document.getElementById("nextBtn").addEventListener("click", () => {
    let currentChapterId = levels[currentLevel].chapterId;
    document.getElementById("nextBtn").classList.add("hidden");
    currentLevel++;

    if (currentLevel < levels.length && levels[currentLevel].chapterId === currentChapterId) {
        updateAvatarPosition();
        loadLevel();
    } else {
        chapterStatus[currentChapterId] = 'success';
        finishGame(true);
    }
});

function buyItem(item) {
    if (item === 'life') {
        if (score >= 70) {
            score -= 70;
            lives++;
            alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
        } else { alert("Немате доволно поени!"); }
    } else if (item === 'credibility') {
        if (score >= 50) {
            score -= 50;
            credibility = Math.min(100, credibility + 25);
            alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
        } else { alert("Немате доволно поени!"); }
    }
    updateStats();
}

function addComment() {
    const commentInput = document.getElementById("chatComment");
    const text = commentInput.value.trim();
    if (text === "") return;
    let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
    let newComment = {
        name: playerName,
        message: text,
        time: new Date().toLocaleTimeString()
    };
    comments.push(newComment);
    localStorage.setItem("mediaGameComments", JSON.stringify(comments));
    commentInput.value = "";
    loadComments();
}

function loadComments() {
    const chatBox = document.getElementById("chatBox");
    let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];

    if(comments.length === 0) {
        comments = [
            { name: "Професор по Медиуми", message: "Одличен концепт на игра. Сега прашањата се супер разбирливи!", time: "12:30" },
            { name: "Ана (Студент)", message: "Многу позабавно е вака со примери од социјалните мрежи!", time: "14:15" }
        ];
        localStorage.setItem("mediaGameComments", JSON.stringify(comments));
    }

    chatBox.innerHTML = comments.map(c => `
        <div class="chat-msg">
            <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
        </div>
    `).join("");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function resetToMap() {
    finalScreen.classList.add("hidden");
    mapScreen.classList.remove("hidden");
    document.getElementById("holeElement").classList.add("hidden");
    avatar.classList.remove("fall-in-hole");
    buildMapDashboard();
}

function finishGame(win) {
    gameScreen.classList.add("hidden");
    mapScreen.classList.add("hidden");
    finalScreen.classList.remove("hidden");

    if (score > savedHighScore) {
        localStorage.setItem("proMediaHighScore2026", score);
        savedHighScore = score;
        document.getElementById("highScoreValue").innerText = savedHighScore;
    }

    let rank = "Медиумски Аналитичар";
    if (score >= 200) rank = "Виш Сајбер-Комуникатолог";
    if (score >= 350) rank = "Мастер на Комуникациски Науки & Специјалист по Кризен ПР 👑";
    let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });

    if (win) {
        let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
        finalScreen.innerHTML = `
            <h1 style="color: var(--success);">🏆 МОДУЛОТ Е УСПЕШНО СОВЛАДАН!</h1>
            <p>Честитки! Успешно го поминавте ова поглавје без да паднете во стапиците на дезинформациите.</p>
            
            <div class="certificate-frame" id="printableCertificate">
                <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
                <div class="sub">Овој документ официјално се доделува на:</div>
                <div class="certificate-name">${playerName}</div>
                <p>За успешно завршување на сајбер-симулацијата на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
                <p>Критички ги деконструираше сите предизвици на лажни вести, алгоритми, спинови и манипулативни ехо-комори, со ранк:</p>
                <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
                <p>Освоени поени во поглавјето: <strong>${score}</strong> | Преостанат Кредибилитет: <strong>${credibility}%</strong></p>
                
                <div class="cert-footer">
                    <div>📅 Датум: ${dateToday}</div>
                    <div>🛡️ Верификувано од: Cyber Shield Hub 2026</div>
                </div>
            </div>
            
            <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати / Зачувај го Сертификатот</button>
            <br>
            <h3>🏅 Твоите Сајбер Трофеи:</h3>
            <div style="margin: 15px 0;">${badgesHtml}</div>
            <br>
            <button onclick="resetToMap()" class="cyber-btn">ВРТИ СЕ НАЗАД КОН НИВОАТА</button>
        `;
    } else {
        finalScreen.innerHTML = `
            <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (ИГРАТА ЗАВРШИ)</h1>
            <p>Вашиот аватар пропадна во дупката на дезинформациите на DarkBot бидејќи изгубивте премногу животи.</p>
            <p>Освоивте <strong>${score}</strong> поени во ова поглавје.</p>
            <br>
            <button onclick="resetToMap()" class="cyber-btn" style="background: linear-gradient(90deg, #000, #ef4444)">ОБНОВИ СИСТЕМ (НАЗАД КОН МАПА)</button>
        `;
    }
}

setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContainer").classList.remove("hidden");
}, 1500);
