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
  'https://images.pexels.com/photos/29933718/pexels-photo-29933718.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7498815/pexels-photo-7498815.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/6276032/pexels-photo-6276032.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/12081254/pexels-photo-12081254.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/6276030/pexels-photo-6276030.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/6276040/pexels-photo-6276040.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

export const products: Product[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/6276032/pexels-photo-6276032.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/7498815/pexels-photo-7498815.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/12081254/pexels-photo-12081254.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/6276030/pexels-photo-6276030.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/6001074/pexels-photo-6001074.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/3785762/pexels-photo-3785762.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/3785762/pexels-photo-3785762.jpeg?auto=compress&cs=tinysrgb&w=800',
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
