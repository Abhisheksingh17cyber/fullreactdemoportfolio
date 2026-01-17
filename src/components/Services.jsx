import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Heart, 
  Cpu, 
  Activity, 
  Scissors, 
  Shield, 
  RefreshCw,
  ArrowRight,
  Stethoscope,
  Calendar
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-scroll';

const Services = () => {
  const { doctorInfo } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    surgery: Scissors,
    heart: Heart,
    robot: Cpu,
    emergency: Activity,
    cancer: Shield,
    reconstruct: RefreshCw
  };

  const colorMap = {
    surgery: { bg: 'from-cyan-500 to-cyan-600', glow: 'shadow-cyan-500/30', border: 'border-cyan-500/30' },
    heart: { bg: 'from-pink-500 to-pink-600', glow: 'shadow-pink-500/30', border: 'border-pink-500/30' },
    robot: { bg: 'from-violet-500 to-violet-600', glow: 'shadow-violet-500/30', border: 'border-violet-500/30' },
    emergency: { bg: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/30', border: 'border-amber-500/30' },
    cancer: { bg: 'from-rose-500 to-rose-600', glow: 'shadow-rose-500/30', border: 'border-rose-500/30' },
    reconstruct: { bg: 'from-emerald-500 to-emerald-600', glow: 'shadow-emerald-500/30', border: 'border-emerald-500/30' }
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f172a_0%,#020617_100%)]" />
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-violet-500/5 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.5) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <Stethoscope className="w-4 h-4" />
            Specializations
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Surgical <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive surgical care with cutting-edge technology and decades of expertise in specialized procedures
          </p>
        </motion.div>

        {/* Services Grid - Clean Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctorInfo.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            const colors = colorMap[service.icon] || colorMap.surgery;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`group h-full p-8 rounded-3xl bg-white/2 border border-white/5 hover:${colors.border} transition-all duration-500 cursor-pointer relative overflow-hidden`}>
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${colors.bg} flex items-center justify-center shadow-lg ${colors.glow} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-linear-to-br ${colors.bg} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-gray-500 group-hover:text-cyan-400 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-linear-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 border border-white/10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-cyan-500/10 to-transparent" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h4 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
                  Need a Consultation?
                </h4>
                <p className="text-gray-400 text-lg max-w-xl">
                  Get expert advice for your specific condition. Schedule a personalized consultation today.
                </p>
              </div>
              <Link
                to="contact"
                smooth={true}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
