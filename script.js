// Language translation setup
const translations = {
    en: {
        passiveIncome: "PASSIVE INCOME",
        faucetSites: "FAUCET SITES",
        airdrop: "AIRDROP",
        placeholder: "Projects will be added soon...",
        goToProject: "GO TO PROJECT",
        silencioTitle: "Silencio",
        paymentMethod: "Payment Method:",
        airdropDuration: "Airdrop Duration:",
        everyMonth: "Every Month",
        earningType: "Earning Type:",
        honeygainTitle: "Honeygain",
        monthlyEarning: "Monthly Earning Rate:",
        sweatcoinTitle: "Sweatcoin",
        giftCards: "Gift Cards",
        move2earn: "Move2earn",
    },
    tr: {
        passiveIncome: "PASİF GELİR",
        faucetSites: "FAUCET SİTELERİ",
        airdrop: "AIRDROP",
        placeholder: "Yakında projeler eklenecek...",
        goToProject: "PROJEYE GİT",
        silencioTitle: "Silencio",
        paymentMethod: "Ödeme Yöntemi:",
        airdropDuration: "Airdrop Süresi:",
        everyMonth: "Her Ay",
        earningType: "Kazanç Tipi:",
        honeygainTitle: "Honeygain",
        monthlyEarning: "Aylık Kazanç Oranı:",
        sweatcoinTitle: "Sweatcoin",
        giftCards: "Hediye Kartları",
        move2earn: "Move2earn",
    },
    es: {
        passiveIncome: "INGRESOS PASIVOS",
        faucetSites: "SITIOS DE FAUCET",
        airdrop: "AIRDROP",
        placeholder: "Próximamente se añadirán proyectos...",
        goToProject: "IR AL PROYECTO",
        silencioTitle: "Silencio",
        paymentMethod: "Método de Pago:",
        airdropDuration: "Duración del Airdrop:",
        everyMonth: "Cada Mes",
        earningType: "Tipo de Ganancia:",
        honeygainTitle: "Honeygain",
        monthlyEarning: "Tasa de Ganancia Mensual:",
        sweatcoinTitle: "Sweatcoin",
        giftCards: "Tarjetas de Regalo",
        move2earn: "Move2earn",
    },
    ru: {
        passiveIncome: "ПАССИВНЫЙ ДОХОД",
        faucetSites: "КРАНЫ",
        airdrop: "AIRDROP",
        placeholder: "Проекты будут добавлены в ближайшее время...",
        goToProject: "ПЕРЕЙТИ К ПРОЕКТУ",
        silencioTitle: "Silencio",
        paymentMethod: "Метод оплаты:",
        airdropDuration: "Продолжительность Airdrop:",
        everyMonth: "Каждый месяц",
        earningType: "Тип заработка:",
        honeygainTitle: "Honeygain",
        monthlyEarning: "Ежемесячная ставка заработка:",
        sweatcoinTitle: "Sweatcoin",
        giftCards: "Подарочные карты",
        move2earn: "Move2earn",
    },
    hi: {
        passiveIncome: "निष्क्रिय आय",
        faucetSites: "नल साइटें",
        airdrop: "एयरड्रॉप",
        placeholder: "परियोजनाएं जल्द ही जोड़ी जाएंगी...",
        goToProject: "परियोजना पर जाएं",
        silencioTitle: "Silencio",
        paymentMethod: "भुगतान विधि:",
        airdropDuration: "एयरड्रॉप अवधि:",
        everyMonth: "हर महीने",
        earningType: "कमाई का प्रकार:",
        honeygainTitle: "Honeygain",
        monthlyEarning: "मासिक कमाई दर:",
        sweatcoinTitle: "Sweatcoin",
        giftCards: "उपहार कार्ड",
        move2earn: "Move2earn",
    },
    ar: {
        passiveIncome: "الدخل السلبي",
        faucetSites: "مواقع الصنبور",
        airdrop: "ايردروب",
        placeholder: "ستضاف المشاريع قريبا...",
        goToProject: "اذهب إلى المشروع",
        silencioTitle: "Silencio",
        paymentMethod: "طريقة الدفع:",
        airdropDuration: "مدة الايردروب:",
        everyMonth: "كل شهر",
        earningType: "نوع الكسب:",
        honeygainTitle: "Honeygain",
        monthlyEarning: "معدل الربح الشهري:",
        sweatcoinTitle: "Sweatcoin",
        giftCards: "بطاقات الهدايا",
        move2earn: "Move2earn",
    }
};

const languageSelector = document.getElementById('language-select');

const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
    languageSelector.value = lang;
};

languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

// Load saved language or default to browser language or 'tr'
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    const userLang = navigator.language.split('-')[0];
    const defaultLang = 'tr';
    
    let initialLang = savedLang;
    if (!initialLang) {
       initialLang = Object.keys(translations).includes(userLang) ? userLang : defaultLang;
    }
    
    setLanguage(initialLang);
    console.log("TRUSDZEE website loaded.");

    // Category toggle functionality
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const header = category.querySelector('h2');
        const content = category.querySelector('.projects-container');

        header.addEventListener('click', () => {
            category.classList.toggle('active');
            if (category.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 40 + 'px';
                content.style.paddingTop = '10px';
            } else {
                content.style.maxHeight = '0';
                content.style.paddingTop = '0';
            }
        });
    });
});