import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const { doctorInfo } = useAppContext();
  const ref = useRef(null);
  const swiperRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#0a192f]/40 to-[#0d1117]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* Quote Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-20 left-20 w-40 h-40 text-teal-500" />
        <Quote className="absolute bottom-20 right-20 w-40 h-40 text-teal-500 rotate-180" />
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
            PATIENT STORIES
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real stories from patients whose lives have been transformed through exceptional surgical care
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-4 md:px-12"
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-teal-500/50 !w-3 !h-3',
              bulletActiveClass: '!bg-teal-500 !w-8 !rounded-full'
            }}
            spaceBetween={30}
            className="pb-16"
          >
            {doctorInfo.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-teal-500/30 transition-all duration-500 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-teal-500/30 group-hover:text-teal-500/50 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6 font-accent text-lg italic">
                    "{testimonial.content}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white">{testimonial.name}</h4>
                      <p className="text-teal-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal-500/20 hover:border-teal-500/50 transition-all hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal-500/20 hover:border-teal-500/50 transition-all hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "4.9/5", label: "Patient Rating" },
            { value: "500+", label: "5-Star Reviews" },
            { value: "98%", label: "Would Recommend" },
            { value: "15K+", label: "Patients Treated" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
