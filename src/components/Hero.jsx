import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Award, Users, Clock, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import Tilt from 'react-parallax-tilt';
import { useAppContext } from '../context/AppContext';

const Hero = () => {
  const { doctorInfo } = useAppContext();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Clock, value: doctorInfo.experience, label: "Years Experience" },
    { icon: Heart, value: doctorInfo.surgeries, label: "Surgeries" },
    { icon: Award, value: doctorInfo.successRate, label: "Success Rate" },
    { icon: Users, value: doctorInfo.awards, label: "Awards" }
  ];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#0a192f] to-[#0d1117]">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(15, 118, 110, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-500/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div 
          className="absolute w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"
          style={{ x: mousePosition.x, y: mousePosition.y }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6"
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-teal-400 text-sm font-medium tracking-wider">
                BOARD CERTIFIED SURGEON
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="gradient-text text-shadow-glow">{doctorInfo.name}</span>
            </h1>

            {/* Animated Subtitle */}
            <div className="text-xl md:text-2xl text-gray-400 mb-6 font-accent h-16">
              <TypeAnimation
                sequence={[
                  'Cardiothoracic Surgeon',
                  2000,
                  'Robotic Surgery Specialist',
                  2000,
                  'Minimally Invasive Expert',
                  2000,
                  'Saving Lives Daily',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-teal-400"
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              With over {doctorInfo.experience} years of excellence in surgical care, 
              I'm dedicated to providing world-class medical treatment with precision, 
              compassion, and cutting-edge technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full text-white font-semibold cursor-pointer hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-500/50 rounded-full text-teal-400 font-semibold cursor-pointer hover:bg-teal-500/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="relative"
            >
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 mx-auto border-2 border-dashed border-teal-500/30 rounded-full"
              />
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-amber-500 p-1">
                  <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                          <span className="text-6xl font-heading font-bold text-white">G</span>
                        </div>
                        <p className="text-white font-heading text-xl">{doctorInfo.name}</p>
                        <p className="text-teal-300 text-sm">MD, FACS</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg"
                >
                  <span className="text-white font-bold text-sm">Top Rated</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full shadow-lg flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-white font-bold text-sm">{doctorInfo.awards} Awards</span>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={800} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 hover:text-teal-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
