import { AppProvider } from '@/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <About />
          <Catalog />
          <Contact />
          <Faq />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
