import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0f172a] to-[#0a0f1a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NTk0MjQ2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare Technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#14B8A6]/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl blur-3xl"
              style={{ backgroundColor: '#14B8A6', opacity: 0.3 }}
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] mb-6">
              About Hayaat
            </span>
            <h2 
              className="mb-6 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
              style={{ fontSize: '2.5rem', fontWeight: 700 }}
            >
              Healthcare Reimagined with AI
            </h2>
            <p className="text-[#94a3b8] mb-6" style={{ fontSize: '1.125rem' }}>
              Hayaat combines cutting-edge artificial intelligence with intuitive design to revolutionize 
              how you manage your health and wellness. Our platform learns from your habits, predicts your 
              needs, and provides personalized care recommendations.
            </p>
            <p className="text-[#94a3b8] mb-8" style={{ fontSize: '1.125rem' }}>
              From medication tracking to appointment management, from AI-powered diagnostics to 24/7 voice 
              assistance – we're building a healthier future, one smart feature at a time.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#14B8A6]/30">
                <div className="mb-2" style={{ fontSize: '2rem', fontWeight: 700, color: '#14B8A6' }}>
                  50K+
                </div>
                <div className="text-[#94a3b8]">Active Users</div>
              </div>
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#38BDF8]/30">
                <div className="mb-2" style={{ fontSize: '2rem', fontWeight: 700, color: '#38BDF8' }}>
                  98%
                </div>
                <div className="text-[#94a3b8]">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
