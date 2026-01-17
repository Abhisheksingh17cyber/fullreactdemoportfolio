import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { Link } from 'react-scroll';
import { useAppContext } from '../context/AppContext';

const Footer = () => {
  const { doctorInfo } = useAppContext();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Experience', to: 'experience' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' }
  ];

  const services = [
    'Minimally Invasive Surgery',
    'Cardiothoracic Surgery',
    'Robotic Surgery',
    'Trauma Surgery'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1117] to-[#050709] overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">{doctorInfo.name}</h3>
                <p className="text-xs text-teal-400">World-Class Surgeon</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Dedicated to providing exceptional surgical care with precision, compassion, 
              and cutting-edge technology. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <a 
                href={doctorInfo.socialLinks.linkedin}
                className="p-2 rounded-lg bg-white/5 hover:bg-teal-500/20 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
              <a 
                href={doctorInfo.socialLinks.twitter}
                className="p-2 rounded-lg bg-white/5 hover:bg-teal-500/20 transition-all group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
              <a 
                href={`mailto:${doctorInfo.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-teal-500/20 transition-all group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <a 
                href={`tel:${doctorInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{doctorInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${doctorInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{doctorInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-sm leading-relaxed">{doctorInfo.address}</span>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
              <p className="text-red-400 text-sm font-medium">Emergency Line</p>
              <p className="text-white font-bold">+1 (555) 999-0000</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {doctorInfo.name}. All rights reserved. 
            <span className="text-gray-600"> | </span>
            <span className="text-gray-400">HIPAA Compliant</span>
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link to="home" smooth={true} duration={800}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
