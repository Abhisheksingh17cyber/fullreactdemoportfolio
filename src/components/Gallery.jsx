import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Image as ImageIcon, ExternalLink, Camera } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mediaItems = [
    { type: 'image', title: 'Operating Room', category: 'Facility', color: 'from-cyan-500/20 to-cyan-600/30' },
    { type: 'image', title: 'Medical Conference', category: 'Events', color: 'from-violet-500/20 to-violet-600/30' },
    { type: 'image', title: 'Patient Care', category: 'Care', color: 'from-pink-500/20 to-pink-600/30' },
    { type: 'video', title: 'Robotic Surgery Demo', category: 'Procedures', color: 'from-amber-500/20 to-amber-600/30' },
    { type: 'image', title: 'Award Ceremony', category: 'Awards', color: 'from-emerald-500/20 to-emerald-600/30' },
    { type: 'image', title: 'Team Meeting', category: 'Team', color: 'from-blue-500/20 to-blue-600/30' },
  ];

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f172a_0%,#020617_100%)]" />

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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <Camera className="w-4 h-4" />
            Media
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gallery & <span className="bg-linear-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Media</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Behind the scenes of medical excellence
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              {/* Placeholder Background */}
              <div className={`${index === 0 ? 'aspect-square' : 'aspect-video'} bg-linear-to-br ${item.color} flex items-center justify-center border border-white/5`}>
                <div className="text-center p-6">
                  {item.type === 'video' ? (
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white/60" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white/60" />
                    </div>
                  )}
                  <p className="text-white/70 text-sm font-medium">{item.title}</p>
                  <p className="text-white/40 text-xs mt-1">{item.category}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs uppercase tracking-wider font-semibold mb-2">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20"
                    >
                      <Play className="w-10 h-10 text-white fill-white" />
                    </motion.div>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 text-pink-400 font-semibold hover:border-pink-500/40 transition-all"
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
