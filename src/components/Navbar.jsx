import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0d1117]/95 backdrop-blur-lg shadow-lg shadow-teal-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white heartbeat" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-[#0d1117]" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-white">{doctorInfo.name}</h1>
              <p className="text-xs text-teal-400 font-medium tracking-wider">SURGEON</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="relative cursor-pointer group"
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item.name}
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-teal-500 to-amber-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href={`tel:${doctorInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-teal-600 to-teal-700 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Book Consultation</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-[#0d1117]/98 backdrop-blur-lg border-t border-teal-900/30"
          >
            <div className="container-custom py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-gray-300 hover:text-teal-400 transition-colors font-medium border-b border-gray-800"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href={`tel:${doctorInfo.phone}`}
                className="flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-linear-to-r from-teal-600 to-teal-700 rounded-full text-white font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Book Consultation</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
