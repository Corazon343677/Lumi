import { Hand, Leaf, Package } from 'lucide-react';
import { useApp } from '@/i18n';

export default function About() {
  const { t } = useApp();

  const cards = [
    { icon: Hand, title: t('about_card1_title'), text: t('about_card1_text') },
    { icon: Leaf, title: t('about_card2_title'), text: t('about_card2_text') },
    { icon: Package, title: t('about_card3_title'), text: t('about_card3_text') },
  ];

  return (
    <section id="about" className="py-28 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl text-center text-neutral-900 dark:text-white tracking-[0.05em] mb-6">
          {t('about_title')}
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-lg font-light max-w-2xl mx-auto mb-16 leading-relaxed">
          {t('about_text')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white dark:text-neutral-900" />
                </div>
                <h3 className="font-serif text-xl text-neutral-900 dark:text-white mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
