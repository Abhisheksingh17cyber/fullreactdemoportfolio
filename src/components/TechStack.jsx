import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { 
  Activity, 
  HeartPulse, 
  Microscope, 
  Cpu, 
  Stethoscope,
  Syringe,
  Pill,
  FlaskRound,
  Brain,
  Eye,
  Zap
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { icon: Cpu, name: "Da Vinci XI", desc: "Robotic Surgery", color: "from-cyan-500 to-cyan-600" },
    { icon: HeartPulse, name: "ECMO", desc: "Heart-Lung Support", color: "from-pink-500 to-pink-600" },
    { icon: Microscope, name: "3D Imaging", desc: "Visualization", color: "from-violet-500 to-violet-600" },
    { icon: Brain, name: "AI Diagnosis", desc: "Machine Learning", color: "from-amber-500 to-amber-600" },
    { icon: Activity, name: "Real-time", desc: "Monitoring", color: "from-emerald-500 to-emerald-600" },
    { icon: Stethoscope, name: "Telemedicine", desc: "Remote Care", color: "from-blue-500 to-blue-600" },
    { icon: Syringe, name: "Precision", desc: "Micro-dosing", color: "from-rose-500 to-rose-600" },
    { icon: Eye, name: "Endoscopy", desc: "Minimally Invasive", color: "from-indigo-500 to-indigo-600" },
    { icon: FlaskRound, name: "Lab Integration", desc: "Instant Results", color: "from-teal-500 to-teal-600" },
    { icon: Pill, name: "Smart Pharma", desc: "Drug Monitoring", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f172a_0%,#020617_100%)]" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 container-custom relative z-10"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6"
        >
          <Zap className="w-4 h-4" />
          Technology
        </motion.span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Cutting-Edge <span className="gradient-text">Equipment</span>
        </h2>
      </motion.div>

      {/* Tech Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 }
          }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop={true}
          className="tech-swiper"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-cyan-500/20 transition-all duration-500 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{tech.name}</h3>
                <p className="text-gray-500 text-xs">{tech.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TechStack;
