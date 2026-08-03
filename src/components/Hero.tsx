import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '@/i18n';
import { slideshowImages } from '@/data';

export default function Hero() {
  const { t } = useApp();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCatalog = () =>
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {slideshowImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === index ? 1 : 0,
              filter: 'grayscale(100%) contrast(1.05) brightness(0.55)',
            }}
          />
        ))}
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-center max-w-2xl pt-20">
          <h1
            className="font-serif text-white text-6xl sm:text-7xl md:text-8xl tracking-[0.08em] leading-[1.05] mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7)' }}
          >
            {t('hero_title')}
          </h1>
          <p
            className="text-white/80 text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-xl"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            {t('hero_history_1')}
          </p>
          <p
            className="text-white/70 text-base sm:text-lg font-light leading-relaxed mb-12 max-w-xl"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            {t('hero_history_2')}
          </p>

          <button
            onClick={scrollToContact}
            className="self-start group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-sm tracking-[0.15em] uppercase">{t('nav_contact')}</span>
          </button>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={scrollToCatalog}
        aria-label="Scroll to catalog"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <span className="animate-bounce">
          <ChevronDown size={28} />
        </span>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-white' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
