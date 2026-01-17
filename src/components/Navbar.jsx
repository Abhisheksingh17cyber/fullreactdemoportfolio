import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Heart, Phone, Stethoscope, Calendar } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isMenuOpen, setIsMenuOpen, doctorInfo } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Experience', to: 'experience' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-slate-900/80 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-linear-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Stethoscope className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-linear-to-br from-pink-500 to-pink-600 rounded-full border-2 border-slate-900 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-2 h-2 text-white" />
              </motion.div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-white leading-tight">{doctorInfo.name}</h1>
              <p className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">Cardiothoracic Surgeon</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onSetActive={() => setActiveSection(item.to)}
                className="relative px-5 py-2.5 cursor-pointer group"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.to ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.span>
                {activeSection === item.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-violet-500 group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href={`tel:${doctorInfo.phone}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Book Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container-custom py-6 bg-slate-900/95 backdrop-blur-2xl mt-4 rounded-2xl border border-white/5">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 py-4 px-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.to 
                          ? 'bg-linear-to-r from-cyan-500/10 to-violet-500/10 text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${activeSection === item.to ? 'bg-cyan-500' : 'bg-gray-600'}`} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <a
                  href={`tel:${doctorInfo.phone}`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-linear-to-r from-cyan-500 to-violet-500 rounded-xl text-white font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
