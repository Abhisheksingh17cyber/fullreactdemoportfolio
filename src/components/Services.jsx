import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Heart, 
  Cpu, 
  Activity, 
  Scissors, 
  Shield, 
  RefreshCw,
  ArrowRight 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

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
    surgery: 'from-teal-500 to-teal-600',
    heart: 'from-red-500 to-red-600',
    robot: 'from-blue-500 to-blue-600',
    emergency: 'from-amber-500 to-amber-600',
    cancer: 'from-purple-500 to-purple-600',
    reconstruct: 'from-green-500 to-green-600'
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#0a192f]/50 to-[#0d1117]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 118, 110, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium tracking-wider mb-4">
            SPECIALIZATIONS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Surgical <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Offering comprehensive surgical care with cutting-edge technology and 
            decades of expertise in various specialized procedures.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorInfo.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            const gradientColor = colorMap[service.icon] || 'from-teal-500 to-teal-600';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="group h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-teal-500/30 transition-all duration-500 cursor-pointer relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-amber-500/0 group-hover:from-teal-500/5 group-hover:to-amber-500/5 transition-all duration-500" />
                    
                    {/* Icon */}
                    <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-teal-400 group-hover:text-teal-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${gradientColor} opacity-20 rounded-bl-full`} />
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-teal-900/30 to-teal-800/20 border border-teal-500/20">
            <div className="text-left">
              <h4 className="font-heading text-lg font-bold text-white">Need a Consultation?</h4>
              <p className="text-gray-400 text-sm">Get expert advice for your specific condition</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
