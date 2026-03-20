import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Kamu belajar coding sejak kapan?',
    answer: 'Saya mulai belajar coding sejak tertarik dengan dunia web development dan terus berkembang sampai sekarang.',
  },
  {
    question: 'Teknologi apa yang kamu pakai?',
    answer: 'Saya menggunakan React, TypeScript, Tailwind CSS, dan beberapa tools modern lainnya.',
  },
 {
  question: 'Apa fokus utama kamu saat ini?',
  answer: 'Saat ini saya fokus mengembangkan skill di bidang frontend development dan membangun project-project modern.',
}
];

export default function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 blur-3xl opacity-30 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-muted-foreground">
            Pertanyaan yang sering ditanyakan
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold">
                  {item.question}
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-muted-foreground"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}