import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ClosingSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden">

      {/* 🌸 Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 blur-3xl opacity-30 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">

        {/* ✨ Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Terima Kasih Sudah Berkunjung 💖
        </motion.h2>

        {/* 📝 Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed mb-8"
        >
          Terima kasih telah meluangkan waktu untuk melihat portfolio saya.  
          Semoga karya yang saya buat dapat memberikan inspirasi dan kesan yang baik.  
          ✨ Sampai jumpa di project berikutnya ✨
        </motion.p>

        {/* 🎯 Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 shadow-glow"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hubungi Saya 💌
          </Button>
        </motion.div>

      </div>
    </section>
  );
}