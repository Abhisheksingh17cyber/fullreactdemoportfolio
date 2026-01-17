import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
// motion is used for animations, animated is used in AnimatedNumber
import { 
  Briefcase, 
  Award, 
  Users, 
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [inView, setInView] = useState(false);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? numericValue : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });

  return (
    <span 
      ref={(el) => {
        if (el) {
          const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.5 }
          );
          observer.observe(el);
        }
      }}
    >
      <animated.span>
        {number.to((n) => Math.floor(n).toLocaleString())}
      </animated.span>
      {suffix}
    </span>
  );
};

const Experience = () => {
  useAppContext(); // context used for theme consistency
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "2018 - Present",
      title: "Chief of Surgery",
      organization: "Metropolitan Medical Center",
      location: "New York, NY",
      description: "Leading a team of 50+ surgeons, overseeing complex surgical procedures, and implementing innovative surgical techniques.",
      achievements: ["5000+ surgeries performed", "Introduced robotic surgery program", "98.5% patient satisfaction"]
    },
    {
      period: "2012 - 2018",
      title: "Senior Cardiothoracic Surgeon",
      organization: "Johns Hopkins Hospital",
      location: "Baltimore, MD",
      description: "Specialized in minimally invasive cardiac procedures and valve replacement surgeries.",
      achievements: ["Pioneer in TAVR procedures", "Published 25+ research papers", "Trained 100+ fellows"]
    },
    {
      period: "2005 - 2012",
      title: "Attending Surgeon",
      organization: "Mayo Clinic",
      location: "Rochester, MN",
      description: "Focused on complex thoracic surgeries and developed new surgical protocols.",
      achievements: ["Excellence in Surgery Award", "Led international surgical missions", "Developed novel techniques"]
    }
  ];

  const achievements = [
    { icon: Briefcase, value: "25+", label: "Years Experience", color: "from-teal-500 to-teal-600" },
    { icon: Award, value: "50+", label: "Medical Awards", color: "from-amber-500 to-amber-600" },
    { icon: Users, value: "15000+", label: "Surgeries Done", color: "from-blue-500 to-blue-600" },
    { icon: TrendingUp, value: "99%", label: "Success Rate", color: "from-green-500 to-green-600" }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0d1117] via-[#0a192f]/30 to-[#0d1117]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium tracking-wider mb-4">
            CAREER JOURNEY
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A distinguished career spanning over two decades at world-renowned medical institutions
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-teal-500 to-amber-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all duration-300 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedNumber value={item.value} suffix={item.value.includes('%') ? '%' : '+'} />
                </div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-teal-500 via-teal-500/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-teal-500 border-4 border-[#0d1117] z-10">
                <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-4">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="font-medium">{exp.organization}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
