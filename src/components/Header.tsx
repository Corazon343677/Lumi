import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Languages, ArrowUp, Info, ShoppingBag, Mail, HelpCircle } from 'lucide-react';
import { useApp } from '@/i18n';

export default function Header() {
  const { theme, lang, toggleTheme, toggleLang, t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'about', label: t('nav_about'), icon: Info },
    { id: 'top', label: t('nav_top'), icon: ArrowUp },
    { id: 'catalog', label: t('nav_catalog'), icon: ShoppingBag },
    { id: 'contact', label: t('nav_contact'), icon: Mail },
    { id: 'faq', label: t('nav_faq'), icon: HelpCircle },
  ];

  const scrollTo = (id: string) => {
    setOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 dark:bg-black/70 backdrop-blur-xl border-b border-white/10'
            : 'bg-black/20 dark:bg-black/30 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo('top')}
            className="text-white font-serif text-2xl tracking-[0.2em] uppercase select-none hover:opacity-80 transition-opacity"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            {t('brand')}
          </button>

          <button
            onClick={() => setOpen(true)}
            aria-label="Menu"
            className="flex flex-col gap-[5px] p-2 group"
          >
            <span className="block w-7 h-[2px] bg-white rounded-full transition-all group-hover:w-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }} />
            <span className="block w-7 h-[2px] bg-white rounded-full transition-all group-hover:w-5" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }} />
            <span className="block w-7 h-[2px] bg-white rounded-full transition-all group-hover:w-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }} />
          </button>
        </div>
      </header>

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[340px] max-w-[85vw] bg-white dark:bg-neutral-900 shadow-2xl transition-transform duration-500 flex flex-col ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 dark:border-neutral-800">
            <span className="font-serif text-xl tracking-[0.15em] uppercase text-neutral-900 dark:text-white">
              {t('brand')}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-6 flex-1 overflow-y-auto">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-base">
                {theme === 'dark' ? t('theme_toggle') : t('theme_toggle_dark')}
              </span>
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200"
            >
              <Languages size={20} />
              <span className="text-base">
                {lang === 'ru' ? t('lang_label_en') : t('lang_label')}
              </span>
            </button>

            <div className="my-3 h-px bg-neutral-200 dark:bg-neutral-800" />

            {/* Navigation */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200 text-base"
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
              {t('tagline')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
