import { motion } from 'framer-motion';

const skills = {
  teknologi: [
    { name: 'Informatika (Dasar Web & Coding)', level: 85 },
    { name: 'Pemrograman Web', level: 80 },
    { name: 'Dasar JavaScript', level: 75 },
  ],
  pelajaran: [
    { name: 'Matematika', level: 75 },
    { name: 'Bahasa Inggris', level: 85 },
    { name: 'Kimia', level: 95 },
    { name: 'Biologi', level: 95 },
  ],
  hobi: [
    { name: 'Membaca', level: 90 },
    { name: 'Berenang', level: 85 },
    { name: 'Main Gitar', level: 90 },
    { name: 'Belajar', level: 95 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 blur-3xl opacity-30 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Pembelajaran Saya
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Bidang yang Saya Pelajari
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Teknologi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">💻</span>
              <h3 className="font-display text-xl font-bold">Teknologi</h3>
            </div>

            <div className="space-y-4">
              {skills.teknologi.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Pelajaran */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📚</span>
              <h3 className="font-display text-xl font-bold">Pelajaran</h3>
            </div>

            <div className="space-y-4">
              {skills.pelajaran.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Hobi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎸</span>
              <h3 className="font-display text-xl font-bold">Hobi</h3>
            </div>

            <div className="space-y-4">
              {skills.hobi.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
