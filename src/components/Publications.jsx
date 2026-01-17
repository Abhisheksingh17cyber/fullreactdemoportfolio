import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Tag, BookOpen, FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    {
      title: "Advances in Minimally Invasive Cardiac Surgery: A 10-Year Retrospective Study",
      journal: "Journal of Thoracic and Cardiovascular Surgery",
      date: "December 2023",
      citations: 142,
      tags: ["Cardiac Surgery", "MICS", "Research"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Robotic-Assisted CABG: Outcomes and Patient Selection Criteria",
      journal: "Annals of Surgery",
      date: "September 2023",
      citations: 98,
      tags: ["Robotic Surgery", "CABG", "Clinical Study"],
      color: "from-violet-500 to-violet-600"
    },
    {
      title: "Long-term Outcomes of Transcatheter Aortic Valve Replacement",
      journal: "New England Journal of Medicine",
      date: "June 2022",
      citations: 256,
      tags: ["TAVR", "Valve Replacement", "Long-term Study"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "AI-Assisted Surgical Planning: The Future of Precision Medicine",
      journal: "Nature Medicine",
      date: "March 2022",
      citations: 187,
      tags: ["AI", "Surgical Planning", "Innovation"],
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#0f172a_0%,#020617_100%)]" />
      <div className="absolute top-1/4 left-0 w-150 h-150 bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-150 h-150 bg-violet-500/5 rounded-full blur-[150px]" />

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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Research
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Publications & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contributing to medical science through peer-reviewed research and clinical studies
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Citations Badge */}
                  <div className="shrink-0">
                    <div className={`w-24 h-24 rounded-2xl bg-linear-to-br ${pub.color} flex flex-col items-center justify-center shadow-lg`}>
                      <span className="text-3xl font-bold text-white">{pub.citations}</span>
                      <span className="text-xs text-white/70 font-medium">Citations</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-relaxed">
                      {pub.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="text-cyan-400 font-medium">{pub.journal}</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {pub.date}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 font-semibold hover:border-cyan-500/40 transition-all"
          >
            <FileText className="w-5 h-5" />
            View All Publications
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
