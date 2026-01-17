import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
// motion is used for animations throughout this component
import { GraduationCap, Award, BookOpen, Star, Check, Stethoscope } from 'lucide-react';
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
        y: -10,
        duration: 2,
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
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium tracking-wider mb-4">
            ABOUT ME
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Meet <span className="gradient-text">{doctorInfo.name}</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-teal-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Image & Quick Facts */}
          <motion.div variants={itemVariants} className="relative">
            <div ref={imageRef} className="relative">
              {/* Main Image Card */}
              <div className="relative bg-linear-to-br from-teal-900/50 to-teal-800/30 rounded-3xl p-8 border border-teal-500/20">
                <div className="aspect-square rounded-2xl bg-linear-to-br from-teal-700 to-teal-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <Stethoscope className="w-24 h-24 text-teal-300 mx-auto mb-6" />
                    <h3 className="font-heading text-3xl font-bold text-white mb-2">{doctorInfo.name}</h3>
                    <p className="text-teal-300 font-accent text-xl">MD, FACS, FCCP</p>
                    <p className="text-gray-400 mt-4">{doctorInfo.specialization}</p>
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-6 -right-6 w-28 h-28 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex flex-col items-center justify-center shadow-xl shadow-amber-500/30"
                >
                  <span className="text-3xl font-bold text-white">{doctorInfo.experience}</span>
                  <span className="text-xs text-amber-100">Years Exp</span>
                </motion.div>

                {/* Success Rate Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute -bottom-4 -left-4 px-6 py-3 bg-linear-to-r from-teal-600 to-teal-700 rounded-full shadow-xl flex items-center gap-2"
                >
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-white font-bold">{doctorInfo.successRate} Success</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Pioneering Excellence in Surgery
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {doctorInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-500/20">
                  <GraduationCap className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Education</h4>
              </div>
              <div className="space-y-3">
                {doctorInfo.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-teal-500" />
                    <div>
                      <p className="text-white font-medium">{edu.degree}</p>
                      <p className="text-gray-400 text-sm">{edu.institution} • {edu.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-500/20">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Certifications</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {doctorInfo.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 p-2"
                  >
                    <Check className="w-4 h-4 text-teal-500 shrink-0" />
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Publications Preview */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-500/20">
                  <BookOpen className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Recent Publications</h4>
              </div>
              <div className="space-y-2">
                {doctorInfo.publications.slice(0, 2).map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <p className="text-white text-sm font-medium">{pub.title}</p>
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
