import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '10+', label: 'Projects' },
    { icon: Video, value: 'Learning', label: 'Content' },
    
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400">
      {/* GLOW EFFECT */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
<div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl">👩🏻‍💻</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">
                  Learning
                </p>
                <p className="text-sm text-muted-foreground">
                  Journey
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* CARD DESKRIPSI */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-xl">

              <h3 className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Passionate Web Developer &amp; Lifelong Learner
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Saya adalah seorang Web Developer yang memiliki minat dalam pengembangan aplikasi web modern. 
                Saya senang membangun website yang responsif, user-friendly, dan memiliki tampilan yang menarik. 
                Saat ini, saya terus mengembangkan kemampuan saya dengan mempelajari berbagai teknologi terbaru 
                dan mengerjakan berbagai proyek pribadi.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Saya belajar menggunakan teknologi seperti React, TypeScript, dan Tailwind CSS dalam membangun 
                aplikasi web yang modern dan efisien. Saya percaya bahwa konsistensi dan rasa ingin tahu adalah 
                kunci untuk berkembang menjadi developer yang lebih baik.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-all hover:-translate-y-1"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
