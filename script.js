// // // // // // let currentLevel = 0;
// // // // // // let score = 0;
// // // // // // let lives = 3;
// // // // // // let credibility = 100;
// // // // // // let darkBotHP = 500;
// // // // // // let achievements = [];
// // // // // // let timeLeft = 300;
// // // // // // let gameInterval;
// // // // // // let combo = 0;
// // // // // // let playerName = "Студент";
// // // // // //
// // // // // // const levels = [
// // // // // //     // Поглавје 1: Вовед во Медиумски Теории (1-5)
// // // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", question: "Познатиот теоретичар Маршал Меклуан тврди дека 'Медиумот е пораката'. Што подразбира ова во комуникациите?", answers: ["Самата содржина на веста е најважна", "Технологијата и самиот медиум кој пренесува (ТВ, Интернет) повеќе го обликуваат општеството отколку самата содржина", "Писмата се подобар медиум од социјалните мрежи"], correct: 1, achievement: "🧠 McLuhan Disciple" },
// // // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Феноменот каде уредниците и сопствениците на медиумите филтрираат кои вести ќе се објават, а кои ќе се премолчат се нарекува:", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар на информации"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
// // // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Според Харолд Ласуел, за целосно да се анализира еден комуникациски чин мора да одговориме на 5 прашања. Кое прашање се однесува на ефектот на пораката?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
// // // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ХИПОДЕРМИЧНА ИГЛА", question: "Старата теорија која смета нека масовните медиуми имаат директно, моќно и веднаш видливо влијание врз пасивната публика (како инјекција) се нарекува:", answers: ["Теорија на хиподермична игла (Магичен куршум)", "Теорија на селективно изложување", "Двостепен модел на комуникација"], correct: 0, achievement: "💉 Needle Deconstructer" },
// // // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - МЕДИУМСКИ ПЛУРАЛИЗАМ", question: "Зошто за едно демократско општество е клучно да постои 'Медиумски плурализам'?", answers: ["За да има повеќе забавни програми на ТВ", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и political ставови во јавноста", "За државата полесно да ги контролира сите новинари"], correct: 1, achievement: "🏛️ Pluralism Defender" },
// // // // // //
// // // // // //     // Поглавје 2: Манипулации, Спин и Пост-Вистина (6-10)
// // // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L6 - SPIN DOCTORING", question: "Што работат таканаречените 'Спин доктори' (Spin Doctors) во политиката и односите со јавноста?", answers: ["Лечат новинари од стрес", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Ги исклучуваат серверите на лажните медиуми"], correct: 1, achievement: "🌀 Spin Dissolver" },
// // // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L7 - КЛИКБЕЈТ АНАЛИЗА", question: "Гледаш наслов: 'НЕМА ДА ВЕРУВАТЕ ШТО СЕ СЛУЧИ: Познат пејач итно пренесен во болница!'. Кога кликнуваш, гледаш дека тој само отишол на обичен преглед. Ова е:", answers: ["Истражувачко новинарство", "Кликбејт (Clickbait) за заработка од реклами преку сензационализам", "Медиумска грешка"], correct: 1, achievement: "🎣 Hook Evader" },
// // // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L8 - ПОСТ-ВИСТИНА", question: "Живееме во ера на 'Пост-вистина' (Post-truth). Што значит овој термин во медиумите?", answers: ["Време кога лагите се забранети со закон", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Период по пропаста на печатените весници"], correct: 1, achievement: "👁️ Reality Anchored" },
// // // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L9 - ЖОЛТ ПЕЧАТ", question: "Кои се главните карактеристики на 'Жолтиот печат' (Таблоиди)?", answers: ["Објективни економски анализи со графикони", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Едукативни содржини за наука"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
// // // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L10 - ЧОМСКИ И ФИЛТРИ", question: "Според Ноам Чомски (Фабрикување согласност), медиумите не се независни бидејќи поминуваат лично низ 5 филтри. Кој е еден од најмоќните економски филтри?", answers: ["Желбата за вистина", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Бројот на вработени новинари"], correct: 1, achievement: "📖 Chomsky Analyst" },
// // // // // //
// // // // // //     // Поглавје 3: Алгоритми и Психологија на Мрежи (11-15)
// // // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L11 - ECHO CHAMBER", question: "Што се случува во дигиталните 'Ехо комори' (Echo Chambers) на социјалните мрежи?", answers: ["Корисниците слушаат аудио фајлови со ехо ефект", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Се бришат профилите со лажни имиња"], correct: 1, achievement: "🚪 Wall Breaker" },
// // // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L12 - ФИЛТЕР МЕУРЧИЊА", question: "Како алгоритмите за пребарување (пр. Google) го создаваат т.н. 'Филтер меур' (Filter Bubble)?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Го блокираат вирусот DarkBot", "Ги чистат колачињата (Cookies)"], correct: 0, achievement: "🧼 Bubble Popper" },
// // // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L13 - FOMO ЕФЕКТ", question: "Како социјалните мрежи Психолошки влијаат преку т.н. FOMO феномен?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Го зголемуваат коефициентот на интелигенција", "Овозможуваат подобра меморија"], correct: 0, achievement: "📱 Digital Detoxer" },
// // // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L14 - ВИРАЛНОСТ И ГНЕВ", question: "Зошто на социјалните мрежи најбрзо се шират објаби кои будат револт и лутина кај публиката?", answers: ["Луѓето сакаат едукација во конфликти", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Едноставна случајност"], correct: 1, achievement: "⚡ Rage Defuser" },
// // // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L15 - ДИГИТАЛЕН ОТИСОК", question: "Твоите лајкови, коментари, локации и пребарувања формираат перманентна слика за тебе на интернет наречена:", answers: ["Привремена историја", "Дигитален отисок (Digital Footprint)", "Сајбер пасош"], correct: 1, achievement: "👣 Trail Conscious" },
// // // // // //
// // // // // //     // Поглавје 4: Верификација на Факти (16-20)
// // // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L16 - ДЕЗИНФОРМАЦИЈА", question: "Која е клучната карактеристика на 'Дезинформацијата' (Disinformation)?", answers: ["Тоа е ненамерна новинарска печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Секоја вест објавена на странски медиум"], correct: 1, achievement: "🔬 Disinfo Dissector" },
// // // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L17 - МИЗИНФОРМАЦИЈА", question: "Што е тогаш 'Мизинформација' (Misinformation)?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјално медицинско истражување", "Превод на вест од англиски"], correct: 0, achievement: "👵 Family Educator" },
// // // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L18 - DEEPFAKE", question: "Ако DarkBot користи напредна невронска мрежа за да го симулира визуелно ликот и гласот на претседателот, станува збор за:", answers: ["Класичен Фотошоп", "Дипфејк (Deepfake) дезинформација", "Филтер за видео социјални платформи"], correct: 1, achievement: "🤖 AI Investigator" },
// // // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L19 - САТИРА И ПАНИКА", question: "Познат сатиричен сајт објавува измислена шега. Граѓаните ја сфаќаат сериозно како реална вест и креваат паника. Што потфрлило?", answers: ["Законот за електронски медиуми", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Серверот на веб-сајтот"], correct: 1, achievement: "🎭 Irony Detector" },
// // // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L20 - ПРИСТРАСНОСТ", question: "Кога читате вест и забележувате дека авторот користи силни емотивни епитети („срамно“, „катастрофално“) наместо неутрални факти, се соочувате со:", answers: ["Објективно новинарство", "Медиумска пристрасност (Media Bias)", "Уметнички израз"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
// // // // // //
// // // // // //     // Поглавје 5: Кризен ПР и Етика (21-25)
// // // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L21 - КРИЗЕН ПР", question: "Во Cyber City избувнува криза: главниот систем за струја паѓа поради напад. Како треба ПР службата на компанијата да реагира?", answers: ["Да ја исклучи телефонската линија и да одбие соопштенија додека не се реши дефектот", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги обвини граѓаните за претрошувачка"], correct: 1, achievement: "📢 Crisis Leader" },
// // // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L22 - ГОВОР НА ОМРАЗА", question: "Што е тоа 'Говор на омраза' (Hate Speech) на интернет?", answers: ["Секоја колумна во која се критикува работата на некој министер", "Јавна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Кога некој ќе ти пише нељубезен коментар"], correct: 1, achievement: "🕊️ Peace Advocate" },
// // // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L23 - СПИРАЛА НА МОЛЧЕЊЕТО", question: "Зошто поединецот често одлучува да го премолчи својот став на социјалните мрежи доколку забележи дека мнозинството има дијаметрално спротивно мислење?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Бидејќи нема доволно карактери на располагање", "Од мрзеливост"], correct: 0, achievement: "🐚 Spiral Breaker" },
// // // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L24 - ЦЕНЗУРА VS АВТОЦЕНЗУРА", question: "Кога самиот новинар свесно одлучува да не објави точна сторија за некој моќник од страв од губење на работното место, станува збор за:", answers: ["Државна уредба", "Автоцензура (Self-censorship)", "Новинарска солидарност"], correct: 1, achievement: "🖋️ Fearless Voice" },
// // // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L25 - ЕТИЧКИ КОДЕКС", question: "Кој е основниот врховен столб на Кодексот на етика на новинарите?", answers: ["Правото да се заработи брзо од кликови", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Лојалноста кон политичката партија"], correct: 1, achievement: "👑 Supreme Media Overlord" }
// // // // // // ];
// // // // // //
// // // // // // let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
// // // // // //
// // // // // // // Оваа линија сега работи безбедно бидејќи елементот постои во HTML
// // // // // // document.getElementById("highScoreValue").innerText = savedHighScore;
// // // // // //
// // // // // // const introScreen = document.getElementById("intro");
// // // // // // const mapScreen = document.getElementById("levelSelectorPage");
// // // // // // const gameScreen = document.getElementById("gamePage");
// // // // // // const finalScreen = document.getElementById("finalScreen");
// // // // // // const avatar = document.getElementById("avatarSprite");
// // // // // //
// // // // // // document.getElementById("startBtn").addEventListener("click", () => {
// // // // // //     const inputVal = document.getElementById("usernameInput").value.trim();
// // // // // //     if (inputVal !== "") playerName = inputVal;
// // // // // //
// // // // // //     introScreen.classList.add("hidden");
// // // // // //     mapScreen.removeParagraph = mapScreen.classList.remove("hidden");
// // // // // //     document.getElementById("playerGreeting").innerText = playerName;
// // // // // //
// // // // // //     buildMapDashboard();
// // // // // //     loadComments();
// // // // // //     initTimer();
// // // // // // });
// // // // // //
// // // // // // document.getElementById("backToMapBtn").addEventListener("click", () => {
// // // // // //     gameScreen.classList.add("hidden");
// // // // // //     mapScreen.classList.remove("hidden");
// // // // // //     buildMapDashboard();
// // // // // // });
// // // // // //
// // // // // // function initTimer() {
// // // // // //     gameInterval = setInterval(() => {
// // // // // //         if (gameScreen.classList.contains("hidden")) return;
// // // // // //         timeLeft--;
// // // // // //         document.getElementById("timer").innerText = timeLeft;
// // // // // //         if (timeLeft <= 0) finishGame(false);
// // // // // //     }, 1000);
// // // // // // }
// // // // // //
// // // // // // function buildMapDashboard() {
// // // // // //     const container = document.getElementById("chaptersContainer");
// // // // // //     container.innerHTML = "";
// // // // // //
// // // // // //     const chapters = {};
// // // // // //     levels.forEach((level, index) => {
// // // // // //         if (!chapters[level.chapterId]) {
// // // // // //             chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
// // // // // //         }
// // // // // //         chapters[level.chapterId].nodes.push({ level, globalIndex: index });
// // // // // //     });
// // // // // //
// // // // // //     for (let id in chapters) {
// // // // // //         const card = document.createElement("div");
// // // // // //         card.classList.add("chapter-card");
// // // // // //
// // // // // //         const title = document.createElement("h4");
// // // // // //         title.innerText = chapters[id].name;
// // // // // //         card.appendChild(title);
// // // // // //
// // // // // //         const grid = document.createElement("div");
// // // // // //         grid.classList.add("nodes-grid");
// // // // // //
// // // // // //         chapters[id].nodes.forEach(item => {
// // // // // //             const node = document.createElement("div");
// // // // // //             node.classList.add("map-node");
// // // // // //             node.innerText = item.globalIndex + 1;
// // // // // //
// // // // // //             if (item.globalIndex < currentLevel) {
// // // // // //                 node.classList.add("completed");
// // // // // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // // // // //             } else if (item.globalIndex === currentLevel) {
// // // // // //                 node.classList.add("active");
// // // // // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // // // // //             } else {
// // // // // //                 node.classList.add("locked");
// // // // // //             }
// // // // // //             grid.appendChild(node);
// // // // // //         });
// // // // // //         card.appendChild(grid);
// // // // // //         container.appendChild(card);
// // // // // //     }
// // // // // // }
// // // // // //
// // // // // // function launchGameAtLevel(index) {
// // // // // //     currentLevel = index;
// // // // // //     mapScreen.classList.add("hidden");
// // // // // //     gameScreen.classList.remove("hidden");
// // // // // //     updateAvatarPosition();
// // // // // //     loadLevel();
// // // // // // }
// // // // // //
// // // // // // function updateAvatarPosition() {
// // // // // //     let percent = (currentLevel / (levels.length - 1)) * 90;
// // // // // //     avatar.style.left = percent + "%";
// // // // // // }
// // // // // //
// // // // // // function updateStats() {
// // // // // //     document.getElementById("lives").innerText = lives;
// // // // // //     document.getElementById("credibility").innerText = credibility;
// // // // // //     document.getElementById("scoreValue").innerText = score;
// // // // // //     document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
// // // // // //     document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
// // // // // // }
// // // // // //
// // // // // // function loadLevel() {
// // // // // //     updateStats();
// // // // // //     let level = levels[currentLevel];
// // // // // //     document.getElementById("gameChapterTitle").innerText = level.chapterName;
// // // // // //     document.getElementById("levelTitle").innerText = level.title;
// // // // // //     document.getElementById("question").innerText = level.question;
// // // // // //
// // // // // //     const ansDiv = document.getElementById("answers");
// // // // // //     ansDiv.innerHTML = "";
// // // // // //
// // // // // //     level.answers.forEach((answer, index) => {
// // // // // //         const btn = document.createElement("button");
// // // // // //         btn.classList.add("answerBtn");
// // // // // //         btn.innerText = answer;
// // // // // //         btn.onclick = () => checkAnswer(index);
// // // // // //         ansDiv.appendChild(btn);
// // // // // //     });
// // // // // //
// // // // // //     let progressPercent = (darkBotHP / 500) * 100;
// // // // // //     document.getElementById("progressBar").style.width = progressPercent + "%";
// // // // // // }
// // // // // //
// // // // // // function checkAnswer(selected) {
// // // // // //     let level = levels[currentLevel];
// // // // // //     const buttons = document.querySelectorAll(".answerBtn");
// // // // // //     buttons.forEach(btn => btn.disabled = true);
// // // // // //
// // // // // //     if (selected === level.correct) {
// // // // // //         buttons[selected].classList.add("correct");
// // // // // //         combo++;
// // // // // //         let multiplier = combo > 1 ? combo : 1;
// // // // // //         score += 25 * multiplier;
// // // // // //         darkBotHP -= 25 * multiplier;
// // // // // //         credibility = Math.min(100, credibility + 5);
// // // // // //         if (!achievements.includes(level.achievement)) achievements.push(level.achievement);
// // // // // //
// // // // // //         avatar.classList.add("celebrate");
// // // // // //         setTimeout(() => avatar.classList.remove("celebrate"), 1200);
// // // // // //
// // // // // //     } else {
// // // // // //         buttons[selected].classList.add("wrong");
// // // // // //         buttons[level.correct].classList.add("correct");
// // // // // //         combo = 0;
// // // // // //         lives--;
// // // // // //         credibility -= 20;
// // // // // //
// // // // // //         currentLevel = Math.max(0, currentLevel - 1);
// // // // // //         setTimeout(() => { updateAvatarPosition(); }, 600);
// // // // // //     }
// // // // // //
// // // // // //     updateStats();
// // // // // //
// // // // // //     if (lives <= 0 || credibility <= 0) {
// // // // // //         document.getElementById("holeElement").classList.remove("hidden");
// // // // // //         avatar.style.left = "50%";
// // // // // //         setTimeout(() => {
// // // // // //             avatar.classList.add("fall-in-hole");
// // // // // //             setTimeout(() => { finishGame(false); }, 1400);
// // // // // //         }, 500);
// // // // // //         return;
// // // // // //     }
// // // // // //
// // // // // //     document.getElementById("nextBtn").classList.remove("hidden");
// // // // // // }
// // // // // //
// // // // // // document.getElementById("nextBtn").addEventListener("click", () => {
// // // // // //     currentLevel++;
// // // // // //     document.getElementById("nextBtn").classList.add("hidden");
// // // // // //
// // // // // //     if (currentLevel < levels.length && darkBotHP > 0) {
// // // // // //         updateAvatarPosition();
// // // // // //         loadLevel();
// // // // // //     } else {
// // // // // //         finishGame(darkBotHP <= 0 || score >= 350);
// // // // // //     }
// // // // // // });
// // // // // //
// // // // // // function buyItem(item) {
// // // // // //     if (item === 'life') {
// // // // // //         if (score >= 70) {
// // // // // //             score -= 70; lives++;
// // // // // //             alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
// // // // // //         } else { alert("❌ Немате доволно поени!"); }
// // // // // //     } else if (item === 'credibility') {
// // // // // //         if (score >= 50) {
// // // // // //             score -= 50; credibility = Math.min(100, credibility + 25);
// // // // // //             alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
// // // // // //         } else { alert("❌ Немате доволно поени!"); }
// // // // // //     }
// // // // // //     updateStats();
// // // // // // }
// // // // // //
// // // // // // function addComment() {
// // // // // //     const commentInput = document.getElementById("chatComment");
// // // // // //     const text = commentInput.value.trim();
// // // // // //     if (text === "") return;
// // // // // //
// // // // // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // // // // //     let newComment = {
// // // // // //         name: playerName,
// // // // // //         message: text,
// // // // // //         time: new Date().toLocaleTimeString()
// // // // // //     };
// // // // // //     comments.push(newComment);
// // // // // //     localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // // // // //     commentInput.value = "";
// // // // // //     loadComments();
// // // // // // }
// // // // // //
// // // // // // function loadComments() {
// // // // // //     const chatBox = document.getElementById("chatBox");
// // // // // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // // // // //
// // // // // //     if(comments.length === 0) {
// // // // // //         comments = [
// // // // // //             { name: "Професор по Медиуми", message: "Одличен концепт на игра. Ги опфаќа сите клучни дефиниции од предавањата!", time: "12:30" },
// // // // // //             { name: "Ана (Студент)", message: "Многу ми помогна да ја разберам теоријата за Спирала на молчењето!", time: "14:15" }
// // // // // //         ];
// // // // // //         localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // // // // //     }
// // // // // //
// // // // // //     chatBox.innerHTML = comments.map(c => `
// // // // // //         <div class="chat-msg">
// // // // // //             <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
// // // // // //         </div>
// // // // // //     `).join("");
// // // // // //     chatBox.scrollTop = chatBox.scrollHeight;
// // // // // // }
// // // // // //
// // // // // // function finishGame(win) {
// // // // // //     clearInterval(gameInterval);
// // // // // //     gameScreen.classList.add("hidden");
// // // // // //     mapScreen.classList.add("hidden");
// // // // // //     finalScreen.classList.remove("hidden");
// // // // // //
// // // // // //     if (score > savedHighScore) {
// // // // // //         localStorage.setItem("proMediaHighScore2026", score);
// // // // // //         savedHighScore = score;
// // // // // //     }
// // // // // //
// // // // // //     let rank = "Медиумски Аналитичар";
// // // // // //     if (score >= 450) rank = "Виш Сајбер-Комуникатолог";
// // // // // //     if (score >= 700) rank = "Мастер на Комуникациски Науки & Специјалист по Кризен ПР 👑";
// // // // // //
// // // // // //     let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });
// // // // // //
// // // // // //     if (win) {
// // // // // //         let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
// // // // // //         finalScreen.innerHTML = `
// // // // // //             <h1 style="color: var(--success);">🏆 МЕДИУМСКАТА ВОЈНА Е ДОБИЕНА!</h1>
// // // // // //             <p>Честитки! Успешно ја поминавте целата патека без да паднете во стапиците на дезинформациите.</p>
// // // // // //
// // // // // //             <div class="certificate-frame" id="printableCertificate">
// // // // // //                 <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
// // // // // //                 <div class="sub">Овој документ официјално се доделува на:</div>
// // // // // //                 <div class="certificate-name">${playerName}</div>
// // // // // //                 <p>За успешно завршување на сајбер-симулацијата на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
// // // // // //                 <p>Критички ги деконструираше сите 25 нивоа на лажни вести, алгоритми, спинови и манипулативни ехо-комори, со финална оценка и ранк:</p>
// // // // // //                 <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
// // // // // //                 <p>Освоени поени: <strong>${score}</strong> | Преостанат Кредибилитет: <strong>${credibility}%</strong></p>
// // // // // //
// // // // // //                 <div class="cert-footer">
// // // // // //                     <div>📅 Датум: ${dateToday}</div>
// // // // // //                     <div>🛡️ Верификувано од: Cyber Shield Hub 2026</div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //
// // // // // //             <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати / Зачувај го Сертификатот</button>
// // // // // //             <br>
// // // // // //             <h3>🏅 Вашите Сајбер Трофеи:</h3>
// // // // // //             <div style="margin: 15px 0;">${badgesHtml}</div>
// // // // // //             <br>
// // // // // //             <button onclick="location.reload()" class="cyber-btn">ИГРАЈ ПОВТОРНО</button>
// // // // // //         `;
// // // // // //     } else {
// // // // // //         finalScreen.innerHTML = `
// // // // // //             <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (ИГРАТА ЗАВРШИ)</h1>
// // // // // //             <p>Вашиот аватар пропадна во дупката на манипулациите и дезинформациите на DarkBot. Јавното мислење е изгубено.</p>
// // // // // //             <p>Застанавте на Ниво: <strong>${currentLevel + 1}</strong> со освоени <strong>${score}</strong> поени.</p>
// // // // // //             <br>
// // // // // //             <button onclick="location.reload()" class="cyber-btn" style="background: linear-gradient(90deg, var(--accent), #991b1b)">ОБНОВИ СИСТЕМ (РЕСТАРТ)</button>
// // // // // //         `;
// // // // // //     }
// // // // // // }
// // // // // //
// // // // // // setTimeout(() => {
// // // // // //     document.getElementById("loadingScreen").style.display = "none";
// // // // // //     document.getElementById("mainContainer").classList.remove("hidden");
// // // // // // }, 1500);
// // // // //
// // // // //
// // // // // // 🎨 ДИНАМИЧКО ДОДАВАЊЕ НА CSS СТИЛОВИ ЗА DRAG & DROP ИНТЕРФЕЈСОТ
// // // // // const dndStyles = document.createElement('style');
// // // // // dndStyles.innerHTML = `
// // // // //     .drop-target {
// // // // //         display: inline-block;
// // // // //         min-width: 150px;
// // // // //         padding: 4px 16px;
// // // // //         background: rgba(168, 85, 247, 0.1);
// // // // //         border: 2px dashed var(--primary);
// // // // //         border-radius: 8px;
// // // // //         color: #c084fc;
// // // // //         font-weight: bold;
// // // // //         margin: 0 6px;
// // // // //         text-align: center;
// // // // //         transition: all 0.3s ease;
// // // // //     }
// // // // //     .drop-target.dropped {
// // // // //         border-style: solid;
// // // // //         background: rgba(16, 185, 129, 0.2);
// // // // //         border-color: var(--success);
// // // // //         color: white;
// // // // //     }
// // // // //     .drag-item {
// // // // //         display: block;
// // // // //         width: 100%;
// // // // //         padding: 15px;
// // // // //         margin: 10px 0;
// // // // //         font-size: 15px;
// // // // //         background: #1e293b;
// // // // //         color: white;
// // // // //         border: 1px dashed var(--secondary);
// // // // //         border-radius: 10px;
// // // // //         cursor: grab;
// // // // //         text-align: left;
// // // // //         transition: all 0.2s ease;
// // // // //     }
// // // // //     .drag-item:hover {
// // // // //         background: #334155;
// // // // //         border-color: var(--primary);
// // // // //         transform: translateX(4px);
// // // // //     }
// // // // //     .drag-item:active { cursor: grabbing; }
// // // // // `;
// // // // // document.head.appendChild(dndStyles);
// // // // //
// // // // // // 🕹️ ГЛОБАЛНИ ПРОМЕНЛИВИ (ПРИЛАГОДЕНИ ЗА 75 НИВОА)
// // // // // let currentLevel = 0;
// // // // // let score = 0;
// // // // // let lives = 3;
// // // // // let credibility = 100;
// // // // // let darkBotHP = 1500; // Зголемено бидејќи има повеќе нивоа
// // // // // let achievements = [];
// // // // // let timeLeft = 900;   // Зголемено на 15 минути за целосен маратон
// // // // // let gameInterval;
// // // // // let combo = 0;
// // // // // let playerName = "Студент";
// // // // //
// // // // // // 📚 БАЗА НА ПОДАТОЦИ: 75 ПРАШАЊА (Мултиплекс + Интерактивен Drag & Drop)
// // // // // const levels = [
// // // // //     // === ПОГЛАВЈЕ 1: ТЕОРИИ НА КОМУНИКАЦИЈА (1-15) ===
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", question: "Познатиот теоретичар Маршал Меклуан тврди дека 'Медиумот е пораката'. Што подразбира ова во комуникациите?", answers: ["Самата содржина на веста е најважна", "Технологијата и самиот медиум кој пренесува (ТВ, Интернет) повеќе го обликуваат општеството отколку самата содржина", "Писмата се подобар медиум од социјалните мрежи"], correct: 1, achievement: "🧠 McLuhan Disciple" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Феноменот каде уредниците и сопствениците на медиумите филтрираат кои вести ќе се објават, а кои ќе се премолчат се нарекува:", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар на информации"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Според Харолд Ласуел, за целосно да се анализира еден комуникациски чин мора да одговориме на 5 прашања. Кое прашање се однесува на ефектот на пораката?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ХИПОДЕРМИЧНА ИГЛА", question: "Старата теорија која смета нека масовните медиуми имаат директно, моќно и веднаш видливо влијание врз пасивната публика (како инјекција) се нарекува:", answers: ["Теорија на хиподермична игла (Магичен куршум)", "Теорија на селективно изложување", "Двостепен модел на комуникација"], correct: 0, achievement: "💉 Needle Deconstructer" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - МЕДИУМСКИ ПЛУРАЛИЗАМ", question: "Зошто за едно демократско општество е клучно да постои 'Медиумски плурализам'?", answers: ["За да има повеќе забавни програми на ТВ", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и политички ставови во јавноста", "За државата полесно да ги контролира сите новинари"], correct: 1, achievement: "🏛️ Pluralism Defender" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L6 - СЕЛЕКТИВНА ИЗЛОЖЕНОСТ", question: "Кога луѓето намерно следат само медиуми кои се совпаѓаат со нивните политички уверувања, станува збор за:", answers: ["Медиумски притисок", "Селективна изложеност (Selective Exposure)", "Пасивен прием на информации"], correct: 1, achievement: "🧲 Selective Reader" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L7 - ДВОСТЕПЕН МОДЕЛ", type: "drag-drop", question: "Според двостепениот модел, пораките од медиумите прво стигнуваат до ____, а потоа тие го пренесуваат своето толкување до пошироката јавност.", answers: ["лидерите на мислење", "алгоритмите", "државните функционери"], correctText: "лидерите на мислење", achievement: "👥 Step-Two Pioneer" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L8 - КУЛТИВАЦИСКА ТЕОРИЈА", question: "Теоријата на Џорџ Гербнер која вели дека долготрајното гледање телевизија ја искривува перцепцијата за реалноста и прави луѓето да го гледаат светот како поопасен се вика:", answers: ["Утилитаристичка теорија", "Култивациска теорија (Cultivation Theory)", "Теорија на забава"], correct: 1, achievement: "📺 Cultivation Critic" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L9 - КОРИСТ И ЗАДОВОЛСТВО", question: "Теоријата на 'Употреба и задоволство' (Uses and Gratifications) тврди дека публиката е:", answers: ["Пасивна и лесно манипулативна", "Активна и свесно бира медиуми за да задоволи специфични потреби", "Целосно незаинтересирана за вести"], correct: 1, achievement: "🎯 Audience Navigator" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L10 - АГЕНДА СЕТИНГ", type: "drag-drop", question: "Кога медиумите со зачестено известување за одредена тема наметнуваат за што јавноста треба да размислува, тие применуваат ____.", answers: ["Агенда сетинг", "Кликбејт тактика", "Спирала на молчењето"], correctText: "Агенда сетинг", achievement: "📅 Agenda Decoder" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L11 - СЕМИОТИКА И ЗНАЦИ", question: "Која научна дисциплина во медиумите се занимава со проучување на знаците, симболите и начинот на кој тие креираат значење?", answers: ["Семиотика", "Кибернетика", "Психоанализа"], correct: 0, achievement: "🔣 Semiotics Scholar" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L12 - КОДИРАЊЕ И ДЕКОДИРАЊЕ", question: "Моделот на Стјуарт Хол за 'Кодирање и Декодирање' објаснува дека публиката може да ја прифати, преговара или целосно да ја:", answers: ["Избрише пораката од мрежата", "Одбие содржината преку опозициско читање", "Копира без да ја разбере"], correct: 1, achievement: "🔓 Hall Decoder" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L13 - ПРАЈМИНГ ЕФЕКТ", type: "drag-drop", question: "Процесот со кој медиумите нудат контекст кој подоцна кај луѓето активира одредени мисли и критериуми при оценување на настаните се нарекува ____.", answers: ["Прајминг (Priming)", "Врамување", "Цензура"], correctText: "Прајминг (Priming)", achievement: "🚩 Prime Mindset" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L14 - МЕДИУМСКА КОНВЕРГЕНЦИЈА", question: "Спојувањето на традиционалните медиуми (радио, печат, ТВ) во една единствена дигитална интернет платформа се дефинира како:", answers: ["Медиумска дивергенција", "Медиумска конвергенција", "Технолошка деградација"], correct: 1, achievement: "🌐 Convergence Master" },
// // // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L15 - ЈАВНА СФЕРА", question: "Кој германски филозоф го развива концептот на 'Јавна сфера' како простор каде граѓаните слободно дебатираат за општествените проблеми?", answers: ["Јирген Хабермас", "Карл Маркс", "Фридрих Ниче"], correct: 0, achievement: "🏛️ Habermas Peer" },
// // // // //
// // // // //     // === ПОГЛАВЈЕ 2: МАНИПУЛАЦИИ, СПИН И ПОСТ-ВИСТИНА (16-30) ===
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L16 - SPIN DOCTORING", question: "Што работат таканаречените 'Спин доктори' (Spin Doctors) во политиката и односите со јавноста?", answers: ["Лечат новинари од стрес", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Ги исклучуваат серверите на лажните медиуми"], correct: 1, achievement: "🌀 Spin Dissolver" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L17 - КЛИКБЕЈТ АНАЛИЗА", question: "Гледаш наслов: 'НЕМА ДА ВЕРУВАТЕ ШТО СЕ СЛУЧИ: Познат пејач итно пренесен во болница!'. Кога кликнуваш, гледаш дека тој само отишол на обичен преглед. Ова е:", answers: ["Истражувачко новинарство", "Кликбејт (Clickbait) за заработка од реклами преку сензационализам", "Медиумска грешка"], correct: 1, achievement: "🎣 Hook Evader" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L18 - ПОСТ-ВИСТИНА", question: "Живееме во ера на 'Пост-вистина' (Post-truth). Што значи овој термин во медиумите?", answers: ["Време кога лагите се забранети со закон", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Период по пропаста на печатените весници"], correct: 1, achievement: "👁️ Reality Anchored" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L19 - ЖОЛТ ПЕЧАТ", question: "Кои се главните карактеристики на 'Жолтиот печат' (Таблоиди)?", answers: ["Објективни економски анализи со графикони", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Едукативни содржини за наука"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L20 - ЧОМСКИ И ФИЛТРИ", question: "Според Ноам Чомски (Фабрикување согласност), медиумите не се независни бидејќи поминуваат низ 5 филтри. Кој е еден од најмоќните економски филтри?", answers: ["Желбата за вистина", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Бројот на вработени новинари"], correct: 1, achievement: "📖 Chomsky Analyst" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L21 - СЕНЗАЦИОНАЛИЗАМ", question: "Кога еден медиум користи претерано драматични зборови, морбидни слики и шокантни наслови за теми со ниска важност, тој користи:", answers: ["Сензационализам", "Етичко известување", "Информативен баланс"], correct: 0, achievement: "🎭 Hype Filterer" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L22 - ВРАМУВАЊЕ (FRAMING)", type: "drag-drop", question: "Процесот на селекција и нагласување на специфични аспекти од една приказна за да се наметне одредена интерпретација се вика ____.", answers: ["Врамување (Framing)", "Слободен стил", "Редакција"], correctText: "Врамување (Framing)", achievement: "🖼️ Frame Breaker" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L23 - АСТРОТУРФИНГ ТАКТИКА", question: "Што претставува ПР тактиката наречена 'Астротурфинг'?", answers: ["Истражување на вселената и сателитите", "Вештачко креирање лажна слика дека зад некоја кампања стои спонтано граѓанско движење", "Дизајн на модерни студија"], correct: 1, achievement: "🌱 Turf Exposer" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L24 - КАРАКТЕРЕН АТЕНТАТ", question: "Намерна координирана медиумска кампања насочена кон уништување на угледот и кредибилноста на одредена личност (политичар, активист) се нарекува:", answers: ["Карактерен атентат (Character Assassination)", "Објективна критика", "Профилирање"], correct: 0, achievement: "🛡️ Shield of Honor" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L25 - ПОЛУВИСТИНА", type: "drag-drop", question: "Информација која во себе содржи точен факт, но намерно е изоставен клучниот контекст за да ја доведе јавноста во заблуда, се нарекува ____.", answers: ["полувистина", "чиста лага", "аксиома"], correctText: "полувистина", achievement: "🌗 Half-Truth Seer" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L26 - МЕДИУМСКИ ГАСЛАЈТИНГ", question: "Кога манипулативни медиуми упорно и континуирано пласираат лажни информации со цел кај публиката да развијат сомнеж во сопствениот разум и меморија, тоа е:", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Сатира", "Конструктивна дебата"], correct: 0, achievement: "🕯️ Fog Clearer" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L27 - ЛАЖНА ДИХОТОМИЈА", question: "Кога во едно ТВ соочување проблемот се претставува екстремно само преку две опции (црно-бело), целосно игнорирајќи ги другите решенија, тоа е:", answers: ["Лажна дихотомија", "Експертски консензус", "Плурализам"], correct: 0, achievement: "🌈 Spectrum Analyst" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L28 - ДЕКОНТЕКСТУАЛИЗАЦИЈА", type: "drag-drop", question: "Кога намерно се користи стара фотографија или видео од минатото за да се прикаже како лажен доказ за некој тековен настан, тоа е ____.", answers: ["деконтекстуализација", "архивски сјај", "монтажа"], correctText: "деконтекстуализација", achievement: "⏳ Time Anchor" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L29 - INFOTAINMENT", question: "Каков тип на содржина претставува 'Infotainment' во современите медиуми?", answers: ["Сериозни научни истражувања", "Спој на вести и забава каде информацијата се банализира за да биде комерцијална", "Воени извештаи"], correct: 1, achievement: "🍿 Popcorn Critic" },
// // // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L30 - FEARMONGERING", question: "Стратегијата каде медиумите намерно преувеличуваат закани и опасности за да предизвикаат масовен страв и полесно да го контролираат јавното мислење се вика:", answers: ["Fearmongering (Ширење страв)", "Оптимистичко врамување", "Пацифизам"], correct: 0, achievement: "🚫 Terror Defuser" },
// // // // //
// // // // //     // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И ПСИХОЛОГИЈА НА МРЕЖИ (31-45) ===
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L31 - ECHO CHAMBER", question: "Што се случува во дигиталните 'Ехо комори' (Echo Chambers) на социјалните мрежи?", answers: ["Корисниците слушаат аудио фајлови со ехо ефект", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Се бришат профилите со лажни имиња"], correct: 1, achievement: "🚪 Wall Breaker" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L32 - ФИЛТЕР МЕУРЧИЊА", question: "Како алгоритмите за пребарување (пр. Google) го создаваат т.н. 'Филтер меур' (Filter Bubble)?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Го блокираат вирусот DarkBot", "Ги чистат колачињата (Cookies)"], correct: 0, achievement: "🧼 Bubble Popper" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L33 - FOMO ЕФЕКТ", question: "Како социјалните мрежи Психолошки влијаат преку т.н. FOMO феномен?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Го зголемуваат коефициентот на интелигенција", "Овозможуваат подобра меморија"], correct: 0, achievement: "📱 Digital Detoxer" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L34 - ВИРАЛНОСТ И ГНЕВ", question: "Зошто на социјалните мрежи најбрзо се шират објави кои будат револт и лутина кај публиката?", answers: ["Луѓето сакаат едукација во конфликти", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Едноставна случајност"], correct: 1, achievement: "⚡ Rage Defuser" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L35 - ДИГИТАЛЕН ОТИСОК", question: "Твоите лајкови, коментари, локации и пребарувања формираат перманентна слика за тебе на интернет наречена:", answers: ["Привремена историја", "Дигитален отисок (Digital Footprint)", "Сајбер пасош"], correct: 1, achievement: "👣 Trail Conscious" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L36 - АЛГОРИТМАКА ПРИСТРАСНОСТ", question: "Што подразбира терминот 'Алгоритамска пристрасност' (Algorithmic Bias)?", answers: ["Кога кодот на социјалните мрежи рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам одлучува да гласа на избори", "Вирус кој брише слики"], correct: 0, achievement: "🤖 Code Auditor" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L37 - КЛИК ФАРМИ", type: "drag-drop", question: "Организирани масовни центри со илјадници телефони кои вештачки генерираат лајкови и сообраќај се викаат ____.", answers: ["клик-фарми", "дата центри", "хакерски релеи"], correctText: "клик-фарми", achievement: "🚜 Farm Exposer" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L38 - SHADOWBANNING", question: "Кога една социјална мрежа тајно и без известување ја намалува видливоста на твоите објави за другите корисници, таа применува:", answers: ["Укинување на профил", "Shadowbanning (Блокирање во сенка)", "Премиум промоција"], correct: 1, achievement: "👻 Shadow Detector" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L39 - МИКРОТАРГЕТИРАЊЕ", question: "Што овозможува Микротаргетирањето (Microtargeting) кај политичките реклами на социјалните мрежи?", answers: ["Прикажување на иста реклама до апсолутно сите луѓе во светот", "Испорака на високо специфични, персонализирани пораки до мали групи врз основа на нивните психолошки профили", "Намалување на цената на интернетот"], correct: 1, achievement: "🎯 Precision Sniper" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L40 - CAMBRIDGE ANALYTICA", type: "drag-drop", question: "Скандалозната злоупотреба на приватни Facebook податоци за психолошко профилирање на гласачи беше извршена од компанијата ____.", answers: ["Cambridge Analytica", "Cyber Global", "OpenAI"], correctText: "Cambridge Analytica", achievement: "🕵️‍♂️ Data Whistleblower" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L41 - ДОПАМИНСКА ЈАМКА", question: "Како дизајнот на бесконечно скролање (Infinite Scroll) и нотификациите влијаат врз мозокот на корисникот?", answers: ["Создаваат допаминска јамка на зависност која те тера да останеш на апликацијата", "Го подобруваат сонот", "Ја намалуваат креативноста"], correct: 0, achievement: "🧠 Neuromaster" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L42 - ИНФОДЕМИЈА", question: "Поимот 'Инфодемија' (Infodemic) означува:", answers: ["Недостаток на интернет врска", "Прекумерно ширење и преплавеност со информации (точни и лажни) за време на некоја глобална криза", "Компјутерски вирус"], correct: 1, achievement: "🦠 Info-Vaccinated" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L43 - ТЕМНИ ШЕМИ (DARK PATTERNS)", type: "drag-drop", question: "Кориснички интерфејси намерно дизајнирани за да ве измамат да кликнете на нешто што не го сакате се викаат ____.", answers: ["темни шеми (Dark Patterns)", "про кодови", "оптимални менија"], correctText: "темни шеми (Dark Patterns)", achievement: "🕶️ Pattern Hacker" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L44 - DOOMSCROLLING", question: "Психолошката навика за постојано и долготрајно читање на лоши и депресивни вести на социјалните мрежи се нарекува:", answers: ["Doomscrolling", "Happy-clicking", "Информативен детокс"], correct: 0, achievement: "🧗‍♂️ Doom Climber" },
// // // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L45 - ЕКОНОМИЈА НА ВНИМАНИЕ", question: "Во 'Економијата на внимание' (Attention Economy), кое е главното средство со кое тргуваат социјалните мрежи за да заработат од реклами?", answers: ["Времето и вниманието на корисникот", "Квалитетот на објавените книги", "Претплатите за хардвер"], correct: 0, achievement: "💎 Attention Guard" },
// // // // //
// // // // //     // === ПОГЛАВЈЕ 4: ВЕРИФИКАЦИЈА НА ФАКТИ (46-60) ===
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L46 - ДЕЗИНФОРМАЦИЈА", question: "Која е клучната карактеристика на 'Дезинформацијата' (Disinformation)?", answers: ["Тоа е ненамерна новинарска печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Секоја вест објавена на странски медиум"], correct: 1, achievement: "🔬 Disinfo Dissector" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L47 - МИЗИНФОРМАЦИЈА", question: "Што е тогаш 'Мизинформација' (Misinformation)?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјално медицинско истражување", "Превод на вест од англиски"], correct: 0, achievement: "👵 Family Educator" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L48 - DEEPFAKE", question: "Ако DarkBot користи напредна невронска мрежа за да го симулира визуелно ликот и гласот на претседателот, станува збор за:", answers: ["Класичен Фотошоп", "Дипфејк (Deepfake) дезинформација", "Филтер за видео социјални платформи"], correct: 1, achievement: "🤖 AI Investigator" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L49 - САТИРА И ПАНИКА", question: "Познат сатиричен сајт објавува измислена шега. Граѓаните ја сфаќаат сериозно како реална вест и креваат паника. Што потфрлило?", answers: ["Законот за електронски медиуми", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Серверот на веб-сајтот"], correct: 1, achievement: "🎭 Irony Detector" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L50 - ПРИСТРАСНОСТ", question: "Кога читате вест и забележувате дека авторот користи силни емотивни епитети („срамно“, „катастрофално“) наместо неутрални факти, се соочувате со:", answers: ["Објективно новинарство", "Медиумска пристрасност (Media Bias)", "Уметнички израз"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L51 - ОБРАТНО ПРЕБАРАУВАЊЕ", question: "Која дигитална алатка (пр. Google Lens, TinEye) се користи за да се провери дали некоја слика е вистинска или пак е стара и преземена од друг настан?", answers: ["Обратно пребарување слики (Reverse Image Search)", "Филтрирање бои", "Скенирање вируси"], correct: 0, achievement: "🖼️ Image Verifier" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L52 - МЕТАПОДАТОЦИ", type: "drag-drop", question: "Скриените дигитални информации вградени во самата слика, како локација на сликање, модел на апарат и време, се викаат ____.", answers: ["метаподатоци (EXIF)", "пиксели", "воден жиг"], correctText: "метаподатоци (EXIF)", achievement: "X-Ray Metadata" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L53 - ПРИМАРЕН ИЗВОР", question: "Што е 'Примарен извор' на информација при истражувањето?", answers: ["Вест преземена од социјална мрежа на пријател", "Оригинален документ, официјална изјава или сведок кој директно присуствувал на настанот", "Коментар под некој блог"], correct: 1, achievement: "📜 Source Anchor" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L54 - TYPOSQUATTING", question: "Гледате линк од вест на домен 'bne.com' кој визуелно имитира познат медиум како 'bbc.com'. Оваа измамничка техника се вика:", answers: ["Typosquattng / Клониран домен", "Слободно преземање", "Оптимизиран сервер"], correct: 0, achievement: "🦊 Domain Watchdog" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L55 - СИНТЕТИЧКИ МЕДИУМИ", type: "drag-drop", question: "Аудио, видео или текст генерирани целосно од системи на Вештачка Интелигенција се дефинираат како ____.", answers: ["синтетички медиуми", "класични медиуми", "виртуелен печат"], correctText: "синтетички медиуми", achievement: "🤖 AI Synth Sifter" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L56 - МЕЃУНАРОДНА МРЕЖА IFCN", question: "Која организација ги сертифицира независните сервиси за проверка на факти во светот преку строг Кодекс на принципи?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "Интерпол", "Глобал ПР Алијанса"], correct: 0, achievement: "🌍 Global Checker" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L57 - ЛАТЕРАЛНО ЧИТАЊЕ", question: "Што подразбира техниката 'Латерално читање' (Lateral Reading) кај проверка на непознат веб-сајт?", answers: ["Читање на сајтот од десно на лево", "Отворање нови табови во прелистувачот за да се види што велат други независни извори за тој сајт", "Детално читање само на секцијата 'За нас'"], correct: 1, achievement: "🦀 Lateral Thinker" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L58 - POTVRDUVACKA PRISTRASNOST", type: "drag-drop", question: "Психолошката подложност да им веруваме само на вестите кои ги потврдуваат нашите претходни ставови се вика ____.", answers: ["потврдувачка пристрасност", "логика", "апатија"], correctText: "потврдувачка пристрасност", achievement: "🧠 Bias Unchainer" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L59 - СКРИНШОТ МАНИПУЛАЦИЈА", question: "Добиваш скриншот од наводен твит на премиерот кој содржи скандалозна изјава. Сликата нема линк. Како постапуваш?", answers: ["Веднаш го споделувам бидејќи скриншотот е доказ", "Проверувам на официјалниот профил и архивите дали навистина постои таков твит, бидејќи скриншотот лесно се монтира со 'Inspect Element'", "Претпоставувам дека е вистина"], correct: 1, achievement: "📸 Frame Verifier" },
// // // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L60 - ГЛАСОВЕН КЛОН", question: "Добиваш аудио снимка каде лидер на партија признава криминал. Изгледа дека гласот е негов, но звукот е чудно рамен. Постои ризик за манипулација преку:", answers: ["Deep Voice / Гласовен клон преку AI", "Старо радио", "Акустично ехо"], correct: 0, achievement: "🎙️ Sonic Sleuth" },
// // // // //
// // // // //     // === ПОГЛАВЈЕ 5: КРИЗЕН ПР И ЕТИКА (61-75) ===
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L61 - КРИЗЕН ПР", question: "Во Cyber City избувнува криза: главниот систем за струја паѓа поради напад. Како треба ПР службата на компанијата да реагира?", answers: ["Да ја исклучи телефонската линија и да одбие соопштенија додека не се реши дефектот", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги обвини граѓаните за претрошувачка"], correct: 1, achievement: "📢 Crisis Leader" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L62 - ГОВОР НА ОМРАЗА", question: "Што е тоа 'Говор на омраза' (Hate Speech) на интернет?", answers: ["Секоја колумна во која се критикува работата на некој министер", "Јавна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Кога некој ќе ти пише нељубезен коментар"], correct: 1, achievement: "🕊️ Peace Advocate" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L63 - СПИРАЛА НА МОЛЧЕЊЕТО", question: "Зошто поединецот често одлучува да го премолчи својот став на социјалните мрежи доколку забележи дека мнозинството има дијаметрално спротивно мислење?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Бидејќи нема доволно карактери на распоряжение", "Од мрзеливост"], correct: 0, achievement: "🐚 Spiral Breaker" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L64 - ЦЕНЗУРА VS АВТОЦЕНЗУРА", question: "Кога самиот новинар свесно одлучува да не објави точна сторија за некој моќник од страв од губење на работното место, станува збор за:", answers: ["Државна уредба", "Автоцензура (Self-censorship)", "Новинарска солидарност"], correct: 1, achievement: "🖋️ Fearless Voice" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L65 - ЕТИЧКИ КОДЕКС", question: "Кој е основниот врховен столб на Кодексот на етика на новинарите?", answers: ["Правото да се заработи брзо од кликови", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Лојалноста кон политичката партија"], correct: 1, achievement: "👑 Supreme Media Overlord" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L66 - КЛЕВЕТА И НАВРЕДА", question: "Која е разликата меѓу Клевета и Навреда во медиумското право?", answers: ["Нема разлика", "Навредата е омаловажувачко мислење, а клеветата е изнесување на невистинити тврдења за факти кои му штетат на угледот", "Клеветата се однесува само на пишан текст"], correct: 1, achievement: "⚖️ Legal Scholar" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L67 - ЗАШТИТА НА ИЗВОРИ", type: "drag-drop", question: "Етичкото право на новинарот пред суд да одбие да го открие идентитетот на анонимниот свиркач се нарекува ____.", answers: ["заштита на извори", "државна тајна", "дипломатски имунитет"], correctText: "заштита на извори", achievement: "🤐 Vault Keeper" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L68 - КОНФЛИКТ НА ИНТЕРЕСИ", question: "Ако еден економски новинар пишува пофални вести за компанија во која неговиот сопруг има акции, тој се наоѓа во:", answers: ["Конфликт на интереси", "Истражувачки бран", "Маркетинг соработка"], correct: 0, achievement: "🧼 Integrity Keeper" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L69 - OFF THE RECORD", question: "Што подразбира новинарското правило 'Оф-д-рекорд' (Off the record) при интервју?", answers: ["Новинарот смее да ја објави снимката на YouTube", "Информацијата служи само како позадина за разбирање на настанот, но не смее да се објави или цитира во медиумот", "Новинарот мора да му плати на изворот"], correct: 1, achievement: "🤫 Confidential Agent" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L70 - ЕМБАРГО ЗА ВЕСТИ", type: "drag-drop", question: "Договорот помеѓу изворот и медиумот една важна вест да не се објавува пред точно определено време во иднината е ____.", answers: ["ембарго за вести", "цензура", "вето"], correctText: "ембарго за вести", achievement: "⏱️ Time Lock Master" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L71 - МЕДИУМСКИ РЕКЕТ", question: "Кога сопственик на медиум му се заканува на бизнисмен дека ќе објави компромитирачки материјали доколку бизнисменот не купи скапи реклами, тоа е:", answers: ["Бизнис стратегија", "Медиумска уцена / рекет (неетичко и кривично дело)", "Слободен маркетинг"], correct: 1, achievement: "🛡️ Blackmail Buster" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L72 - ПРАВО НА ЗАБОРАВ", question: "Што е тоа 'Право на заборавеност' (Right to be forgotten) на пребарувачите во ЕУ?", answers: ["Право на граѓаните да побараат отстранување на застарени или ирелевантни лични линкови од резултатите на Google", "Право на компјутерот да ја избрише базата на податоци", "Закон против учење историја"], correct: 0, achievement: "🧼 Digital Eraser" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L73 - ПРИКРИЕНА РЕКЛАМА", type: "drag-drop", question: "Кога новинар во рамки на обичен информативен прилог намерно фали одреден производ без ознака за маркетинг, прави ____.", answers: ["прикриена реклама", "објективен тест", "креативен израз"], correctText: "прикриена реклама", achievement: "🕵️‍♂️ Stealth Detector" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L74 - ВЕРТЕРОВ ЕФЕКТ", question: "Зошто новинарите не смеат сензационалистички и детално да известуваат за начинот на извршување самоубиства?", answers: ["Поради Вертеровиот ефект (ризик од поттикнување бранови на имитација кај ранливи групи)", "Бидејќи тоа е досадно за читателите", "Поради законот за авторски права"], correct: 0, achievement: "❤️ Ethics Guardian" },
// // // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L75 - ЈАВЕН ИНТЕРЕС", question: "Кое е единственото етичко и професионално оправдување за новинарот да користи скриени камери или тајно снимање при истражување?", answers: ["Зголемување на рејтингот на емисијата", "Кога откривањето на информацијата е од исклучителен Јавен интерес (пр. корупција) а не може да се обезбеди на друг начин", "Љубопитност"], correct: 1, achievement: "👑 Supreme Media Overlord" }
// // // // // ];
// // // // //
// // // // // // 🗄️ HIGH SCORE СИСТЕМ
// // // // // let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
// // // // // document.getElementById("highScoreValue").innerText = savedHighScore;
// // // // //
// // // // // const introScreen = document.getElementById("intro");
// // // // // const mapScreen = document.getElementById("levelSelectorPage");
// // // // // const gameScreen = document.getElementById("gamePage");
// // // // // const finalScreen = document.getElementById("finalScreen");
// // // // // const avatar = document.getElementById("avatarSprite");
// // // // //
// // // // // // 🚀 СТАРТ НА КОМАНДНИОТ ЦЕНТАР
// // // // // document.getElementById("startBtn").addEventListener("click", () => {
// // // // //     const inputVal = document.getElementById("usernameInput").value.trim();
// // // // //     if (inputVal !== "") playerName = inputVal;
// // // // //
// // // // //     introScreen.classList.add("hidden");
// // // // //     mapScreen.classList.remove("hidden");
// // // // //     document.getElementById("playerGreeting").innerText = playerName;
// // // // //
// // // // //     buildMapDashboard();
// // // // //     loadComments();
// // // // //     initTimer();
// // // // // });
// // // // //
// // // // // document.getElementById("backToMapBtn").addEventListener("click", () => {
// // // // //     gameScreen.classList.add("hidden");
// // // // //     mapScreen.classList.remove("hidden");
// // // // //     buildMapDashboard();
// // // // // });
// // // // //
// // // // // // ⏱️ ТАЈМЕР СИСТЕМ
// // // // // function initTimer() {
// // // // //     gameInterval = setInterval(() => {
// // // // //         if (gameScreen.classList.contains("hidden")) return;
// // // // //         timeLeft--;
// // // // //         document.getElementById("timer").innerText = timeLeft;
// // // // //         if (timeLeft <= 0) finishGame(false);
// // // // //     }, 1000);
// // // // // }
// // // // //
// // // // // // 🗺️ ИЗГРАДБА НА МАПАТА НА НИВОА
// // // // // function buildMapDashboard() {
// // // // //     const container = document.getElementById("chaptersContainer");
// // // // //     container.innerHTML = "";
// // // // //
// // // // //     const chapters = {};
// // // // //     levels.forEach((level, index) => {
// // // // //         if (!chapters[level.chapterId]) {
// // // // //             chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
// // // // //         }
// // // // //         chapters[level.chapterId].nodes.push({ level, globalIndex: index });
// // // // //     });
// // // // //
// // // // //     for (let id in chapters) {
// // // // //         const card = document.createElement("div");
// // // // //         card.classList.add("chapter-card");
// // // // //
// // // // //         const title = document.createElement("h4");
// // // // //         title.innerText = chapters[id].name;
// // // // //         card.appendChild(title);
// // // // //
// // // // //         const grid = document.createElement("div");
// // // // //         grid.classList.add("nodes-grid");
// // // // //
// // // // //         chapters[id].nodes.forEach(item => {
// // // // //             const node = document.createElement("div");
// // // // //             node.classList.add("map-node");
// // // // //             node.innerText = item.globalIndex + 1;
// // // // //
// // // // //             if (item.globalIndex < currentLevel) {
// // // // //                 node.classList.add("completed");
// // // // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // // // //             } else if (item.globalIndex === currentLevel) {
// // // // //                 node.classList.add("active");
// // // // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // // // //             } else {
// // // // //                 node.classList.add("locked");
// // // // //             }
// // // // //             grid.appendChild(node);
// // // // //         });
// // // // //         card.appendChild(grid);
// // // // //         container.appendChild(card);
// // // // //     }
// // // // // }
// // // // //
// // // // // function launchGameAtLevel(index) {
// // // // //     currentLevel = index;
// // // // //     mapScreen.classList.add("hidden");
// // // // //     gameScreen.classList.remove("hidden");
// // // // //     updateAvatarPosition();
// // // // //     loadLevel();
// // // // // }
// // // // //
// // // // // function updateAvatarPosition() {
// // // // //     let percent = (currentLevel / (levels.length - 1)) * 90;
// // // // //     avatar.style.left = percent + "%";
// // // // // }
// // // // //
// // // // // function updateStats() {
// // // // //     document.getElementById("lives").innerText = lives;
// // // // //     document.getElementById("credibility").innerText = credibility;
// // // // //     document.getElementById("scoreValue").innerText = score;
// // // // //     document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
// // // // //     document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
// // // // // }
// // // // //
// // // // // // 🧠 УНИВЕРЗАЛЕН СИСТЕМ ЗА КРЕИРАЊЕ НИВОА (Мултипле / Drag & Drop)
// // // // // function loadLevel() {
// // // // //     updateStats();
// // // // //     let level = levels[currentLevel];
// // // // //     document.getElementById("gameChapterTitle").innerText = level.chapterName;
// // // // //     document.getElementById("levelTitle").innerText = level.title;
// // // // //
// // // // //     const questionDiv = document.getElementById("question");
// // // // //     const ansDiv = document.getElementById("answers");
// // // // //     ansDiv.innerHTML = "";
// // // // //
// // // // //     // ОПЦИЈА А: DRAG AND DROP НИВО
// // // // //     if (level.type === "drag-drop") {
// // // // //         // Креираме празно место во текстот
// // // // //         questionDiv.innerHTML = level.question.replace("____", `<span id="dropTarget" class="drop-target" ondragover="allowDrop(event)" ondrop="handleDrop(event)">【 Спушти овде 】</span>`);
// // // // //
// // // // //         level.answers.forEach(answer => {
// // // // //             const dragItem = document.createElement("div");
// // // // //             dragItem.classList.add("drag-item");
// // // // //             dragItem.innerText = answer;
// // // // //             dragItem.setAttribute("draggable", "true");
// // // // //
// // // // //             // Настани за PC Drag
// // // // //             dragItem.ondragstart = (e) => {
// // // // //                 e.dataTransfer.setData("text", answer);
// // // // //             };
// // // // //
// // // // //             // Фалбек за Мобилен (Клик-и-пушти за да нема кочење)
// // // // //             dragItem.onclick = () => {
// // // // //                 executeDragDropVerification(answer, level);
// // // // //             };
// // // // //
// // // // //             ansDiv.appendChild(dragItem);
// // // // //         });
// // // // //     }
// // // // //     // ОПЦИЈА Б: КЛАСИЧНО МУЛТИПЛЕ ЧОИС НИВО
// // // // //     else {
// // // // //         questionDiv.innerText = level.question;
// // // // //         level.answers.forEach((answer, index) => {
// // // // //             const btn = document.createElement("button");
// // // // //             btn.classList.add("answerBtn");
// // // // //             btn.innerText = answer;
// // // // //             btn.onclick = () => checkAnswer(index);
// // // // //             ansDiv.appendChild(btn);
// // // // //         });
// // // // //     }
// // // // //
// // // // //     let progressPercent = (darkBotHP / 1500) * 100;
// // // // //     document.getElementById("progressBar").style.width = progressPercent + "%";
// // // // // }
// // // // //
// // // // // // 🚏 ДРАГ И ДРОП ЛОГИКА ЗА ВЕРИФИКАЦИЈА
// // // // // function allowDrop(e) { e.preventDefault(); }
// // // // // function handleDrop(e) {
// // // // //     e.preventDefault();
// // // // //     const data = e.dataTransfer.getData("text");
// // // // //     let level = levels[currentLevel];
// // // // //     executeDragDropVerification(data, level);
// // // // // }
// // // // //
// // // // // function executeDragDropVerification(selectedText, level) {
// // // // //     const target = document.getElementById("dropTarget");
// // // // //     if (!target) return;
// // // // //
// // // // //     target.innerText = selectedText;
// // // // //     target.classList.add("dropped");
// // // // //
// // // // //     const items = document.querySelectorAll(".drag-item");
// // // // //     items.forEach(it => { it.style.pointerEvents = "none"; it.setAttribute("draggable", "false"); });
// // // // //
// // // // //     if (selectedText === level.correctText) {
// // // // //         target.style.background = "var(--success)";
// // // // //         target.style.borderColor = "var(--success)";
// // // // //         target.style.color = "white";
// // // // //         handleCorrectSequence(level);
// // // // //     } else {
// // // // //         target.style.background = "var(--accent)";
// // // // //         target.style.borderColor = "var(--accent)";
// // // // //         target.style.color = "white";
// // // // //         handleWrongSequence();
// // // // //     }
// // // // // }
// // // // //
// // // // // // 🎯 ВЕРИФИКАЦИЈА НА КЛАСИЧНИ ПРАШАЊА
// // // // // function checkAnswer(selected) {
// // // // //     let level = levels[currentLevel];
// // // // //     const buttons = document.querySelectorAll(".answerBtn");
// // // // //     buttons.forEach(btn => btn.disabled = true);
// // // // //
// // // // //     if (selected === level.correct) {
// // // // //         buttons[selected].classList.add("correct");
// // // // //         handleCorrectSequence(level);
// // // // //     } else {
// // // // //         buttons[selected].classList.add("wrong");
// // // // //         buttons[level.correct].classList.add("correct");
// // // // //         handleWrongSequence();
// // // // //     }
// // // // // }
// // // // //
// // // // // // Помошни функции за менаџирање резултат
// // // // // function handleCorrectSequence(level) {
// // // // //     combo++;
// // // // //     let multiplier = combo > 1 ? combo : 1;
// // // // //     score += 25 * multiplier;
// // // // //     darkBotHP -= 25 * multiplier;
// // // // //     credibility = Math.min(100, credibility + 5);
// // // // //     if (!achievements.includes(level.achievement)) achievements.push(level.achievement);
// // // // //
// // // // //     avatar.classList.add("celebrate");
// // // // //     setTimeout(() => avatar.classList.remove("celebrate"), 1200);
// // // // //     postAnswerCheck();
// // // // // }
// // // // //
// // // // // function handleWrongSequence() {
// // // // //     combo = 0;
// // // // //     lives--;
// // // // //     credibility -= 20;
// // // // //     currentLevel = Math.max(0, currentLevel - 1); // Враќање назад на мапата при грешка
// // // // //     setTimeout(() => { updateAvatarPosition(); }, 600);
// // // // //     postAnswerCheck();
// // // // // }
// // // // //
// // // // // function postAnswerCheck() {
// // // // //     updateStats();
// // // // //     if (lives <= 0 || credibility <= 0) {
// // // // //         document.getElementById("holeElement").classList.remove("hidden");
// // // // //         avatar.style.left = "50%";
// // // // //         setTimeout(() => {
// // // // //             avatar.classList.add("fall-in-hole");
// // // // //             setTimeout(() => { finishGame(false); }, 1400);
// // // // //         }, 500);
// // // // //         return;
// // // // //     }
// // // // //     document.getElementById("nextBtn").classList.remove("hidden");
// // // // // }
// // // // //
// // // // // document.getElementById("nextBtn").addEventListener("click", () => {
// // // // //     currentLevel++;
// // // // //     document.getElementById("nextBtn").classList.add("hidden");
// // // // //
// // // // //     if (currentLevel < levels.length && darkBotHP > 0) {
// // // // //         updateAvatarPosition();
// // // // //         loadLevel();
// // // // //     } else {
// // // // //         finishGame(darkBotHP <= 0 || currentLevel >= levels.length);
// // // // //     }
// // // // // });
// // // // //
// // // // // // 🛒 САЈБЕР ПРОДАВНИЦА ЗА ПОМОШ
// // // // // function buyItem(item) {
// // // // //     if (item === 'life') {
// // // // //         if (score >= 70) {
// // // // //             score -= 70; lives++;
// // // // //             alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
// // // // //         } else { alert("❌ Немате доволно поени!"); }
// // // // //     } else if (item === 'credibility') {
// // // // //         if (score >= 50) {
// // // // //             score -= 50; credibility = Math.min(100, credibility + 25);
// // // // //             alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
// // // // //         } else { alert("❌ Немате доволно поени!"); }
// // // // //     }
// // // // //     updateStats();
// // // // // }
// // // // //
// // // // // // 💬 КОМЕНТАРИ И СТУДЕНТСКИ ФОРУМ
// // // // // function addComment() {
// // // // //     const commentInput = document.getElementById("chatComment");
// // // // //     const text = commentInput.value.trim();
// // // // //     if (text === "") return;
// // // // //
// // // // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // // // //     let newComment = {
// // // // //         name: playerName,
// // // // //         message: text,
// // // // //         time: new Date().toLocaleTimeString()
// // // // //     };
// // // // //     comments.push(newComment);
// // // // //     localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // // // //     commentInput.value = "";
// // // // //     loadComments();
// // // // // }
// // // // //
// // // // // function loadComments() {
// // // // //     const chatBox = document.getElementById("chatBox");
// // // // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // // // //
// // // // //     if(comments.length === 0) {
// // // // //         comments = [
// // // // //             { name: "Професор по Медиуми", message: "Прекрасен симулатор! Новите 75 прашања со Drag & Drop целосно ја покриваат наставната програма.", time: "12:30" },
// // // // //             { name: "Ана (Студент)", message: "Предизвикот со 75 нивоа е огромен, но ПР модулите во продавницата спасуваат живот!", time: "14:15" }
// // // // //         ];
// // // // //         localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // // // //     }
// // // // //
// // // // //     chatBox.innerHTML = comments.map(c => `
// // // // //         <div class="chat-msg">
// // // // //             <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
// // // // //         </div>
// // // // //     `).join("");
// // // // //     chatBox.scrollTop = chatBox.scrollHeight;
// // // // // }
// // // // //
// // // // // // 🏆 ФИНАЛЕ НА ИГРАТА & СЕРТИФИКАТ
// // // // // function finishGame(win) {
// // // // //     clearInterval(gameInterval);
// // // // //     gameScreen.classList.add("hidden");
// // // // //     mapScreen.classList.add("hidden");
// // // // //     finalScreen.classList.remove("hidden");
// // // // //
// // // // //     if (score > savedHighScore) {
// // // // //         localStorage.setItem("proMediaHighScore2026", score);
// // // // //         savedHighScore = score;
// // // // //     }
// // // // //
// // // // //     let rank = "Медиумски Специјалист";
// // // // //     if (score >= 800) rank = "Виртуозен Дигитален Комуникатолог 🌟";
// // // // //     if (score >= 1500) rank = "Врховен Мастер на Медиумски Науки & Експерт за Кризен ПР 👑";
// // // // //
// // // // //     let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });
// // // // //
// // // // //     if (win) {
// // // // //         let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
// // // // //         finalScreen.innerHTML = `
// // // // //             <h1 style="color: var(--success);">🏆 СИСТЕМСКА ПОБЕДА! DARK BOT Е СОВЛАДАН!</h1>
// // // // //             <p>Честитки! Успешно се изборивте со инфодемијата низ сите 75 интерактивни стапици.</p>
// // // // //
// // // // //             <div class="certificate-frame" id="printableCertificate">
// // // // //                 <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
// // // // //                 <div class="sub">Овој документ официјално се доделува на:</div>
// // // // //                 <div class="certificate-name">${playerName}</div>
// // // // //                 <p>За успешно завршување на напредниот сајбер-курс на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
// // // // //                 <p>Критички ги анализираше и деконструираше сите 75 нивоа на лажни вести, алгоритми, ехо-комори и кризни ПР манипулации, стекнувајќи се со ранк:</p>
// // // // //                 <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
// // // // //                 <p>Освоени поени: <strong>${score}</strong> | Преостаната Медиумска Писменост: <strong>${credibility}%</strong></p>
// // // // //
// // // // //                 <div class="cert-footer">
// // // // //                     <div>📅 Датум: ${dateToday}</div>
// // // // //                     <div>🛡️ Верификација: Cyber Shield Hub [2026-PRO]</div>
// // // // //                 </div>
// // // // //             </div>
// // // // //
// // // // //             <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати го Сертификатот</button>
// // // // //             <br>
// // // // //             <h3>🏅 Вашите Отклучени Сајбер Трофеи (${achievements.length}):</h3>
// // // // //             <div style="margin: 15px 0;">${badgesHtml}</div>
// // // // //             <br>
// // // // //             <button onclick="location.reload()" class="cyber-btn">ИГРАЈ ПОВТОРНО</button>
// // // // //         `;
// // // // //     } else {
// // // // //         finalScreen.innerHTML = `
// // // // //             <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (ИГРАТА ЗАВРШИ)</h1>
// // // // //             <p>Вашиот аватар подлегна под лагите на пропагандата на DarkBot. Системот е компромитиран.</p>
// // // // //             <p>Паднавте на Ниво: <strong>${currentLevel + 1}</strong> со освоени <strong>${score}</strong> поени.</p>
// // // // //             <br>
// // // // //             <button onclick="location.reload()" class="cyber-btn" style="background: linear-gradient(90deg, var(--accent), #991b1b)">ОБНОВИ МЕДИУМСКИ СТАТУС (РЕСТАРТ)</button>
// // // // //         `;
// // // // //     }
// // // // // }
// // // // //
// // // // // // Излегување од loading скрин
// // // // // setTimeout(() => {
// // // // //     document.getElementById("loadingScreen").style.display = "none";
// // // // //     document.getElementById("mainContainer").classList.remove("hidden");
// // // // // }, 1500);
// // // //
// // // //
// // // // // 🌀 НАПРЕДНИ ПОЛУ-3D НЕОН СТИЛОВИ ЗА ИНТЕРАКТИВНИОТ DRAG & DROP
// // // // const dndStyles = document.createElement('style');
// // // // dndStyles.innerHTML = `
// // // //     .drop-target {
// // // //         display: inline-block;
// // // //         min-width: 180px;
// // // //         padding: 6px 20px;
// // // //         background: rgba(15, 23, 42, 0.8);
// // // //         border: 2px dashed var(--primary);
// // // //         border-radius: 12px;
// // // //         color: #c084fc;
// // // //         font-weight: bold;
// // // //         margin: 0 8px;
// // // //         text-align: center;
// // // //         box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.9), 0 0 10px rgba(168, 85, 247, 0.2);
// // // //         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //         transform: translateY(2px);
// // // //     }
// // // //     .drop-target.dropped {
// // // //         border-style: solid;
// // // //         background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.4));
// // // //         border-color: var(--success);
// // // //         color: #10b981;
// // // //         box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
// // // //         transform: translateY(0px);
// // // //     }
// // // //     .drag-item {
// // // //         display: block;
// // // //         width: 100%;
// // // //         padding: 16px;
// // // //         margin: 12px 0;
// // // //         font-size: 15px;
// // // //         background: linear-gradient(135deg, #1e293b, #0f172a);
// // // //         color: #e2e8f0;
// // // //         border: 1px solid rgba(99, 102, 241, 0.4);
// // // //         border-radius: 14px;
// // // //         cursor: grab;
// // // //         text-align: left;
// // // //         box-shadow: 0 6px 0px #0f172a, 0 8px 16px rgba(0, 0, 0, 0.6);
// // // //         transition: all 0.2s ease;
// // // //         position: relative;
// // // //     }
// // // //     .drag-item:hover {
// // // //         background: linear-gradient(135deg, #2563eb, var(--primary));
// // // //         border-color: var(--primary);
// // // //         color: white;
// // // //         transform: translateY(-3px);
// // // //         box-shadow: 0 9px 0px #1e1b4b, 0 12px 20px rgba(168, 85, 247, 0.4);
// // // //     }
// // // //     .drag-item:active {
// // // //         cursor: grabbing;
// // // //         transform: translateY(3px);
// // // //         box-shadow: 0 3px 0px #0f172a, 0 4px 8px rgba(0, 0, 0, 0.4);
// // // //     }
// // // // `;
// // // // document.head.appendChild(dndStyles);
// // // //
// // // // // 🕹️ ГЛОБАЛНИ ПРОМЕНЛИВИ
// // // // let currentLevel = 0;
// // // // let score = 0;
// // // // let lives = 3; // Максимум 3 дозволени грешки во играта
// // // // let credibility = 100;
// // // // let darkBotHP = 1500;
// // // // let achievements = [];
// // // // let timeLeft = 900;
// // // // let gameInterval;
// // // // let combo = 0;
// // // // let playerName = "Студент";
// // // //
// // // // // 📚 БАЗА НА ПОДАТОЦИ: 75 ПРАШАЊА (Со зголемен број на 3D Drag & Drop модули)
// // // // const levels = [
// // // //     // === ПОГЛАВЈЕ 1: ТЕОРИИ НА КОМУНИКАЦИЈА (1-15) ===
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", type: "drag-drop", question: "Познатиот теоретичар Маршал Меклуан тврди дека самите технологии кои пренесуваат информации се поважни од содржината, односно за него ____.", answers: ["Медиумот е пораката", "Содржината е крал", "Интернетот е изолиран"], correctText: "Медиумот е пораката", achievement: "🧠 McLuhan Disciple" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Феноменот каде уредниците и сопствениците на медиумите филтрираат кои вести ќе се објават, а кои ќе се премолчат се нарекува:", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар на информации"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Според Харолд Ласуел, за целосно да се анализира еден комуникациски чин мора да одговориме на 5 прашања. Кое прашање се однесува на ефектот на пораката?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ХИПОДЕРМИЧНА ИГЛА", type: "drag-drop", question: "Старата теорија која смета дека масовните медиуми убризгуваат пораки директно во умот на пасивната публика се нарекува Теорија на ____.", answers: ["хиподермична игла", "селективно изложување", "дигитален пасош"], correctText: "хиподермична игла", achievement: "💉 Needle Deconstructer" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - МЕДИУМСКИ ПЛУРАЛИЗАМ", question: "Зошто за едно демократско општество е клучно да постои 'Медиумски плурализам'?", answers: ["За да има повеќе забавни програми на ТВ", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и политички ставови во јавноста", "За државата полесно да ги контролира сите новинари"], correct: 1, achievement: "🏛️ Pluralism Defender" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L6 - СЕЛЕКТИВНА ИЗЛОЖЕНОСТ", question: "Кога луѓето намерно следат само медиуми кои се совпаѓаат со нивните политички уверувања, станува збор за:", answers: ["Медиумски притисок", "Селективна изложеност (Selective Exposure)", "Пасивен прием на информации"], correct: 1, achievement: "🧲 Selective Reader" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L7 - ДВОСТЕПЕН МОДЕЛ", type: "drag-drop", question: "Според двостепениот модел, пораките од медиумите прво стигнуваат до ____, а потоа тие го пренесуваат своето толкување до јавноста.", answers: ["лидерите на мислење", "алгоритмите", "државните функционери"], correctText: "лидерите на мислење", achievement: "👥 Step-Two Pioneer" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L8 - КУЛТИВАЦИСКА ТЕОРИЈА", question: "Теоријата на Џорџ Гербнер која вели дека долготрајното гледање телевизија ја искривува перцепцијата за реалноста и прави луѓето да го гледаат светот како поопасен се вика:", answers: ["Утилитаристичка теорија", "Култивациска теорија (Cultivation Theory)", "Теорија на забава"], correct: 1, achievement: "📺 Cultivation Critic" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L9 - КОРИСТ И ЗАДОВОЛСТВО", question: "Теоријата на 'Употреба и задоволство' (Uses and Gratifications) тврди дека публиката е:", answers: ["Пасивна и лесно манипулативна", "Активна и свесно бира медиуми за да задоволи специфични потреби", "Целосно незаинтересирана за вести"], correct: 1, achievement: "🎯 Audience Navigator" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L10 - АГЕНДА СЕТИНГ", type: "drag-drop", question: "Кога медиумите со зачестено известување за одредена тема наметнуваат за што јавноста треба да размислува, тие применуваат ____.", answers: ["Агенда сетинг", "Кликбејт тактика", "Спирала на молчењето"], correctText: "Агенда сетинг", achievement: "📅 Agenda Decoder" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L11 - СЕМИОТИКА И ЗНАЦИ", question: "Која научна дисциплина во медиумите се занимава со проучување на знаците, симболите и начинот на кој тие креираат значење?", answers: ["Семиотика", "Кибернетика", "Психоанализа"], correct: 0, achievement: "🔣 Semiotics Scholar" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L12 - КОДИРАЊЕ И ДЕКОДИРАЊЕ", question: "Моделот на Стјуарт Хол за 'Кодирање и Декодирање' објаснува дека публиката може да ја прифати, преговара или целосно да ја:", answers: ["Избрише пораката од мрежата", "Одбие содржината преку опозициско читање", "Копира без да ја разбере"], correct: 1, achievement: "🔓 Hall Decoder" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L13 - ПРАЈМИНГ ЕФЕКТ", type: "drag-drop", question: "Процесот со кој медиумите нудат контекст кој подоцна кај луѓето активира одредени критериуми при оценување на настаните се нарекува ____.", answers: ["Прајминг (Priming)", "Врамување", "Цензура"], correctText: "Прајминг (Priming)", achievement: "🚩 Prime Mindset" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L14 - МЕДИУМСКА КОНВЕРГЕНЦИЈА", question: "Спојувањето на традиционалните медиуми (радио, печат, ТВ) во една единствена дигитална интернет платформа се дефинира како:", answers: ["Медиумска дивергенција", "Медиумска конвергенција", "Технолошка деградација"], correct: 1, achievement: "🌐 Convergence Master" },
// // // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L15 - ЈАВНА СФЕРА", question: "Кој германски филозоф го развива концептот на 'Јавна сфера' кога граѓаните слободно дебатираат за општествените проблеми?", answers: ["Јирген Хабермас", "Karl Marx", "Friedrich Nietzsche"], correct: 0, achievement: "🏛️ Habermas Peer" },
// // // //
// // // //     // === ПОГЛАВЈЕ 2: МАНИПУЛАЦИИ, СПИН И ПОСТ-ВИСТИНА (16-30) ===
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L16 - SPIN DOCTORING", question: "Што работат таканаречените 'Спин доктори' (Spin Doctors) во политиката и односите со јавноста?", answers: ["Лечат новинари од стрес", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Ги исклучуваат серверите на лажните медиуми"], correct: 1, achievement: "🌀 Spin Dissolver" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L17 - КЛИКБЕЈТ АНАЛИЗА", type: "drag-drop", question: "Насловите кои вештачки користат шокантни фрази само за да изнудат клик кај корисниците се дефинираат како ____.", answers: ["кликбејт (Clickbait)", "истражувачки стории", "објективни вести"], correctText: "кликбејт (Clickbait)", achievement: "🎣 Hook Evader" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L18 - ПОСТ-ВИСТИНА", question: "Живееме во ера на 'Пост-вистина' (Post-truth). Што значи овој термин во медиумите?", answers: ["Време кога лагите се забранети со закон", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Период по пропаста на весниците"], correct: 1, achievement: "👁️ Reality Anchored" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L19 - ЖОЛТ ПЕЧАТ", question: "Кои се главните карактеристики на 'Жолтиот печат' (Таблоиди)?", answers: ["Објективни економски анализи со графикони", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Едукативни содржини за наука"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L20 - ЧОМСКИ И ФИЛТРИ", question: "Според Ноам Чомски (Фабрикување согласност), медиумите не се независни бидејќи поминуваат низ 5 филтри. Кој е еден од најмоќните економски филтри?", answers: ["Желбата за вистина", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Бројот на вработени новинари"], correct: 1, achievement: "📖 Chomsky Analyst" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L21 - СЕНЗАЦИОНАЛИЗАМ", question: "Кога еден медиум користи претерано драматични зборови, морбидни слики и шокантни наслови за теми со ниска важност, тој користи:", answers: ["Сензационализам", "Етичко известување", "Информативен баланс"], correct: 0, achievement: "🎭 Hype Filterer" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L22 - ВРАМУВАЊЕ (FRAMING)", type: "drag-drop", question: "Процесот на селекција и нагласување на специфични аспекти од една приказна за да се наметне одредена интерпретација се вика ____.", answers: ["Врамување (Framing)", "Слободен стил", "Редакција"], correctText: "Врамување (Framing)", achievement: "🖼️ Frame Breaker" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L23 - АСТРОТУРФИНГ ТАКТИКА", question: "Што претставува ПР тактиката наречена 'Астротурфинг'?", answers: ["Истражување на вселената и сателитите", "Вештачко креирање лажна слика дека зад некоја кампања стои спонтано граѓанско движење", "Дизајн на модерни студија"], correct: 1, achievement: "🌱 Turf Exposer" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L24 - КАРАКТЕРЕН АТЕНТАТ", question: "Намерна координирана медиумска кампања насочена кон уништување на угледот и кредибилноста на одредена личност (политичар, активист) се нарекува:", answers: ["Карактерен атентат (Character Assassination)", "Објективна критика", "Профилирање"], correct: 0, achievement: "🛡️ Shield of Honor" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L25 - ПОЛУВИСТИНА", type: "drag-drop", question: "Информација која во себе содржи точен факт, но намерно е изоставен клучниот контекст за да ја доведе јавноста во заблуда, се нарекува ____.", answers: ["полувистина", "чиста лага", "аксиома"], correctText: "полувистина", achievement: "🌗 Half-Truth Seer" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L26 - МЕДИУМСКИ ГАСЛАЈТИНГ", question: "Кога манипулативни медиуми упорно и континуирано пласираат лажни информации со цел кај публиката да развијат сомнеж во сопствениот разум и меморија, тоа е:", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Сатира", "Конструктивна дебата"], correct: 0, achievement: "🕯️ Fog Clearer" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L27 - ЛАЖНА ДИХОТОМИЈА", question: "Кога во едно ТВ соочување проблемот се претставува екстремно само преку две опции (црно-бело), целосно игнорирајќи ги другите решенија, тоа е:", answers: ["Лажна дихотомија", "Експертски консензус", "Плурализам"], correct: 0, achievement: "🌈 Spectrum Analyst" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L28 - ДЕКОНТЕКСТУАЛИЗАЦИЈА", type: "drag-drop", question: "Кога намерно се користи стара фотографија или видео од минатото за да се прикаже како лажен тековен доказ, тоа е ____.", answers: ["деконтекстуализација", "архивски сјај", "монтажа"], correctText: "деконтекстуализација", achievement: "⏳ Time Anchor" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L29 - INFOTAINMENT", question: "Каков тип на содржина претставува 'Infotainment' во современите медиуми?", answers: ["Сериозни научни истражувања", "Спој на вести и забава каде информацијата се банализира за да биде комерцијална", "Воени извештаи"], correct: 1, achievement: "🍿 Popcorn Critic" },
// // // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L30 - FEARMONGERING", question: "Стратегијата каде медиумите намерно преувеличуваат закани и опасности за да предизвикаат масовен страв и полесно да го контролираат јавното мислење се вика:", answers: ["Fearmongering (Ширење страв)", "Оптимистичко врамување", "Пацифизам"], correct: 0, achievement: "🚫 Terror Defuser" },
// // // //
// // // //     // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И ПСИХОЛОГИЈА НА МРЕЖИ (31-45) ===
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L31 - ECHO CHAMBER", question: "Што се случува во дигиталните 'Ехо комори' (Echo Chambers) на социјалните мрежи?", answers: ["Корисниците слушаат аудио фајлови со ехо ефект", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Се бришат профилите со лажни имиња"], correct: 1, achievement: "🚪 Wall Breaker" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L32 - ФИЛТЕР МЕУРЧИЊА", question: "Како алгоритмите за пребарување (пр. Google) го создаваат т.н. 'Филтер меур' (Filter Bubble)?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Го блокираат вирусот DarkBot", "Ги чистат колачињата (Cookies)"], correct: 0, achievement: "🧼 Bubble Popper" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L33 - FOMO ЕФЕКТ", question: "Како социјалните мрежи Психолошки влијаат преку т.н. FOMO феномен?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Го зголемуваат коефициентот на интелигенција", "Овозможуваат подобра меморија"], correct: 0, achievement: "📱 Digital Detoxer" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L34 - ВИРАЛНОСТ И ГНЕВ", question: "Зошто на социјалните мрежи најбрзо се шират објави кои будат револт и лутина кај публиката?", answers: ["Луѓето сакаат едукација во конфликти", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Едноставна случајност"], correct: 1, achievement: "⚡ Rage Defuser" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L35 - ДИГИТАЛЕН ОТИСОК", question: "Твоите лајкови, коментари, локации и пребарувања формираат перманентна слика за тебе на интернет наречена:", answers: ["Привремена историја", "Дигитален отисок (Digital Footprint)", "Сајбер пасош"], correct: 1, achievement: "👣 Trail Conscious" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L36 - АЛГОРИТМАКА ПРИСТРАСНОСТ", question: "Што подразбира терминот 'Алгоритамска пристрасност' (Algorithmic Bias)?", answers: ["Кога кодот на социјалните мрежи рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам одлучува да гласа на избори", "Вирус во прелистувачот"], correct: 0, achievement: "🤖 Code Auditor" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L37 - КЛИК ФАРМИ", type: "drag-drop", question: "Организирани центри кои вештачки со илјадници уреди купуваат сообраќај и генерираат лајкови се викаат ____.", answers: ["клик-фарми", "дата центри", "хакерски релеи"], correctText: "клик-фарми", achievement: "🚜 Farm Exposer" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L38 - SHADOWBANNING", question: "Кога една социјална мрежа тајно и без известување ја намалува видливоста на твоите објави за другите корисници, таа применува:", answers: ["Укинување на профил", "Shadowbanning (Блокирање во сенка)", "Премиум промоција"], correct: 1, achievement: "👻 Shadow Detector" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L39 - МИКРОТАРГЕТИРАЊЕ", question: "Што овозможува Микротаргетирањето (Microtargeting) кај политичките реклами на социјалните мрежи?", answers: ["Прикажување на иста реклама до апсолутно сите луѓе во светот", "Испорака на високо специфични, персонализирани пораки до мали групи врз основа на нивните психолошки профили", "Намалување на цената на хардверот"], correct: 1, achievement: "🎯 Precision Sniper" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L40 - CAMBRIDGE ANALYTICA", type: "drag-drop", question: "Скандалозната злоупотреба на приватни Facebook податоци за психолошко профилирање на гласачи беше извршена од компанијата ____.", answers: ["Cambridge Analytica", "Cyber Global", "OpenAI"], correctText: "Cambridge Analytica", achievement: "🕵️‍♂️ Data Whistleblower" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L41 - ДОПАМИНСКА ЈАМКА", question: "Како дизајнот на бесконечно скролање (Infinite Scroll) и нотификациите влијаат врз мозокот на корисникот?", answers: ["Создаваат допаминска јамка на зависност која те тера да останеш на апликацијата", "Го подобруваат сонот", "Ја зголемуваат долгорочната меморија"], correct: 0, achievement: "🧠 Neuromaster" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L42 - ИНФОДЕМИЈА", question: "Поимот 'Инфодемија' (Infodemic) означува:", answers: ["Недостаток на интернет врска", "Прекумерно ширење и преплавеност со информации (точни и лажни) за време на глобална криза", "Компјутерски хардвер"], correct: 1, achievement: "🦠 Info-Vaccinated" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L43 - ТЕМНИ ШЕМИ (DARK PATTERNS)", type: "drag-drop", question: "Кориснички интерфејси на веб-сајтови намерно дизајнирани за да ве измамат да преземете или купите нешто несакано се викаат ____.", answers: ["темни шеми (Dark Patterns)", "про кодови", "оптимални менија"], correctText: "темни шеми (Dark Patterns)", achievement: "🕶️ Pattern Hacker" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L44 - DOOMSCROLLING", question: "Психолошката навика за постојано и долготрајно читање на лоши и депресивни вести на социјалните мрежи се нарекува:", answers: ["Doomscrolling", "Happy-clicking", "Информативен детокс"], correct: 0, achievement: "🧗‍♂️ Doom Climber" },
// // // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L45 - ЕКОНОМИЈА НА ВНИМАНИЕ", question: "Во 'Економијата на внимание' (Attention Economy), кое е главното средство со кое тргуваат социјалните мрежи за да заработат од реклами?", answers: ["Времето и вниманието на корисникот", "Квалитетот на објавените книги", "Претплатите за хардвер"], correct: 0, achievement: "💎 Attention Guard" },
// // // //
// // // //     // === ПОГЛАВЈЕ 4: ВЕРИФИКАЦИЈА НА ФАКТИ (46-60) ===
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L46 - ДЕЗИНФОРМАЦИЈА", question: "Која е клучната карактеристика на 'Дезинформацијата' (Disinformation)?", answers: ["Тоа е ненамерна новинарска печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Секоја вест објавена на странски медиум"], correct: 1, achievement: "🔬 Disinfo Dissector" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L47 - МИЗИНФОРМАЦИЈА", question: "Што е тогаш 'Мизинформација' (Misinformation)?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјално медицинско истражување", "Превод на вест од англиски"], correct: 0, achievement: "👵 Family Educator" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L48 - DEEPFAKE", question: "Ако DarkBot користи напредна невронска мрежа за да го симулира визуелно ликот и гласот на претседателот, станува збор за:", answers: ["Класичен Фотошоп", "Дипфејк (Deepfake) дезинформација", "Филтер за видео социјални платформи"], correct: 1, achievement: "🤖 AI Investigator" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L49 - САТИРА И ПАНИКА", question: "Познат сатиричен сајт објавува измислена шега. Граѓаните ја сфаќаат сериозно како реална вест и креваат паника. Што потфрлило?", answers: ["Законот за електронски медиуми", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Серверот на веб-сајтот"], correct: 1, achievement: "🎭 Irony Detector" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L50 - ПРИСТРАСНОСТ", question: "Кога читате вест и забележувате дека авторот користи силни емотивни епитети („срамно“, „катастрофално“) наместо неутрални факти, се соочувате со:", answers: ["Објективно новинарство", "Медиумска пристрасност (Media Bias)", "Уметнички израз"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L51 - ОБРАТНО ПРЕБАРАУВАЊЕ", question: "Која дигитална алатка (пр. Google Lens, TinEye) се користи за да се провери дали некоја слика е вистинска или пак е стара и преземена од друг настан?", answers: ["Обратно пребарување слики (Reverse Image Search)", "Филтрирање бои", "Скенирање вируси"], correct: 0, achievement: "🖼️ Image Verifier" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L52 - МЕТАПОДАТОЦИ", type: "drag-drop", question: "Скриените дигитални информации во сликите како локација, време и модел на апарат се викаат ____.", answers: ["метаподатоци (EXIF)", "пиксели", "воден жиг"], correctText: "метаподатоци (EXIF)", achievement: "X-Ray Metadata" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L53 - ПРИМАРЕН ИЗВОР", question: "Што е 'Примарен извор' на информација при истражувањето?", answers: ["Вест преземена од социјална мрежа на пријател", "Оригинален документ, официјална изјава или сведок кој директно присуствувал на настанот", "Коментар под некој блог"], correct: 1, achievement: "📜 Source Anchor" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L54 - TYPOSQUATTING", question: "Гледате линк од вест на домен 'bne.com' кој визуелно имитира познат медиум како 'bbc.com'. Оваа измамничка техника се вика:", answers: ["Typosquattng / Клониран домен", "Слободно преземање", "Оптимизиран сервер"], correct: 0, achievement: "🦊 Domain Watchdog" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L55 - СИНТЕТИЧКИ МЕДИУМИ", type: "drag-drop", question: "Аудио, видео или текст содржини генерирани целосно од системи на Вештачка Интелигенција се викаат ____.", answers: ["синтетички медиуми", "класични медиуми", "виртуелен печат"], correctText: "синтетички медиуми", achievement: "🤖 AI Synth Sifter" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L56 - МЕЃУНАРОДНА МРЕЖА IFCN", question: "Која организација ги сертифицира независните сервиси за проверка на факти во светот преку строг Кодекс на принципи?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "Интерпол", "Глобал ПР Алијанса"], correct: 0, achievement: "🌍 Global Checker" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L57 - ЛАТЕРАЛНО ЧИТАЊЕ", question: "Што подразбира техниката 'Латерално читање' (Lateral Reading) кај проверка на непознат веб-сајт?", answers: ["Читање на сајтот од десно на лево", "Отворање нови табови во прелистувачот за да се види што велат други независни извори за тој сајт", "Детално читање само на секцијата 'За нас'"], correct: 1, achievement: "🦀 Lateral Thinker" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L58 - POTVRDUVACKA PRISTRASNOST", type: "drag-drop", question: "Психолошката подложност на луѓето да им веруваат само на оние вести кои ги потврдуваат нивните претходни ставови е ____.", answers: ["потврдувачка пристрасност", "логика", "апатија"], correctText: "потврдувачка пристрасност", achievement: "🧠 Bias Unchainer" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L59 - СКРИНШОТ МАНИПУЛАЦИЈА", question: "Добиваш скриншот од наводен твит на премиерот кој содржи скандалозна изјава. Сликата нема линк. Како постапуваш?", answers: ["Веднаш го споделувам бидејќи скриншотот е доказ", "Проверувам на официјалниот профил и архивите дали навистина постои таков твит, бидејќи скриншотот лесно се монтира со 'Inspect Element'", "Претпоставувам дека е вистина"], correct: 1, achievement: "📸 Frame Verifier" },
// // // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L60 - ГЛАСОВЕН КЛОН", question: "Добиваш аудио снимка каде лидер на партија признава криминал. Изгледа дека гласот е негов, но звукот е чудно рамен. Постои ризик за манипулација преку:", answers: ["Deep Voice / Гласовен клон преку AI", "Старо радио", "Акустично ехо"], correct: 0, achievement: "🎙️ Sonic Sleuth" },
// // // //
// // // //     // === ПОГЛАВЈЕ 5: КРИЗЕН ПР И ЕТИКА (61-75) ===
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L61 - КРИЗЕН ПР", question: "Во Cyber City избувнува криза: главниот систем за струја паѓа поради напад. Како треба ПР службата на компанијата да реагира?", answers: ["Да ја исклучи телефонската линија и да одбие соопштенија додека не се реши дефектот", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги обвини граѓаните за претрошувачка"], correct: 1, achievement: "📢 Crisis Leader" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L62 - ГОВОР НА ОМРАЗА", question: "Што е тоа 'Говор на омраза' (Hate Speech) на интернет?", answers: ["Секоја колумна во која се критикува работата на некој министер", "Явна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Кога некој ќе ти пише нељубезен коментар"], correct: 1, achievement: "🕊️ Peace Advocate" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L63 - СПИРАЛА НА МОЛЧЕЊЕТО", question: "Зошто поединецот често одлучува да го премолчи својот став на социјалните мрежи доколку забележи дека мнозинството има дијаметрално спротивно мислење?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Бидејќи нема доволно карактери на располагање", "Од мрзеливост"], correct: 0, achievement: "🐚 Spiral Breaker" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L64 - ЦЕНЗУРА VS АВТОЦЕНЗУРА", question: "Кога самиот новинар свесно одлучува да не објави точна сторија за некој моќник од страв од губење на работното место, станува збор за:", answers: ["Државна уредба", "Автоцензура (Self-censorship)", "Новинарска солидарност"], correct: 1, achievement: "🖋️ Fearless Voice" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L65 - ЕТИЧКИ КОДЕКС", question: "Кој е основниот врховен столб на Кодексот на етика на новинарите?", answers: ["Правото да се заработи брзо од кликови", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Лојалноста кон политичката партија"], correct: 1, achievement: "👑 Supreme Media Overlord" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L66 - КЛЕВЕТА И НАВРЕДА", question: "Која е разликата меѓу Клевета и Навреда во медиумското право?", answers: ["Нема разлика", "Навредата е омаловажувачко мислење, а клеветата е изнесување на невистинити тврдења за факти кои му штетат на угледот", "Клеветата се однесува само на пишан текст"], correct: 1, achievement: "⚖️ Legal Scholar" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L67 - ЗАШТИТА НА ИЗВОРИ", type: "drag-drop", question: "Етичкото и законско право на новинарот пред истражните органи да одбие да го открие свиркачот се дефинира како ____.", answers: ["заштита на извори", "државна тајна", "дипломатски имунитет"], correctText: "заштита на извори", achievement: "🤐 Vault Keeper" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L68 - КОНФЛИКТ НА ИНТЕРЕСИ", question: "Ако еден економски новинар пишува пофални вести за компанија во која неговиот сопруг има акции, тој се наоѓа во:", answers: ["Конфликт на интереси", "Истражувачки бран", "Маркетинг соработка"], correct: 0, achievement: "🧼 Integrity Keeper" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L69 - OFF THE RECORD", question: "Што подразбира новинарското правило 'Оф-д-рекорд' (Off the record) при интервју?", answers: ["Новинарот смее да ја објави снимката на YouTube", "Информацијата служи само како позадина за разбирање на настанот, но не смее да се објави или цитира во медиумот", "Новинарот мора да му плати на изворот"], correct: 1, achievement: "🤫 Confidential Agent" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L70 - ЕМБАРГО ЗА ВЕСТИ", type: "drag-drop", question: "Договорот со кој медиумот се обврзува дека нема да објави некоја клучна вест пред точно утврдено идно време се вика ____.", answers: ["ембарго за вести", "цензура", "вето"], correctText: "ембарго за вести", achievement: "⏱️ Time Lock Master" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L71 - МЕДИУМСКИ РЕКЕТ", question: "Кога сопственик на медиум му се заканува на бизнисмен дека ќе објави компромитирачки материјали доколку бизнисменот не купи скапи реклами, тоа е:", answers: ["Бизнис стратегија", "Медиумска уцена / рекет (неетичко и кривично дело)", "Слободен маркетинг"], correct: 1, achievement: "🛡️ Blackmail Buster" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L72 - ПРАВО НА ЗАБОРАВ", question: "Што е тоа 'Право на заборавеност' (Right to be forgotten) на пребарувачите во ЕУ?", answers: ["Право на граѓаните да побараат отстранување на застарени или ирелевантни лични линкови од резултатите на Google", "Право на компјутерот да ја избрише целата база", "Закон против учење историја"], correct: 0, achievement: "🧼 Digital Eraser" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L73 - ПРИКРИЕНА РЕКЛАМА", type: "drag-drop", question: "Пласирањето на промоција на некој производ во рамки на редовна новинарска содржина без соодветна маркетинг ознака е ____.", answers: ["прикриена реклама", "објективен тест", "креативен израз"], correctText: "прикриена реклама", achievement: "🕵️‍♂️ Stealth Detector" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L74 - ВЕРТЕРОВ ЕФЕКТ", question: "Зошто новинарите не смеат сензационалистички и детално да известуваат за начинот на извршување самоубиства?", answers: ["Поради Вертеровиот ефект (ризик од поттикнување бранови на имитација кај ранливи групи)", "Бидејќи тоа е досадно за читателите", "Поради законот за авторски права"], correct: 0, achievement: "❤️ Ethics Guardian" },
// // // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L75 - ЈАВЕН ИНТЕРЕС", question: "Кое е единственото етичко и професионално оправдување за новинарот да користи скриени камери или тајно снимање при истражување?", answers: ["Зголемување на рејтингот на емисијата", "Кога откривањето на информацијата е од исклучителен Јавен интерес (пр. корупција) а не може да се обезбеди на друг начин", "Чиста љубопитност"], correct: 1, achievement: "👑 Supreme Media Overlord" }
// // // // ];
// // // //
// // // // let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
// // // // document.getElementById("highScoreValue").innerText = savedHighScore;
// // // //
// // // // const introScreen = document.getElementById("intro");
// // // // const mapScreen = document.getElementById("levelSelectorPage");
// // // // const gameScreen = document.getElementById("gamePage");
// // // // const finalScreen = document.getElementById("finalScreen");
// // // // const avatar = document.getElementById("avatarSprite");
// // // //
// // // // document.getElementById("startBtn").addEventListener("click", () => {
// // // //     const inputVal = document.getElementById("usernameInput").value.trim();
// // // //     if (inputVal !== "") playerName = inputVal;
// // // //
// // // //     introScreen.classList.add("hidden");
// // // //     mapScreen.classList.remove("hidden");
// // // //     document.getElementById("playerGreeting").innerText = playerName;
// // // //
// // // //     buildMapDashboard();
// // // //     loadComments();
// // // //     initTimer();
// // // // });
// // // //
// // // // document.getElementById("backToMapBtn").addEventListener("click", () => {
// // // //     gameScreen.classList.add("hidden");
// // // //     mapScreen.classList.remove("hidden");
// // // //     buildMapDashboard();
// // // // });
// // // //
// // // // function initTimer() {
// // // //     gameInterval = setInterval(() => {
// // // //         if (gameScreen.classList.contains("hidden")) return;
// // // //         timeLeft--;
// // // //         document.getElementById("timer").innerText = timeLeft;
// // // //         if (timeLeft <= 0) finishGame(false);
// // // //     }, 1000);
// // // // }
// // // //
// // // // function buildMapDashboard() {
// // // //     const container = document.getElementById("chaptersContainer");
// // // //     container.innerHTML = "";
// // // //
// // // //     const chapters = {};
// // // //     levels.forEach((level, index) => {
// // // //         if (!chapters[level.chapterId]) {
// // // //             chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
// // // //         }
// // // //         chapters[level.chapterId].nodes.push({ level, globalIndex: index });
// // // //     });
// // // //
// // // //     for (let id in chapters) {
// // // //         const card = document.createElement("div");
// // // //         card.classList.add("chapter-card");
// // // //
// // // //         const title = document.createElement("h4");
// // // //         title.innerText = chapters[id].name;
// // // //         card.appendChild(title);
// // // //
// // // //         const grid = document.createElement("div");
// // // //         grid.classList.add("nodes-grid");
// // // //
// // // //         chapters[id].nodes.forEach(item => {
// // // //             const node = document.createElement("div");
// // // //             node.classList.add("map-node");
// // // //             node.innerText = item.globalIndex + 1;
// // // //
// // // //             if (item.globalIndex < currentLevel) {
// // // //                 node.classList.add("completed");
// // // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // // //             } else if (item.globalIndex === currentLevel) {
// // // //                 node.classList.add("active");
// // // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // // //             } else {
// // // //                 node.classList.add("locked");
// // // //             }
// // // //             grid.appendChild(node);
// // // //         });
// // // //         card.appendChild(grid);
// // // //         container.appendChild(card);
// // // //     }
// // // // }
// // // //
// // // // function launchGameAtLevel(index) {
// // // //     currentLevel = index;
// // // //     mapScreen.classList.add("hidden");
// // // //     gameScreen.classList.remove("hidden");
// // // //     updateAvatarPosition();
// // // //     loadLevel();
// // // // }
// // // //
// // // // function updateAvatarPosition() {
// // // //     let percent = (currentLevel / (levels.length - 1)) * 90;
// // // //     avatar.style.left = percent + "%";
// // // // }
// // // //
// // // // function updateStats() {
// // // //     document.getElementById("lives").innerText = lives;
// // // //     document.getElementById("credibility").innerText = credibility;
// // // //     document.getElementById("scoreValue").innerText = score;
// // // //     document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
// // // //     document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
// // // // }
// // // //
// // // // function loadLevel() {
// // // //     updateStats();
// // // //     let level = levels[currentLevel];
// // // //     document.getElementById("gameChapterTitle").innerText = level.chapterName;
// // // //     document.getElementById("levelTitle").innerText = level.title;
// // // //
// // // //     const questionDiv = document.getElementById("question");
// // // //     const ansDiv = document.getElementById("answers");
// // // //     ansDiv.innerHTML = "";
// // // //
// // // //     if (level.type === "drag-drop") {
// // // //         questionDiv.innerHTML = level.question.replace("____", `<span id="dropTarget" class="drop-target" ondragover="allowDrop(event)" ondrop="handleDrop(event)">【 Спушти кибер-модул 】</span>`);
// // // //
// // // //         level.answers.forEach(answer => {
// // // //             const dragItem = document.createElement("div");
// // // //             dragItem.classList.add("drag-item");
// // // //             dragItem.innerText = answer;
// // // //             dragItem.setAttribute("draggable", "true");
// // // //
// // // //             dragItem.ondragstart = (e) => {
// // // //                 e.dataTransfer.setData("text", answer);
// // // //             };
// // // //
// // // //             dragItem.onclick = () => {
// // // //                 executeDragDropVerification(answer, level);
// // // //             };
// // // //
// // // //             ansDiv.appendChild(dragItem);
// // // //         });
// // // //     }
// // // //     else {
// // // //         questionDiv.innerText = level.question;
// // // //         level.answers.forEach((answer, index) => {
// // // //             const btn = document.createElement("button");
// // // //             btn.classList.add("answerBtn");
// // // //             btn.innerText = answer;
// // // //             btn.onclick = () => checkAnswer(index);
// // // //             ansDiv.appendChild(btn);
// // // //         });
// // // //     }
// // // //
// // // //     let progressPercent = (darkBotHP / 1500) * 100;
// // // //     document.getElementById("progressBar").style.width = progressPercent + "%";
// // // // }
// // // //
// // // // function allowDrop(e) { e.preventDefault(); }
// // // // function handleDrop(e) {
// // // //     e.preventDefault();
// // // //     const data = e.dataTransfer.getData("text");
// // // //     let level = levels[currentLevel];
// // // //     executeDragDropVerification(data, level);
// // // // }
// // // //
// // // // function executeDragDropVerification(selectedText, level) {
// // // //     const target = document.getElementById("dropTarget");
// // // //     if (!target) return;
// // // //
// // // //     target.innerText = selectedText;
// // // //     target.classList.add("dropped");
// // // //
// // // //     const items = document.querySelectorAll(".drag-item");
// // // //     items.forEach(it => { it.style.pointerEvents = "none"; it.setAttribute("draggable", "false"); });
// // // //
// // // //     if (selectedText === level.correctText) {
// // // //         target.style.background = "var(--success)";
// // // //         target.style.borderColor = "var(--success)";
// // // //         target.style.color = "white";
// // // //         handleCorrectSequence(level);
// // // //     } else {
// // // //         target.style.background = "var(--accent)";
// // // //         target.style.borderColor = "var(--accent)";
// // // //         target.style.color = "white";
// // // //         handleWrongSequence();
// // // //     }
// // // // }
// // // //
// // // // function checkAnswer(selected) {
// // // //     let level = levels[currentLevel];
// // // //     const buttons = document.querySelectorAll(".answerBtn");
// // // //     buttons.forEach(btn => btn.disabled = true);
// // // //
// // // //     if (selected === level.correct) {
// // // //         buttons[selected].classList.add("correct");
// // // //         handleCorrectSequence(level);
// // // //     } else {
// // // //         buttons[selected].classList.add("wrong");
// // // //         buttons[level.correct].classList.add("correct");
// // // //         handleWrongSequence();
// // // //     }
// // // // }
// // // //
// // // // function handleCorrectSequence(level) {
// // // //     combo++;
// // // //     let multiplier = combo > 1 ? combo : 1;
// // // //     score += 25 * multiplier;
// // // //     darkBotHP -= 25 * multiplier;
// // // //     credibility = Math.min(100, credibility + 5);
// // // //     if (!achievements.includes(level.achievement)) achievements.push(level.achievement);
// // // //
// // // //     avatar.classList.add("celebrate");
// // // //     setTimeout(() => avatar.classList.remove("celebrate"), 1200);
// // // //     postAnswerCheck();
// // // // }
// // // //
// // // // // 🛑 НОВА ПОПРАВЕНА ЛОГИКА: НЕМА ВРАЌАЊЕ НАЗАД НА ПРЕТХОДНО НИВО!
// // // // function handleWrongSequence() {
// // // //     combo = 0;
// // // //     lives--; // Се губи живот (макс 3 грешки)
// // // //     credibility -= 20;
// // // //
// // // //     // БРИШЕНО: currentLevel = Math.max(0, currentLevel - 1); -> Со тоа одиш директно на следно прашање
// // // //     postAnswerCheck();
// // // // }
// // // //
// // // // function postAnswerCheck() {
// // // //     updateStats();
// // // //     if (lives <= 0 || credibility <= 0) {
// // // //         document.getElementById("holeElement").classList.remove("hidden");
// // // //         avatar.style.left = "50%";
// // // //         setTimeout(() => {
// // // //             avatar.classList.add("fall-in-hole");
// // // //             setTimeout(() => { finishGame(false); }, 1400);
// // // //         }, 500);
// // // //         return;
// // // //     }
// // // //     document.getElementById("nextBtn").classList.remove("hidden");
// // // // }
// // // //
// // // // document.getElementById("nextBtn").addEventListener("click", () => {
// // // //     currentLevel++;
// // // //     document.getElementById("nextBtn").classList.add("hidden");
// // // //
// // // //     if (currentLevel < levels.length && darkBotHP > 0) {
// // // //         updateAvatarPosition();
// // // //         loadLevel();
// // // //     } else {
// // // //         finishGame(darkBotHP <= 0 || currentLevel >= levels.length);
// // // //     }
// // // // });
// // // //
// // // // function buyItem(item) {
// // // //     if (item === 'life') {
// // // //         if (score >= 70) {
// // // //             score -= 70; lives++;
// // // //             alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
// // // //         } else { alert("❌ Немате доволно поени!"); }
// // // //     } else if (item === 'credibility') {
// // // //         if (score >= 50) {
// // // //             score -= 50; credibility = Math.min(100, credibility + 25);
// // // //             alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
// // // //         } else { alert("❌ Немате доволно поени!"); }
// // // //     }
// // // //     updateStats();
// // // // }
// // // //
// // // // function addComment() {
// // // //     const commentInput = document.getElementById("chatComment");
// // // //     const text = commentInput.value.trim();
// // // //     if (text === "") return;
// // // //
// // // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // // //     let newComment = {
// // // //         name: playerName,
// // // //         message: text,
// // // //         time: new Date().toLocaleTimeString()
// // // //     };
// // // //     comments.push(newComment);
// // // //     localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // // //     commentInput.value = "";
// // // //     loadComments();
// // // // }
// // // //
// // // // function loadComments() {
// // // //     const chatBox = document.getElementById("chatBox");
// // // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // // //
// // // //     if(comments.length === 0) {
// // // //         comments = [
// // // //             { name: "Професор по Медиуми", message: "Прекрасен симулатор! Новите 75 прашања со 3D Drag & Drop интерфејс изгледаат одлично.", time: "12:30" },
// // // //             { name: "Ана (Студент)", message: "Многу подобро е што играта не нè враќа назад на претходното прашање кога ќе згрешиме!", time: "14:15" }
// // // //         ];
// // // //         localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // // //     }
// // // //
// // // //     chatBox.innerHTML = comments.map(c => `
// // // //         <div class="chat-msg">
// // // //             <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
// // // //         </div>
// // // //     `).join("");
// // // //     chatBox.scrollTop = chatBox.scrollHeight;
// // // // }
// // // //
// // // // function finishGame(win) {
// // // //     clearInterval(gameInterval);
// // // //     gameScreen.classList.add("hidden");
// // // //     mapScreen.classList.add("hidden");
// // // //     finalScreen.classList.remove("hidden");
// // // //
// // // //     if (score > savedHighScore) {
// // // //         localStorage.setItem("proMediaHighScore2026", score);
// // // //         savedHighScore = score;
// // // //     }
// // // //
// // // //     let rank = "Медиумски Специјалист";
// // // //     if (score >= 800) rank = "Виртуозен Дигитален Комуникатолог 🌟";
// // // //     if (score >= 1500) rank = "Врховен Мастер на Медиумски Науки & Експерт за Кризен ПР 👑";
// // // //
// // // //     let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });
// // // //
// // // //     if (win) {
// // // //         let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
// // // //         finalScreen.innerHTML = `
// // // //             <h1 style="color: var(--success);">🏆 СИСТЕМСКА ПОБЕДА! DARK BOT Е СОВЛАДАН!</h1>
// // // //             <p>Честитки! Успешно се изборивте со инфодемијата низ сите 75 интерактивни стапици.</p>
// // // //
// // // //             <div class="certificate-frame" id="printableCertificate">
// // // //                 <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
// // // //                 <div class="sub">Овој документ официјално се доделува на:</div>
// // // //                 <div class="certificate-name">${playerName}</div>
// // // //                 <p>За успешно завршување на напредниот сајбер-курс на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
// // // //                 <p>Критички ги анализираше и деконструираше сите 75 нивоа на лажни вести, алгоритми, ехо-комори и кризни ПР манипулации, стекнувајќи се со ранк:</p>
// // // //                 <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
// // // //                 <p>Освоени поени: <strong>${score}</strong> | Преостаната Медиумска Писменост: <strong>${credibility}%</strong></p>
// // // //
// // // //                 <div class="cert-footer">
// // // //                     <div>📅 Датум: ${dateToday}</div>
// // // //                     <div>🛡️ Верификација: Cyber Shield Hub [2026-PRO]</div>
// // // //                 </div>
// // // //             </div>
// // // //
// // // //             <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати го Сертификатот</button>
// // // //             <br>
// // // //             <h3>🏅 Вашите Отклучени Сајбер Трофеи (${achievements.length}):</h3>
// // // //             <div style="margin: 15px 0;">${badgesHtml}</div>
// // // //             <br>
// // // //             <button onclick="location.reload()" class="cyber-btn">ИГРАЈ ПОВТОРНО</button>
// // // //         `;
// // // //     } else {
// // // //         finalScreen.innerHTML = `
// // // //             <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (КОМАДАТА ЗАВРШИ)</h1>
// // // //             <p>Ги потрошивте сите 3 дозволени грешки (животи) или вашиот кредибилитет падна на нула. Системот е компромитиран од лаги.</p>
// // // //             <p>Застанавте на Ниво: <strong>${currentLevel + 1}</strong> со освоени <strong>${score}</strong> поени.</p>
// // // //             <br>
// // // //             <button onclick="location.reload()" class="cyber-btn" style="background: linear-gradient(90deg, var(--accent), #991b1b)">ОБНОВИ МЕДИУМСКИ СТАТУС (РЕСТАРТ)</button>
// // // //         `;
// // // //     }
// // // // }
// // // //
// // // // setTimeout(() => {
// // // //     document.getElementById("loadingScreen").style.display = "none";
// // // //     document.getElementById("mainContainer").classList.remove("hidden");
// // // // }, 1500);
// // //
// // //
// // // let currentLevel = 0;
// // // let score = 0;
// // // let lives = 3;
// // // let credibility = 100;
// // // let darkBotHP = 450; // Балансирано за 15 прашања по поглавје (15 прашања * 30 dmg = 450 HP)
// // // let achievements = [];
// // // let timeLeft = 600; // Зголемено време бидејќи сега има повеќе прашања
// // // let gameInterval;
// // // let combo = 0;
// // // let playerName = "Студент";
// // //
// // // // Карта на напредок за секое поглавје посебно (вредност од 0 до 15)
// // // let chapterProgress = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
// // //
// // // const levels = [
// // //     // === ПОГЛАВЈЕ 1: ТЕОРИИ НА КОМУНИКАЦИЈА ===
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", question: "Познатиот теоретичар Маршал Меклуан тврди дека 'Медиумот е пораката'. Што подразбира ова?", answers: ["Самата содржина на веста е најважна", "Медиумот е пораката", "Писмата се подобар медиум од социјалните мрежи"], correct: 1, achievement: "🧠 McLuhan Disciple" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Како се нарекува филтрирањето на вестите од страна на уредниците?", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Кое прашање во моделот на Ласуел се однесува на крајниот исход?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ИГЛА", question: "Која теорија вели дека медиумите имаат директно и моќно влијание врз пасивната публика?", answers: ["хиподермична игла", "Селективно изложување", "Двостепен модел"], correct: 0, achievement: "💉 Needle Deconstructer" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - ПЛУРАЛИЗАМ", question: "Зошто е важен медиумскиот плурализам во јавната сфера?", answers: ["За повеќе забава", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и political ставови во јавноста", "За државна контрола"], correct: 1, achievement: "🏛️ Pluralism Defender" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L6 - ИЗЛОЖЕНОСТ", question: "Како се нарекува феноменот каде луѓето бираат само медиуми што одговараат на нивните ставови?", answers: ["Селективна изложеност (Selective Exposure)", "Пасивна конзумација", "Масовна хипноза"], correct: 0, achievement: "🎯 Exposure Filter" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L7 - ДВОСТЕПЕН МОДЕЛ", question: "Кој ги пренесува информациите од медиумите до пошироката јавност според двостепениот модел?", answers: ["Државните органи", "лидерите на мислење", "Вештачката интелигенција"], correct: 1, achievement: "🗣️ Opinion Scout" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L8 - КУЛТИВАЦИЈА", question: "Која теорија тврди дека долготрајното гледање телевизија ја обликува перцепцијата за реалноста?", answers: ["Култивациска теорија (Cultivation Theory)", "Ехо комора", "Прајминг"], correct: 0, achievement: "📺 Cultivation Critic" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L9 - КОРИСТ И ЗАДОВОЛСТВО", question: "Што претпоставува Теоријата на корист и задоволство (Uses and Gratifications) за публиката?", answers: ["Публиката е лесна за манипулација", "Активна и свесно бира медиуми за да задоволи специфични потреби", "Публиката не размислува"], correct: 1, achievement: "⚡ Active Consumer" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L10 - АГЕНДА", question: "Како се нарекува способноста на медиумите да одредат кои теми се важни за јавна дискусија?", answers: ["Агенда сетинг", "Спин", "Астротурфинг"], correct: 0, achievement: "📋 Agenda Decoder" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L11 - СИМБОЛИ", question: "Која научна дисциплина се занимава со проучување на знаците, симболите и нивното значење?", answers: ["Семиотика", "Психологија", "Кибернетика"], correct: 0, achievement: "🔣 Semiotics Master" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L12 - КОДИРАЊЕ", question: "Според Стјуарт Хол, што може да направи публиката ако не се согласува со доминантната порака?", answers: ["Да престане да гледа ТВ", "Одбие содржината преку опозициско читање", "Веднаш да ја прифати"], correct: 1, achievement: "🛡️ Decoder Rebel" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L13 - ПРАЈМИНГ", question: "Кој медиумски ефект ги активира претходните знаења и контексти кај публиката пред да донесе суд?", answers: ["Прајминг (Priming)", "Гаслајтинг", "Кликбејт"], correct: 0, achievement: "🧠 Prime Analyst" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L14 - КОНВЕРГЕНЦИЈА", question: "Како се нарекува спојувањето на традиционалните медиуми (радио, печат) во еден дигитален простор?", answers: ["Медиумска конвергенција", "Диверзификација", "Технолошки колапс"], correct: 0, achievement: "🌐 Convergence Sage" },
// // //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L15 - ЈАВНА СФЕРА", question: "Кој германски филозоф го разви концептот за 'Јавна сфера' како простор за критичка дебата?", answers: ["Карл Маркс", "Јирген Хабермас", "Фридрих Ниче"], correct: 1, achievement: "👑 Communication Overlord" },
// // //
// // //     // === ПОГЛАВЈЕ 2: ФАБРИКУВАЊЕ ВЕСТИ И СПИН ===
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L1 - СПИН СТРАТЕГИЈА", question: "Која е примарната задача на ПР експертите за спинување?", answers: ["Бришење на архиви", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Пишување реални вести"], correct: 1, achievement: "🌀 Spin Dissolver" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L2 - СЕНЗАЦИИ", question: "Како се нарекуваат насловите создадени исклучиво за да привлечат кликови за профит?", answers: ["Истражување", "кликбејт (Clickbait)", "Официјален демант"], correct: 1, achievement: "🎣 Hook Evader" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L3 - ЕРА", question: "Што означува состојбата на т.н. 'Пост-вистина' во денешното општество?", answers: ["Целосна забрана за лаги", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Крај на социјалните мрежи"], correct: 1, achievement: "👁️ Reality Anchored" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L4 - ТАБЛОИДИ", question: "Кои теми најчесто доминираат во жолтиот печат и таблоидите?", answers: ["Економски анализи", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Научни откритија"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L5 - ПАРИ И ФИЛТРИ", question: "Според Чомски, од што најмногу зависи независноста на приватните медиуми?", answers: ["Од желбата на уредникот", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Од бројот на лајкови"], correct: 1, achievement: "📖 Chomsky Analyst" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L6 - ПРЕТЕРУВАЊЕ", question: "Кога еден медиум користи хиперболи и шокантни наслови за банални настани, тоа е:", answers: ["Сензационализам", "Објективност", "Длабока анализа"], correct: 0, achievement: "📢 Hype Defuser" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L7 - ВРАМУВАЊЕ", question: "Како се нарекува менталниот контекст во кој се става една вест за да се насочи мислењето?", answers: ["Врамување (Framing)", "Агенда", "Ехо ефект"], correct: 0, achievement: "🖼️ Frame Decoder" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L8 - ЛАЖНИ ГРАЃАНИ", question: "Што е тоа 'Astroturfing' во модерните медиумски кампањи?", answers: ["Садење вештачка трева", "Вештачко креирање лажна слика дека зад некоја кампања стои спонтано граѓанско движење", "Хакирање сајтови"], correct: 1, achievement: "🌱 Astro Unmasker" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L9 - ДИСКРЕДИТАЦИЈА", question: "Како се нарекува нападот врз личноста на некој поединец со цел да се уништи неговиот углед?", answers: ["Карактерен атентат (Character Assassination)", "Правна заштита", "Физички напад"], correct: 0, achievement: "⚔️ Shield of Honor" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L10 - ТОЧНО И ЛАЖНО", question: "Кога една информација содржи точни факти но е намерно изменета за да заведе, тоа е:", answers: ["Целосна невистина", "полувистина", "Апсолутна вистина"], correct: 1, achievement: "🌓 Half-Truth Detector" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L11 - ГАСЛАЈТИНГ", question: "Кој метод прави публиката да се сомнева во сопствениот разум и меморија преку лажни податоци?", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Прајминг", "Gatekeeping"], correct: 0, achievement: "🕯️ Gaslight Snuffer" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L12 - ИЗБОР", question: "Кога медиумот ти нуди само две екстремни решенија, игнорирајќи го средниот пат, прави:", answers: ["Лажна дихотомија", "Објективен избор", "Плурализам"], correct: 0, achievement: "⚖️ Logic Keeper" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L13 - ИЗВАДОК", question: "Кога изјава на политичар се пренесува без да се каже зошто и каде е кажана, правиме:", answers: ["деконтекстуализација", "Врамување", "Проверка на факти"], correct: 0, achievement: "🧩 Context Restorer" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L14 - ИНФОТЕЈНМЕНТ", question: "Што подразбира терминот 'Infotainment' во модерните телевизии?", answers: ["Чиста научна програма", "Спој на вести и забава каде информацијата се банализира за да биде комерцијална", "Државен извештај"], correct: 1, achievement: "🎬 Media critic" },
// // //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L15 - СТРАВ", question: "Како се нарекува стратегијата за постојано ширење паника за да се контролира масата?", answers: ["Fearmongering (Ширење страв)", "Култивација", "Агенда сетинг"], correct: 0, achievement: "🛡️ Fearless Mind" },
// // //
// // //     // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И СОЦИЈАЛНИ МЕДИУМИ ===
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L1 - ЕХО КРЕДО", question: "Како социјалните мрежи влијаат врз засилувањето на едностраните мислења кај корисниците?", answers: ["Преку аудио ефекти", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Со бришење на апликацијата"], correct: 1, achievement: "🚪 Wall Breaker" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L2 - МЕУР", question: "Што прават алгоритмите на Google и Facebook со т.н. 'Филтер меурчиња'?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Ги бришат сите вируси", "Носат нови пријатели"], correct: 0, achievement: "🧼 Bubble Popper" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L3 - СТРАВ ОД ПРОПУШТАЊЕ", question: "Кој психолошки ефект ве тера постојано да ја рефреширате мрежата од страв да не пропуштите нешто?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Параноја", "Еуфорија"], correct: 0, achievement: "📱 Digital Detoxer" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L4 - АНГЛИЖМАН", question: "Зошто алгоритмите најмногу сакаат објави кои предизвикуваат лутина кај луѓето?", answers: ["Луѓето се посреќни тогаш", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Случаен избор"], correct: 1, achievement: "⚡ Rage Defuser" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L5 - ТРАГА", question: "Како се нарекуваат сите ваши траги од кликови, лајкови и локации на интернет?", answers: ["Привремен код", "Дигтален отисок (Digital Footprint)", "ИД картичка"], correct: 1, achievement: "👣 Trail Conscious" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L6 - ПРЕДРАСУДИ", question: "Што е тоа 'Алгоритамска пристрасност' (Algorithmic Bias)?", answers: ["Кога кодот на социјалните мрежи рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам се гаси", "Грешка во интернетот"], correct: 0, achievement: "🤖 Code Auditor" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L7 - ФАРМИ", question: "Како се нарекуваат компаниите кои продаваат лажни лајкови и следачи преку ботови?", answers: ["клик-фарми", "Дата центри", "Блокчејн мрежи"], correct: 0, achievement: "🚜 Bot Farmer Slayer" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L8 - БЛОК", question: "Кога платформата дискретно ја намалува видливоста на твојот профил без да те извести, тоа е:", answers: ["Shadowbanning (Блокирање во сенка)", "Траен бан", "Приватен профил"], correct: 0, achievement: "👤 Ghost Detector" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L9 - МИКРОТАРГЕТИНГ", question: "Што подразбира поимот психолошко микротаргетирање во рекламите?", answers: ["Испорака на високо специфични, персонализирани пораки до мали групи врз основа на нивните психолошки профили", "Рекламирање на мали производи", "Масовни ТВ реклами"], correct: 0, achievement: "🎯 Target Sniper" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L10 - СКАНДАЛ", question: "Која компанија беше во центарот на скандалот со злоупотреба на податоци од Facebook за избори?", answers: ["Cambridge Analytica", "Google Inc", "OpenAI"], correct: 0, achievement: "📊 Data Guardian" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L11 - ДОПАМИН", question: "Како нотификациите и лајковите влијаат врз мозокот на корисникот?", answers: ["Создаваат допаминска јамка на зависност која те тера да останеш на апликацијата", "Го подобруваат сонот", "Немаат никакво влијание"], correct: 0, achievement: "🧠 Dopamine Master" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L12 - ИНФОДЕМИЈА", question: "Како се нарекува преплавеноста со точни и лажни вести за време на некоја глобална криза?", answers: ["Прекумерно ширење и преплавеност со информации (точни и лажни) за време на глобална криза", "Пандемија", "Дигитална блокада"], correct: 0, achievement: "🧪 Crisis Analyst" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L13 - ШЕМИ", question: "Како се нарекуваат дизајнерските трикови во апликациите кои те тераат да купиш нешто ненамерно?", answers: ["темни шеми (Dark Patterns)", "Кориснички интерфејс", "Отворен код"], correct: 0, achievement: "🕸️ UI/UX Inspector" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L14 - СЛИСТАЊЕ", question: "Постојаното скролање низ лоши и депресивни вести на социјалните мрежи се нарекува:", answers: ["Doomscrolling", "Брзо читање", "Медиумско опуштање"], correct: 0, achievement: "📉 Doom Breaker" },
// // //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L15 - ВАЛУТА", question: "Што е главниот извор на профит за бесплатните социјални мрежи денес?", answers: ["Времето и вниманието на корисникот", "Претплати", "Државни донации"], correct: 0, achievement: "💰 Attention Economist" },
// // //
// // //     // === ПОГЛАВЈЕ 4: ПРОВЕРКА НА ФАКТИ ===
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L1 - ЛАГА СО НАМЕРА", question: "Што точно претставува дезинформацијата?", answers: ["Печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Превод на странски текст"], correct: 1, achievement: "🔬 Disinfo Dissector" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L2 - ЛАГА БЕЗ НАМЕРА", question: "Што е карактеристично за т.н. мизинформација?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјален извештај", "Злонамерен вирус"], correct: 0, achievement: "👵 Family Educator" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L3 - ВЕШТАЧКО ВИДЕО", question: "Кога компјутерски се монтира лице на политичар да изговори нешто што никогаш не го кажал, тоа е:", answers: ["Обичен колаж", "Дипфејк (Deepfake) дезинформација", "Фотографија со филтер"], correct: 1, achievement: "🤖 AI Investigator" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L4 - ХУМОР", question: "Што е потребно за јавноста да не ги сфаќа хумористичните вести како вистински?", answers: ["Забрана за хумор", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Повеќе полиција"], correct: 1, achievement: "🎭 Irony Detector" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L5 - СУБЈЕКТИВНОСТ", question: "Кога еден медиум известува само за едната страна на политичкиот спектар, покажува:", answers: ["Професионализам", "Медиумска пристрасност (Media Bias)", "Апсолутна точност"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L6 - СЛИКА", question: "Која алатка помага да откриете дали една слика на интернет е стара или преземена од друг настан?", answers: ["Обратно пребарување слики (Reverse Image Search)", "Фотошоп", "Инстаграм филтер"], correct: 0, achievement: "🔍 Image Detective" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L7 - ПОДАТОЦИ", question: "Каде се сокриени информациите за тоа кога и со кој апарат е направена една дигитална слика?", answers: ["метаподатоци (EXIF)", "Во името на фајлот", "Никаде"], correct: 0, achievement: "💾 Metadata Hacker" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L8 - ИЗВОР", question: "Што претставува примарен извор во истражувачкото новинарство?", answers: ["Трач од социјалните мрежи", "Оригинален документ, официјална изјава или сведок кој директно присуствувал на настанот", "Прераскажана вест"], correct: 1, achievement: "📜 Source Verifier" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L9 - ДОМЕН", question: "Кога напаѓачот купува домен многу сличен на некој познат бренд (пр. googlee.com) за да измами, тоа е:", answers: ["Typosquattng / Клониран домен", "Маркетинг трик", "Официјално партнерство"], correct: 0, achievement: "🌐 URL Inspector" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L10 - СИНТЕТИКА", question: "Како се нарекуваат сите медиумски содржини (текст, слики, видеа) генерирани од AI?", answers: ["традиционални медиуми", "синтетички медиуми", "Органски содржини"], correct: 1, achievement: "🦾 AI Synthesizer" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L11 - МРЕЖА", question: "Која меѓународна организација ги сертифицира независните проверувачи на факти во светот?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "НАТО", "УНЕСКО"], correct: 0, achievement: "🌍 Global Fact-Checker" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L12 - ЛАТЕРАЛНО ЧИТАЊЕ", question: "Што подразбира техниката на латерално читање (Lateral Reading) при проверка на информации?", answers: ["Читање на текстот од почеток до крај", "Отворање нови табови во прелистувачот за да се види што велат други независни извори за тој сајт", "Читање со лупа"], correct: 1, achievement: "📑 Lateral Reader" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L13 - УБЕДУВАЊЕ", question: "Кога веруваш во некоја лажна вест само затоа што таа се совпаѓа со твоите политички ставови, имаш:", answers: ["потврдувачка пристрасност", "Критичко размислување", "Добра интуиција"], correct: 0, achievement: "🧠 Ego Overcomer" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L14 - ТВИТ", question: "Како ќе проверите дали некој познат политичар навистина објавил шокантен скриншот од Твитер?", answers: ["Му верувам на скриншотот веднаш", "Проверувам на официјалниот профил и архивите дали навистина постои таков твит, бидејќи скриншотот лесно се монтира со 'Inspect Element'", "Го споделувам со пријателите"], correct: 1, achievement: "🐦 Tweet Buster" },
// // //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L15 - ГЛАС", question: "Како се нарекува технологијата со која AI може да го клонира гласот на секој човек за измама?", answers: ["Deep Voice / Гласовен клон преку AI", "Аудио Спикер", "Радио бран"], correct: 0, achievement: "🎙️ Sound Auditor" },
// // //
// // //     // === ПОГЛАВЈЕ 5: КРИЗНА КОМУНИКАЦИЈА И ЕТИКА ===
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L1 - ПР КРИЗА", question: "Што е најважно за ПР службата во случај на вонредна состојба или хаварија?", answers: ["Да молчи додека се заврши истрагата", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги исклучи серверите"], correct: 1, achievement: "📢 Crisis Leader" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L2 - ОМРАЗА", question: "Што претставува говорот на омраза во јавниот комуникациски простор?", answers: ["Секоја остра критика", "Јавна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Лоша рецензија"], correct: 1, achievement: "🕊️ Peace Advocate" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L3 - МОЛК", question: "Зошто поединците често молчат ако нивното мислење не е поддржано од мнозинството на мрежите?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Поради технички проблеми", "Затоа што не ги интересира"], correct: 0, achievement: "🐚 Spiral Breaker" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L4 - СТРАВ ОД СТАТУС", question: "Кога новинарот сам ја трга својата точна сторија од страв од сопственикот на медиумот, имаме:", answers: ["Државна цензура", "Автоцензура (Self-censorship)", "Правна уредба"], correct: 1, achievement: "🖋️ Fearless Voice" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L5 - СТОЛБ", question: "Што е најважната обврска во Етичкиот кодекс на новинарите?", answers: ["Брза заработка", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Слушање на партијата"], correct: 1, achievement: "👑 Supreme Media Overlord" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L6 - СУД", question: "Која е разликата меѓу навреда и клевета според законот?", answers: ["Нема разлика", "Навредата е омаловажувачко мислење, а клеветата е изнесување на невистинити тврдења за факти кои му штетат на угледот", "Клеветата е усна, навредата писмена"], correct: 1, achievement: "⚖️ Legal Scholar" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L7 - АНОНИМНОСТ", question: "Кое право му овозможува на новинарот да не го открие идентитетот на својот укажувач?", answers: ["заштита на извори", "Државна тајна", "Приватност на фирмата"], correct: 0, achievement: "🤫 Secret Keeper" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L8 - КОНФЛИКТ", question: "Ако новинар пишува пофална вест за фирма во која неговиот брат е сопственик, тој се наоѓа во:", answers: ["Конфликт на интереси", "Професионален развој", "Истражувачки процес"], correct: 0, achievement: "🧼 Integrity Knight" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L9 - БЕКГРАУНД", question: "Што значи кога еден извор ќе каже дека информацијата е дадена 'Off the record'?", answers: ["Може веднаш да се цитира", "Информација служи само како позадина за разбирање на настанот, но не смее да се објави или цитира во медиумот", "Тоа е лажна вест"], correct: 1, achievement: "🕵️ Deepthroat Contact" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L10 - ОДЛОЖУВАЊЕ", question: "Кога ПР службата бара од медиумите да не ја објавуваат веста до точно одредено време, бара:", answers: ["ембарго за вести", "Трајна цензура", "Правна забрана"], correct: 0, achievement: "⏳ Embargo Master" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L11 - РЕКЕТ", question: "Ако медиум бара пари од бизнисмен за да НЕ објави компромитирачка сторија за него, прави:", answers: ["Медиумска уцена / рекет (неетичко и кривично дело)", "Маркетинг соработка", "Спонзорство"], correct: 0, achievement: "🚨 Crime Crusher" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L12 - ЗАБОРАВ", question: "Што подразбира т.н. 'Право да бидеш заборавен' (Right to be forgotten) на интернет?", answers: ["Бришење на меморијата на корисникот", "Право на граѓаните да побараат отстранување на застарени или ирелевантни линкови од резултатите на Google", "Исклучување на социјалните мрежи"], correct: 1, achievement: "🧹 Digital Eraser" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L13 - ПРИКРИВАЊЕ", question: "Кога во текст кој изгледа како обична вест е вметнат линк за купување производ без ознака, тоа е:", answers: ["прикриена реклама", "Препорака", "Професионален совет"], correct: 0, achievement: "🕵️ Stealth Detector" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L14 - ИМИТАЦИЈА", question: "Зошто медиумите мора со исклучително внимание и без сензационализам да известуваат за самоубиства?", answers: ["Заради заштеда на простор", "Поради Вертеровиот ефект (ризик од поттикнување бранови на имитација кај ранливи групи)", "Поради државни казни"], correct: 1, achievement: "🧠 Empathy Guardian" },
// // //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L15 - СКРИЕНА КАМЕРА", question: "Кога е етички оправдано новинарот да користи скриени камери или тајно снимање?", answers: ["За забава на публиката", "Кога откривањето на информацијата е од исклучителен Јавен интерес (пр. корупција) а не може да се обезбеди на друг начин", "Никогаш не е оправдано"], correct: 1, achievement: "🛡️ Supreme Media Overlord" }
// // // ];
// // //
// // // let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
// // // document.getElementById("highScoreValue").innerText = savedHighScore;
// // //
// // // const introScreen = document.getElementById("intro");
// // // const mapScreen = document.getElementById("levelSelectorPage");
// // // const gameScreen = document.getElementById("gamePage");
// // // const finalScreen = document.getElementById("finalScreen");
// // // const avatar = document.getElementById("avatarSprite");
// // //
// // // document.getElementById("startBtn").addEventListener("click", () => {
// // //     const inputVal = document.getElementById("usernameInput").value.trim();
// // //     if (inputVal !== "") playerName = inputVal;
// // //
// // //     introScreen.classList.add("hidden");
// // //     mapScreen.classList.remove("hidden");
// // //     document.getElementById("playerGreeting").innerText = playerName;
// // //
// // //     buildMapDashboard();
// // //     loadComments();
// // //     initTimer();
// // // });
// // //
// // // document.getElementById("backToMapBtn").addEventListener("click", () => {
// // //     gameScreen.classList.add("hidden");
// // //     mapScreen.classList.remove("hidden");
// // //     buildMapDashboard();
// // // });
// // //
// // // function initTimer() {
// // //     if(gameInterval) clearInterval(gameInterval);
// // //     gameInterval = setInterval(() => {
// // //         if (gameScreen.classList.contains("hidden")) return;
// // //         timeLeft--;
// // //         document.getElementById("timer").innerText = timeLeft;
// // //         if (timeLeft <= 0) finishGame(false);
// // //     }, 1000);
// // // }
// // //
// // // // Пресметка на реден број на прашање во тековното поглавје (0 до 14)
// // // function getLocalIndex(globalIndex) {
// // //     let targetChapterId = levels[globalIndex].chapterId;
// // //     let count = 0;
// // //     for (let i = 0; i < globalIndex; i++) {
// // //         if (levels[i].chapterId === targetChapterId) {
// // //             count++;
// // //         }
// // //     }
// // //     return count;
// // // }
// // //
// // // function buildMapDashboard() {
// // //     const container = document.getElementById("chaptersContainer");
// // //     container.innerHTML = "";
// // //
// // //     const chapters = {};
// // //     levels.forEach((level, index) => {
// // //         if (!chapters[level.chapterId]) {
// // //             chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
// // //         }
// // //         chapters[level.chapterId].nodes.push({ level, globalIndex: index });
// // //     });
// // //
// // //     for (let id in chapters) {
// // //         const card = document.createElement("div");
// // //         card.classList.add("chapter-card");
// // //
// // //         const title = document.createElement("h4");
// // //         title.innerText = chapters[id].name;
// // //         card.appendChild(title);
// // //
// // //         const grid = document.createElement("div");
// // //         grid.classList.add("nodes-grid");
// // //
// // //         let currentLocalLevelForChapter = chapterProgress[id];
// // //
// // //         chapters[id].nodes.forEach((item, localIndex) => {
// // //             const node = document.createElement("div");
// // //             node.classList.add("map-node");
// // //             node.innerText = localIndex + 1; // Секогаш прикажува од 1 до 15
// // //
// // //             // Проверка на напредокот независно по поглавја
// // //             if (localIndex < currentLocalLevelForChapter) {
// // //                 node.classList.add("completed");
// // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // //             } else if (localIndex === currentLocalLevelForChapter) {
// // //                 node.classList.add("active");
// // //                 node.onclick = () => { launchGameAtLevel(item.globalIndex); };
// // //             } else {
// // //                 node.classList.add("locked");
// // //             }
// // //
// // //             grid.appendChild(node);
// // //         });
// // //         card.appendChild(grid);
// // //         container.appendChild(card);
// // //     }
// // // }
// // //
// // // function launchGameAtLevel(index) {
// // //     currentLevel = index;
// // //
// // //     // Ресетирање на параметри за конкретниот обид во ова поглавје
// // //     lives = 3;
// // //     credibility = 100;
// // //     darkBotHP = 450;
// // //     combo = 0;
// // //     score = 0;
// // //
// // //     mapScreen.classList.add("hidden");
// // //     gameScreen.classList.remove("hidden");
// // //     updateAvatarPosition();
// // //     loadLevel();
// // // }
// // //
// // // function updateAvatarPosition() {
// // //     let localIdx = getLocalIndex(currentLevel);
// // //     let percent = (localIdx / 14) * 90; // Мапирање од 0% до 90% по должината на патеката за 15 нивоа
// // //     avatar.style.left = percent + "%";
// // // }
// // //
// // // function updateStats() {
// // //     document.getElementById("lives").innerText = lives;
// // //     document.getElementById("credibility").innerText = credibility;
// // //     document.getElementById("scoreValue").innerText = score;
// // //     document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
// // //     document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
// // // }
// // //
// // // function loadLevel() {
// // //     updateStats();
// // //     let level = levels[currentLevel];
// // //     document.getElementById("gameChapterTitle").innerText = level.chapterName;
// // //     document.getElementById("levelTitle").innerText = level.title;
// // //     document.getElementById("question").innerText = level.question;
// // //
// // //     const ansDiv = document.getElementById("answers");
// // //     ansDiv.innerHTML = "";
// // //     level.answers.forEach((answer, index) => {
// // //         const btn = document.createElement("button");
// // //         btn.classList.add("answerBtn");
// // //         btn.innerText = answer;
// // //         btn.onclick = () => checkAnswer(index);
// // //         ansDiv.appendChild(btn);
// // //     });
// // //
// // //     let progressPercent = (darkBotHP / 450) * 100;
// // //     document.getElementById("progressBar").style.width = progressPercent + "%";
// // // }
// // //
// // // function checkAnswer(selected) {
// // //     let level = levels[currentLevel];
// // //     const buttons = document.querySelectorAll(".answerBtn");
// // //     buttons.forEach(btn => btn.disabled = true);
// // //
// // //     if (selected === level.correct) {
// // //         buttons[selected].classList.add("correct");
// // //         combo++;
// // //         let multiplier = combo > 1 ? combo : 1;
// // //         score += 25 * multiplier;
// // //         darkBotHP -= 30 * multiplier;
// // //         credibility = Math.min(100, credibility + 5);
// // //         if (!achievements.includes(level.achievement)) achievements.push(level.achievement);
// // //
// // //         avatar.classList.add("celebrate");
// // //         setTimeout(() => avatar.classList.remove("celebrate"), 1200);
// // //     } else {
// // //         buttons[selected].classList.add("wrong");
// // //         buttons[level.correct].classList.add("correct");
// // //         combo = 0;
// // //         lives--;
// // //         credibility -= 20;
// // //     }
// // //
// // //     updateStats();
// // //
// // //     if (lives <= 0 || credibility <= 0) {
// // //         document.getElementById("holeElement").classList.remove("hidden");
// // //         avatar.style.left = "50%";
// // //         setTimeout(() => {
// // //             avatar.classList.add("fall-in-hole");
// // //             setTimeout(() => { finishGame(false); }, 1400);
// // //         }, 500);
// // //         return;
// // //     }
// // //
// // //     document.getElementById("nextBtn").classList.remove("hidden");
// // // }
// // //
// // // document.getElementById("nextBtn").addEventListener("click", () => {
// // //     let currentChapterId = levels[currentLevel].chapterId;
// // //     let localIdx = getLocalIndex(currentLevel);
// // //
// // //     document.getElementById("nextBtn").classList.add("hidden");
// // //
// // //     // Ажурирај го локалниот напредок за поглавјето ако ова ниво е успешно поминато
// // //     if (localIdx + 1 > chapterProgress[currentChapterId]) {
// // //         chapterProgress[currentChapterId] = Math.min(15, localIdx + 1);
// // //     }
// // //
// // //     currentLevel++;
// // //
// // //     // Проверка дали следното прашање припаѓа на истото поглавје и ботот има HP
// // //     if (currentLevel < levels.length && levels[currentLevel].chapterId === currentChapterId && darkBotHP > 0) {
// // //         updateAvatarPosition();
// // //         loadLevel();
// // //     } else {
// // //         // Ако поглавјето е завршено или DarkBot е поразен
// // //         chapterProgress[currentChapterId] = 15; // Се означува како целосно поминато
// // //         finishGame(darkBotHP <= 0 || score >= 200);
// // //     }
// // // });
// // //
// // // function buyItem(item) {
// // //     if (item === 'life') {
// // //         if (score >= 70) {
// // //             score -= 70;
// // //             lives++;
// // //             alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
// // //         } else { alert("❌ Немате доволно поени!"); }
// // //     } else if (item === 'credibility') {
// // //         if (score >= 50) {
// // //             score -= 50;
// // //             credibility = Math.min(100, credibility + 25);
// // //             alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
// // //         } else { alert("❌ Немате доволно поени!"); }
// // //     }
// // //     updateStats();
// // // }
// // //
// // // function addComment() {
// // //     const commentInput = document.getElementById("chatComment");
// // //     const text = commentInput.value.trim();
// // //     if (text === "") return;
// // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // //     let newComment = {
// // //         name: playerName,
// // //         message: text,
// // //         time: new Date().toLocaleTimeString()
// // //     };
// // //     comments.push(newComment);
// // //     localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // //     commentInput.value = "";
// // //     loadComments();
// // // }
// // //
// // // function loadComments() {
// // //     const chatBox = document.getElementById("chatBox");
// // //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// // //
// // //     if(comments.length === 0) {
// // //         comments = [
// // //             { name: "Професор по Медиуми", message: "Одличен концепт на игра. Ги опфаќа сите клучни дефиниции од предавањата!", time: "12:30" },
// // //             { name: "Ана (Студент)", message: "Многу ми помогна да ја разберам теоријата за Спирала на молчењето!", time: "14:15" }
// // //         ];
// // //         localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// // //     }
// // //
// // //     chatBox.innerHTML = comments.map(c => `
// // //         <div class="chat-msg">
// // //             <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
// // //         </div>
// // //     `).join("");
// // //     chatBox.scrollTop = chatBox.scrollHeight;
// // // }
// // //
// // // // Функција која враќа назад на мапата и го чува playerName недопрено!
// // // function resetToMap() {
// // //     finalScreen.classList.add("hidden");
// // //     mapScreen.classList.remove("hidden");
// // //     document.getElementById("holeElement").classList.add("hidden");
// // //     avatar.classList.remove("fall-in-hole");
// // //     buildMapDashboard();
// // // }
// // //
// // // function finishGame(win) {
// // //     gameScreen.classList.add("hidden");
// // //     mapScreen.classList.add("hidden");
// // //     finalScreen.classList.remove("hidden");
// // //
// // //     if (score > savedHighScore) {
// // //         localStorage.setItem("proMediaHighScore2026", score);
// // //         savedHighScore = score;
// // //         document.getElementById("highScoreValue").innerText = savedHighScore;
// // //     }
// // //
// // //     let rank = "Медиумски Аналитичар";
// // //     if (score >= 200) rank = "Виш Сајбер-Комуникатолог";
// // //     if (score >= 350) rank = "Мастер на Комуникациски Науки & Специјалист по Кризен ПР 👑";
// // //     let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });
// // //
// // //     if (win) {
// // //         let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
// // //         finalScreen.innerHTML = `
// // //             <h1 style="color: var(--success);">🏆 МОДУЛОТ Е УСПЕШНО СОВЛАДАН!</h1>
// // //             <p>Честитки! Успешно го поминавте ова поглавје од 15 прашања без да паднете во стапиците на дезинформациите.</p>
// // //
// // //             <div class="certificate-frame" id="printableCertificate">
// // //                 <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
// // //                 <div class="sub">Овој документ официјално се доделува на:</div>
// // //                 <div class="certificate-name">${playerName}</div>
// // //                 <p>За успешно завршување на сајбер-симулацијата на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
// // //                 <p>Критички ги деконструираше сите предизвици на лажни вести, алгоритми, спинови и манипулативни ехо-комори, со ранк:</p>
// // //                 <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
// // //                 <p>Освоени поени во поглавјето: <strong>${score}</strong> | Преостанат Кредибилитет: <strong>${credibility}%</strong></p>
// // //
// // //                 <div class="cert-footer">
// // //                     <div>📅 Датум: ${dateToday}</div>
// // //                     <div>🛡️ Верификувано од: Cyber Shield Hub 2026</div>
// // //                 </div>
// // //             </div>
// // //
// // //             <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати / Зачувај го Сертификатот</button>
// // //             <br>
// // //             <h3>🏅 Твоите Сајбер Трофеи:</h3>
// // //             <div style="margin: 15px 0;">${badgesHtml}</div>
// // //             <br>
// // //             <button onclick="resetToMap()" class="cyber-btn">ВРТИ СЕ НАЗАД КОН НИВОАТА</button>
// // //         `;
// // //     } else {
// // //         finalScreen.innerHTML = `
// // //             <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (ИГРАТА ЗАВРШИ)</h1>
// // //             <p>Вашиот аватар пропадна во дупката на манипулациите и дезинформациите на DarkBot.</p>
// // //             <p>Освоивте <strong>${score}</strong> поени во ова поглавје.</p>
// // //             <br>
// // //             <button onclick="resetToMap()" class="cyber-btn" style="background: linear-gradient(90deg, var(--accent), #991b1b)">ОБНОВИ СИСТЕМ (НАЗАД КОН МАПА)</button>
// // //         `;
// // //     }
// // // }
// // //
// // // setTimeout(() => {
// // //     document.getElementById("loadingScreen").style.display = "none";
// // //     document.getElementById("mainContainer").classList.remove("hidden");
// // // }, 1500);
// //
// //
// // let currentLevel = 0;
// // let score = 0;
// // let lives = 3;
// // let credibility = 100;
// // let darkBotHP = 450; // Балансирано за 15 прашања по поглавје (15 прашања * 30 dmg = 450 HP)
// // let achievements = [];
// // let timeLeft = 600;
// // let gameInterval;
// // let combo = 0;
// // let playerName = "Студент";
// //
// // // Следење на состојбата на секое поглавје: 'active' (во тек/недопрено), 'success' (успешно), 'failed' (неуспешно)
// // let chapterStatus = { 1: 'active', 2: 'active', 3: 'active', 4: 'active', 5: 'active' };
// //
// // const levels = [
// //     // === ПОГЛАВЈЕ 1: ТЕОРИИ НА КОМУНИКАЦИЈА ===
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", question: "Познатиот теоретичар Маршал Меклуан тврди дека 'Медиумот е пораката'. Што подразбира ова?", answers: ["Самата содржина на веста е најважна", "Медиумот е пораката", "Писмата се подобар медиум од социјалните мрежи"], correct: 1, achievement: "🧠 McLuhan Disciple" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Како се нарекува филтрирањето на вестите од страна на уредниците?", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Кое прашање во моделот на Ласуел се однесува на крајниот исход?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ИГЛА", question: "Кои теорија вели дека медиумите имаат директно и моќно влијание врз пасивната публика?", answers: ["хиподермична игла", "Селективно изложување", "Двостепен модел"], correct: 0, achievement: "💉 Needle Deconstructer" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - ПЛУРАЛИЗАМ", question: "Зошто е важен медиумскиот плурализам во јавната сфера?", answers: ["За повеќе забава", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и political ставови во јавноста", "За државна контрола"], correct: 1, achievement: "🏛️ Pluralism Defender" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L6 - ИЗЛОЖЕНОСТ", question: "Како се нарекува феноменот каде луѓето бираат само медиуми што одговараат на нивните ставови?", answers: ["Селективна изложеност (Selective Exposure)", "Пасивна конзумација", "Масовна хипноза"], correct: 0, achievement: "🎯 Exposure Filter" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L7 - ДВОСТЕПЕН МОДЕЛ", question: "Кој ги пренесува информациите од медиумите до пошироката јавност според двостепениот модел?", answers: ["Државните органи", "лидерите на мислење", "Вештачката интелигенција"], correct: 1, achievement: "🗣️ Opinion Scout" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L8 - КУЛТИВАЦИЈА", question: "Која теорија тврди дека долготрајното гледање телевизија ја обликува перцепцијата за реалноста?", answers: ["Култивациска теорија (Cultivation Theory)", "Ехо комора", "Прајминг"], correct: 0, achievement: "📺 Cultivation Critic" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L9 - КОРИСТ И ЗАДОВОЛСТВО", question: "Што претпоставува Теоријата на корист и задоволство (Uses and Gratifications) за публиката?", answers: ["Публиката е лесна за манипулација", "Активна и свесно бира медиуми за да задоволи специфични потреби", "Публиката не размислува"], correct: 1, achievement: "⚡ Active Consumer" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L10 - АГЕНДА", question: "Како се нарекува способноста на медиумите да одредат кои теми се важни за јавна дискусија?", answers: ["Агенда сетинг", "Спин", "Астротурфинг"], correct: 0, achievement: "📋 Agenda Decoder" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L11 - СИМБОЛИ", question: "Која научна дисциплина се занимава со проучување на знаците, симболите и нивното значење?", answers: ["Семиотика", "Психологија", "Кибернетика"], correct: 0, achievement: "🔣 Semiotics Master" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L12 - КОДИРАЊЕ", question: "Според Стјуарт Хол, што може да направи публиката ако не се согласува со доминантната порака?", answers: ["Да престане да гледа ТВ", "Одбие содржината преку опозициско читање", "Веднаш да ја прифати"], correct: 1, achievement: "🛡️ Decoder Rebel" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L13 - ПРАЈМИНГ", question: "Кој медиумски ефект ги активира претходните знаења и контексти кај публиката пред да донесе суд?", answers: ["Прајминг (Priming)", "Гаслајтинг", "Кликбејт"], correct: 0, achievement: "🧠 Prime Analyst" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L14 - КОНВЕРГЕНЦИЈА", question: "Како се нарекува спојувањето на традиционалните медиуми (радио, печат) во еден дигитален простор?", answers: ["Медиумска конвергенција", "Диверзификација", "Технолошки колапс"], correct: 0, achievement: "🌐 Convergence Sage" },
// //     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L15 - ЈАВНА СФЕРА", question: "Кој германски филозоф го разви концептот за 'Јавна сфера' како простор за критичка дебата?", answers: ["Карл Маркс", "Јирген Хабермас", "Фридрих Ниче"], correct: 1, achievement: "👑 Communication Overlord" },
// //
// //     // === ПОГЛАВЈЕ 2: ФАБРИКУВАЊЕ ВЕСТИ И СПИН ===
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L1 - СПИН СТРАТЕГИЈА", question: "Која е примарната задача на ПР експертите за спинување?", answers: ["Бришење на архиви", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Пишување реални вести"], correct: 1, achievement: "🌀 Spin Dissolver" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L2 - СЕНЗАЦИИ", question: "Како се нарекуваат насловите создадени исклучиво за да привлечат кликови за профит?", answers: ["Истражување", "кликбејт (Clickbait)", "Официјален демант"], correct: 1, achievement: "🎣 Hook Evader" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L3 - ЕРА", question: "Што означува состојбата на т.н. 'Пост-вистина' во денешното општество?", answers: ["Целосна забрана за лаги", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Крај на социјалните мрежи"], correct: 1, achievement: "👁️ Reality Anchored" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L4 - ТАБЛОИДИ", question: "Кои теми најчесто доминираат во жолтиот печат и таблоидите?", answers: ["Економски анализи", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Научни откритија"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L5 - ПАРИ И ФИЛТРИ", question: "Според Чомски, од што најмногу зависи независноста на приватните медиуми?", answers: ["Дод желбата на уредникот", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Од бројот на лајкови"], correct: 1, achievement: "📖 Chomsky Analyst" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L6 - ПРЕТЕРУВАЊЕ", question: "Кога еден медиум користи хиперболи и шокантни наслови за банални настани, тоа е:", answers: ["Сензационализам", "Објективност", "Длабока анализа"], correct: 0, achievement: "📢 Hype Defuser" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L7 - ВРАМУВАЊЕ", question: "Како се нарекува менталниот контекст во кој се става една вест за да се насочи мислењето?", answers: ["Врамување (Framing)", "Агенда", "Ехо ефект"], correct: 0, achievement: "🖼️ Frame Decoder" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L8 - ЛАЖНИ ГРАЃАНИ", question: "Што е тоа 'Astroturfing' во модерните медиумски кампањи?", answers: ["Садење вештачка трева", "Вештачко креирање лажна слика дека зад некоја кампања стои спонтано граѓанско движење", "Хакирање сајтови"], correct: 1, achievement: "🌱 Astro Unmasker" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L9 - ДИСКРЕДИТАЦИЈА", question: "Како се нарекува нападот врз личноста на некој поединец со цел да се уништи неговиот углед?", answers: ["Карактерен атентат (Character Assassination)", "Правна заштита", "Физички напад"], correct: 0, achievement: "⚔️ Shield of Honor" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L10 - ТОЧНО И ЛАЖНО", question: "Кога една информација содржи точни факти но е намерно изменета за да заведе, тоа е:", answers: ["Целосна невистина", "полувистина", "Апсолутна вистина"], correct: 1, achievement: "🌓 Half-Truth Detector" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L11 - ГАСЛАЈТИНГ", question: "Кој метод прави публиката да се сомнева во сопствениот разум и меморија преку лажни податоци?", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Прајминг", "Gatekeeping"], correct: 0, achievement: "🕯️ Gaslight Snuffer" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L12 - ИЗБОР", question: "Кога медиумот ти нуди само две екстремни решенија, игнорирајќи го средниот пат, прави:", answers: ["Лажна дихотомија", "Објективен избор", "Плурализам"], correct: 0, achievement: "⚖️ Logic Keeper" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L13 - ИЗВАДОК", question: "Кога изјава на политичар се пренесува без да се каже зошто и каде е кажана, правиме:", answers: ["деконтекстуализација", "Врамување", "Проверка на факти"], correct: 0, achievement: "🧩 Context Restorer" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L14 - ИНФОТЕЈНМЕНТ", question: "Што подразбира копирањето на 'Infotainment' во модерните телевизии?", answers: ["Чиста научна програма", "Спој на вести и забава каде информацијата се банализира за да биде комерцијална", "Државен извештај"], correct: 1, achievement: "🎬 Media critic" },
// //     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L15 - СТРАВ", question: "Како се нарекува стратегијата за постојано ширење паника за да се контролира масата?", answers: ["Fearmongering (Ширење страв)", "Култивација", "Агенда сетинг"], correct: 0, achievement: "🛡️ Fearless Mind" },
// //
// //     // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И СОЦИЈАЛНИ МЕДИУМИ ===
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L1 - ЕХО КРЕДО", question: "Како социјалните мрежи влијаат врз засилувањето на едностраните мислења кај корисниците?", answers: ["Преку аудио ефекти", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Со бришење на апликацијата"], correct: 1, achievement: "🚪 Wall Breaker" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L2 - МЕУР", question: "Што прават алгоритмите на Google и Facebook со т.н. 'Филтер меурчиња'?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Ги бришат сите вируси", "Носат нови пријатели"], correct: 0, achievement: "🧼 Bubble Popper" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L3 - СТРАВ ОД ПРОПУШТАЊЕ", question: "Кој психолошки ефект ве тера постојано да ја рефреширате мрежата од страв да не пропуштите нешто?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Параноја", "Еуфорија"], correct: 0, achievement: "📱 Digital Detoxer" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L4 - АНГЛИЖМАН", question: "Зошто алгоритмите најмногу сакаат објави кои предизвикуваат лутина кај луѓето?", answers: ["Луѓето се посреќни тогаш", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Случаен избор"], correct: 1, achievement: "⚡ Rage Defuser" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L5 - ТРАГА", question: "Како се нарекуваат сите ваши траги од кликови, лајкови и локации на интернет?", answers: ["Привремен код", "Дигтален отисок (Digital Footprint)", "ИД картичка"], correct: 1, achievement: "👣 Trail Conscious" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L6 - ПРЕДРАСУДИ", question: "Што е тоа 'Алгоритамска пристрасност' (Algorithmic Bias)?", answers: ["Кога кодот на социјалните мрежи рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам се гаси", "Грешка во интернетот"], correct: 0, achievement: "🤖 Code Auditor" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L7 - ФАРМИ", question: "Како се нарекуваат компаниите кои продаваат лажни лајкови и следачи преку ботови?", answers: ["клик-фарми", "Дата центри", "Блокчејн мрежи"], correct: 0, achievement: "🚜 Bot Farmer Slayer" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L8 - БЛОК", question: "Кога платформата дискретно ја намалува видливоста на твојот профил без да те извести, тоа е:", answers: ["Shadowbanning (Блокирање во сенка)", "Траен бан", "Приватен профил"], correct: 0, achievement: "👤 Ghost Detector" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L9 - МИКРОТАРГЕТИНГ", question: "Што подразбира поимот психолошко микротаргетирање во рекламите?", answers: ["Испорака на високо специфични, персонализирани пораки до мали групи врз основа на нивните психолошки профили", "Рекламирање на мали производи", "Масовни ТВ реклами"], correct: 0, achievement: "🎯 Target Sniper" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L10 - СКАНДАЛ", question: "Која компанија беше во центарот на скандалот со злоупотреба на податоци од Facebook за избори?", answers: ["Cambridge Analytica", "Google Inc", "OpenAI"], correct: 0, achievement: "📊 Data Guardian" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L11 - ДОПАМИН", question: "Како нотификациите и лајковите влијаат врз мозокот на корисникот?", answers: ["Создаваат допаминска јамка на зависност која те тера да останеш на апликацијата", "Го подобруваат сонот", "Немаат никакво влијание"], correct: 0, achievement: "🧠 Dopamine Master" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L12 - ИНФОДЕМИЈА", question: "Како се нарекува преплавеноста со точни и лажни вести за време на некоја глобална криза?", answers: ["Прекумерно ширење и преплавеност со информации (точни и лажни) за време на глобална криза", "Пандемија", "Дигитална блокада"], correct: 0, achievement: "🧪 Crisis Analyst" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L13 - ШЕМИ", question: "Како се нарекуваат дизајнерските трикови во апликациите кои те тераат да купиш нешто немудро?", answers: ["темни шеми (Dark Patterns)", "Кориснички интерфејс", "Отворен код"], correct: 0, achievement: "🕸️ UI/UX Inspector" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L14 - СЛИСТАЊЕ", question: "Постојаното скролање низ лоши и депресивни вести на социјалните мрежи се нарекува:", answers: ["Doomscrolling", "Брзо читање", "Медиумско опуштање"], correct: 0, achievement: "📉 Doom Breaker" },
// //     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L15 - ВАЛУТА", question: "Што е главниот извор на профит за бесплатните социјални мрежи денес?", answers: ["Времето и вниманието на корисникот", "Претплати", "Државни донации"], correct: 0, achievement: "💰 Attention Economist" },
// //
// //     // === ПОГЛАВЈЕ 4: ПРОВЕРКА НА ФАКТИ ===
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L1 - ЛАГА СО НАМЕРА", question: "Што точно претставува дезинформацијата?", answers: ["Печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Превод на странски текст"], correct: 1, achievement: "🔬 Disinfo Dissector" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L2 - ЛАГА БЕЗ НАМЕРА", question: "Што е карактеристично за т.н. мизинформација?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјален извештај", "Злонамерен вирус"], correct: 0, achievement: "👵 Family Educator" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L3 - ВЕШТАЧКО ВИДЕО", question: "Кога компјутерски се монтира лице на политичар да изговори нешто што никогаш не го кажал, тоа е:", answers: ["Обичен колаж", "Дипфејк (Deepfake) дезинформација", "Фотографија со филтер"], correct: 1, achievement: "🤖 AI Investigator" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L4 - ХУМОР", question: "Што е потребно за јавноста да не ги сфаќа хумористичните вести како вистински?", answers: ["Забрана за хумор", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Повеќе полиција"], correct: 1, achievement: "🎭 Irony Detector" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L5 - СУБЈЕКТИВНОСТ", question: "Кога еден медиум известува само за едната страна на политичкиот спектар, покажува:", answers: ["Професионализам", "Медиумска пристрасност (Media Bias)", "Апсолутна точност"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L6 - СЛИКА", question: "Која алатка помага да откриете дали една слика на интернет е стара или преземена од друг настан?", answers: ["Обратно пребарување слики (Reverse Image Search)", "Фотошоп", "Инстаграм филтер"], correct: 0, achievement: "🔍 Image Detective" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L7 - ПОДАТОЦИ", question: "Каде се сокриени информациите за тоа кога и со кој апарат е направена една дигитална слика?", answers: ["метаподатоци (EXIF)", "Во името на фајлот", "Никаде"], correct: 0, achievement: "💾 Metadata Hacker" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L8 - ИЗВОР", question: "Што претставува примарен извор во истражувачкото новинарство?", answers: ["Трач од социјалните мрежи", "Оригинален документ, официјална изјава или сведок кој директно присуствувал на настанот", "Прераскажана вест"], correct: 1, achievement: "📜 Source Verifier" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L9 - ДОМЕН", question: "Кога напаѓачот купува домен многу сличен на некој познат бренд (пр. googlee.com) за да измами, тоа е:", answers: ["Typosquattng / Клониран домен", "Маркетинг трик", "Официјално партнерство"], correct: 0, achievement: "🌐 URL Inspector" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L10 - СИНТЕТИКА", question: "Како се нарекуваат сите медиумски содржини (текст, слики, видеа) генерирани од AI?", answers: ["традиционални медиуми", "синтетички медиуми", "Органски содржини"], correct: 1, achievement: "🦾 AI Synthesizer" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L11 - МРЕЖА", question: "Која меѓународна организација ги сертифицира независните проверувачи на факти во светот?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "НАТО", "УНЕСКО"], correct: 0, achievement: "🌍 Global Fact-Checker" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L12 - ЛАТЕРАЛНО ЧИТАЊЕ", question: "Што подразбира техниката на латерално читање (Lateral Reading) при проверка на информации?", answers: ["Читање на текстот од почеток до крај", "Отворање нови табови во прелистувачот за да се види што велат други независни извори за тој сајт", "Читање со лупа"], correct: 1, achievement: "📑 Lateral Reader" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L13 - УБЕДУВАЊЕ", question: "Кога веруваш во некоја лажна вест само затоа што таа се совпаѓа со твоите политички ставови, имаш:", answers: ["потврдувачка пристрасност", "Критичко размислување", "Добра интуиција"], correct: 0, achievement: "🧠 Ego Overcomer" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L14 - ТВИТ", question: "Како ќе проверите дали некој познат политичар навистина објавил шокантен скриншот од Твитер?", answers: ["Му верувам на скриншотот веднаш", "Проверувам на официјалниот профил и архивите дали навистина постои таков твит, бидејќи скриншотот лесно се монтира со 'Inspect Element'", "Го споделувам со пријателите"], correct: 1, achievement: "🐦 Tweet Buster" },
// //     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L15 - ГЛАС", question: "Како се нарекува технологијата со која AI може да го клонира гласот на секој човек за измама?", answers: ["Deep Voice / Гласовен клон преку AI", "Аудио Спикер", "Радио бран"], correct: 0, achievement: "🎙️ Sound Auditor" },
// //
// //     // === ПОГЛАВЈЕ 5: КРИЗНА КОМУНИКАЦИЈА И ЕТИКА ===
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L1 - ПР КРИЗА", question: "Што е најважно за ПР службата во случај на вонредна состојба или хаварија?", answers: ["Да молчи додека се заврши истрагата", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги исклучи серверите"], correct: 1, achievement: "📢 Crisis Leader" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L2 - ОМРАЗА", question: "Што претставува говорот на омраза во јавниот комуникациски простор?", answers: ["Секоја остра критика", "Јавна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Лоша рецензија"], correct: 1, achievement: "🕊️ Peace Advocate" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L3 - МОЛК", question: "Зошто поединците често молчат ако нивното мислење не е поддржано од мнозинството на мрежите?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Поради технички проблеми", "Затоа што не ги интересира"], correct: 0, achievement: "🐚 Spiral Breaker" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L4 - СТРАВ ОД СТАТУС", question: "Кога новинарот сам ја трга својата точна сторија од страв од сопственикот на медиумот, имаме:", answers: ["Државна цензура", "Автоцензура (Self-censorship)", "Правна уредба"], correct: 1, achievement: "🖋️ Fearless Voice" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L5 - СТОЛБ", question: "Што е најважната обврска во Етичкиот кодекс на новинарите?", answers: ["Брза заработка", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Слушање на партијата"], correct: 1, achievement: "👑 Supreme Media Overlord" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L6 - СУД", question: "Која е разликата меѓу навреда и клевета според законот?", answers: ["Нема разлика", "Навредата е омаловажувачко мислење, а клеветата е изнесување на невистинити тврдења за факти кои му штетат на угледот", "Клеветата е усна, навредата писмена"], correct: 1, achievement: "⚖️ Legal Scholar" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L7 - АНОНИМНОСТ", question: "Кое право му овозможува на новинарот да не го открие идентитетот на својот укажувач?", answers: ["заштита на извори", "Државна тајна", "Приватност на фирмата"], correct: 0, achievement: "🤫 Secret Keeper" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L8 - КОНФЛИКТ", question: "Ако новинар пишува пофална вест за фирма во која неговиот брат е сопственик, тој се наоѓа во:", answers: ["Конфликт на интереси", "Професионален развој", "Истражувачки процес"], correct: 0, achievement: "🧼 Integrity Knight" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L9 - БЕКГРАУНД", question: "Што значит кога еден извор ќе каже дека информацијата е дадена 'Off the record'?", answers: ["Може веднаш да се цитира", "Информација служи само како позадина за разбирање на настанот, но не смее да се објави или цитира во медиумот", "Тоа е лажна вест"], correct: 1, achievement: "🕵️ Deepthroat Contact" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L10 - ОДЛОЖУВАЊЕ", question: "Кога ПР службата бара од медиумите да не ја објавуваат веста до точно одредено време, бара:", answers: ["ембарго за вести", "Трајна цензура", "Правна забрана"], correct: 0, achievement: "⏳ Embargo Master" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L11 - РЕКЕТ", question: "Ако медиум бара пари од бизнисмен за да НЕ објави компромитирачка сторија за него, прави:", answers: ["Медиумска уцена / рекет (неетичко и кривично дело)", "Маркетинг соработка", "Спонзорство"], correct: 0, achievement: "🚨 Crime Crusher" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L12 - ЗАБОРАВ", question: "Што подразбира т.н. 'Право да бидеш заборавен' (Right to be forgotten) на internet?", answers: ["Бришење на меморијата на корисникот", "Право на граѓаните да побараат отстранување на застарени или ирелевантни линкови од резултатите на Google", "Исклучување на социјалните мрежи"], correct: 1, achievement: "🧹 Digital Eraser" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L13 - ПРИКРИВАЊЕ", question: "Кога во текст кој изгледа како обична вест е вметнат линк за купување производ без ознака, тоа е:", answers: ["прикриена реклама", "Препорака", "Професионален совет"], correct: 0, achievement: "🕵️ Stealth Detector" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L14 - ИМИТАЦИЈА", question: "Зошто медиумите мора со исклучително внимание и без сензационализам да известуваат за самоубиства?", answers: ["Заради заштеда на простор", "Поради Вертеровиот ефект (ризик од поттикнување бранови на имитација кај ранливи групи)", "Поради државни казни"], correct: 1, achievement: "🧠 Empathy Guardian" },
// //     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L15 - СКРИЕНА КАМЕРА", question: "Кога е етички оправдано новинарот да користи скриени камери или тајно снимање?", answers: ["За забава на публиката", "Кога откривањето на информацијата е од исклучителен Јавен интерес (пр. корупција) а не може да се обезбеди на друг начин", "Никогаш не е оправдано"], correct: 1, achievement: "🛡️ Supreme Media Overlord" }
// // ];
// //
// // // Мапа на почетни индекси за секое поглавје со 15 прашања
// // const chapterStarts = { 1: 0, 2: 15, 3: 30, 4: 45, 5: 60 };
// //
// // let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
// // document.getElementById("highScoreValue").innerText = savedHighScore;
// //
// // const introScreen = document.getElementById("intro");
// // const mapScreen = document.getElementById("levelSelectorPage");
// // const gameScreen = document.getElementById("gamePage");
// // const finalScreen = document.getElementById("finalScreen");
// // const avatar = document.getElementById("avatarSprite");
// //
// // document.getElementById("startBtn").addEventListener("click", () => {
// //     const inputVal = document.getElementById("usernameInput").value.trim();
// //     if (inputVal !== "") playerName = inputVal;
// //
// //     introScreen.classList.add("hidden");
// //     mapScreen.classList.remove("hidden");
// //     document.getElementById("playerGreeting").innerText = playerName;
// //
// //     buildMapDashboard();
// //     loadComments();
// //     initTimer();
// // });
// //
// // document.getElementById("backToMapBtn").addEventListener("click", () => {
// //     gameScreen.classList.add("hidden");
// //     mapScreen.classList.remove("hidden");
// //     buildMapDashboard();
// // });
// //
// // function initTimer() {
// //     if(gameInterval) clearInterval(gameInterval);
// //     gameInterval = setInterval(() => {
// //         if (gameScreen.classList.contains("hidden")) return;
// //         timeLeft--;
// //         document.getElementById("timer").innerText = timeLeft;
// //         if (timeLeft <= 0) {
// //             let currentChapterId = levels[currentLevel].chapterId;
// //             chapterStatus[currentChapterId] = 'failed';
// //             finishGame(false);
// //         }
// //     }, 1000);
// // }
// //
// // function getLocalIndex(globalIndex) {
// //     let targetChapterId = levels[globalIndex].chapterId;
// //     let count = 0;
// //     for (let i = 0; i < globalIndex; i++) {
// //         if (levels[i].chapterId === targetChapterId) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }
// //
// // function buildMapDashboard() {
// //     const container = document.getElementById("chaptersContainer");
// //     container.innerHTML = "";
// //
// //     const chapters = {};
// //     levels.forEach((level, index) => {
// //         if (!chapters[level.chapterId]) {
// //             chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
// //         }
// //         chapters[level.chapterId].nodes.push({ level, globalIndex: index });
// //     });
// //
// //     for (let id in chapters) {
// //         const card = document.createElement("div");
// //         card.classList.add("chapter-card");
// //
// //         const title = document.createElement("h4");
// //         title.innerText = chapters[id].name;
// //         card.appendChild(title);
// //
// //         const status = chapterStatus[id];
// //
// //         // 1. АКО Е УСПЕШНО ЗАВРШЕНО (Зелено копче + Играј Повторно)
// //         if (status === 'success') {
// //             const btnContainer = document.createElement("div");
// //             btnContainer.style.display = "flex";
// //             btnContainer.style.gap = "10px";
// //             btnContainer.style.marginTop = "15px";
// //
// //             const successBtn = document.createElement("button");
// //             successBtn.className = "cyber-btn";
// //             successBtn.innerText = "ЗАВРШЕНО ✓";
// //             successBtn.style.background = "#22c55e";
// //             successBtn.style.color = "#ffffff";
// //             successBtn.style.boxShadow = "0 0 12px #22c55e";
// //             successBtn.style.flex = "1";
// //             successBtn.style.cursor = "default";
// //
// //             const replayBtn = document.createElement("button");
// //             replayBtn.className = "cyber-btn";
// //             replayBtn.innerText = "ИГРАЈ ПОВТОРНО ↺";
// //             replayBtn.style.background = "#8b5cf6";
// //             replayBtn.style.flex = "1";
// //             replayBtn.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
// //
// //             btnContainer.appendChild(successBtn);
// //             btnContainer.appendChild(replayBtn);
// //             card.appendChild(btnContainer);
// //
// //             // 2. АКО Е НЕУСПЕШНО ЗАВРШЕНО (>3 грешки / паднати животи -> Црно копче со црвен неон)
// //         } else if (status === 'failed') {
// //             const btnContainer = document.createElement("div");
// //             btnContainer.style.display = "flex";
// //             btnContainer.style.marginTop = "15px";
// //
// //             const retryBtn = document.createElement("button");
// //             retryBtn.className = "cyber-btn";
// //             retryBtn.innerText = "ОБИДИ СЕ ПОВТОРНО ↻";
// //             retryBtn.style.background = "#000000";
// //             retryBtn.style.color = "#ef4444";
// //             retryBtn.style.border = "2px solid #ef4444";
// //             retryBtn.style.boxShadow = "0 0 15px #ef4444";
// //             retryBtn.style.width = "100%";
// //             retryBtn.style.fontWeight = "bold";
// //             retryBtn.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
// //
// //             btnContainer.appendChild(retryBtn);
// //             card.appendChild(btnContainer);
// //
// //             // 3. АКО Е АКТИВНО / НЕДОПРЕНО (Класичен приказ со јазли, каде само 1-во е clickable)
// //         } else {
// //             const grid = document.createElement("div");
// //             grid.classList.add("nodes-grid");
// //
// //             chapters[id].nodes.forEach((item, localIndex) => {
// //                 const node = document.createElement("div");
// //                 node.classList.add("map-node");
// //                 node.innerText = localIndex + 1;
// //
// //                 if (localIndex === 0) {
// //                     node.classList.add("active");
// //                     node.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
// //                 } else {
// //                     node.classList.add("locked");
// //                 }
// //                 grid.appendChild(node);
// //             });
// //             card.appendChild(grid);
// //         }
// //
// //         container.appendChild(card);
// //     }
// // }
// //
// // function launchGameAtLevel(index) {
// //     currentLevel = index;
// //
// //     lives = 3;
// //     credibility = 100;
// //     darkBotHP = 450;
// //     combo = 0;
// //     score = 0;
// //
// //     mapScreen.classList.add("hidden");
// //     gameScreen.classList.remove("hidden");
// //     updateAvatarPosition();
// //     loadLevel();
// // }
// //
// // function updateAvatarPosition() {
// //     let localIdx = getLocalIndex(currentLevel);
// //     let percent = (localIdx / 14) * 90;
// //     avatar.style.left = percent + "%";
// // }
// //
// // function updateStats() {
// //     document.getElementById("lives").innerText = lives;
// //     document.getElementById("credibility").innerText = credibility;
// //     document.getElementById("scoreValue").innerText = score;
// //     document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
// //     document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
// // }
// //
// // function loadLevel() {
// //     updateStats();
// //     let level = levels[currentLevel];
// //     document.getElementById("gameChapterTitle").innerText = level.chapterName;
// //     document.getElementById("levelTitle").innerText = level.title;
// //     document.getElementById("question").innerText = level.question;
// //
// //     const ansDiv = document.getElementById("answers");
// //     ansDiv.innerHTML = "";
// //     level.answers.forEach((answer, index) => {
// //         const btn = document.createElement("button");
// //         btn.classList.add("answerBtn");
// //         btn.innerText = answer;
// //         btn.onclick = () => checkAnswer(index);
// //         ansDiv.appendChild(btn);
// //     });
// //
// //     let progressPercent = (darkBotHP / 450) * 100;
// //     document.getElementById("progressBar").style.width = progressPercent + "%";
// // }
// //
// // function checkAnswer(selected) {
// //     let level = levels[currentLevel];
// //     const buttons = document.querySelectorAll(".answerBtn");
// //     buttons.forEach(btn => btn.disabled = true);
// //
// //     if (selected === level.correct) {
// //         buttons[selected].classList.add("correct");
// //         combo++;
// //         let multiplier = combo > 1 ? combo : 1;
// //         score += 25 * multiplier;
// //         darkBotHP -= 30 * multiplier;
// //         credibility = Math.min(100, credibility + 5);
// //         if (!achievements.includes(level.achievement)) achievements.push(level.achievement);
// //
// //         avatar.classList.add("celebrate");
// //         setTimeout(() => avatar.classList.remove("celebrate"), 1200);
// //     } else {
// //         buttons[selected].classList.add("wrong");
// //         buttons[level.correct].classList.add("correct");
// //         combo = 0;
// //         lives--;
// //         credibility -= 20;
// //     }
// //
// //     updateStats();
// //
// //     // СЛУЧАЈ НА ПОВЕЌЕ ОД 3 ГРЕШКИ (Губење животи / Кредибилитет) -> Означи Неуспешно
// //     if (lives <= 0 || credibility <= 0) {
// //         let currentChapterId = levels[currentLevel].chapterId;
// //         chapterStatus[currentChapterId] = 'failed';
// //
// //         document.getElementById("holeElement").classList.remove("hidden");
// //         avatar.style.left = "50%";
// //         setTimeout(() => {
// //             avatar.classList.add("fall-in-hole");
// //             setTimeout(() => { finishGame(false); }, 1400);
// //         }, 500);
// //         return;
// //     }
// //
// //     document.getElementById("nextBtn").classList.remove("hidden");
// // }
// //
// // document.getElementById("nextBtn").addEventListener("click", () => {
// //     let currentChapterId = levels[currentLevel].chapterId;
// //     let localIdx = getLocalIndex(currentLevel);
// //
// //     document.getElementById("nextBtn").classList.add("hidden");
// //     currentLevel++;
// //
// //     // Ако има уште прашања од истото поглавје
// //     if (currentLevel < levels.length && levels[currentLevel].chapterId === currentChapterId && darkBotHP > 0) {
// //         updateAvatarPosition();
// //         loadLevel();
// //     } else {
// //         // УСПЕШНО ПОМИНАТИ СИТЕ 15 ПРАШАЊА -> Означи Успешно
// //         chapterStatus[currentChapterId] = 'success';
// //         finishGame(true);
// //     }
// // });
// //
// // function buyItem(item) {
// //     if (item === 'life') {
// //         if (score >= 70) {
// //             score -= 70;
// //             lives++;
// //             alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
// //         } else { alert("❌ Немате доволно поени!"); }
// //     } else if (item === 'credibility') {
// //         if (score >= 50) {
// //             score -= 50;
// //             credibility = Math.min(100, credibility + 25);
// //             alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
// //         } else { alert("❌ Немате доволно поени!"); }
// //     }
// //     updateStats();
// // }
// //
// // function addComment() {
// //     const commentInput = document.getElementById("chatComment");
// //     const text = commentInput.value.trim();
// //     if (text === "") return;
// //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// //     let newComment = {
// //         name: playerName,
// //         message: text,
// //         time: new Date().toLocaleTimeString()
// //     };
// //     comments.push(newComment);
// //     localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// //     commentInput.value = "";
// //     loadComments();
// // }
// //
// // function loadComments() {
// //     const chatBox = document.getElementById("chatBox");
// //     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
// //
// //     if(comments.length === 0) {
// //         comments = [
// //             { name: "Професор по Медиуми", message: "Одличен концепт на игра. Ги опфаќа сите клучни дефиниции од предавањата!", time: "12:30" },
// //             { name: "Ана (Студент)", message: "Многу ми помогна да ја разберам теоријата за Спирала на молчењето!", time: "14:15" }
// //         ];
// //         localStorage.setItem("mediaGameComments", JSON.stringify(comments));
// //     }
// //
// //     chatBox.innerHTML = comments.map(c => `
// //         <div class="chat-msg">
// //             <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
// //         </div>
// //     `).join("");
// //     chatBox.scrollTop = chatBox.scrollHeight;
// // }
// //
// // function resetToMap() {
// //     finalScreen.classList.add("hidden");
// //     mapScreen.classList.remove("hidden");
// //     document.getElementById("holeElement").classList.add("hidden");
// //     avatar.classList.remove("fall-in-hole");
// //     buildMapDashboard();
// // }
// //
// // function finishGame(win) {
// //     gameScreen.classList.add("hidden");
// //     mapScreen.classList.add("hidden");
// //     finalScreen.classList.remove("hidden");
// //
// //     if (score > savedHighScore) {
// //         localStorage.setItem("proMediaHighScore2026", score);
// //         savedHighScore = score;
// //         document.getElementById("highScoreValue").innerText = savedHighScore;
// //     }
// //
// //     let rank = "Медиумски Аналитичар";
// //     if (score >= 200) rank = "Виш Сајбер-Комуникатолог";
// //     if (score >= 350) rank = "Мастер на Комуникациски Науки & Специјалист по Кризен ПР 👑";
// //     let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });
// //
// //     if (win) {
// //         let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
// //         finalScreen.innerHTML = `
// //             <h1 style="color: var(--success);">🏆 МОДУЛОТ Е УСПЕШНО СОВЛАДАН!</h1>
// //             <p>Честитки! Успешно го поминавте ова поглавје од 15 прашања без да паднете во стапиците на дезинформациите.</p>
// //
// //             <div class="certificate-frame" id="printableCertificate">
// //                 <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
// //                 <div class="sub">Овој документ официјално се доделува на:</div>
// //                 <div class="certificate-name">${playerName}</div>
// //                 <p>За успешно завршување на сајбер-симулацијата на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
// //                 <p>Критички ги деконструираше сите предизвици на лажни вести, алгоритми, спинови и манипулативни ехо-комори, со ранк:</p>
// //                 <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
// //                 <p>Освоени поени во поглавјето: <strong>${score}</strong> | Преостанат Кредибилитет: <strong>${credibility}%</strong></p>
// //
// //                 <div class="cert-footer">
// //                     <div>📅 Датум: ${dateToday}</div>
// //                     <div>🛡️ Верификувано од: Cyber Shield Hub 2026</div>
// //                 </div>
// //             </div>
// //
// //             <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати / Зачувај го Сертификатот</button>
// //             <br>
// //             <h3>🏅 Твоите Сајбер Трофеи:</h3>
// //             <div style="margin: 15px 0;">${badgesHtml}</div>
// //             <br>
// //             <button onclick="resetToMap()" class="cyber-btn">ВРТИ СЕ НАЗАД КОН НИВОАТА</button>
// //         `;
// //     } else {
// //         finalScreen.innerHTML = `
// //             <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (ИГРАТА ЗАВРШИ)</h1>
// //             <p>Вашиот аватар пропадна во дупката на манипулациите и дезинформациите на DarkBot бидејќи изгубивте премногу животи.</p>
// //             <p>Освоивте <strong>${score}</strong> поени во ова поглавје.</p>
// //             <br>
// //             <button onclick="resetToMap()" class="cyber-btn" style="background: linear-gradient(90deg, #000, #ef4444)">ОБНОВИ СИСТЕМ (НАЗАД КОН МАПА)</button>
// //         `;
// //     }
// // }
// //
// // setTimeout(() => {
// //     document.getElementById("loadingScreen").style.display = "none";
// //     document.getElementById("mainContainer").classList.remove("hidden");
// // }, 1500);
//
//
// let currentLevel = 0;
// let score = 0;
// let lives = 3;
// let credibility = 100;
// let darkBotHP = 450; // Точно балансирано за 15 прашања (15 * 30 dmg = 450)
// let achievements = [];
// let timeLeft = 600;
// let gameInterval;
// let combo = 0;
// let playerName = "Студент";
//
// // Следење на состојбата на секое поглавје
// let chapterStatus = { 1: 'active', 2: 'active', 3: 'active', 4: 'active', 5: 'active' };
//
// const levels = [
//     // === ПОГЛАВЈЕ 1: ТЕОРИИ НА КОМУНИКАЦИЈА ===
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", question: "Познатиот теоретичар Маршал Меклуан тврди дека 'Медиумот е пораката'. Што подразбира ова?", answers: ["Самата содржина на веста е најважна", "Медиумот е пораката", "Писмата се подобар медиум од социјалните мрежи"], correct: 1, achievement: "🧠 McLuhan Disciple" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Како се нарекува филтрирањето на вестите од страна на уредниците?", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Кое прашање во моделот на Ласуел во моделот се однесува на крајниот исход?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ИГЛА", question: "Кои теорија вели дека медиумите имаат директно и моќно влијание врз пасивната публика?", answers: ["хиподермична игла", "Селективно изложување", "Двостепен модел"], correct: 0, achievement: "💉 Needle Deconstructer" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - ПЛУРАЛИЗАМ", question: "Зошто е важен медиумскиот плурализам во јавната сфера?", answers: ["За повеќе забава", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и political ставови во јавноста", "За државна контрола"], correct: 1, achievement: "🏛️ Pluralism Defender" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L6 - ИЗЛОЖЕНОСТ", question: "Како се нарекува феноменот каде луѓето бираат само медиуми што одговараат на нивните ставови?", answers: ["Селективна изложеност (Selective Exposure)", "Пасивна конзумација", "Масовна хипноза"], correct: 0, achievement: "🎯 Exposure Filter" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L7 - ДВОСТЕПЕН МОДЕЛ", question: "Кој ги пренесува информациите од медиумите до пошироката јавност според двостепениот модел?", answers: ["Државните органы", "лидерите на мислење", "Вештачката интелигенција"], correct: 1, achievement: "🗣️ Opinion Scout" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L8 - КУЛТИВАЦИЈА", question: "Која теорија тврди дека долготрајното гледање телевизија ја обликува перцепцијата за реалноста?", answers: ["Култивациска теорија (Cultivation Theory)", "Ехо комора", "Прајминг"], correct: 0, achievement: "📺 Cultivation Critic" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L9 - КОРИСТ И ЗАДОВОЛСТВО", question: "Што претпоставува Теоријата на корист и задоволство (Uses and Gratifications) за публиката?", answers: ["Публиката е лесна за манипулација", "Активна и свесно бира медиуми за да задоволи специфични потреби", "Публиката не размислува"], correct: 1, achievement: "⚡ Active Consumer" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L10 - АГЕНДА", question: "Како се нарекува способноста на медиумите да одредат кои теми се важни за јавна дискусија?", answers: ["Агенда сетинг", "Спин", "Астротурфинг"], correct: 0, achievement: "📋 Agenda Decoder" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L11 - СИМБОЛИ", question: "Која научна дисциплина се занимава со проучување на знаците, симболите и нивното значење?", answers: ["Семиотика", "Психологија", "Кибернетика"], correct: 0, achievement: "🔣 Semiotics Master" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L12 - КОДИРАЊЕ", question: "Според Стјуарт Хол, што може да направи публиката ако не се согласува со доминантната порака?", answers: ["Да престане да гледа ТВ", "Одбие содржината преку опозициско читање", "Веднаш да ја прифати"], correct: 1, achievement: "🛡️ Decoder Rebel" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L13 - ПРАЈМИНГ", question: "Кој медиумски ефект ги активира претходните знаења и контексти кај публиката перед да донесе суд?", answers: ["Прајминг (Priming)", "Гаслајтинг", "Кликбејт"], correct: 0, achievement: "🧠 Prime Analyst" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L14 - КОНВЕРГЕНЦИЈА", question: "Како се нарекува спојувањето на традиционалните медиуми (радио, печат) во еден дигитален простор?", answers: ["Медиумска конвергенција", "Диверзификација", "Технолошки колапс"], correct: 0, achievement: "🌐 Convergence Sage" },
//     { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L15 - ЈАВНА СФЕРА", question: "Кој германски филозоф го разви концептот за 'Јавна сфера' како простор за критичка дебата?", answers: ["Карл Маркс", "Јирген Хабермас", "Фридрих Ниче"], correct: 1, achievement: "👑 Communication Overlord" },
//
//     // === ПОГЛАВЈЕ 2: ФАБРИКУВАЊЕ ВЕСТИ И СПИН ===
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L1 - СПИН СТРАТЕГИЈА", question: "Која е примарната задача на ПР експертите за спинување?", answers: ["Бришење на архиви", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Пишување реални вести"], correct: 1, achievement: "🌀 Spin Dissolver" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L2 - СЕНЗАЦИИ", question: "Како се нарекуваат насловите создадени исклучиво за да привлечат кликови за профит?", answers: ["Истражување", "кликбејт (Clickbait)", "Официјален демант"], correct: 1, achievement: "🎣 Hook Evader" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L3 - ЕРА", question: "Што означува состојбата на т.н. 'Пост-вистина' во денешното општество?", answers: ["Целосна забрана за лаги", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Крај на социјалните мрежи"], correct: 1, achievement: "👁️ Reality Anchored" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L4 - ТАБЛОИДИ", question: "Кои теми најчесто доминираат во жолтиот печат и таблоидите?", answers: ["Економски анализи", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Научни откритија"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L5 - ПАРИ И ФИЛТРИ", question: "Според Чомски, од што најмногу зависи независноста на приватните медиуми?", answers: ["Дод желбата на уредникот", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Од бројот на лајкови"], correct: 1, achievement: "📖 Chomsky Analyst" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L6 - ПРЕТЕРУВАЊЕ", question: "Кога еден медиум користи хиперболи и шокантни наслови за банални настани, тоа е:", answers: ["Сензационализам", "Објективност", "Длабока анализа"], correct: 0, achievement: "📢 Hype Defuser" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L7 - ВРАМУВАЊЕ", question: "Како се нарекува менталниот контекст во кој се става една вест за да се насочи мислењето?", answers: ["Врамување (Framing)", "Агенда", "Ехо ефект"], correct: 0, achievement: "🖼️ Frame Decoder" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L8 - ЛАЖНИ ГРАЃАНИ", question: "Што е тоа 'Astroturfing' во модерните медиумски кампањи?", answers: ["Садење вештачка трева", "Вештачко креирање лажна слика дека зад некоја кампања стои спонтано граѓанско движење", "Хакирање сајтови"], correct: 1, achievement: "🌱 Astro Unmasker" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L9 - ДИСКРЕДИТАЦИЈА", question: "Како се нарекува нападот врз личноста на некој поединец со цел да се уништи неговиот углед?", answers: ["Карактерен атентат (Character Assassination)", "Правна заштита", "Физички напад"], correct: 0, achievement: "⚔️ Shield of Honor" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L10 - ТОЧНО И ЛАЖНО", question: "Кога една информација содржи точни факти но е намерно изменета за да заведе, тоа е:", answers: ["Целосна невистина", "полувистина", "Апсолутна вистина"], correct: 1, achievement: "🌓 Half-Truth Detector" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L11 - ГАСЛАЈТИНГ", question: "Кој метод прави публиката да се сомнева во сопствениот разум и меморија преку лажни податоци?", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Прајминг", "Gatekeeping"], correct: 0, achievement: "🕯️ Gaslight Snuffer" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L12 - ИЗБОР", question: "Кога медиумот ти нуди само две екстремни решенија, игнорирајќи го средниот пат, прави:", answers: ["Лажна дихотомија", "Објективен избор", "Плурализам"], correct: 0, achievement: "⚖️ Logic Keeper" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L13 - ИЗВАДОК", question: "Кога изјава на политичар се пренесува без да се каже зошто и каде е кажана, правиме:", answers: ["деконтекстуализација", "Врамување", "Проверка на факти"], correct: 0, achievement: "🧩 Context Restorer" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L14 - ИНФОТЕЈНМЕНТ", question: "Што подразбира копирањето на 'Infotainment' во модерните телевизии?", answers: ["Чиста научна програма", "Спој на вести и забава каде информацијата се банализира за да биде комерцијална", "Државен извештај"], correct: 1, achievement: "🎬 Media critic" },
//     { chapterId: 2, chapterName: "Поглавје 2: Фабрикување Вести и Спин", title: "L15 - СТРАВ", question: "Како се нарекуваат стратегијата за постојано ширење паника за да се контролира масата?", answers: ["Fearmongering (Ширење страв)", "Култивација", "Агенда сетинг"], correct: 0, achievement: "🛡️ Fearless Mind" },
//
//     // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И СОЦИЈАЛНИ МЕДИУМИ ===
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L1 - ЕХО КРЕДО", question: "Како социјалните мрежи влијаат врз засилувањето на едностраните мислења кај корисниците?", answers: ["Преку аудио ефекти", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Со бришење на апликацијата"], correct: 1, achievement: "🚪 Wall Breaker" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L2 - МЕУР", question: "Што прават алгоритмите на Google и Facebook со т.н. 'Филтер меурчиња'?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Ги бришат сите вируси", "Носат нови пријатели"], correct: 0, achievement: "🧼 Bubble Popper" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L3 - СТРАВ ОД ПРОПУШТАЊЕ", question: "Кој психолошки ефект ве тера постојано да ја рефреширате мрежата од страв да не пропуштите нешто?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Параноја", "Еуфорија"], correct: 0, achievement: "📱 Digital Detoxer" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L4 - АНГЛИЖМАН", question: "Зошто алгоритмите најмногу сакаат објави кои предизвикуваат лутина кај луѓето?", answers: ["Луѓето се посреќни тогаш", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Случаен избор"], correct: 1, achievement: "⚡ Rage Defuser" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L5 - ТРАГА", question: "Како се нарекуваат сите ваши траги од кликови, лајкови и локации на интернет?", answers: ["Привремен код", "Дигтален отисок (Digital Footprint)", "ИД картичка"], correct: 1, achievement: "👣 Trail Conscious" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L6 - ПРЕДРАСУДИ", question: "Што е тоа 'Алгоритамска пристрасност' (Algorithmic Bias)?", answers: ["Кога кодот на социјалните мрежи рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам се гаси", "Грешка во интернетот"], correct: 0, achievement: "🤖 Code Auditor" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L7 - ФАРМИ", question: "Како се нарекуваат компаниите кои продаваат лажни лајкови и следачи преку ботови?", answers: ["клик-фарми", "Дата центри", "Блокчејн мрежи"], correct: 0, achievement: "🚜 Bot Farmer Slayer" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L8 - БЛОК", question: "Кога платформата дискретно ја намалува видливоста на твојот профил без да те извести, тоа е:", answers: ["Shadowbanning (Блокирање во сенка)", "Траен бан", "Приватен профил"], correct: 0, achievement: "👤 Ghost Detector" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L9 - МИКРОТАРГЕТИНГ", question: "Што подразбира поимот психолошко микротаргетирање во рекламите?", answers: ["Испорака на високо специфични, персонализирани пораки до мали групи врз основа на нивните психолошки профили", "Рекламирање на мали производи", "Масовни ТВ реклами"], correct: 0, achievement: "🎯 Target Sniper" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L10 - СКАНДАЛ", question: "Која компанија беше во центарот на скандалот со злоупотреба на податоци од Facebook за избори?", answers: ["Cambridge Analytica", "Google Inc", "OpenAI"], correct: 0, achievement: "📊 Data Guardian" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L11 - ДОПАМИН", question: "Како нотификациите и лајковите влијаат врз мозокот на корисникот?", answers: ["Создаваат допаминска јамка на зависност која те тера да останеш на апликацијата", "Го подобруваат сонот", "Немаат никакво влијание"], correct: 0, achievement: "🧠 Dopamine Master" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L12 - ИНФОДЕМИЈА", question: "Како се нарекува преплавеноста со точни и лажни вести за време на некоја глобална криза?", answers: ["Прекумерно ширење и преплавеност со информации (точни и лажни) за време на глобална криза", "Пандемија", "Дигитална блокада"], correct: 0, achievement: "🧪 Crisis Analyst" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L13 - ШЕМИ", question: "Како се нарекуваат дизајнерските трикови во апликациите кои те тераат да купиш нешто немудро?", answers: ["темни шеми (Dark Patterns)", "Кориснички интерфејс", "Отворен код"], correct: 0, achievement: "🕸️ UI/UX Inspector" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L14 - СЛИСТАЊЕ", question: "Постојаното скролање низ лоши и депресивни вести на социјалните мрежи се нарекува:", answers: ["Doomscrolling", "Брзо читање", "Медиумско опуштање"], correct: 0, achievement: "📉 Doom Breaker" },
//     { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L15 - ВАЛУТА", question: "Што е главниот извор на профит за бесплатните социјални мрежи денес?", answers: ["Времето и вниманието на корисникот", "Претплати", "Државни донации"], correct: 0, achievement: "💰 Attention Economist" },
//
//     // === ПОГЛАВЈЕ 4: ПРОВЕРКА НА ФАКТИ ===
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L1 - ЛАГА СО НАМЕРА", question: "Што точно претставува дезинформацијата?", answers: ["Печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Превод на странски текст"], correct: 1, achievement: "🔬 Disinfo Dissector" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L2 - ЛАГА БЕЗ НАМЕРА", question: "Што е карактеристично за т.н. мизинформација?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјален извештај", "Злонамерен вирус"], correct: 0, achievement: "👵 Family Educator" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L3 - ВЕШТАЧКО ВИДЕО", question: "Кога компјутерски се монтира лице на political да изговори нешто што никогаш не го кажал, тоа е:", answers: ["Обичен колаж", "Дипфејк (Deepfake) дезинформација", "Фотографија со филтер"], correct: 1, achievement: "🤖 AI Investigator" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L4 - ХУМОР", question: "Што е потребно за јавноста да не ги сфаќа хумористичните вести како вистински?", answers: ["Забрана за хумор", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Повеќе полиција"], correct: 1, achievement: "🎭 Irony Detector" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L5 - СУБЈЕКТИВНОСТ", question: "Кога еден медиум известува само за едната страна на политичкиот спектар, покажува:", answers: ["Професионализам", "Медиумска пристрасност (Media Bias)", "Апсолутна точност"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L6 - СЛИКА", question: "Која алатка помага да откриете дали една слика на интернет е стара или преземена од друг настан?", answers: ["Обратно пребарување слики (Reverse Image Search)", "Фотошоп", "Инстаграм филтер"], correct: 0, achievement: "🔍 Image Detective" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L7 - ПОДАТОЦИ", question: "Каде се сокриени информациите за тоа кога и со кој апарат е направена една дигитална слика?", answers: ["метаподатоци (EXIF)", "Во името на фајлот", "Никаде"], correct: 0, achievement: "💾 Metadata Hacker" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L8 - ИЗВОР", question: "Што претставува примарен извор во истражувачкото новинарство?", answers: ["Трач од социјалните мрежи", "Оригинален документ, официјална изјава или сведок кој директно присуствувал на настанот", "Прераскажана вест"], correct: 1, achievement: "📜 Source Verifier" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L9 - ДОМЕН", question: "Кога напаѓачот купува домен многу сличен на некој познат бренд (пр. googlee.com) за да измами, тоа е:", answers: ["Typosquattng / Клониран домен", "Маркетинг трик", "Официјално партнерство"], correct: 0, achievement: "🌐 URL Inspector" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L10 - СИНТЕТИКА", question: "Како се нарекуваат сите медиумски содржини (текст, слики, видеа) генерирани од AI?", answers: ["традиционални медиуми", "синтетички медиуми", "Органски содржини"], correct: 1, achievement: "🦾 AI Synthesizer" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L11 - МРЕЖА", question: "Која меѓународна организација ги сертифицира независните проверувачи на факти во светот?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "НАТО", "УНЕСКО"], correct: 0, achievement: "🌍 Global Fact-Checker" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L12 - ЛАТЕРАЛНО ЧИТАЊЕ", question: "Што подразбира техниката на латерално читање (Lateral Reading) при проверка на информации?", answers: ["Читање на текстот од почеток до крај", "Отворање нови табови во прелистувачот за да се види што велат други независни извори за тој сајт", "Читање со лупа"], correct: 1, achievement: "📑 Lateral Reader" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L13 - УБЕДУВАЊЕ", question: "Кога веруваш во некоја лажна вест само затоа што таа се совпаѓа со твоите political ставови, имаш:", answers: ["потврдувачка пристрасност", "Критичко размислување", "Добра интуиција"], correct: 0, achievement: "🧠 Ego Overcomer" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L14 - ТВИТ", question: "Како ќе проверите дали некој познат political навистина објавил шокантен скриншот од Твитер?", answers: ["Му верувам на скриншотот веднаш", "Проверувам на официјалниот профил и архивите дали навистина постои таков твит, бидејќи скриншотот лесно се монтира со 'Inspect Element'", "Го споделувам со пријателите"], correct: 1, achievement: "🐦 Tweet Buster" },
//     { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L15 - ГЛАС", question: "Како се нарекува технологијата со која AI може да го клонира гласот на секој човек за измама?", answers: ["Deep Voice / Гласовен клон преку AI", "Аудио Спикер", "Радио бран"], correct: 0, achievement: "🎙️ Sound Auditor" },
//
//     // === ПОГЛАВЈЕ 5: КРИЗНА КОМУНИКАЦИЈА И ЕТИКА ===
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L1 - ПР КРИЗА", question: "Што е најважно за ПР службата во случај на вонредна состојба или хаварија?", answers: ["Да молчи додека се заврши истрагата", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги исклучи серверите"], correct: 1, achievement: "📢 Crisis Leader" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L2 - ОМРАЗА", question: "Што претставува говорот на омраза во јавниот комуникациски простор?", answers: ["Секоја остра критика", "Јавна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Лоша рецензија"], correct: 1, achievement: "🕊️ Peace Advocate" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L3 - МОЛК", question: "Зошто поединците често молчат ако нивното мислење не е поддржано од мнозинството на мрежите?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Поради технички проблеми", "Затоа што не ги интересира"], correct: 0, achievement: "🐚 Spiral Breaker" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L4 - СТРАВ ОД СТАТУС", question: "Кога новинарот сам ја трга својата точна сторија од страв од сопственикот на медиумот, имаме:", answers: ["Државна цензура", "Автоцензура (Self-censorship)", "Правна уредба"], correct: 1, achievement: "🖋️ Fearless Voice" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L5 - СТОЛБ", question: "Што е најважната обврска во Етичкиот кодекс на новинарите?", answers: ["Брза заработка", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Слушање на партијата"], correct: 1, achievement: "👑 Supreme Media Overlord" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L6 - СУД", question: "Која е разликата меѓу навреда и клевета според законот?", answers: ["Нема разлика", "Навредата е омаловажувачко мислење, а клеветата е изнесување на невистинити тврдења за факти кои му штетат на угледот", "Клеветата е усна, навредата писмена"], correct: 1, achievement: "⚖️ Legal Scholar" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L7 - АНОНИМНОСТ", question: "Кое право му овозможува на новинарот да не го открие идентитетот на својот укажувач?", answers: ["заштита на извори", "Државна тајна", "Приватност на фирмата"], correct: 0, achievement: "🤫 Secret Keeper" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L8 - КОНФЛИКТ", question: "Ако новинар пишува пофална вест за фирма во која неговиот брат е сопственик, тој се наоѓа во:", answers: ["Конфликт на интереси", "Професионален развој", "Истражувачки процес"], correct: 0, achievement: "🧼 Integrity Knight" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L9 - БЕКГРАУНД", question: "Што значат кога еден извор ќе каже дека информацијата е дадена 'Off the record'?", answers: ["Може веднаш да се цитира", "Информација служи само како позадина за разбирање на настанот, но не смее да се објави или цитира во медиумот", "Тоа е лажна вест"], correct: 1, achievement: "🕵️ Deepthroat Contact" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L10 - ОДЛОЖУВАЊЕ", question: "Кога ПР службата бара од медиумите да не ја објавуваат веста до точно одредено време, бара:", answers: ["ембарго за вести", "Трајна цензура", "Правна забрана"], correct: 0, achievement: "⏳ Embargo Master" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L11 - РЕКЕТ", question: "Ако медиум бара пари од бизнисмен за да НЕ објави компромитирачка сторија за него, прави:", answers: ["Медиумска уцена / рекет (неетичко и кривично дело)", "Маркетинг соработка", "Спонзорство"], correct: 0, achievement: "🚨 Crime Crusher" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L12 - ЗАБОРАВ", question: "Што подразбира т.н. 'Право да бидеш заборавен' (Right to be forgotten) на internet?", answers: ["Бришење на меморијата на корисникот", "Право на граѓаните да побараат отстранување на застарени или ирелевантни линкови од резултатите на Google", "Исклучување на социјалните мрежи"], correct: 1, achievement: "🧹 Digital Eraser" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L13 - ПРИКРИВАЊЕ", question: "Кога во текст кој изгледа како обична вест е вметнат линк за купување производ без ознака, тоа е:", answers: ["прикриена реклама", "Препорака", "Професионален совет"], correct: 0, achievement: "🕵️ Stealth Detector" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L14 - ИМИТАЦИЈА", question: "Зошто медиумите мора со исклучително внимание и без сензационализам да известуваат за самоубиства?", answers: ["Заради заштеда на простор", "Поради Вертеровиот ефект (ризик од поттикнување бранови на имитација кај ранливи групи)", "Поради државни казни"], correct: 1, achievement: "📉 Empathy Guardian" },
//     { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L15 - СКРИЕНА КАМЕРА", question: "Кога е етички оправдано новинарот да користи скриени камери или тајно снимање?", answers: ["За забава на публиката", "Кога откривањето на информацијата е од исклучителен Јавен интерес (пр. корупција) а не може да се обезбеди на друг начин", "Никогаш не е оправдано"], correct: 1, achievement: "🛡️ Supreme Media Overlord" }
// ];
//
// const chapterStarts = { 1: 0, 2: 15, 3: 30, 4: 45, 5: 60 };
//
// let savedHighScore = localStorage.getItem("proMediaHighScore2026") || 0;
// document.getElementById("highScoreValue").innerText = savedHighScore;
//
// const introScreen = document.getElementById("intro");
// const mapScreen = document.getElementById("levelSelectorPage");
// const gameScreen = document.getElementById("gamePage");
// const finalScreen = document.getElementById("finalScreen");
// const avatar = document.getElementById("avatarSprite");
//
// document.getElementById("startBtn").addEventListener("click", () => {
//     const inputVal = document.getElementById("usernameInput").value.trim();
//     if (inputVal !== "") playerName = inputVal;
//
//     introScreen.classList.add("hidden");
//     mapScreen.classList.remove("hidden");
//     document.getElementById("playerGreeting").innerText = playerName;
//
//     buildMapDashboard();
//     loadComments();
//     initTimer();
// });
//
// document.getElementById("backToMapBtn").addEventListener("click", () => {
//     gameScreen.classList.add("hidden");
//     mapScreen.classList.remove("hidden");
//     buildMapDashboard();
// });
//
// function initTimer() {
//     if(gameInterval) clearInterval(gameInterval);
//     gameInterval = setInterval(() => {
//         if (gameScreen.classList.contains("hidden")) return;
//         timeLeft--;
//         document.getElementById("timer").innerText = timeLeft;
//         if (timeLeft <= 0) {
//             let currentChapterId = levels[currentLevel].chapterId;
//             chapterStatus[currentChapterId] = 'failed';
//             finishGame(false);
//         }
//     }, 1000);
// }
//
// function getLocalIndex(globalIndex) {
//     let targetChapterId = levels[globalIndex].chapterId;
//     let count = 0;
//     for (let i = 0; i < globalIndex; i++) {
//         if (levels[i].chapterId === targetChapterId) {
//             count++;
//         }
//     }
//     return count;
// }
//
// function buildMapDashboard() {
//     const container = document.getElementById("chaptersContainer");
//     container.innerHTML = "";
//
//     const chapters = {};
//     levels.forEach((level, index) => {
//         if (!chapters[level.chapterId]) {
//             chapters[level.chapterId] = { name: level.chapterName, nodes: [] };
//         }
//         chapters[level.chapterId].nodes.push({ level, globalIndex: index });
//     });
//
//     for (let id in chapters) {
//         const card = document.createElement("div");
//         card.classList.add("chapter-card");
//
//         const title = document.createElement("h4");
//         title.innerText = chapters[id].name;
//         card.appendChild(title);
//
//         const status = chapterStatus[id];
//
//         if (status === 'success') {
//             const btnContainer = document.createElement("div");
//             btnContainer.style.display = "flex";
//             btnContainer.style.gap = "10px";
//             btnContainer.style.marginTop = "15px";
//
//             const successBtn = document.createElement("button");
//             successBtn.className = "cyber-btn";
//             successBtn.innerText = "ЗАВРШЕНО ✓";
//             successBtn.style.background = "#22c55e";
//             successBtn.style.color = "#ffffff";
//             successBtn.style.boxShadow = "0 0 12px #22c55e";
//             successBtn.style.flex = "1";
//             successBtn.style.cursor = "default";
//
//             const replayBtn = document.createElement("button");
//             replayBtn.className = "cyber-btn";
//             replayBtn.innerText = "ИГРАЈ ПОВТОРНО ↺";
//             replayBtn.style.background = "#8b5cf6";
//             replayBtn.style.flex = "1";
//             replayBtn.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
//
//             btnContainer.appendChild(successBtn);
//             btnContainer.appendChild(replayBtn);
//             card.appendChild(btnContainer);
//
//         } else if (status === 'failed') {
//             const btnContainer = document.createElement("div");
//             btnContainer.style.display = "flex";
//             btnContainer.style.marginTop = "15px";
//
//             const retryBtn = document.createElement("button");
//             retryBtn.className = "cyber-btn";
//             retryBtn.innerText = "ОБИДИ СЕ ПОВТОРНО ↻";
//             retryBtn.style.background = "#000000";
//             retryBtn.style.color = "#ef4444";
//             retryBtn.style.border = "2px solid #ef4444";
//             retryBtn.style.boxShadow = "0 0 15px #ef4444";
//             retryBtn.style.width = "100%";
//             retryBtn.style.fontWeight = "bold";
//             retryBtn.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
//
//             btnContainer.appendChild(retryBtn);
//             card.appendChild(btnContainer);
//
//         } else {
//             const grid = document.createElement("div");
//             grid.classList.add("nodes-grid");
//
//             chapters[id].nodes.forEach((item, localIndex) => {
//                 const node = document.createElement("div");
//                 node.classList.add("map-node");
//                 node.innerText = localIndex + 1;
//
//                 if (localIndex === 0) {
//                     node.classList.add("active");
//                     node.onclick = () => { launchGameAtLevel(chapterStarts[id]); };
//                 } else {
//                     node.classList.add("locked");
//                 }
//                 grid.appendChild(node);
//             });
//             card.appendChild(grid);
//         }
//
//         container.appendChild(card);
//     }
// }
//
// function launchGameAtLevel(index) {
//     currentLevel = index;
//
//     lives = 3;
//     credibility = 100;
//     darkBotHP = 450;
//     combo = 0;
//     score = 0;
//
//     mapScreen.classList.add("hidden");
//     gameScreen.classList.remove("hidden");
//     updateAvatarPosition();
//     loadLevel();
// }
//
// function updateAvatarPosition() {
//     let localIdx = getLocalIndex(currentLevel);
//     let percent = (localIdx / 14) * 90;
//     avatar.style.left = percent + "%";
// }
//
// function updateStats() {
//     document.getElementById("lives").innerText = lives;
//     document.getElementById("credibility").innerText = credibility;
//     document.getElementById("scoreValue").innerText = score;
//     document.getElementById("bossHP").innerText = Math.max(0, darkBotHP);
//     document.getElementById("comboMultiplier").innerText = combo > 1 ? combo : 1;
// }
//
// function loadLevel() {
//     updateStats();
//     let level = levels[currentLevel];
//     document.getElementById("gameChapterTitle").innerText = level.chapterName;
//     document.getElementById("levelTitle").innerText = level.title;
//     document.getElementById("question").innerText = level.question;
//
//     const ansDiv = document.getElementById("answers");
//     ansDiv.innerHTML = "";
//     level.answers.forEach((answer, index) => {
//         const btn = document.createElement("button");
//         btn.classList.add("answerBtn");
//         btn.innerText = answer;
//         btn.onclick = () => checkAnswer(index);
//         ansDiv.appendChild(btn);
//     });
//
//     let progressPercent = Math.max(0, (darkBotHP / 450) * 100);
//     document.getElementById("progressBar").style.width = progressPercent + "%";
// }
//
// function checkAnswer(selected) {
//     let level = levels[currentLevel];
//     const buttons = document.querySelectorAll(".answerBtn");
//     buttons.forEach(btn => btn.disabled = true);
//
//     if (selected === level.correct) {
//         buttons[selected].classList.add("correct");
//         combo++;
//         let multiplier = combo > 1 ? combo : 1;
//         score += 25 * multiplier;
//         darkBotHP -= 30; // Фиксна штета од 30 HP за рамномерно празнење во сите 15 прашања
//         credibility = Math.min(100, credibility + 5);
//         if (!achievements.includes(level.achievement)) achievements.push(level.achievement);
//
//         avatar.classList.add("celebrate");
//         setTimeout(() => avatar.classList.remove("celebrate"), 1200);
//     } else {
//         buttons[selected].classList.add("wrong");
//         buttons[level.correct].classList.add("correct");
//         combo = 0;
//         lives--;
//         credibility -= 20;
//     }
//
//     updateStats();
//
//     if (lives <= 0 || credibility <= 0) {
//         let currentChapterId = levels[currentLevel].chapterId;
//         chapterStatus[currentChapterId] = 'failed';
//
//         document.getElementById("holeElement").classList.remove("hidden");
//         avatar.style.left = "50%";
//         setTimeout(() => {
//             avatar.classList.add("fall-in-hole");
//             setTimeout(() => { finishGame(false); }, 1400);
//         }, 500);
//         return;
//     }
//
//     document.getElementById("nextBtn").classList.remove("hidden");
// }
//
// document.getElementById("nextBtn").addEventListener("click", () => {
//     let currentChapterId = levels[currentLevel].chapterId;
//
//     document.getElementById("nextBtn").classList.add("hidden");
//     currentLevel++;
//
//     // СЕГА ОДИ СЕКОГАШ СТРОГО ДО КРАЈОТ НА СИТЕ 15 ПРАШАЊА ОД ПОГЛАВЈЕТО
//     if (currentLevel < levels.length && levels[currentLevel].chapterId === currentChapterId) {
//         updateAvatarPosition();
//         loadLevel();
//     } else {
//         chapterStatus[currentChapterId] = 'success';
//         finishGame(true);
//     }
// });
//
// function buyItem(item) {
//     if (item === 'life') {
//         if (score >= 70) {
//             score -= 70;
//             lives++;
//             alert("🛡️ Ангажиравте надворешни ПР експерти! (+1 Живот)");
//         } else { alert("❌ Немате доволно поени!"); }
//     } else if (item === 'credibility') {
//         if (score >= 50) {
//             score -= 50;
//             credibility = Math.min(100, credibility + 25);
//             alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
//         } else { alert("❌ Немате доволно поени!"); }
//     }
//     updateStats();
// }
//
// function addComment() {
//     const commentInput = document.getElementById("chatComment");
//     const text = commentInput.value.trim();
//     if (text === "") return;
//     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
//     let newComment = {
//         name: playerName,
//         message: text,
//         time: new Date().toLocaleTimeString()
//     };
//     comments.push(newComment);
//     localStorage.setItem("mediaGameComments", JSON.stringify(comments));
//     commentInput.value = "";
//     loadComments();
// }
//
// function loadComments() {
//     const chatBox = document.getElementById("chatBox");
//     let comments = JSON.parse(localStorage.getItem("mediaGameComments")) || [];
//
//     if(comments.length === 0) {
//         comments = [
//             { name: "Професор по Медиуми", message: "Одличен концепт на игра. Ги опфаќа сите клучни дефиниции од предавањата!", time: "12:30" },
//             { name: "Ана (Студент)", message: "Многу ми помогна да ја разберам теоријата за Спирала на молчењето!", time: "14:15" }
//         ];
//         localStorage.setItem("mediaGameComments", JSON.stringify(comments));
//     }
//
//     chatBox.innerHTML = comments.map(c => `
//         <div class="chat-msg">
//             <strong>${c.name}:</strong> ${c.message} <span>${c.time}</span>
//         </div>
//     `).join("");
//     chatBox.scrollTop = chatBox.scrollHeight;
// }
//
// function resetToMap() {
//     finalScreen.classList.add("hidden");
//     mapScreen.classList.remove("hidden");
//     document.getElementById("holeElement").classList.add("hidden");
//     avatar.classList.remove("fall-in-hole");
//     buildMapDashboard();
// }
//
// function finishGame(win) {
//     gameScreen.classList.add("hidden");
//     mapScreen.classList.add("hidden");
//     finalScreen.classList.remove("hidden");
//
//     if (score > savedHighScore) {
//         localStorage.setItem("proMediaHighScore2026", score);
//         savedHighScore = score;
//         document.getElementById("highScoreValue").innerText = savedHighScore;
//     }
//
//     let rank = "Медиумски Аналитичар";
//     if (score >= 200) rank = "Виш Сајбер-Комуникатолог";
//     if (score >= 350) rank = "Мастер на Комуникациски Науки & Специјалист по Кризен ПР 👑";
//     let dateToday = new Date().toLocaleDateString('mk-MK', { year: 'numeric', month: 'long', day: 'numeric' });
//
//     if (win) {
//         let badgesHtml = achievements.map(a => `<span class="badge">${a}</span>`).join(" ");
//         finalScreen.innerHTML = `
//             <h1 style="color: var(--success);">🏆 МОДУЛОТ Е УСПЕШНО СОВЛАДАН!</h1>
//             <p>Честитки! Успешно го поминавте ова поглавје од 15 прашања без да паднете во стапиците на дезинформациите.</p>
//
//             <div class="certificate-frame" id="printableCertificate">
//                 <h2>СЕРТИФИКАТ ЗА ДИГИТАЛНА И МЕДИУМСКА ПИСМЕНОСТ</h2>
//                 <div class="sub">Овој документ официјално се доделува на:</div>
//                 <div class="certificate-name">${playerName}</div>
//                 <p>За успешно завршување на сајбер-симулацијата на катедрата за <strong>Медиуми и Комуникации</strong>.</p>
//                 <p>Критички ги деконструираше сите предизвици на лажни вести, алгоритми, спинови и манипулативни ехо-комори, со ранк:</p>
//                 <h3 style="color:#b45309; font-size:22px; margin: 10px 0;">${rank}</h3>
//                 <p>Освоени поени во поглавјето: <strong>${score}</strong> | Преостанат Кредибилитет: <strong>${credibility}%</strong></p>
//
//                 <div class="cert-footer">
//                     <div>📅 Датум: ${dateToday}</div>
//                     <div>🛡️ Верификувано од: Cyber Shield Hub 2026</div>
//                 </div>
//             </div>
//
//             <button onclick="window.print()" class="small-btn" style="background:var(--gold); color:black; font-weight:bold; margin-bottom:15px;">🖨️ Печати / Зачувај го Сертификатот</button>
//             <br>
//             <h3>🏅 Твоите Сајбер Трофеи:</h3>
//             <div style="margin: 15px 0;">${badgesHtml}</div>
//             <br>
//             <button onclick="resetToMap()" class="cyber-btn">ВРТИ СЕ НАЗАД КОН НИВОАТА</button>
//         `;
//     } else {
//         finalScreen.innerHTML = `
//             <h1 style="color: var(--accent);">💀 МЕДИУМСКИ КОЛАПС (ИГРАТА ЗАВРШИ)</h1>
//             <p>Вашиот аватар пропадна во дупката на манипулациите и дезинформациите на DarkBot бидејќи изгубивте премногу животи.</p>
//             <p>Освоивте <strong>${score}</strong> поени во ова поглавје.</p>
//             <br>
//             <button onclick="resetToMap()" class="cyber-btn" style="background: linear-gradient(90deg, #000, #ef4444)">ОБНОВИ СИСТЕМ (НАЗАД КОН МАПА)</button>
//         `;
//     }
// }
//
// setTimeout(() => {
//     document.getElementById("loadingScreen").style.display = "none";
//     document.getElementById("mainContainer").classList.remove("hidden");
// }, 1500);


let currentLevel = 0;
let score = 0;
let lives = 3;
let credibility = 100;
let darkBotHP = 450; // Точно балансирано за 15 прашања (15 * 30 dmg = 450)
let achievements = [];
let timeLeft = 600;
let gameInterval;
let combo = 0;
let playerName = "Студент";

// Следење на состојбата на секое поглавје
let chapterStatus = { 1: 'active', 2: 'active', 3: 'active', 4: 'active', 5: 'active' };

const levels = [
    // === ПОГЛАВЈЕ 1: ТЕОРИИ НА КОМУНИКАЦИЈА ===
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L1 - МЕДИУМОТ Е ПОРАКАТА", question: "Познатиот теоретичар Маршал Меклуан тврди дека 'Медиумот е пораката'. Што подразбира ова?", answers: ["Самата содржина на веста е најважна", "Медиумот е пораката", "Писмата се подобар медиум од социјалните мрежи"], correct: 1, achievement: "🧠 McLuhan Disciple" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L2 - GATEKEEPING", question: "Како се нарекува филтрирањето на вестите од страна на уредниците?", answers: ["Gatekeeping (Чувари на портите)", "Агенда Сетинг", "Слободен пазар"], correct: 0, achievement: "🚪 Gatekeeper Analyst" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L3 - ЛАСУЕЛОВ МОДЕЛ", question: "Кое прашање во моделот на Ласуел во моделот се однесува на крајниот исход?", answers: ["Кој вели?", "Низ кој канал?", "Со каков ефект?"], correct: 2, achievement: "📊 Lasswell Expert" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L4 - ИГЛА", question: "Кои теорија вели дека медиумите имаат директно и моќно влијание врз пасивната публика?", answers: ["хиподермична игла", "Селективно изложување", "Двостепен модел"], correct: 0, achievement: "💉 Needle Deconstructer" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L5 - ПЛУРАЛИЗАМ", question: "Зошто е важен медиумскиот плурализам во јавната сфера?", answers: ["За повеќе забава", "За да се обезбеди кохабитација на различни сопственици, мислења, културни и political ставови во јавноста", "За државна контрола"], correct: 1, achievement: "🏛️ Pluralism Defender" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L6 - ИЗЛОЖЕНОСТ", question: "Како се нарекува феноменот каде луѓето бираат само медиуми што одговараат на нивните ставови?", answers: ["Селективна изложеност (Selective Exposure)", "Пасивна конзумација", "Масовна хипноза"], correct: 0, achievement: "🎯 Exposure Filter" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L7 - ДВОСТЕПЕН МОДЕЛ", question: "Кој ги пренесува информациите од медиумите до пошироката јавност според двостепениот модел?", answers: ["Државните органы", "лидерите на мислење", "Вештачката интелигенција"], correct: 1, achievement: "🗣️ Opinion Scout" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L8 - КУЛТИВАЦИЈА", question: "Која теорија тврди приказот на телевизија ја обликува перцепцијата за реалноста по долго гледање?", answers: ["Култивациска теорија (Cultivation Theory)", "Ехо комора", "Прајминг"], correct: 0, achievement: "📺 Cultivation Critic" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L9 - КОРИСТ И ЗАДОВОЛСТВО", question: "Што претпоставува Теоријата на корист и задоволство (Uses and Gratifications) за публиката?", answers: ["Публиката е лесна за манипулација", "Активна и свесно бира медиуми за да задоволи специфични потреби", "Публиката не размислува"], correct: 1, achievement: "⚡ Active Consumer" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L10 - АГЕНДА", question: "Како се нарекува способноста на медиумите да одредат кои теми се важни за јавна дискусија?", answers: ["Агенда сетинг", "Спин", "Астротурфинг"], correct: 0, achievement: "📋 Agenda Decoder" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L11 - СИМБОЛИ", question: "Која научна дисциплина се занимава со проучување на знаците, симболите и нивното значење?", answers: ["Семиотика", "Психологија", "Кибернетика"], correct: 0, achievement: "🔣 Semiotics Master" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L12 - КОДИРАЊЕ", question: "Според Стјуарт Хол, што може да направи публиката ако не се согласува со доминантната порака?", answers: ["Да престане да гледа ТВ", "Одбие содржината преку опозициско читање", "Веднаш да ја прифати"], correct: 1, achievement: "🛡️ Decoder Rebel" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L13 - ПРАЈМИНГ", question: "Кој медиумски ефект ги активира претходните знаења и контексти кај публиката перед да донесе суд?", answers: ["Прајминг (Priming)", "Гаслајтинг", "Кликбејт"], correct: 0, achievement: "🧠 Prime Analyst" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L14 - КОНВЕРГЕНЦИЈА", question: "Како се нарекува спојувањето на傳統на медиуми (радио, печат) во еден дигитален простор?", answers: ["Медиумска конвергенција", "Диверзификација", "Технолошки колапс"], correct: 0, achievement: "🌐 Convergence Sage" },
    { chapterId: 1, chapterName: "Поглавје 1: Теории на Комуникација", title: "L15 - ЈАВНА СФЕРА", question: "Кој германски филозоф го разви концептот за 'Јавна сфера' како простор за критичка дебата?", answers: ["Карл Маркс", "Јирген Хабермас", "Фридрих Ниче"], correct: 1, achievement: "👑 Communication Overlord" },

    // === ПОГЛАВЈЕ 2: ФАБРИКУВАЊЕ ВЕСТИ И СПИН ===
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L1 - СПИН СТРАТЕГИЈА", question: "Која е примарната задача на ПР експертите за спинување?", answers: ["Бришење на архиви", "Пласираат информации уредени во посебен агол (врамување) за да ја свртат јавноста во корист на нивниот клиент", "Пишување реални вести"], correct: 1, achievement: "🌀 Spin Dissolver" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L2 - СЕНЗАЦИИ", question: "Како се нарекуваат насловите создадени исклучиво за да привлечат кликови за профит?", answers: ["Истражување", "кликбејт (Clickbait)", "Официјален демант"], correct: 1, achievement: "🎣 Hook Evader" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L3 - ЕРА", question: "Што означува состојбата на т.н. 'Пост-вистина' во денешното општество?", answers: ["Целосна забрана за лаги", "Состојба каде објективните факти влијаат помалку врз јавното мислење отколку емоциите и личните верувања", "Крај на социјалните мрежи"], correct: 1, achievement: "👁️ Reality Anchored" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L4 - ТАБЛОИДИ", question: "Кои теми најчесто доминираат во жолтиот печат и таблоидите?", answers: ["Економски анализи", "Трачеви, приватен живот на познати, сензационализам и непроверени извори", "Научни откритија"], correct: 1, achievement: "🟡 Anti-Tabloid Agent" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L5 - ПАРИ И ФИЛТРИ", question: "Според Чомски, од што најмногу зависи независноста на приватните медиуми?", answers: ["Дод желбата на уредникот", "Зависноста на медиумите од парите на моќните огласувачи (Реклами)", "Од бројот на лајкови"], correct: 1, achievement: "📖 Chomsky Analyst" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L6 - ПРЕТЕРУВАЊЕ", question: "Кога еден медиум користи хиперболи и шокантни наслови за банални настани, тоа е:", answers: ["Сензационализам", "Објективност", "Длабока анализа"], correct: 0, achievement: "📢 Hype Defuser" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L7 - ВРАМУВАЊЕ", question: "Како се нарекува менталниот контекст во кој се става една вест за да се насочи мислењето?", answers: ["Врамување (Framing)", "Агенда", "Ехо ефект"], correct: 0, achievement: "🖼️ Frame Decoder" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L8 - ЛАЖНИ ГРАЃАНИ", question: "Што е тоа 'Astroturfing' во модерните медиумски кампањи?", answers: ["Садење вештачка трева", "Вештачко креирање лажна слика дека зад некоја кампања стои спонтано граѓанско движење", "Хакирање сајтови"], correct: 1, achievement: "🌱 Astro Unmasker" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L9 - ДИСКРЕДИТАЦИЈА", question: "Како се нарекува нападот врз личноста на некој поединец со цел да се уништи неговиот углед?", answers: ["Карактерен атентат (Character Assassination)", "Правна заштита", "Физички напад"], correct: 0, achievement: "⚔️ Shield of Honor" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L10 - ТОЧНО И ЛАЖНО", question: "Кога една информација содржи точни факти но е намерно изменета за да заведе, тоа е:", answers: ["Целосна невистина", "полувистина", "Апсолутна вистина"], correct: 1, achievement: "🌓 Half-Truth Detector" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L11 - ГАСЛАЈТИНГ", question: "Кој метод прави публиката да се сомнева во сопствениот разум и меморија преку лажни податоци?", answers: ["Медиумски Гаслајтинг (Gaslighting)", "Прајминг", "Gatekeeping"], correct: 0, achievement: "🕯️ Gaslight Snuffer" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L12 - ИЗБОР", question: "Кога медиумот ти нуди само две екстремни решенија, игнорирајќи го средниот пат, прави:", answers: ["Лажна дихотомија", "Објективен избор", "Плурализам"], correct: 0, achievement: "⚖️ Logic Keeper" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L13 - ИЗВАДОК", question: "Кога изјава на политичар се пренесува без да се каже зошто и каде е кажана, правиме:", answers: ["деконтекстуализација", "Врамување", "Проверка на факти"], correct: 0, achievement: "🧩 Context Restorer" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L14 - ИНФОТЕЈНМЕНТ", question: "Што подразбира копирањето на 'Infotainment' во модерните телевизии?", answers: ["Чиста научна програма", "Спој на вести и забава каде информацијата се банализира за да биде комерцијална", "Државен извештај"], correct: 1, achievement: "🎬 Media critic" },
    { chapterId: 2, chapterName: "Поглавје 2: Фабрикување вести и спин", title: "L15 - СТРАВ", question: "Како се нарекуваат стратегијата за постојано ширење паника за да се контролира масата?", answers: ["Fearmongering (Ширење страв)", "Култивација", "Агенда сетинг"], correct: 0, achievement: "🛡️ Fearless Mind" },

    // === ПОГЛАВЈЕ 3: АЛГОРИТМИ И СОЦИЈАЛНИ МЕДИУМИ ===
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L1 - ЕХО КРЕДО", question: "Како социјалните мрежи влијаат врз засилувањето на едностраните мислења кај корисниците?", answers: ["Преку аудио ефекти", "Информациите и верувањата се засилуваат бидејќи луѓето комуницираат само со тие што го делат истото мислење", "Со бришење на апликацијата"], correct: 1, achievement: "🚪 Wall Breaker" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L2 - МЕУР", question: "Што прават алгоритмите на Google и Facebook со т.н. 'Филтер меурчиња'?", answers: ["Ги изолираат корисниците со тоа што им прикажуваат содржини прилагодени изворно на нивните претходни пребарувања", "Ги бришат сите вируси", "Носат нови пријатели"], correct: 0, achievement: "🧼 Bubble Popper" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L3 - СТРАВ ОД ПРОПУШТАЊЕ", question: "Кој психолошки ефект ве тера постојано да ја рефреширате мрежата од страв да не пропуштите нешто?", answers: ["Поттикнуваат страв дека нешто пропушташ додека си офлајн (Fear of Missing Out)", "Параноја", "Еуфорија"], correct: 0, achievement: "📱 Digital Detoxer" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L4 - АНГЛИЖМАН", question: "Зошто алгоритмите најмногу сакаат објави кои предизвикуваат лутина кај луѓето?", answers: ["Луѓето се посреќни тогаш", "Бидејќи тие емоции носат најголем ангажман (Engagement), што алгоритмот го фаворизира за профит", "Случаен избор"], correct: 1, achievement: "⚡ Rage Defuser" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L5 - ТРАГА", question: "Како се нарекуваат сите ваши траги од кликови, лајкови и локации на интернет?", answers: ["Привремен код", "Дигтален отисок (Digital Footprint)", "ИД картичка"], correct: 1, achievement: "👣 Trail Conscious" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L6 - ПРЕДРАСУДИ", question: "Што е тоа 'Алгоритамска пристрасност' (Algorithmic Bias)?", answers: ["Кога кодот на социјалните мрежи рефлектира предрасуди на луѓето кои го напишале или податоците со кои е трениран", "Кога компјутерот сам се гаси", "Грешка во интернетот"], correct: 0, achievement: "🤖 Code Auditor" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L7 - ФАРМИ", question: "Како се нарекуваат компаниите кои продаваат лажни лајкови и следачи преку ботови?", answers: ["клик-фарми", "Дата центри", "Блокчејн мрежи"], correct: 0, achievement: "🚜 Bot Farmer Slayer" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L8 - БЛОК", question: "Кога платформата дискретно ја намалува видливоста на твојот профил без да те извести, тоа е:", answers: ["Shadowbanning (Блокирање во сенка)", "Траен бан", "Приватен профил"], correct: 0, achievement: "👤 Ghost Detector" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L9 - МИКРОТАРГЕТИНГ", question: "Што подразбира поимот психолошко микротаргетирање во рекламите?", answers: ["Испорака на високо специфични, персонализирани пораки до мали групи врз основа на нивните психолошки профили", "Рекламирање на мали производи", "Масовни ТВ реклами"], correct: 0, achievement: "🎯 Target Sniper" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L10 - СКАНДАЛ", question: "Која компанија беше во центарот на скандалот со злоупотреба на податоци од Facebook за избори?", answers: ["Cambridge Analytica", "Google Inc", "OpenAI"], correct: 0, achievement: "📊 Data Guardian" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L11 - ДОПАМИН", question: "Како нотификациите и лајковите влијаат врз мозокот на корисникот?", answers: ["Создаваат допаминска јамка на зависност која те тера да останеш на апликацијата", "Го подобруваат сонот", "Немаат никакво влијание"], correct: 0, achievement: "🧠 Dopamine Master" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L12 - ИНФОДЕМИЈА", question: "Како се нарекува преплавеноста со точни и лажни вести за време на некоја глобална криза?", answers: ["Прекумерно ширење и преплавеност со информации (точни и лажни) за време на глобална криза", "Пандемија", "Дигитална блокада"], correct: 0, achievement: "🧪 Crisis Analyst" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L13 - ШЕМИ", question: "Како се нарекуваат дизајнерските трикови во апликациите кои те тераат да купиш нешто немудро?", answers: ["темни шеми (Dark Patterns)", "Кориснички интерфејс", "Отворен код"], correct: 0, achievement: "🕸️ UI/UX Inspector" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L14 - СЛИСТАЊЕ", question: "Постојаното скролање низ лоши и депресивни вести на социјалните мрежи се нарекува:", answers: ["Doomscrolling", "Брзо читање", "Медиумско опуштање"], correct: 0, achievement: "📉 Doom Breaker" },
    { chapterId: 3, chapterName: "Поглавје 3: Алгоритми и Социјални Медиуми", title: "L15 - ВАЛУТА", question: "Што е главниот извор на профит за бесплатните социјални мрежи денес?", answers: ["Времето и вниманието на корисникот", "Претплати", "Државни донации"], correct: 0, achievement: "💰 Attention Economist" },

    // === ПОГЛАВЈЕ 4: ПРОВЕРКА НА ФАКТИ ===
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L1 - ЛАГА СО НАМЕРА", question: "Што точно претставува дезинформацијата?", answers: ["Печатна грешка", "Тоа е намерно креирана лажна вест со цел да се изманипулира јавноста или да се нанесе економска/политичка штета", "Превод на странски текст"], correct: 1, achievement: "🔬 Disinfo Dissector" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L2 - ЛАГА БЕЗ НАМЕРА", question: "Што е карактеристично за т.н. мизинформација?", answers: ["Споделување лажна информација, но без свесна намера да се предизвика штета", "Официјален извештај", "Злонамерен вирус"], correct: 0, achievement: "👵 Family Educator" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L3 - ВЕШТАЧКО ВИДЕО", question: "Кога компјутерски се монтира лице на political да изговори нешто што никогаш не го кажал, тоа е:", answers: ["Обичен колаж", "Дипфејк (Deepfake) дезинформација", "Фотографија со филтер"], correct: 1, achievement: "🤖 AI Investigator" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L4 - ХУМОР", question: "Што е потребно за јавноста да не ги сфаќа хумористичните вести како вистински?", answers: ["Забрана за хумор", "Медиумската писменост и препознавањето на жанрот сатира кај јавноста", "Повеќе полиција"], correct: 1, achievement: "🎭 Irony Detector" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L5 - СУБЈЕКТИВНОСТ", question: "Кога еден медиум известува само за едната страна на политичкиот спектар, покажува:", answers: ["Професионализам", "Медиумска пристрасност (Media Bias)", "Апсолутна точност"], correct: 1, achievement: "⚖️ Bias Neutralizer" },
    { chapterId: 4, chapterName: "Поглавје 4: Проверка на Факти (Fact-Checking)", title: "L6 - СЛИКА", question: "Која алатка помага да откриете дали една слика на интернет е стара или преземена од друг настан?", answers: ["Обратно пребарување слики (Reverse Image Search)", "Фотошоп", "Инстаграм филтер"], correct: 0, achievement: "🔍 Image Detective" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L7 - ПОДАТОЦИ", question: "Каде се сокриени информациите за тоа кога и со кој апарат е направена една дигитална слика?", answers: ["метаподатоци (EXIF)", "Во името на фајлот", "Никаде"], correct: 0, achievement: "💾 Metadata Hacker" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L8 - ИЗВОР", question: "Што претставува примарен извор во истражувачкото новинарство?", answers: ["Трач од социјалните мрежи", "Оригинален документ, официјална изјава или сведок кој директно присуствувал на настанот", "Прераскажана вест"], correct: 1, achievement: "📜 Source Verifier" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L9 - ДОМЕН", question: "Кога напаѓачот купува домен многу сличен на некој познат бренд (пр. googlee.com) за да измами, тоа е:", answers: ["Typosquattng / Клониран домен", "Маркетинг трик", "Официјално партнерство"], correct: 0, achievement: "🌐 URL Inspector" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L10 - СИНТЕТИКА", question: "Како се нарекуваат сите медиумски содржини (текст, слики, видеа) генерирани од AI?", answers: ["традиционални медиуми", "синтетички медиуми", "Органски содржини"], correct: 1, achievement: "🦾 AI Synthesizer" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L11 - МРЕЖА", question: "Која меѓународна организација ги сертифицира независните проверувачи на факти во светот?", answers: ["Меѓународната мрежа за проверка на факти (IFCN)", "НАТО", "УНЕСКО"], correct: 0, achievement: "🌍 Global Fact-Checker" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L12 - ЛАТЕРАЛНО ЧИТАЊЕ", question: "Што подразбира техниката на латерално читање (Lateral Reading) при проверка на информации?", answers: ["Читање на текстот од почеток до крај", "Отворање нови табови во прелистувачот за да се види што велат други независни извори за тој сајт", "Читање со лупа"], correct: 1, achievement: "📑 Lateral Reader" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L13 - УБЕДУВАЊЕ", question: "Кога веруваш во некоја лажна вест само затоа што таа се совпаѓа со твоите political ставови, имаш:", answers: ["потврдувачка пристрасност", "Критичко размислување", "Добра интуиција"], correct: 0, achievement: "🧠 Ego Overcomer" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L14 - ТВИТ", question: "Како ќе проверите дали некој познат political навистина објавил шокантен скриншот од Твитер?", answers: ["Му верувам на скриншотот веднаш", "Проверувам на официјалниот профил и архивите дали навистина постои таков твит, бидејќи скриншотот лесно се монтира со 'Inspect Element'", "Го споделувам со пријателите"], correct: 1, achievement: "🐦 Tweet Buster" },
    { chapterId: 4, chapterName: "Поглавје 4: ...", title: "L15 - ГЛАС", question: "Како се нарекува технологијата со која AI може да го клонира гласот на секој човек за измама?", answers: ["Deep Voice / Гласовен клон преку AI", "Аудио Спикер", "Радио бран"], correct: 0, achievement: "🎙️ Sound Auditor" },

    // === ПОГЛАВЈЕ 5: КРИЗНА КОМУНИКАЦИЈА И ЕТИКА ===
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L1 - ПР КРИЗА", question: "Што е најважно за ПР службата во случај на вонредна состојба или хаварија?", answers: ["Да молчи додека се заврши истрагата", "Итно, транспарентно и континуирано да ја информира јавноста за состојбата за да спречи паника", "Да ги исклучи серверите"], correct: 1, achievement: "📢 Crisis Leader" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L2 - ОМРАЗА", question: "Што претставува говорот на омраза во јавниот комуникациски простор?", answers: ["Секоја остра критика", "Јавна комуникација со која се промовира, поттикнува или оправдува омраза, дискриминација и насилство кон одредена група поради раса, пол, националност или религија", "Лоша рецензија"], correct: 1, achievement: "🕊️ Peace Advocate" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L3 - МОЛК", question: "Зошто поединците често молчат ако нивното мислење не е поддржано од мнозинството на мрежите?", answers: ["Поради Теоријата на спирала на молчењето (страв од социјална изолација)", "Поради технички проблеми", "Затоа што не ги интересира"], correct: 0, achievement: "🐚 Spiral Breaker" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L4 - СТРАВ ОД СТАТУС", question: "Кога новинарот сам ја трга својата точна сторија од страв од сопственикот на медиумот, имаме:", answers: ["Државна цензура", "Автоцензура (Self-censorship)", "Правна уредба"], correct: 1, achievement: "🖋️ Fearless Voice" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L5 - СТОЛБ", question: "Што е најважната обврска во Етичкиот кодекс на новинарите?", answers: ["Брза заработка", "Обврската за точност, проверка на информациите од независни извори и служење на јавниот интерес", "Слушање на партијата"], correct: 1, achievement: "👑 Supreme Media Overlord" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L6 - СУД", question: "Која е разликата меѓу навреда и клевета според законот?", answers: ["Нема разлика", "Навредата е омаловажувачко мислење, а клеветата е изнесување на невистинити тврдења за факти кои му штетат на угледот", "Клеветата е усна, навредата писмена"], correct: 1, achievement: "⚖️ Legal Scholar" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L7 - АНОНИМНОСТ", question: "Кое право му овозможува на новинарот да не го открие идентитетот на својот укажувач?", answers: ["заштита на извори", "Државна тајна", "Приватност на фирмата"], correct: 0, achievement: "🤫 Secret Keeper" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L8 - КОНФЛИКТ", question: "Ако новинар пишува пофална вест за фирма во која неговиот брат е сопственик, тој се наоѓа во:", answers: ["Конфликт на интереси", "Професионален развој", "Истражувачки процес"], correct: 0, achievement: "🧼 Integrity Knight" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L9 - БЕКГРАУНД", question: "Што значат кога еден извор ќе каже дека информацијата е дадена 'Off the record'?", answers: ["Може веднаш да се цитира", "Информација служи само како позадина за разбирање на настани, но не смее да се објави или цитира во медиумот", "Тоа е лажна вест"], correct: 1, achievement: "🕵️ Deepthroat Contact" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L10 - ОДЛОЖУВАЊЕ", question: "Кога ПР службата бара од медиумите да не ја објавуваат веста до точно одредено време, бара:", answers: ["ембарго за вести", "Трајна цензура", "Правна забрана"], correct: 0, achievement: "⏳ Embargo Master" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L11 - РЕКЕТ", question: "Ако медиум бара пари од бизнисмен за да НЕ објави компромитирачка сторија за него, прави:", answers: ["Медиумска уцена / рекет (неетичко и кривично дело)", "Маркетинг соработка", "Спонзорство"], correct: 0, achievement: "🚨 Crime Crusher" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L12 - ЗАБОРАВ", question: "Што подразбира т.н. 'Право да бидеш заборавен' (Right to be forgotten) на internet?", answers: ["Бришење на меморијата на корисникот", "Право на граѓаните да побараат отстранување на застарени или ирелевантни линкови од резултатите на Google", "Исклучување на социјалните мрежи"], correct: 1, achievement: "🧹 Digital Eraser" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L13 - ПРИКРИВАЊЕ", question: "Кога во текст кој изгледа како обична вест е вметнат линк за купување производ без ознака, тоа е:", answers: ["прикриена реклама", "Препорака", "Професионален совет"], correct: 0, achievement: "🕵️ Stealth Detector" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L14 - ИМИТАЦИЈА", question: "Зошто медиумите мора со исклучително внимание и без сензационализам да известуваат за самоубиства?", answers: ["Заради заштеда на простор", "Поради Вертеровиот ефект (ризик од поттикнување бранови на имитација кај ранливи групи)", "Поради државни казни"], correct: 1, achievement: "📉 Empathy Guardian" },
    { chapterId: 5, chapterName: "Поглавје 5: Кризна Комуникација и Етика", title: "L15 - СКРИЕНА КАМЕРА", question: "Кога е етички оправдано новинарот да користи скриени камери или тајно снимање?", answers: ["За забава на публиката", "Кога откривањето на информацијата е од исклучителен Јавен интерес (пр. корупција) а не може да се обезбеди на друг начин", "Никогаш не е оправдано"], correct: 1, achievement: "🛡️ Supreme Media Overlord" }
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

    // Иницијализација на копчето за промена на корисник (кај нивоата)
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

// НОВО: Функција за динамичко креирање и контрола на копчето за нов корисник
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
        logoutBtn.style.background = "#374151"; // Неутрална темна боја за баланс

        const greetingEl = document.getElementById("playerGreeting");
        if (greetingEl && greetingEl.parentNode) {
            greetingEl.parentNode.insertBefore(logoutBtn, greetingEl.nextSibling);
        }
    }

    // Ресетирање на екраните при клик
    logoutBtn.onclick = () => {
        mapScreen.classList.add("hidden");
        introScreen.classList.remove("hidden");
        document.getElementById("usernameInput").value = ""; // Чистиме за нов внес
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
        } else { alert("❌ Немате доволно поени!"); }
    } else if (item === 'credibility') {
        if (score >= 50) {
            score -= 50;
            credibility = Math.min(100, credibility + 25);
            alert("💡 Лансирана медиумска кампања за дебанкирање лаги! (+25% Кредибилитет)");
        } else { alert("❌ Немате доволно поени!"); }
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
            { name: "Професор по Медиуми", message: "Одличен концепт на игра. Ги опфаќа сите клучни дефиниции од предавањата!", time: "12:30" },
            { name: "Ана (Студент)", message: "Многу ми помогна да ја разберам теоријата за Спирала на молчењето!", time: "14:15" }
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
            <p>Честитки! Успешно го поминавте ова поглавје од 15 прашања без да паднете во стапиците на дезинформациите.</p>
            
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
            <p>Вашиот аватар пропадна во дупката на манипулациите и дезинформациите на DarkBot бидејќи изгубивте премногу животи.</p>
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