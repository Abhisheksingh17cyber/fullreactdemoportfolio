import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Stethoscope } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What should I expect during my first consultation?",
      answer: "During your first consultation, Dr. Gari will review your medical history, discuss your condition in detail, perform a physical examination if needed, and explain all available treatment options. This comprehensive evaluation typically takes 45-60 minutes, ensuring you have all the information needed to make informed decisions about your care."
    },
    {
      question: "How do I prepare for surgery?",
      answer: "Pre-surgery preparation includes fasting for 8-12 hours before the procedure, stopping certain medications as advised, arranging for transportation home, and completing all required pre-operative tests. Our team will provide you with a detailed preparation guide specific to your procedure."
    },
    {
      question: "What is the recovery time for minimally invasive surgery?",
      answer: "Recovery times vary depending on the specific procedure, but minimally invasive surgeries typically allow patients to return to normal activities within 1-3 weeks, compared to 6-8 weeks for traditional open surgery. Most patients experience significantly less pain and scarring."
    },
    {
      question: "Does Dr. Gari accept insurance?",
      answer: "Yes, we accept most major insurance plans including Medicare, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Our billing team will verify your coverage and explain any out-of-pocket costs before your procedure."
    },
    {
      question: "What are the risks of robotic surgery?",
      answer: "Robotic surgery is generally very safe with a complication rate of less than 2%. Potential risks include infection, bleeding, and reactions to anesthesia, similar to any surgical procedure. Dr. Gari will discuss all risks specific to your case during your consultation."
    },
    {
      question: "How can I schedule an emergency consultation?",
      answer: "For emergencies, please call our 24/7 emergency line at +1 (555) 999-0000. For urgent but non-emergency consultations, contact our office during business hours and mention that you need an urgent appointment. We always prioritize patient safety."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#0f172a_0%,#020617_100%)]" />
      <div className="absolute top-0 right-1/4 w-150 h-150 bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </motion.span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Find answers to common questions about procedures, consultations, and care
            </p>

            {/* Decorative Stethoscope */}
            <div className="hidden lg:block relative">
              <div className="w-48 h-48 rounded-3xl bg-linear-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/10 flex items-center justify-center">
                <Stethoscope className="w-24 h-24 text-cyan-500/30" />
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-white/2 border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Still have questions?</p>
                  <p className="text-gray-400 text-sm">Contact our support team</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20' 
                    : 'bg-white/2 border border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-heading font-semibold pr-4 transition-colors ${
                    openIndex === index ? 'text-cyan-300' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      openIndex === index ? 'bg-cyan-500/20' : 'bg-white/5'
                    }`}
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${
                      openIndex === index ? 'text-cyan-400' : 'text-gray-500'
                    }`} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
