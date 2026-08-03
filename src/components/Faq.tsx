import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '@/i18n';

export default function Faq() {
  const { t } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: t('faq1_q'), a: t('faq1_a') },
    { q: t('faq2_q'), a: t('faq2_a') },
    { q: t('faq3_q'), a: t('faq3_a') },
  ];

  return (
    <section id="faq" className="py-28 px-6 bg-neutral-100 dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl text-center text-neutral-900 dark:text-white tracking-[0.05em] mb-4">
          {t('faq_title')}
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-base font-light mb-14">
          {t('faq_subtitle')}
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <span className="text-base font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-neutral-400 transition-transform duration-300 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
