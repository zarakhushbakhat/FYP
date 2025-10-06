import { motion } from 'motion/react';
import hayaatLogo from '@/assets/Hayaat_Logo.png';

export function BrandingPage() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo with Wipe Animation */}
        <div className="mb-8 flex justify-center relative">
          {/* Using the provided logo image */}
          <motion.div
            className="relative w-80 h-80 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ backgroundColor: '#14B8A6' }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Logo image with wipe effect */}
            <motion.div className="relative overflow-hidden w-full h-full flex items-center justify-center">
              <img 
                src={hayaatLogo} 
                alt="Hayaat Logo" 
                className="w-full h-full object-contain"
              />
              
              {/* Wipe overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tagline with fade-in */}
        <motion.p
          className="text-white"
          style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.05em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Where health meets intelligence
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-[#14B8A6] via-[#38BDF8] to-[#F97316]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </div>
    </motion.div>
  );
}
