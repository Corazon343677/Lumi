import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'dark' | 'light';
export type Lang = 'ru' | 'en';

type Dict = Record<string, { ru: string; en: string }>;

const dict: Dict = {
  brand: { ru: 'Lumi', en: 'Lumi' },
  tagline: { ru: 'Искусство тонкой нити', en: 'The Art of Fine Thread' },

  // Nav
  nav_about: { ru: 'О нас', en: 'About' },
  nav_top: { ru: 'Наверх', en: 'To Top' },
  nav_catalog: { ru: 'Каталог', en: 'Catalog' },
  nav_contact: { ru: 'Связаться с нами', en: 'Contact Us' },
  nav_faq: { ru: 'Частые вопросы', en: 'FAQ' },
  theme_toggle: { ru: 'Светлая тема', en: 'Light theme' },
  theme_toggle_dark: { ru: 'Тёмная тема', en: 'Dark theme' },
  lang_label: { ru: 'Русский', en: 'Russian' },
  lang_label_en: { ru: 'Английский', en: 'English' },

  // Hero
  hero_title: { ru: 'Кружево', en: 'Lace' },
  hero_subtitle: {
    ru: 'История тонкой нити, сплетённая сквозь века',
    en: 'A story of fine thread, woven through centuries',
  },
  hero_history_1: {
    ru: 'Кружево зародилось в XVI веке как символ статуса. Мастерицы превращали тонкую нить в узоры, ценившиеся наравне с драгоценностями. Эта сделало ажурный материал истинным произведением искусства, олицетворяющим благородство.',
    en: 'Lace originated in the 16th century as a status symbol, crafted by hand over hundreds of hours. Artisans transformed fine thread into patterns prized on a par with precious gems. This painstaking work turned the openwork fabric into a true work of art, embodying nobility.',
  },
  hero_history_2: {
    ru: 'Мы соединяем старинную эстетику с технологиями нового поколения. Наше кружево — способ прикоснуться к истории и создать по-настоящему изысканное изделие.',
    en: 'Today, lace is once again in vogue on global runways, remaining both sensual and modern. We blend vintage aesthetics with next-generation technology. Our lace offers a way to touch history and create a truly exquisite piece.',
  },
  hero_scroll: { ru: 'Смотреть каталог', en: 'View catalog' },

  // About
  about_title: { ru: 'О нас', en: 'About Us' },
  about_text: {
    ru: 'Мы соединяем дух ручной работы с точностью машины — чтобы каждый отрез кружева был безупречным, прочным и готовым стать частью вашего лучшего изделия.',
    en: 'We combine the spirit of craftsmanship with machine precision—ensuring that every length of lace is flawless, durable, and ready to become part of your finest creation.',
  },
  about_card1_title: { ru: 'Современные станки', en: 'Modern machinery' },
  about_card1_text: {
    ru: 'Прецизионная точность узора без брака.',
    en: 'Precision pattern accuracy with zero defects.',
  },
  about_card2_title: { ru: '100% полиэстер', en: '100% polyester' },
  about_card2_text: {
    ru: 'Прочность, сохранение формы, не деформируется при шитье.',
    en: 'Durable and shape-retaining; does not deform during sewing.',
  },
  about_card3_title: { ru: 'Гибкие покупки', en: 'Flexible purchasing.' },
  about_card3_text: {
    ru: 'Выгода до 15% при заказе оптом.',
    en: 'Save up to 15% on bulk orders.',
  },

  // Catalog
  catalog_title: { ru: 'Каталог', en: 'Catalog' },
  catalog_subtitle: {
    ru: 'Турецкие изделия, доступные для заказа',
    en: 'Turkish products available for order',
  },
  catalog_add: { ru: 'Заказать', en: 'Order' },
  catalog_filter_all: { ru: 'Все', en: 'All' },
  catalog_filter_classic: { ru: 'Классика', en: 'Classic' },
  catalog_filter_modern: { ru: 'Блюмарин', en: 'Blumarine' },
  catalog_filter_accessories: { ru: 'Аксессуары', en: 'Accessories' },

  // Contact
  contact_title: { ru: 'Контакты', en: 'Contact Us' },
  contact_text: {
    ru: 'Есть вопрос или особый заказ? Напишите нам — ответим в течение дня.',
    en: 'Have a question or a custom order? Write to us — we reply within a day.',
  },
  contact_whatsapp: { ru: 'Написать в WhatsApp', en: 'Message on WhatsApp' },
  contact_telegram: { ru: 'Написать в Telegram', en: 'Message on Telegram' },
  contact_max: { ru: 'Написать в Max', en: 'Message on Max' },

  // FAQ
  faq_title: { ru: 'Частые вопросы', en: 'FAQ' },
  faq_subtitle: {
    ru: 'Ответы на популярные вопросы о наших изделиях и заказах',
    en: 'Answers to common questions about our products and orders',
  },
  faq1_q: { ru: 'Сколько времени занимает изготовление?', en: 'How long does production take?' },
  faq1_a: {
    ru: 'В среднем от 2 до 6 недель в зависимости от сложности узора.',
    en: 'On average 2 to 6 weeks depending on pattern complexity.',
  },
  faq2_q: { ru: 'Можно ли заказать индивидуальный узор?', en: 'Can I order a custom pattern?' },
  faq2_a: {
    ru: 'Да, мы принимаем индивидуальные заказы. Опишите идею — и мы подготовим эскиз.',
    en: 'Yes, we accept custom orders. Describe your idea and we will prepare a sketch.',
  },
  faq3_q: { ru: 'Как ухаживать за кружевом?', en: 'How do I care for lace?' },
  faq3_a: {
    ru: 'Ручная стирка в прохладной воде, сушка на плоской поверхности вдали от солнца.',
    en: 'Hand wash in cool water, dry flat away from direct sunlight.',
  },

  // Footer
  footer_rights: { ru: 'Все права защищены', en: 'All rights reserved' },
};

interface AppContextType {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
  t: (key: keyof typeof dict) => string;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('lace-theme') as Theme | null;
    return saved ?? 'dark';
  });
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lace-lang') as Lang | null;
    return saved ?? 'ru';
  });

  useEffect(() => {
    localStorage.setItem('lace-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lace-lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'ru' ? 'en' : 'ru'));
  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
