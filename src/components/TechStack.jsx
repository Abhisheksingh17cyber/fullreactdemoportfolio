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
  Eye
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { icon: Cpu, name: "Da Vinci XI", desc: "Robotic Surgery System" },
    { icon: HeartPulse, name: "ECMO", desc: "Heart-Lung Support" },
    { icon: Microscope, name: "3D Imaging", desc: "Advanced Visualization" },
    { icon: Brain, name: "AI Diagnosis", desc: "Machine Learning" },
    { icon: Activity, name: "Real-time Monitor", desc: "Patient Tracking" },
    { icon: Stethoscope, name: "Telemedicine", desc: "Remote Consultation" },
    { icon: Syringe, name: "Precision Injection", desc: "Micro-dosing" },
    { icon: Eye, name: "Endoscopy", desc: "Minimally Invasive" },
    { icon: FlaskRound, name: "Lab Integration", desc: "Instant Results" },
    { icon: Pill, name: "Smart Pharma", desc: "Drug Monitoring" }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0d1117]" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 container-custom"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium tracking-wider mb-4">
          CUTTING-EDGE TECHNOLOGY
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
          Advanced Medical <span className="gradient-text">Equipment</span>
        </h2>
      </motion.div>

      {/* Tech Marquee - First Row */}
      <div className="mb-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          speed={5000}
          className="tech-swiper"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all min-w-[250px]">
                <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500/20 to-teal-600/20">
                  <tech.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{tech.name}</h4>
                  <p className="text-gray-500 text-sm">{tech.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tech Marquee - Second Row (Reverse) */}
      <div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          className="tech-swiper"
        >
          {[...technologies].reverse().map((tech, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all min-w-[250px]">
                <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20">
                  <tech.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{tech.name}</h4>
                  <p className="text-gray-500 text-sm">{tech.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechStack;
