import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Bell, Calendar, FileSearch, Mic } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Medicine Reminders',
    description: 'Never miss a dose with smart notifications and personalized schedules.',
    color: '#14B8A6'
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Book and manage all your healthcare appointments in one place.',
    color: '#38BDF8'
  },
  {
    icon: FileSearch,
    title: 'AI Report Scanner',
    description: 'Instantly analyze medical reports with AI-powered insights.',
    color: '#F97316'
  },
  {
    icon: Mic,
    title: 'Voice Assistant',
    description: 'Get health advice and manage your care hands-free with voice commands.',
    color: '#14B8A6'
  }
];

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="mb-4 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
            style={{ fontSize: '2.5rem', fontWeight: 700 }}
          >
            Powerful Features
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Everything you need to manage your health in one intelligent platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-white/10 hover:border-[#14B8A6]/50 transition-all duration-300 cursor-pointer"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${feature.color}20`,
                    boxShadow: `0 0 20px ${feature.color}40`
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="mb-3 text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-[#94a3b8]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
