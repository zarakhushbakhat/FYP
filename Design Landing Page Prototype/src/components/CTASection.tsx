import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#14B8A6] rounded-full blur-3xl opacity-10" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-12 md:p-16 rounded-2xl border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(90deg, #14B8A6, #38BDF8, #F97316, #14B8A6)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite'
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 
              className="mb-6 bg-gradient-to-r from-[#14B8A6] via-[#38BDF8] to-[#F97316] bg-clip-text text-transparent"
              style={{ fontSize: '3rem', fontWeight: 700 }}
            >
              Ready to Simplify Healthcare?
            </h2>
            <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.25rem' }}>
              Join thousands of users who are taking control of their health with AI-powered care
            </p>
            <Button 
              className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{ 
                fontSize: '1.125rem',
                fontWeight: 600,
                boxShadow: '0 0 40px rgba(20, 184, 166, 0.4)'
              }}
            >
              Join Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
