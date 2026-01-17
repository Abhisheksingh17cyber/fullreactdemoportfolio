import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, FileText, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mediaItems = [
    { type: 'image', title: 'Operating Room', category: 'Facility' },
    { type: 'image', title: 'Medical Conference', category: 'Events' },
    { type: 'image', title: 'Patient Care', category: 'Care' },
    { type: 'video', title: 'Robotic Surgery Demo', category: 'Procedures' },
    { type: 'image', title: 'Award Ceremony', category: 'Awards' },
    { type: 'image', title: 'Team Meeting', category: 'Team' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a192f]/30 to-[#0d1117]" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium tracking-wider mb-4">
            MEDIA
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery & <span className="gradient-text">Media</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              {/* Placeholder Background */}
              <div className={`${index === 0 ? 'aspect-square' : 'aspect-video'} bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center`}>
                <div className="text-center p-4">
                  {item.type === 'video' ? (
                    <Play className="w-12 h-12 text-white/50 mx-auto mb-2" />
                  ) : (
                    <FileText className="w-12 h-12 text-white/50 mx-auto mb-2" />
                  )}
                  <p className="text-white/70 text-sm">{item.title}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <span className="text-teal-400 text-xs uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white font-medium">{item.title}</h4>
                
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-teal-500/50 rounded-full text-teal-400 font-medium hover:bg-teal-500/10 transition-all"
          >
            View All Media
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
