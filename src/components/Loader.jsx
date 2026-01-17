import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Heart } from 'lucide-react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-9999 bg-slate-950 flex flex-col items-center justify-center"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px]" />
        </div>

        {/* Loader Content */}
        <div className="relative flex flex-col items-center">
          {/* Animated Stethoscope */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-10"
          >
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-32 h-32 -m-4 rounded-full border-2 border-dashed border-cyan-500/20"
            />
            
            {/* Main Icon Container */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(6, 182, 212, 0.2)",
                  "0 0 60px rgba(6, 182, 212, 0.4)",
                  "0 0 30px rgba(6, 182, 212, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-linear-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Stethoscope className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            {/* Pulse Heart */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30"
            >
              <Heart className="w-4 h-4 text-white fill-white" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-2">Dr. Gari</h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase">Cardiothoracic Surgeon</p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-linear-to-r from-cyan-500 to-violet-500 rounded-full"
            />
          </div>

          {/* Progress Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-500 text-sm font-medium"
          >
            {progress}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
