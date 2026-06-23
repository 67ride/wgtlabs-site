const translations = {
  en: {
    navWho: 'Who we are',
    navProject: 'Live project',
    navServices: 'What we can do',
    eyebrow: 'Mobile apps • Web platforms • Business systems',
    heroTitle: 'We build digital products with a pulse.',
    heroText: 'WGTLabs is a Czech digital product studio focused on mobile applications, modern web interfaces and custom systems for companies that need clean, scalable technology.',
    heroPrimary: 'See live project',
    heroSecondary: 'Explore capabilities',
    signalText: 'From first concept to real users.',
    whoEyebrow: 'Who we are',
    whoTitle: 'A small lab for serious digital products.',
    whoText: 'We connect product thinking, modern UI and practical development. Our goal is simple: build things that look premium, work reliably and can grow from prototype to real business.',
    projectTitle: 'A social app for car culture.',
    projectText: '67ride is our current live project: a mobile-first platform for automotive profiles, clubs, events, ride parties, showcases and community interaction.',
    statOne: 'mobile app',
    statTwo: 'backend',
    statThree: 'live build',
    servicesEyebrow: 'What we can do',
    servicesTitle: 'From app ideas to company systems.',
    serviceOneTitle: 'Mobile applications',
    serviceOneText: 'Flutter apps, prototypes, user profiles, feeds, maps, notifications and app-store ready product flows.',
    serviceTwoTitle: 'Business systems',
    serviceTwoText: 'Internal tools, ticketing systems, dashboards, admin panels and workflows for teams.',
    serviceThreeTitle: 'Landing pages',
    serviceThreeText: 'Fast, modern websites for products, launches, campaigns and company presentation.',
    footerText: 'Building from Czechia. Launching worldwide.'
  },
  cs: {
    navWho: 'Kdo jsme',
    navProject: 'Aktivní projekt',
    navServices: 'Co umíme',
    eyebrow: 'Mobilní aplikace • Webové platformy • Firemní systémy',
    heroTitle: 'Stavíme digitální produkty s pulzem.',
    heroText: 'WGTLabs je české digitální studio zaměřené na mobilní aplikace, moderní webová rozhraní a systémy na míru pro firmy, které potřebují čistou a škálovatelnou technologii.',
    heroPrimary: 'Ukázat aktivní projekt',
    heroSecondary: 'Co dokážeme',
    signalText: 'Od první myšlenky až k reálným uživatelům.',
    whoEyebrow: 'Kdo jsme',
    whoTitle: 'Malý lab pro seriózní digitální produkty.',
    whoText: 'Spojujeme produktové myšlení, moderní UI a praktický vývoj. Cíl je jednoduchý: stavět věci, které působí prémiově, fungují spolehlivě a dokážou vyrůst z prototypu do reálného byznysu.',
    projectTitle: 'Sociální aplikace pro car culture.',
    projectText: '67ride je náš aktuální živý projekt: mobilní platforma pro automotive profily, kluby, eventy, ride party, showcase a komunitní interakci.',
    statOne: 'mobilní aplikace',
    statTwo: 'backend',
    statThree: 'živý build',
    servicesEyebrow: 'Co umíme',
    servicesTitle: 'Od nápadu na appku po firemní systémy.',
    serviceOneTitle: 'Mobilní aplikace',
    serviceOneText: 'Flutter aplikace, prototypy, profily uživatelů, feedy, mapy, notifikace a flow připravené pro app store.',
    serviceTwoTitle: 'Firemní systémy',
    serviceTwoText: 'Interní nástroje, ticketovací systémy, dashboardy, administrace a workflow pro týmy.',
    serviceThreeTitle: 'Landing pages',
    serviceThreeText: 'Rychlé moderní weby pro produkty, launch, kampaně a firemní prezentaci.',
    footerText: 'Stavíme v Česku. Míříme do světa.'
  }
};

const html = document.documentElement;
const buttons = document.querySelectorAll('[data-set-lang]');
const translatable = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
  html.dataset.lang = lang;
  html.lang = lang === 'cs' ? 'cs' : 'en';

  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });

  buttons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.setLang === lang);
  });

  localStorage.setItem('wgtlabs-language', lang);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.setLang));
});

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('wgtlabs-language') || 'en');
