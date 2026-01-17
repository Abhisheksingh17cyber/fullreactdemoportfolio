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
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: Medal,
      title: "Pioneer in Robotic Surgery",
      organization: "International Surgical Society",
      year: "2022",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Star,
      title: "Top Doctor Award",
      organization: "US News & World Report",
      year: "2023",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Crown,
      title: "Lifetime Achievement Award",
      organization: "Society of Thoracic Surgeons",
      year: "2021",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Award,
      title: "Innovation in Healthcare",
      organization: "Healthcare Innovation Forum",
      year: "2022",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Sparkles,
      title: "Patient Choice Award",
      organization: "Healthgrades",
      year: "2023",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a192f]/30 to-[#0d1117]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.5) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium tracking-wider mb-4">
            RECOGNITION
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Awards & <span className="gradient-text-gold">Honors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Recognition for excellence in surgical care and innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <award.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {award.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{award.organization}</p>
                
                {/* Year Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
