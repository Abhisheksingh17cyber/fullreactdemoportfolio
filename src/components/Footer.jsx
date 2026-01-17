import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Stethoscope,
  ArrowUp,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';
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
    'Cardiothoracic Surgery',
    'Robotic Surgery',
    'Minimally Invasive',
    'Valve Replacement',
    'Heart Transplant',
    'Emergency Care'
  ];

  const socialLinks = [
    { icon: Linkedin, link: doctorInfo.socialLinks?.linkedin || "#", label: "LinkedIn" },
    { icon: Twitter, link: doctorInfo.socialLinks?.twitter || "#", label: "Twitter" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Facebook, link: "#", label: "Facebook" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative container-custom pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">{doctorInfo.name}</h3>
                <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">Surgeon</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Dedicated to providing exceptional surgical care with over {doctorInfo.experience} years of experience in cardiothoracic surgery.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyan-500 transition-colors" />
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
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${doctorInfo.phone}`} className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">{doctorInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${doctorInfo.email}`} className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium">{doctorInfo.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    <MapPin className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm">{doctorInfo.address}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              © {currentYear} {doctorInfo.name}. Made with 
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> 
              All rights reserved.
            </p>

            {/* Back to Top */}
            <Link to="home" smooth={true} duration={800}>
              <motion.button
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/3 border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 text-sm font-medium"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
