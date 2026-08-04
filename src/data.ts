export interface Product {
  id: number;
  image: string;
  price: number;
  category: 'classic' | 'modern' | 'accessories';
  name: { ru: string; en: string };
  description: { ru: string; en: string };
  ozonURL?: { ru: string; en: string }; // 🌟 Теперь ссылка поддерживает мультиязычность
}

export const slideshowImages: string[] = [
  'https://pexels.com',
  'https://pexels.com',
  'https://pexels.com',
  'https://pexels.com',
  'https://pexels.com',
  'https://pexels.com',
];

export const products: Product[] = [
  {
    id: 1,
    image: 'https://pexels.com',
    price: 4800,
    category: 'classic',
    name: { ru: 'Венецианская классика', en: 'Venetian Classic' },
    description: {
      ru: 'Хлопковое кружево с цветочным узором, плетёное на коклюшках.',
      en: 'Cotton lace with floral pattern, bobbin-woven.',
    },
    ozonURL: {
      ru: 'https://ozon.ru', // Ссылка для русскоязычной версии сайта
      en: 'https://ozon.ru', // Ссылка для англоязычной версии сайта
    },
  },
  {
    id: 2,
    image: 'https://pexels.com',
    price: 6200,
    category: 'classic',
    name: { ru: 'Фламандский узор', en: 'Flemish Pattern' },
    description: {
      ru: 'Льняное кружево с геометрическим рисунком, ручная работа.',
      en: 'Linen lace with geometric design, handmade.',
    },
    ozonURL: {
      ru: 'https://ozon.ru',
      en: 'https://ozon.ru',
    },
  },
  {
    id: 3,
    image: 'https://pexels.com',
    price: 3500,
    category: 'modern',
    name: { ru: 'Современная фактура', en: 'Modern Texture' },
    description: {
      ru: 'Шёлковое кружево с мерцающей отделкой, минималистичный стиль.',
      en: 'Silk lace with shimmering detail, minimalist style.',
    },
    ozonURL: {
      ru: 'https://ozon.ru',
      en: 'https://ozon.ru',
    },
  },
  {
    id: 4,
    image: 'https://pexels.com',
    price: 4100,
    category: 'modern',
    name: { ru: 'Воздушная вуаль', en: 'Airy Veil' },
    description: {
      ru: 'Полупрозрачное кружево для отделки и декора.',
      en: 'Sheer lace for trimming and decor.',
    },
    ozonURL: {
      ru: 'https://ozon.ru',
      en: 'https://ozon.ru',
    },
  },
  {
    id: 5,
    image: 'https://pexels.com',
    price: 5400,
    category: 'accessories',
    name: { ru: 'Кружевные перчатки', en: 'Lace Gloves' },
    description: {
      ru: 'Ажурные перчатки из хлопка, идеальны для особых случаев.',
      en: 'Openwork cotton gloves, perfect for special occasions.',
    },
    ozonURL: {
      ru: 'https://ozon.ru',
      en: 'https://ozon.ru',
    },
  },
  {
    id: 6,
    image: 'https://pexels.com',
    price: 3800,
    category: 'accessories',
    name: { ru: 'Чулки с узором', en: 'Patterned Stockings' },
    description: {
      ru: 'Тонкие чулки с кружевной резинкой, ручная вышивка.',
      en: 'Fine stockings with lace top, hand-embroidered.',
    },
    ozonURL: {
      ru: 'https://ozon.ru',
      en: 'https://ozon.ru',
    },
  },
  {
    id: 7,
    image: 'https://pexels.com',
    price: 3800,
    category: 'accessories',
    name: { ru: 'Чулки с узором', en: 'Patterned Stockings' },
    description: {
      ru: 'Тонкие чулки с кружевной резинкой, ручная вышивка.',
      en: 'Fine stockings with lace top, hand-embroidered.',
    },
    ozonURL: {
      ru: 'https://ozon.ru',
      en: 'https://ozon.ru',
    },
  },
];
