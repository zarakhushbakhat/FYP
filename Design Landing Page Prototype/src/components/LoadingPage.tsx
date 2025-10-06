import { motion } from 'motion/react';

export function LoadingPage() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* ECG Heartbeat Animation */}
        <div className="mb-8 flex justify-center">
          <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
            <motion.path
              d="M0,50 L40,50 L45,30 L50,70 L55,50 L60,50 L65,40 L70,60 L75,50 L200,50"
              stroke="#14B8A6"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                filter: 'drop-shadow(0 0 8px #14B8A6) drop-shadow(0 0 16px #14B8A6)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              }}
            />
            {/* Glowing dot that follows the path */}
            <motion.circle
              r="4"
              fill="#14B8A6"
              initial={{ x: 0, y: 50 }}
              animate={{ 
                x: [0, 40, 45, 50, 55, 60, 65, 70, 75, 200],
                y: [50, 50, 30, 70, 50, 50, 40, 60, 50, 50]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ filter: 'drop-shadow(0 0 6px #14B8A6)' }}
            />
          </svg>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-white"
          style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.05em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Connecting you to better health
        </motion.p>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#14B8A6]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
