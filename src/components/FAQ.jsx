import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0d1117] to-[#0a192f]/30" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about procedures, consultations, and care
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-heading font-medium text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-teal-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
