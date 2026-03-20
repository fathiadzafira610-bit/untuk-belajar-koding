import { motion } from 'framer-motion';
import { useState } from 'react';

const certificates = [
  {
    title: 'Sertifikat Cerdas Cermat',
    description: 'Mengikuti kegiatan cerdas cermat.',
    image: '/images/certificates/sertifikat-cc.jpeg',
  },
  {
    title: 'Sertifikat Fahmil',
    description: 'Mengikuti lomba Fahmil.',
    image: '/images/certificates/sertifikat-fahmil.jpeg',
  },
  {
    title: 'Sertifikat RIAB',
    description: 'Mengikuti kegiatan RIAB.',
    image: '/images/certificates/sertifikat-riab.jpeg',
  },
  {
    title: 'Sertifikat Scout',
    description: 'Kegiatan pramuka.',
    image: '/images/certificates/sertifikat-scout.jpeg',
  },
];

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 overflow-hidden"
    >
      {/* 🌸 Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 blur-3xl opacity-30 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* 🏷️ Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Pencapaian Saya
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sertifikat Saya
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* 🧾 Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer hover:-translate-y-3 transition duration-300"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">

                {/* 🎀 Label */}
                <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full z-10">
                  Sertifikat
                </div>

                {/* 🖼️ Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* 🌫️ Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* 📝 Text */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 🔥 POPUP IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}