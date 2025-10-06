import { motion } from 'motion/react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
      {/* Animated ECG Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <motion.path
            d="M0,100 L200,100 L220,100 L230,60 L240,140 L250,100 L270,100 L1000,100"
            stroke="#14B8A6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.3, 0.7, 0.3],
              x: [-1000, 0, 1000]
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
            style={{ filter: 'drop-shadow(0 0 8px #14B8A6)' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-[#14B8A6] mb-6">
              AI-Powered Healthcare
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 bg-gradient-to-r from-[#14B8A6] via-[#38BDF8] to-[#F97316] bg-clip-text text-transparent"
            style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hayaat – Smarter Care, Healthier Life
          </motion.h1>

          <motion.p
            className="mb-10 text-[#94a3b8] max-w-2xl mx-auto"
            style={{ fontSize: '1.25rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            An AI-powered healthcare and medicine management system that puts your health first
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              onClick={onGetStarted}
              className="bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#14B8A6]/50"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </section>
  );
}
