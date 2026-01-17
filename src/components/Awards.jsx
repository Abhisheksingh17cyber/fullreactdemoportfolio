import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Star, Award, Crown, Sparkles } from 'lucide-react';

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      icon: Trophy,
      title: "Excellence in Surgery Award",
      organization: "American College of Surgeons",
      year: "2023",
      color: "from-amber-400 to-amber-500",
      glow: "hover:shadow-amber-500/20"
    },
    {
      icon: Medal,
      title: "Pioneer in Robotic Surgery",
      organization: "International Surgical Society",
      year: "2022",
      color: "from-cyan-400 to-cyan-500",
      glow: "hover:shadow-cyan-500/20"
    },
    {
      icon: Star,
      title: "Top Doctor Award",
      organization: "US News & World Report",
      year: "2023",
      color: "from-violet-400 to-violet-500",
      glow: "hover:shadow-violet-500/20"
    },
    {
      icon: Crown,
      title: "Lifetime Achievement Award",
      organization: "Society of Thoracic Surgeons",
      year: "2021",
      color: "from-pink-400 to-pink-500",
      glow: "hover:shadow-pink-500/20"
    },
    {
      icon: Award,
      title: "Innovation in Healthcare",
      organization: "Healthcare Innovation Forum",
      year: "2022",
      color: "from-emerald-400 to-emerald-500",
      glow: "hover:shadow-emerald-500/20"
    },
    {
      icon: Sparkles,
      title: "Patient Choice Award",
      organization: "Healthgrades",
      year: "2023",
      color: "from-blue-400 to-blue-500",
      glow: "hover:shadow-blue-500/20"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-slate-950" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0f172a_0%,#020617_100%)]" />
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-violet-500/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <Trophy className="w-4 h-4" />
            Recognition
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Awards & <span className="bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Honors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Recognition for excellence in surgical care and innovation
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl ${award.glow}`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${award.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <award.icon className="w-8 h-8 text-white" />
                </div>

                {/* Year Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 font-medium mb-4">
                  {award.year}
                </span>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {award.title}
                </h3>
                <p className="text-gray-500">
                  {award.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
