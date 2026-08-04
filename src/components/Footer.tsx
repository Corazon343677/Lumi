import { useApp } from '@/i18n';

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-neutral-950 dark:bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <span className="font-serif text-white text-xl tracking-[0.2em] uppercase">
          {t('brand')}
        </span>
        <p className="text-neutral-500 text-xs tracking-[0.15em] uppercase">
          {t('tagline')}
        </p>
        <p className="text-neutral-600 text-xs mt-2">
          © {year} {t('brand')}. {t('footer_rights')}.
        </p>
      </div>
      <div className="text-center text-[10px] text-gray-400 mt-4">
        <a 
        href="https://www.flaticon.com/ru/free-icons/" 
        title="кружево иконки" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline"
        >
          Кружево иконки от Magnific - Flaticon
        </a>
      </div>

      
    </footer>
  );
}
