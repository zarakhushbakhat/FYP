import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import hayaatLogo from '@/assets/Hayaat_Logo.png';

interface SignUpPageProps {
  onNavigate: (page: 'welcome' | 'login' | 'landing') => void;
}

export function SignUpPage({ onNavigate }: SignUpPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: !formData.name || formData.name.length < 2,
      email: !formData.email || !formData.email.includes('@'),
      password: !formData.password || formData.password.length < 6,
      confirmPassword: formData.password !== formData.confirmPassword
    };
    
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      onNavigate('landing');
    }
  };

  // 🔧 Helper to merge animations safely
  const fieldAnimate = (base: any, hasError: boolean) => ({
    ...base,
    x: hasError ? [-10, 10, -10, 10, 0] : 0,
  });

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] flex items-center justify-center relative overflow-hidden py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Blurs */}
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
          {/* Glow border */}
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
              className="text-center mb-2 text-white text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Create Account
            </motion.h2>

            <motion.p
              className="text-center text-[#94a3b8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Start your journey to better health
            </motion.p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={fieldAnimate({ opacity: 1, y: 0 }, errors.name)}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Label htmlFor="name" className="text-[#E5E7EB] mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrors({ ...errors, name: false });
                  }}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white border-2 ${
                    errors.name 
                      ? 'border-red-500' 
                      : focusedField === 'name' 
                      ? 'border-transparent' 
                      : 'border-white/20'
                  } text-[#0a0f1a] rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none`}
                  style={{
                    boxShadow: focusedField === 'name' ? '0 0 20px rgba(20, 184, 166, 0.5)' : 'none',
                    fontSize: '1rem'
                  }}
                />
                {errors.name && (
                  <motion.p
                    className="text-red-500 mt-1 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Please enter your full name
                  </motion.p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={fieldAnimate({ opacity: 1, y: 0 }, errors.email)}
                transition={{ duration: 0.6, delay: 0.6 }}
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
                    boxShadow: focusedField === 'email' ? '0 0 20px rgba(56, 189, 248, 0.5)' : 'none',
                    fontSize: '1rem'
                  }}
                />
                {errors.email && (
                  <motion.p
                    className="text-red-500 mt-1 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Please enter a valid email address
                  </motion.p>
                )}
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={fieldAnimate({ opacity: 1, y: 0 }, errors.password)}
                transition={{ duration: 0.6, delay: 0.7 }}
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
                    boxShadow: focusedField === 'password' ? '0 0 20px rgba(249, 115, 22, 0.5)' : 'none',
                    fontSize: '1rem'
                  }}
                />
                {errors.password && (
                  <motion.p
                    className="text-red-500 mt-1 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Password must be at least 6 characters
                  </motion.p>
                )}
              </motion.div>

              {/* Confirm Password */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={fieldAnimate({ opacity: 1, y: 0 }, errors.confirmPassword)}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Label htmlFor="confirmPassword" className="text-[#E5E7EB] mb-2 block">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmPassword: e.target.value });
                    setErrors({ ...errors, confirmPassword: false });
                  }}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white border-2 ${
                    errors.confirmPassword 
                      ? 'border-red-500' 
                      : focusedField === 'confirmPassword' 
                      ? 'border-transparent' 
                      : 'border-white/20'
                  } text-[#0a0f1a] rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none`}
                  style={{
                    boxShadow: focusedField === 'confirmPassword' ? '0 0 20px rgba(20, 184, 166, 0.5)' : 'none',
                    fontSize: '1rem'
                  }}
                />
                {errors.confirmPassword && (
                  <motion.p
                    className="text-red-500 mt-1 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Passwords do not match
                  </motion.p>
                )}
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
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
                  Sign Up
                </Button>
              </motion.div>
            </form>

            {/* Login Link */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p className="text-[#94a3b8]">
                Already have an account?{' '}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-[#38BDF8] hover:text-[#14B8A6] transition-colors duration-300 relative group font-semibold"
                >
                  Login
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
