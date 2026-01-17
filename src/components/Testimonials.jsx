import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Quote, Star, Heart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const { doctorInfo } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f172a_0%,#020617_100%)]" />
        <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-pink-500/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-[150px] -translate-y-1/2" />
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
            <Heart className="w-4 h-4" />
            Patient Stories
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Patients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from patients whose lives have been transformed through exceptional surgical care
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {doctorInfo.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="group h-full p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-cyan-500/20 transition-all duration-500 relative overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Quote Icon */}
                    <div className="relative mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="relative text-gray-300 leading-relaxed mb-8 text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="relative flex items-center gap-4 pt-6 border-t border-white/5">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.procedure}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {[
            { value: "4.9/5", label: "Patient Rating" },
            { value: "500+", label: "5-Star Reviews" },
            { value: "98%", label: "Would Recommend" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
