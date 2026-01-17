import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

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
      abstract: "A comprehensive analysis of minimally invasive cardiac surgery outcomes over a decade, demonstrating significant improvements in patient recovery times and reduced complications."
    },
    {
      title: "Robotic-Assisted CABG: Outcomes and Patient Selection Criteria",
      journal: "Annals of Surgery",
      date: "September 2023",
      citations: 98,
      tags: ["Robotic Surgery", "CABG", "Clinical Study"],
      abstract: "This study establishes evidence-based criteria for patient selection in robotic-assisted coronary artery bypass grafting procedures."
    },
    {
      title: "Long-term Outcomes of Transcatheter Aortic Valve Replacement",
      journal: "New England Journal of Medicine",
      date: "June 2022",
      citations: 256,
      tags: ["TAVR", "Valve Replacement", "Long-term Study"],
      abstract: "A landmark study tracking TAVR patients over five years, providing crucial data on durability and long-term survival rates."
    },
    {
      title: "AI-Assisted Surgical Planning: The Future of Precision Medicine",
      journal: "Nature Medicine",
      date: "March 2022",
      citations: 187,
      tags: ["AI", "Surgical Planning", "Innovation"],
      abstract: "Exploring the integration of artificial intelligence in pre-operative planning and its impact on surgical outcomes."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0d1117]" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wider mb-4">
            RESEARCH
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Publications & <span className="text-blue-400">Research</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contributing to medical science through peer-reviewed research and clinical studies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Citations Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">{pub.citations}</span>
                    <span className="text-xs text-gray-400">Citations</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {pub.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="text-teal-400">{pub.journal}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {pub.date}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {pub.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center">
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            View All Publications
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
