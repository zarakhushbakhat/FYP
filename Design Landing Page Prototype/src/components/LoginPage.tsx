// src/components/LoginPage.tsx
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import hayaatLogo from '@/assets/Hayaat_Logo.png';

interface LoginPageProps {
  onNavigate: (page: 'welcome' | 'signup' | 'landing') => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      email: !formData.email || !formData.email.includes('@'),
      password: !formData.password || formData.password.length < 6
    };
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      onNavigate('landing');
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] flex items-center justify-center relative overflow-hidden py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14B8A6] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto max-w-md relative z-10">
        {/* Back Button */}
        <motion.button
          onClick={() => onNavigate('welcome')}
          className="mb-6 flex items-center gap-2 text-[#94a3b8] hover:text-[#14B8A6] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <motion.div
          className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 relative"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, #14B8A6, #38BDF8, #14B8A6)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite',
                filter: 'blur(2px)',
                opacity: 0.3
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center p-2 overflow-hidden">
                <img src={hayaatLogo} alt="Hayaat" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-center mb-2 text-white"
              style={{ fontSize: '2rem', fontWeight: 700 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome Back
            </motion.h2>

            <motion.p
              className="text-center text-[#94a3b8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Login to continue your health journey
            </motion.p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                {...(errors.email && { animate: { x: [-10, 10, -10, 10, 0] } })}
              >
                <Label htmlFor="email" className="text-[#E5E7EB] mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: false });
                  }}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white border-2 ${
                    errors.email
                      ? 'border-red-500'
                      : focusedField === 'email'
                      ? 'border-transparent'
                      : 'border-white/20'
                  } text-[#0a0f1a] rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none`}
                  style={{
                    boxShadow:
                      focusedField === 'email'
                        ? '0 0 20px rgba(20, 184, 166, 0.5), 0 0 0 2px transparent, 0 0 0 4px #14B8A6'
                        : 'none',
                    fontSize: '1rem'
                  }}
                />
                {errors.email && (
                  <motion.p
                    className="text-red-500 mt-1"
                    style={{ fontSize: '0.875rem' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Please enter a valid email address
                  </motion.p>
                )}
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                {...(errors.password && { animate: { x: [-10, 10, -10, 10, 0] } })}
              >
                <Label htmlFor="password" className="text-[#E5E7EB] mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    setErrors({ ...errors, password: false });
                  }}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white border-2 ${
                    errors.password
                      ? 'border-red-500'
                      : focusedField === 'password'
                      ? 'border-transparent'
                      : 'border-white/20'
                  } text-[#0a0f1a] rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none`}
                  style={{
                    boxShadow:
                      focusedField === 'password'
                        ? '0 0 20px rgba(56, 189, 248, 0.5), 0 0 0 2px transparent, 0 0 0 4px #38BDF8'
                        : 'none',
                    fontSize: '1rem'
                  }}
                />
                {errors.password && (
                  <motion.p
                    className="text-red-500 mt-1"
                    style={{ fontSize: '0.875rem' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Password must be at least 6 characters
                  </motion.p>
                )}
              </motion.div>

              {/* Forgot Password */}
              <motion.div
                className="text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a
                  href="#"
                  className="text-[#38BDF8] hover:text-[#14B8A6] transition-colors duration-300 relative group"
                  style={{ fontSize: '0.875rem' }}
                >
                  Forgot password?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#14B8A6] group-hover:w-full transition-all duration-300" />
                </a>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white py-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    boxShadow: '0 0 20px rgba(20, 184, 166, 0.4)'
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </form>

            {/* Sign Up Link */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-[#94a3b8]">
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => onNavigate('signup')}
                  className="text-[#38BDF8] hover:text-[#14B8A6] transition-colors duration-300 relative group"
                  style={{ fontWeight: 600 }}
                >
                  Sign Up
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#14B8A6] group-hover:w-full transition-all duration-300" />
                </button>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  );
}
