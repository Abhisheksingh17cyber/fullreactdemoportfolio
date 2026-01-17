import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Award, Users, Clock, Heart, Stethoscope, Activity, Star } from 'lucide-react';
import { Link } from 'react-scroll';
import { useAppContext } from '../context/AppContext';

// Pre-generated floating elements to avoid Math.random during render
const FLOATING_ELEMENTS = [
  { id: 0, size: 8, initialX: 15, initialY: 20, duration: 5, delay: 0 },
  { id: 1, size: 6, initialX: 75, initialY: 35, duration: 6, delay: 0.5 },
  { id: 2, size: 10, initialX: 45, initialY: 70, duration: 4.5, delay: 1 },
  { id: 3, size: 5, initialX: 85, initialY: 80, duration: 5.5, delay: 1.5 },
  { id: 4, size: 7, initialX: 25, initialY: 55, duration: 6.5, delay: 0.8 },
  { id: 5, size: 9, initialX: 60, initialY: 15, duration: 5.2, delay: 1.2 },
];

const Hero = () => {
  const { doctorInfo } = useAppContext();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const floatingElements = FLOATING_ELEMENTS;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Clock, value: doctorInfo.experience, label: "Years", color: "from-blue-500 to-blue-600" },
    { icon: Heart, value: doctorInfo.surgeries, label: "Surgeries", color: "from-red-500 to-red-600" },
    { icon: Award, value: doctorInfo.successRate, label: "Success", color: "from-violet-500 to-violet-600" },
    { icon: Star, value: doctorInfo.awards, label: "Awards", color: "from-amber-500 to-amber-600" }
  ];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0f172a_0%,#020617_100%)]" />
        
        {/* Mesh Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-600/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Orbs */}
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.initialX}%`,
              top: `${el.initialY}%`,
              background: `linear-gradient(135deg, rgba(37, 99, 235, 0.6), rgba(124, 58, 237, 0.6))`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen py-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-600/10 to-violet-600/10 border border-blue-500/20 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">
                Board Certified Surgeon
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              <span className="block text-gray-300 text-3xl sm:text-4xl lg:text-5xl font-normal mb-2">
                Hello, I'm
              </span>
              <span className="gradient-text">{doctorInfo.name}</span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-8 h-12 font-accent"
            >
              <TypeAnimation
                sequence={[
                  'Cardiothoracic Surgeon',
                  2500,
                  'Robotic Surgery Specialist',
                  2500,
                  'Minimally Invasive Expert',
                  2500,
                  'Saving Lives Daily',
                  2500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-400 text-lg lg:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              With over {doctorInfo.experience} years of excellence in surgical care, 
              delivering world-class treatment with precision, compassion, and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-violet-600 rounded-full text-white font-semibold cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-500/30 rounded-full text-blue-400 font-semibold cursor-pointer hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  Learn More
                  <ChevronDown className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-2xl bg-white/3 border border-white/6 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 transition-all duration-300" />
                  <div className={`w-10 h-10 mb-3 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stethoscope Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <motion.div
              style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
              className="relative"
            >
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-85 h-85 sm:w-100 sm:h-100 lg:w-120 lg:h-120 mx-auto"
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-blue-500/20" />
              </motion.div>

              {/* Inner Animated Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 sm:inset-10 lg:inset-12 w-69 h-69 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto"
              >
                <div className="w-full h-full rounded-full border border-violet-500/20" />
              </motion.div>
              
              {/* Main Visual Container */}
              <div className="relative w-85 h-85 sm:w-100 sm:h-100 lg:w-120 lg:h-120 mx-auto">
                {/* Gradient Background Circle */}
                <div className="absolute inset-6 sm:inset-8 rounded-full bg-linear-to-br from-blue-600/10 via-violet-600/10 to-red-600/10 blur-xl" />
                
                {/* Main Circle */}
                <motion.div 
                  className="absolute inset-8 sm:inset-10 lg:inset-12 rounded-full bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden"
                  animate={{ 
                    boxShadow: [
                      "0 0 60px rgba(37, 99, 235, 0.2)",
                      "0 0 100px rgba(124, 58, 237, 0.3)",
                      "0 0 60px rgba(37, 99, 235, 0.2)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {/* Stethoscope Icon */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                  >
                    <Stethoscope className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-blue-400 stethoscope-pulse" strokeWidth={1.5} />
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Stethoscope className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-blue-400" strokeWidth={1} />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="absolute -top-2 right-8 sm:right-12 lg:right-16"
                >
                  <div className="px-4 py-2 rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    <span>{doctorInfo.experience}+ Years</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="absolute bottom-4 -left-2 sm:left-0 lg:-left-4"
                >
                  <div className="px-4 py-2 rounded-full bg-linear-to-r from-violet-500 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/30 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{doctorInfo.successRate} Success</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2"
                >
                  <div className="px-4 py-2 rounded-full bg-linear-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold shadow-lg shadow-pink-500/30 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <span>{doctorInfo.surgeries} Lives</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={800} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
