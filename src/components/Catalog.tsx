import { useState } from 'react';
import { useApp } from '@/i18n';
import { products, Product } from '@/data';

type Filter = 'all' | 'classic' | 'modern' | 'accessories';

export default function Catalog() {
  const { t, lang } = useApp();
  const [filter, setFilter] = useState<Filter>('all');

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('catalog_filter_all') },
    { key: 'classic', label: t('catalog_filter_classic') },
    { key: 'modern', label: t('catalog_filter_modern') },
  ];

  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <section
      id="catalog"
      className="py-28 px-6 bg-neutral-100 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl text-center text-neutral-900 dark:text-white tracking-[0.05em] mb-4">
          {t('catalog_title')}
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-base font-light mb-12">
          {t('catalog_subtitle')}
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 border ${
                filter === f.key
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white'
                  : 'bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p: Product) => (
            <div
              key={p.id}
              className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={p.image}
                  alt={p.name[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-neutral-900 dark:text-white mb-2 tracking-wide">
                  {p.name[lang]}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-4">
                  {p.description[lang]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-neutral-900 dark:text-white font-medium">
                    {p.price.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US')} ₽
                  </span>
                  
                  {/* Кнопка-ссылка на Озон */}
                  <a 
                    href={(p as any).ozonUrl || "https://ozon.ru"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 pl-3.5 pr-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm hover:opacity-90 transition-opacity"
                  >
                    {/* Текстовый логотип OZON (Оригинал) */}
                    <svg 
                      className="w-14 h-3.5 text-[#005BFF] dark:text-[#005BFF] flex-shrink-0" 
                      viewBox="0 0 148 35" 
                      fill="none" 
                      xmlns="http://w3.org"
                    >
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M33 34.5c9.113 0 16.5-7.387 16.5-16.5S42.113 1.5 33 1.5 16.5 8.887 16.5 18s7.387 16.5 16.5 16.5zm0-4.95c6.379 0 11.55-5.171 11.55-11.55S39.379 6.45 33 6.45s-11.55 5.171-11.55 11.55 5.171 11.55 11.55 11.55zM53.15.5h40.24c.78 0 1.25.75.83 1.4L71.43 33.37c-.32.5-.87.83-1.48.83H52.4c-.77 0-1.25-.75-.84-1.4L74.34 1.33c.32-.5.87-.83 1.48-.83h-22.7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm61.27 34c9.11 0 16.5-7.39 16.5-16.5S123.53 1.5 114.42 1.5s-16.5 7.39-16.5 16.5 7.39 16.5 16.5 16.5zm0-4.95c6.38 0 11.55-5.17 11.55-11.55s-5.17-11.55-11.55-11.55-11.55 5.17-11.55 11.55 5.17 11.55 11.55 11.55zm22.45-31c0-.83.67-1.5 1.5-1.5h6c4.97 0 9 4.03 9 9v22c0 .83-.67 1.5-1.5 1.5h-5.2c-.83 0-1.5-.67-1.5-1.5V11.23L137.9 33.37c-.32.5-.87.83-1.48.83H131c-.83 0-1.5-.67-1.5-1.5V2.55z" 
                        fill="currentColor"
                      />
                    </svg>
                    <span>{t('catalog_add')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
