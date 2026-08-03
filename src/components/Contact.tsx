import { useState } from 'react';
import { Send, Check, MessageCircle, MessageSquare } from 'lucide-react';
import { useApp } from '@/i18n';

const WHATSAPP_URL = 'https://wa.me/79174100565';
const TELEGRAM_URL = 'https://t.me/alfiamelnikova';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOIIK1lteNPClDarum3JFW3a0QuFI_3LpqdMrWCLR4HHAE8Tqyg'; 


export default function Contact() {
  const { t } = useApp();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl text-center text-neutral-900 dark:text-white tracking-[0.05em] mb-4">
          {t('contact_title')}
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-base font-light max-w-xl mx-auto mb-12 leading-relaxed">
          {t('contact_text')}
        </p>

        {/* Messengers — vertical list, centered */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              {t('contact_whatsapp')}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0088cc] text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Send size={20} />
              {t('contact_telegram')}
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #471AFF 0%, #9500FF 100%)' }}
            >
              <MessageSquare size={20} />
              {t('contact_max')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
