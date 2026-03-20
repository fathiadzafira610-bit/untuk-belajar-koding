import { motion } from 'framer-motion';
import { Code2, Video } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '10+', label: 'Projects' },
    { icon: Video, value: 'Learning', label: 'Content' },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100"
    >
      {/* SOFT GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 blur-3xl opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 blur-3xl opacity-30 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mengenal Lebih Dekat
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="aspect-square rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl shadow-2xl flex items-center justify-center"
            >
              <span className="text-8xl">👩🏻‍💻</span>
            </motion.div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -right-6 p-4 bg-white/80 backdrop-blur-lg rounded-xl shadow-xl"
            >
              <p className="font-display font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Learning
              </p>
              <p className="text-sm text-muted-foreground">
                Journey 🚀
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* CARD */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">

              <h3 className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Passionate Web Developer &amp; Lifelong Learner
              </h3>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Saya adalah seorang Web Developer yang memiliki minat dalam pengembangan aplikasi web modern. 
                Saya senang membangun website yang responsif, user-friendly, dan memiliki tampilan yang menarik. 
              </p>

              <p className="text-muted-foreground leading-relaxed mt-2">
                Saat ini, saya terus mengembangkan kemampuan saya dengan mempelajari berbagai teknologi terbaru 
                dan mengerjakan berbagai proyek pribadi.
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
                  className="p-4 bg-white/70 backdrop-blur-lg rounded-xl text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <stat.icon className="h-6 w-6 text-purple-500 mx-auto mb-2" />
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