import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { UserPlus, Smartphone, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account in seconds and set up your health profile.',
    color: '#14B8A6'
  },
  {
    icon: Smartphone,
    title: 'Connect',
    description: 'Link your devices and import your medical history seamlessly.',
    color: '#38BDF8'
  },
  {
    icon: HeartPulse,
    title: 'Stay Healthy',
    description: 'Get personalized insights and manage your health with AI assistance.',
    color: '#F97316'
  }
];

export function HowItWorksSection() {
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
    <section ref={sectionRef} className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="mb-4 bg-gradient-to-r from-[#38BDF8] to-[#F97316] bg-clip-text text-transparent"
            style={{ fontSize: '2.5rem', fontWeight: 700 }}
          >
            How It Works
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Getting started with Hayaat is simple. Just three easy steps to better health.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
              <div className="h-full bg-gradient-to-r from-[#14B8A6] via-[#38BDF8] to-[#F97316] opacity-20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-white/10 hover:border-opacity-30 transition-all duration-300 text-center group hover:scale-105"
                      style={{ borderColor: `${step.color}40` }}
                    >
                      {/* Step Number */}
                      <div 
                        className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#0a0f1a]"
                        style={{ 
                          backgroundColor: step.color,
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#0a0f1a'
                        }}
                      >
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div 
                        className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${step.color}20`,
                          boxShadow: `0 0 30px ${step.color}30`
                        }}
                      >
                        <Icon className="w-10 h-10" style={{ color: step.color }} />
                      </div>

                      <h3 className="mb-3 text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                        {step.title}
                      </h3>
                      <p className="text-[#94a3b8]">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <div 
                          className="w-1 h-12 rounded-full"
                          style={{ backgroundColor: step.color, opacity: 0.5 }}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
