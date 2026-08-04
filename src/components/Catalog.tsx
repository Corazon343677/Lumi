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
                  
                  {/* Кнопка-ссылка на Озон с идеальной круглой иконкой */}
                  <a 
                    href={p.ozonURL?.[lang] || "https://ozon.ru"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 pl-3 pr-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm hover:opacity-90 transition-opacity"
                  >
                    {/* Наша круглая иконка Ozon из папки public */}
                    <img 
                      src="/ozon-icon.png" 
                      alt="OZON" 
                      className="w-9 h-9 object-contain flex-shrink-0 bg-white rounded-full p-[1px]"
                    />
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
