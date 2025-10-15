document.addEventListener('DOMContentLoaded', () => {
    // --- ЕЛЕМЕНТИ DOM ---
    const settingsPanel = document.getElementById('settings-panel');
    const openSettingsBtn = document.getElementById('open-settings-btn');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const grayThemeBtn = document.getElementById('gray-theme-btn');
    const langUkBtn = document.getElementById('lang-uk-btn');
    const langEnBtn = document.getElementById('lang-en-btn');
    const fontIncreaseBtn = document.getElementById('font-increase-btn');
    const fontDecreaseBtn = document.getElementById('font-decrease-btn');
    const fontSizeDisplay = document.getElementById('font-size-display');
    const speechToggle = document.getElementById('speech-toggle');

    // --- СЛОВНИК ПЕРЕКЛАДІВ ---
    const translations = {
        'uk': {
            pageTitle: "Roadmap Оренди Житла для Студента",
            settingsTitle: "Налаштування",
            themeLabel: "Колірна тема:",
            lightTheme: "Світла",
            darkTheme: "Темна",
            grayTheme: "Сіра",
            langLabel: "Мова:",
            fontLabel: "Розмір шрифту:",
            speechLabel: "Режим озвучки:",
            closeBtn: "Закрити",
            mainTitle: "Як орендувати житло студенту?",
            tipsLink: "Правові поради для студентів",
            legalLink: "Суб'єкти Оренди: Права та Обов'язки",
            roadmapLink: "Roadmap \"Як орендувати житло?\"",
            feedbackLink: "Посилання для фідбеку",
            backLink: "← На головну",
            roadmapPageTitle: "Roadmap Оренди - Крок за кроком",
            roadmapHeader: "Дорожня карта орендаря",
            step1Title: "Підготовка до пошуку житла",
            step1Text1: "Визнач свій бюджет, врахувавши оренду плату та комунальні платежі; обери для себе зручний район із доступом до університету та громадського транспорту.",
            step1Text2: "Пошук житла необхідно здійснювати лише через перевірені сайти чи надійних посередників.",
            step2Title: "Перевірка квартири та власника",
            step2Text1: "Переконайся, що житло реальне, а особа, яка його здає, має на це законне право. Перед укладанням договору оренди попроси у власника документи, що підтверджують право власності на квартиру.",
            step2Text2: "Під час огляду зроби фотофіксацію стану житла – стін, меблів, побутової техніки. Перевір справність сантехніки, електромережі, замків.",
            step3Title: "Укладання договору оренди",
            step3Text1: "Офіційно, письмово зафіксуй умови проживання. У договорі потрібно зазначити: повні дані орендодавця та орендаря; адресу житла; строк оренди; розмір орендної плати; порядок оплати та розподіл комунальних платежів; умови повернення депозиту; відповідальність сторін у разі порушення умов.",
            step4Title: "Заселення",
            step4Text1: "При заселенні необхідно перевірити показники лічильників і записати їх у акт прийому-передачі. Про всі виявлені дефекти або несправності потрібно повідомити власника одразу після заселення.",
            step5Title: "Проживання",
            step5Text1: "Дотримуйся умов договору, підтримуй належний стан житла та уникай конфліктів. Орендар зобов’язаний вчасно сплачувати орендну плату й комунальні послуги, не змінювати конструкцію чи замки без дозволу власника, а також повідомляти про поломки чи зміни.",
            legalPageTitle: "Права та Обов'язки",
            legalHeader: "Права та Обов'язки Суб'єктів Оренди",
            tenantRights: "Права Орендаря (Студента)",
            tenantRightsIntro: "Основні права орендаря регулюються Главою 59 Цивільного кодексу України. Ключові з них:",
            tenantRight1: "<strong>Право на проживання:</strong> Використовувати житло протягом усього терміну, зазначеного в договорі (ст. 810 ЦКУ).",
            tenantRight2: "<strong>Право на недоторканність житла:</strong> Орендодавець не має права заходити до житла без вашого дозволу, окрім випадків, пов'язаних із невідкладною необхідністю (аварія, пожежа).",
            tenantRight3: "<strong>Право на вселення членів сім'ї:</strong> Ви маєте право проживати з членами своєї сім'ї та іншими особами за згодою власника (ст. 816 ЦКУ).",
            tenantRight4: "<strong>Переважне право на поновлення договору:</strong> Після закінчення терміну договору ви маєте переважне право на укладення договору на новий термін (ст. 822 ЦКУ).",
            tenantRight5: "<strong>Право на збереження договору при зміні власника:</strong> Якщо власник продає квартиру, ваш договір оренди залишається чинним для нового власника (ст. 814 ЦКУ).",
            tenantDuties: "Обов'язки Орендаря (Студента)",
            tenantDutiesIntro: "Разом з правами орендар має і зобов'язання:",
            tenantDuty1: "<strong>Своєчасна оплата:</strong> Сплачувати орендну плату та комунальні послуги у терміни, встановлені договором (ст. 820 ЦКУ).",
            tenantDuty2: "<strong>Використання за призначенням:</strong> Використовувати житло лише для проживання і не влаштовувати там офіс чи склад.",
            tenantDuty3: "<strong>Збереження майна:</strong> Дбайливо ставитися до квартири та майна в ній, не допускати його псування.",
            tenantDuty4: "<strong>Поточний ремонт:</strong> Здійснювати поточний ремонт (наприклад, заміна лампочок, дрібний ремонт сантехніки), якщо інше не вказано в договорі (ст. 819 ЦКУ).",
            tenantDuty5: "<strong>Не проводити перепланування:</strong> Не можна без згоди власника робити перепланування чи капітальні зміни в помешканні.",
            landlordRights: "Права Орендодавця (Власника)",
            landlordRightsIntro: "Власник житла також має свої права:",
            landlordRight1: "<strong>Отримувати оплату:</strong> Своєчасно та в повному обсязі отримувати орендну плату.",
            landlordRight2: "<strong>Перевіряти стан житла:</strong> Періодично перевіряти стан квартири, але заздалегідь попередивши орендаря та у його присутності.",
            landlordRight3: "<strong>Вимагати розірвання договору:</strong> Має право вимагати розірвання договору через суд, якщо орендар систематично (більше 2-х разів) не платить за оренду, псує майно або використовує його не за призначенням (ст. 825 ЦКУ).",
            landlordDuties: "Обов'язки Орендодавця (Власника)",
            landlordDutiesIntro: "Ключові обов'язки власника:",
            landlordDuty1: "<strong>Надати придатне житло:</strong> Передати орендарю житло у стані, що відповідає умовам договору та придатний для проживання (ст. 815 ЦКУ).",
            landlordDuty2: "<strong>Не перешкоджати користуванню:</strong> Не створювати перешкод орендарю у користуванні житлом.",
            landlordDuty3: "<strong>Здійснювати капітальний ремонт:</strong> Проводити капітальний ремонт житла, якщо інше не передбачено договором (наприклад, заміна труб, вікон, ремонт даху) (ст. 819 ЦКУ).",
            stateRole: "Роль Держави",
            stateRoleIntro: "Держава не є прямою стороною договору, але вона встановлює \"правила гри\" та виступає арбітром у спірних ситуаціях:",
            stateRole1: "<strong>Встановлення законодавчої бази:</strong> Держава регулює відносини оренди через Цивільний кодекс та інше законодавство.",
            stateRole2: "<strong>Захист прав у суді:</strong> Якщо ваші права порушено, ви можете звернутися до суду для їх захисту.",
            stateRole3: "<strong>Оподаткування:</strong> Держава вимагає від орендодавця сплачувати податок на доходи, отримані від здачі житла в оренду (Податковий кодекс України).",
            stateRole4: "<strong>Реєстрація договорів:</strong> Договори оренди, укладені на термін 3 роки і більше, підлягають нотаріальному посвідченню та державній реєстрації.",
            sourcesTitle: "Законодавча база та корисні посилання",
            source1: `<a href="https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#Text" target="_blank"><strong>Конституція України (Стаття 47)</strong></a> - гарантує кожному право на житло. Держава створює умови, за яких кожний громадянин матиме змогу побудувати житло, придбати його у власність або взяти в оренду.`,
            source2: `<a href="https://zakon.rada.gov.ua/laws/show/435-15/print#n5129" target="_blank"><strong>Цивільний кодекс України (Глава 59: Найм (оренда) житла)</strong></a> - основний документ, що регулює ваші відносини з власником.`,
            source3: `<a href="https://zakon.rada.gov.ua/laws/show/1023-12" target="_blank"><strong>Закон України "Про захист прав споживачів"</strong></a> - оскільки оренда є послугою, цей закон захищає вас від нечесних умов у договорі та надання неякісних послуг.`,
            source4: `<a href="https://zakon.rada.gov.ua/laws/show/2297-17" target="_blank"><strong>Закон України "Про захист персональних даних"</strong></a> - регулює обробку ваших персональних даних (паспортні дані, ІПН), які ви надаєте орендодавцю для укладення договору.`,
            source6: `<a href="https://zakon.rada.gov.ua/laws/show/2755-17" target="_blank"><strong>Податковий кодекс України</strong></a> - стосується оподаткування доходів власника, що може бути важливим для підтвердження легальності оренди.`,
            tipsPageTitle: "Поради та Лайфхаки",
            tipsHeader: "Правові Поради для Студентів-Орендарів",
            tip1Title: "Договір – ваш головний захист",
            tip1Text: "Ніколи не орендуйте житло без письмового договору. У разі конфлікту – це єдиний документ, що має юридичну силу. Усі обіцянки власника фіксуйте письмово.",
            tip2Title: "Завжди беріть розписки",
            tip2Text: "При передачі грошей (оренда, депозит, комунальні) завжди вимагайте розписку. У ній має бути вказано: дата, сума, за що сплачено, та підписи обох сторін.",
            tip3Title: "Фотографуйте все",
            tip3Text: "Перед заселенням зробіть детальні фото та відео всіх недоліків квартири: подряпини на меблях, плями на стінах, несправна техніка. Це допоможе уникнути проблем при виселенні.",
            tip4Title: "Акт прийому-передачі",
            tip4Text: "Разом з договором підпишіть акт прийому-передачі квартири. У ньому опишіть стан житла, перелік меблів та техніки, а також зафіксуйте показники лічильників."
        },
        'en': {
            pageTitle: "Student Housing Rental Roadmap",
            settingsTitle: "Settings",
            themeLabel: "Color Theme:",
            lightTheme: "Light",
            darkTheme: "Dark",
            grayTheme: "Gray",
            langLabel: "Language:",
            fontLabel: "Font Size:",
            speechLabel: "Speech Mode:",
            closeBtn: "Close",
            mainTitle: "How to Rent Housing for a Student?",
            tipsLink: "Legal Advice for Students",
            legalLink: "Rental Subjects: Rights and Duties",
            roadmapLink: "Roadmap \"How to rent housing?\"",
            feedbackLink: "Feedback Link",
            backLink: "← Back to main",
            roadmapPageTitle: "Rental Roadmap - Step by step",
            roadmapHeader: "Tenant's Roadmap",
            step1Title: "Preparing to Find Housing",
            step1Text1: "Define your budget, including rent and utilities; choose a convenient area with access to the university and public transport.",
            step1Text2: "Search for housing only on verified websites or through reliable intermediaries.",
            step2Title: "Checking the Apartment and the Owner",
            step2Text1: "Make sure the housing is real and the person renting it has the legal right to do so. Before signing the contract, ask the owner for documents confirming ownership of the apartment.",
            step2Text2: "During the inspection, take photos of the condition of the apartment - walls, furniture, appliances. Check the functionality of plumbing, electrical wiring, and locks.",
            step3Title: "Signing the Lease Agreement",
            step3Text1: "Officially and in writing, document the terms of residence. The contract must specify: full details of the landlord and tenant; address of the property; rental period; rent amount; payment procedure and utility distribution; conditions for the return of the deposit; liability of the parties for breach of contract.",
            step4Title: "Moving In",
            step4Text1: "When moving in, you need to check the meter readings and record them in the acceptance certificate. Any defects or malfunctions found should be reported to the owner immediately after moving in.",
            step5Title: "Living",
            step5Text1: "Adhere to the terms of the contract, maintain the proper condition of the housing, and avoid conflicts. The tenant is obliged to pay rent and utilities on time, not to change the structure or locks without the owner's permission, and to report any breakdowns or changes.",
            legalPageTitle: "Rights and Duties",
            legalHeader: "Rights and Duties of Rental Subjects",
            tenantRights: "Tenant's (Student's) Rights",
            tenantRightsIntro: "The main rights of a tenant are regulated by Chapter 59 of the Civil Code of Ukraine. The key ones are:",
            tenantRight1: "<strong>Right to residence:</strong> To use the housing for the entire term specified in the contract (Art. 810 of the CCU).",
            tenantRight2: "<strong>Right to privacy of the home:</strong> The landlord does not have the right to enter the dwelling without your permission, except in cases of emergency (accident, fire).",
            tenantRight3: "<strong>Right to move in family members:</strong> You have the right to live with your family members and other persons with the owner's consent (Art. 816 of the CCU).",
            tenantRight4: "<strong>Pre-emptive right to renew the contract:</strong> After the contract expires, you have a pre-emptive right to conclude a contract for a new term (Art. 822 of the CCU).",
            tenantRight5: "<strong>Right to preserve the contract upon change of owner:</strong> If the owner sells the apartment, your lease agreement remains valid for the new owner (Art. 814 of the CCU).",
            tenantDuties: "Tenant's (Student's) Duties",
            tenantDutiesIntro: "Along with rights, the tenant also has obligations:",
            tenantDuty1: "<strong>Timely payment:</strong> To pay rent and utilities within the terms established by the contract (Art. 820 of the CCU).",
            tenantDuty2: "<strong>Use for intended purpose:</strong> To use the housing only for living and not to set up an office or warehouse there.",
            tenantDuty3: "<strong>Preservation of property:</strong> To take care of the apartment and the property in it, preventing its damage.",
            tenantDuty4: "<strong>Routine maintenance:</strong> To carry out routine maintenance (e.g., replacing light bulbs, minor plumbing repairs), unless otherwise specified in the contract (Art. 819 of the CCU).",
            tenantDuty5: "<strong>No alterations:</strong> It is forbidden to make alterations or capital changes to the premises without the owner's consent.",
            landlordRights: "Landlord's (Owner's) Rights",
            landlordRightsIntro: "The property owner also has their rights:",
            landlordRight1: "<strong>To receive payment:</strong> To receive rent in full and on time.",
            landlordRight2: "<strong>To inspect the property's condition:</strong> To periodically check the condition of the apartment, but with prior notice to the tenant and in their presence.",
            landlordRight3: "<strong>To demand termination of the contract:</strong> Has the right to demand termination of the contract through court if the tenant systematically (more than twice) fails to pay rent, damages the property, or uses it not for its intended purpose (Art. 825 of the CCU).",
            landlordDuties: "Landlord's (Owner's) Duties",
            landlordDutiesIntro: "The key duties of the owner are:",
            landlordDuty1: "<strong>To provide suitable housing:</strong> To hand over the housing to the tenant in a condition that meets the terms of the contract and is suitable for living (Art. 815 of the CCU).",
            landlordDuty2: "<strong>Not to obstruct use:</strong> Not to create obstacles for the tenant in using the housing.",
            landlordDuty3: "<strong>To carry out capital repairs:</strong> To carry out capital repairs of the housing, unless otherwise provided by the contract (e.g., replacing pipes, windows, roof repair) (Art. 819 of the CCU).",
            stateRole: "Role of the State",
            stateRoleIntro: "The state is not a direct party to the contract, but it sets the 'rules of the game' and acts as an arbiter in disputes:",
            stateRole1: "<strong>Establishing the legal framework:</strong> The state regulates rental relations through the Civil Code and other legislation.",
            stateRole2: "<strong>Protection of rights in court:</strong> If your rights are violated, you can go to court to protect them.",
            stateRole3: "<strong>Taxation:</strong> The state requires the landlord to pay tax on income received from renting out housing (Tax Code of Ukraine).",
            stateRole4: "<strong>Registration of contracts:</strong> Lease agreements concluded for a term of 3 years or more are subject to notarial certification and state registration.",
            sourcesTitle: "Legal Framework and Useful Links",
            source1: `<a href="https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#Text" target="_blank"><strong>Constitution of Ukraine (Article 47)</strong></a> - guarantees everyone the right to housing. The state creates conditions under which every citizen will be able to build housing, acquire it as property, or rent it.`,
            source2: `<a href="https://zakon.rada.gov.ua/laws/show/435-15/print#n5129" target="_blank"><strong>Civil Code of Ukraine (Chapter 59: Lease (rent) of housing)</strong></a> - the main document regulating your relations with the owner.`,
            source3: `<a href="https://zakon.rada.gov.ua/laws/show/1023-12" target="_blank"><strong>Law of Ukraine 'On Protection of Consumer Rights'</strong></a> - since renting is a service, this law protects you from unfair contract terms and the provision of poor-quality services.`,
            source4: `<a href="https://zakon.rada.gov.ua/laws/show/2297-17" target="_blank"><strong>Law of Ukraine 'On Protection of Personal Data'</strong></a> - regulates the processing of your personal data (passport data, TIN) that you provide to the landlord to conclude the contract.`,
            source6: `<a href="https://zakon.rada.gov.ua/laws/show/2755-17" target="_blank"><strong>Tax Code of Ukraine</strong></a> - concerns the taxation of the owner's income, which can be important for confirming the legality of the rent.`,
            tipsPageTitle: "Tips & Lifehacks",
            tipsHeader: "Legal Advice for Student Tenants",
            tip1Title: "The Contract is Your Main Protection",
            tip1Text: "Never rent without a written agreement. In case of a conflict, this is the only document that has legal force. Record all of the owner's promises in writing.",
            tip2Title: "Always Take Receipts",
            tip2Text: "When transferring money (rent, deposit, utilities), always ask for a receipt. It should state: date, amount, what was paid for, and signatures of both parties.",
            tip3Title: "Photograph Everything",
            tip3Text: "Before moving in, take detailed photos and videos of all apartment defects: scratches on furniture, stains on walls, faulty appliances. This will help avoid problems when you move out.",
            tip4Title: "Acceptance Certificate",
            tip4Text: "Along with the contract, sign an acceptance certificate for the apartment. In it, describe the condition of the housing, a list of furniture and appliances, and record the meter readings."
        }
    };

    // --- ФУНКЦІЇ ---

    function toggleSettingsPanel() {
        settingsPanel.classList.toggle('open');
    }

    function setTheme(theme) {
        document.documentElement.className = 'theme-' + theme;
        localStorage.setItem('theme', theme);
    }

    function setLanguage(lang) {
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
    }

    function changeFontSize(newSize) {
        document.body.style.fontSize = `${newSize}px`;
        fontSizeDisplay.textContent = `${Math.round((newSize / 16) * 100)}%`;
        localStorage.setItem('fontSize', newSize);
    }
    
    let speechTimer;
    function speakText(element) {
        if (!speechToggle.checked) return;
        window.speechSynthesis.cancel();
        
        clearTimeout(speechTimer);
        speechTimer = setTimeout(() => {
            const textToSpeak = element.innerText || element.textContent;
            const lang = localStorage.getItem('language') || 'uk';
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = lang === 'uk' ? 'uk-UA' : 'en-US';
            window.speechSynthesis.speak(utterance);
        }, 150);
    }

    function loadSettings() {
        const savedLang = localStorage.getItem('language') || 'uk';
        setLanguage(savedLang);
        const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 16;
        changeFontSize(savedFontSize);
        const speechEnabled = localStorage.getItem('speechEnabled') === 'true';
        speechToggle.checked = speechEnabled;
    }

    // --- ОБРОБНИКИ ПОДІЙ ---

    if(openSettingsBtn && closeSettingsBtn){
        openSettingsBtn.addEventListener('click', toggleSettingsPanel);
        closeSettingsBtn.addEventListener('click', toggleSettingsPanel);
    }

    if(lightThemeBtn && darkThemeBtn && grayThemeBtn){
        lightThemeBtn.addEventListener('click', () => setTheme('light'));
        darkThemeBtn.addEventListener('click', () => setTheme('dark'));
        grayThemeBtn.addEventListener('click', () => setTheme('gray'));
    }
    
    if(langUkBtn && langEnBtn){
        langUkBtn.addEventListener('click', () => setLanguage('uk'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    if(fontIncreaseBtn && fontDecreaseBtn){
        fontIncreaseBtn.addEventListener('click', () => {
            let currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
            if(currentSize < 24) changeFontSize(currentSize + 1);
        });
        fontDecreaseBtn.addEventListener('click', () => {
            let currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
            if(currentSize > 12) changeFontSize(currentSize - 1);
        });
    }
    
    if(speechToggle){
         speechToggle.addEventListener('change', () => {
            localStorage.setItem('speechEnabled', speechToggle.checked);
            if (!speechToggle.checked) {
                window.speechSynthesis.cancel();
            }
        });
    }

    document.querySelectorAll('h1, h2, h3, p, a, li, button').forEach(el => {
        el.addEventListener('mouseenter', () => speakText(el));
        el.addEventListener('mouseleave', () => {
            clearTimeout(speechTimer);
        });
    });

    document.querySelectorAll('.timeline-item .timeline-title').forEach(title => {
        title.addEventListener('click', () => {
            title.closest('.timeline-item').classList.toggle('active');
        });
    });

    loadSettings();
});