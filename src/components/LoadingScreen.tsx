
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center z-50">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-white text-2xl font-bold"
      >
        Loading...
      </motion.div>
    </div>
  );
}