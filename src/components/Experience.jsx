import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { 
  Briefcase, 
  Award, 
  Users, 
  TrendingUp,
  Calendar,
  MapPin,
  ArrowRight
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
  useAppContext();
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
    { icon: Briefcase, value: "25+", label: "Years Experience", color: "from-cyan-500 to-cyan-600", glow: "shadow-cyan-500/30" },
    { icon: Award, value: "50+", label: "Medical Awards", color: "from-amber-500 to-amber-600", glow: "shadow-amber-500/30" },
    { icon: Users, value: "15000+", label: "Surgeries Done", color: "from-violet-500 to-violet-600", glow: "shadow-violet-500/30" },
    { icon: TrendingUp, value: "99%", label: "Success Rate", color: "from-emerald-500 to-emerald-600", glow: "shadow-emerald-500/30" }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#0f172a_0%,#020617_100%)]" />
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-violet-500/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-cyan-500/8 rounded-full blur-[150px]" />
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
            <Briefcase className="w-4 h-4" />
            Career Journey
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A distinguished career spanning over two decades at world-renowned medical institutions
          </p>
        </motion.div>

        {/* Stats Grid - Clean Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-24"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="p-6 lg:p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/20 transition-all duration-500 text-center relative overflow-hidden">
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-5 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg ${item.glow} transform group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <AnimatedNumber value={item.value} suffix={item.value.includes('%') ? '%' : '+'} />
                </div>
                <div className="text-gray-500 text-sm font-medium">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline - Clean Modern Design */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 lg:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-linear-to-br from-cyan-500 to-violet-500 z-10 ring-4 ring-slate-900">
                <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-30" />
              </div>

              {/* Content Card */}
              <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-40px)] ${index % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0'}`}>
                <div className="group p-6 lg:p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>

                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-4">
                    <span className="font-semibold text-gray-300">{exp.organization}</span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-br from-cyan-500 to-violet-500 shrink-0" />
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
