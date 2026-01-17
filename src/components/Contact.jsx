import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Linkedin,
  Twitter,
  Calendar,
  MessageSquare,
  User,
  Stethoscope
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
  const { doctorInfo } = useAppContext();
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Phone", 
      value: doctorInfo.phone,
      link: `tel:${doctorInfo.phone}`,
      color: "from-cyan-500 to-cyan-600",
      glow: "shadow-cyan-500/20"
    },
    { 
      icon: Mail, 
      title: "Email", 
      value: doctorInfo.email,
      link: `mailto:${doctorInfo.email}`,
      color: "from-violet-500 to-violet-600",
      glow: "shadow-violet-500/20"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      value: doctorInfo.address,
      link: "#",
      color: "from-pink-500 to-pink-600",
      glow: "shadow-pink-500/20"
    },
    { 
      icon: Clock, 
      title: "Office Hours", 
      value: "Mon - Fri: 9AM - 5PM",
      link: "#",
      color: "from-amber-500 to-amber-600",
      glow: "shadow-amber-500/20"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#0f172a_0%,#020617_100%)]" />
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-violet-500/10 rounded-full blur-[150px]" />
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
            <Calendar className="w-4 h-4" />
            Get In Touch
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Schedule a <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Take the first step towards better health. Contact us to schedule your personalized consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="p-8 rounded-3xl bg-white/2 border border-white/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20">
                  <Stethoscope className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white/2 hover:bg-white/5 border border-transparent hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl bg-linear-to-br ${item.color} shadow-lg ${item.glow} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1 font-medium">{item.title}</p>
                      <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-gray-500 text-sm mb-4 font-medium">Connect with Dr. Gari</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, link: doctorInfo.socialLinks?.linkedin || "#", color: "hover:bg-blue-500/20 hover:border-blue-500/30" },
                    { icon: Twitter, link: doctorInfo.socialLinks?.twitter || "#", color: "hover:bg-sky-500/20 hover:border-sky-500/30" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/3 border border-white/5 ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-white/2 border border-white/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Send a Message
                </h3>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-3">Message Sent!</h4>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                        <User className="w-4 h-4 text-gray-500" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-5 py-4 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                        <Mail className="w-4 h-4 text-gray-500" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full px-5 py-4 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-5 py-4 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                      Your Message
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/3 border border-white/8 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your condition or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-violet-500 rounded-xl text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
