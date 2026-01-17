import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from './context/AppContext';

// Components
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {}, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppProvider>
      <div className="relative">
        <CustomCursor />
        <AnimatePresence mode="wait">
          {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        {!isLoading && (
          <main className="relative">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Experience />
            <TechStack />
            <Awards />
            <Testimonials />
            <Publications />
            <Gallery />
            <FAQ />
            <Contact />
            <Footer />
          </main>
        )}
      </div>
    </AppProvider>
  );
}

export default App;
