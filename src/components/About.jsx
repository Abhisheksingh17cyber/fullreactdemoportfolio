import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star, Check, Stethoscope, Heart, Activity } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import gsap from 'gsap';

const About = () => {
  const { doctorInfo } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const imageRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#0f172a_0%,#020617_100%)]" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-500/10 rounded-full blur-[150px]" />
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
            About Me
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet <span className="gradient-text">{doctorInfo.name}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated to transforming lives through surgical excellence and compassionate care
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
        >
          {/* Left - Image & Quick Facts */}
          <motion.div variants={itemVariants} className="relative">
            <div ref={imageRef} className="relative">
              {/* Main Card */}
              <div className="relative p-8 lg:p-10 rounded-3xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm">
                {/* Profile Visual */}
                <div className="relative aspect-4/5 rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 overflow-hidden mb-8">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10" />
                  
                  {/* Stethoscope Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                      >
                        <Stethoscope className="w-40 h-40 lg:w-56 lg:h-56 text-cyan-500/20" strokeWidth={0.5} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Doctor Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg shadow-cyan-500/30">
                        G
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white">{doctorInfo.name}</h3>
                        <p className="text-cyan-400 font-medium">MD, FACS, FCCP</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{doctorInfo.specialization}</p>
                  </div>
                </div>

                {/* Quick Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: doctorInfo.experience, label: "Years", icon: Activity, color: "cyan" },
                    { value: doctorInfo.successRate, label: "Success", icon: Star, color: "amber" },
                    { value: doctorInfo.surgeries, label: "Surgeries", icon: Heart, color: "pink" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-white/3 border border-white/5"
                    >
                      <stat.icon className={`w-5 h-5 mx-auto mb-2 text-${stat.color}-400`} />
                      <div className="text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge - Experience */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 lg:-right-8"
              >
                <div className="px-5 py-3 rounded-2xl bg-linear-to-br from-cyan-500 to-cyan-600 shadow-xl shadow-cyan-500/30">
                  <div className="text-2xl font-bold text-white">{doctorInfo.experience}+</div>
                  <div className="text-xs text-cyan-100 font-medium">Years Exp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-10">
            {/* Bio */}
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-5">
                Pioneering Excellence in <span className="gradient-text-cyan">Surgical Care</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {doctorInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-linear-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/20">
                  <GraduationCap className="w-5 h-5 text-violet-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Education</h4>
              </div>
              <div className="space-y-3 pl-1">
                {doctorInfo.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/2 border border-white/5 hover:border-violet-500/30 hover:bg-white/4 transition-all duration-300"
                  >
                    <div className="w-3 h-3 mt-1.5 rounded-full bg-linear-to-br from-violet-500 to-violet-600 shrink-0" />
                    <div>
                      <p className="text-white font-semibold group-hover:text-violet-300 transition-colors">{edu.degree}</p>
                      <p className="text-gray-500 text-sm">{edu.institution} • {edu.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-linear-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/20">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Certifications</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctorInfo.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/5 hover:border-amber-500/20 transition-all"
                  >
                    <div className="w-6 h-6 rounded-lg bg-linear-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Publications Preview */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/20">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Recent Publications</h4>
              </div>
              <div className="space-y-3">
                {doctorInfo.publications.slice(0, 2).map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="group p-4 rounded-xl bg-white/2 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
                  >
                    <p className="text-white text-sm font-semibold group-hover:text-cyan-300 transition-colors mb-1">{pub.title}</p>
                    <p className="text-gray-500 text-xs">{pub.journal} • {pub.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
