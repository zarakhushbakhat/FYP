import { motion } from 'motion/react';
import { Button } from './ui/button';
import hayaatLogo from '@/assets/Hayaat_Logo.png';

interface WelcomePageProps {
  onNavigate: (page: 'login' | 'signup') => void;
}

export function WelcomePage({ onNavigate }: WelcomePageProps) {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background ECG Animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <motion.path
            d="M0,100 L200,100 L220,100 L230,60 L240,140 L250,100 L270,100 L1000,100"
            stroke="#14B8A6"
            strokeWidth="2"
            fill="none"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              x: [-1000, 0, 1000]
            }}
            transition={{ 
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
            style={{ filter: 'drop-shadow(0 0 8px #14B8A6)' }}
          />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14B8A6] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center relative p-2 overflow-hidden">
              <img src={hayaatLogo} alt="Hayaat" className="w-full h-full object-contain" />
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(20, 184, 166, 0.5)',
                    '0 0 40px rgba(20, 184, 166, 0.8)',
                    '0 0 20px rgba(20, 184, 166, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.h1
            className="mb-4 bg-gradient-to-r from-[#14B8A6] via-[#38BDF8] to-[#F97316] bg-clip-text text-transparent"
            style={{ fontSize: '3rem', fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to Hayaat
          </motion.h1>

          <motion.p
            className="text-[#94a3b8] mb-10"
            style={{ fontSize: '1.125rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your AI-powered healthcare companion awaits
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              onClick={() => onNavigate('signup')}
              className="w-full bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white py-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{ fontSize: '1.125rem', fontWeight: 600 }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2"
              >
                Sign Up
              </motion.span>
            </Button>

            <Button
              onClick={() => onNavigate('login')}
              variant="outline"
              className="w-full border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ fontSize: '1.125rem', fontWeight: 600 }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2"
              >
                Login
              </motion.span>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            className="text-[#94a3b8] mt-8"
            style={{ fontSize: '0.875rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Smarter Care, Healthier Life
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
