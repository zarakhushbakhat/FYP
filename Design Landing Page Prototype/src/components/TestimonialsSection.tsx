import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'Hayaat has completely transformed how I manage my medication. The reminders are a lifesaver, and the AI insights help me understand my health better.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Healthcare Provider',
    content: 'As a physician, I recommend Hayaat to all my patients. The appointment scheduling and report analysis features save time for everyone.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Caregiver',
    content: 'Managing my elderly mother\'s healthcare was overwhelming. Hayaat makes it simple with its intuitive interface and voice assistant.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
  },
  {
    name: 'James Wilson',
    role: 'Patient',
    content: 'The AI report scanner is incredible. It explains my lab results in simple terms and helps me track my progress over time.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
  },
  {
    name: 'Lisa Thompson',
    role: 'Patient',
    content: 'I love how Hayaat integrates everything in one place. No more juggling multiple apps for different health needs.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
  },
  {
    name: 'Dr. David Park',
    role: 'Specialist',
    content: 'The platform\'s ability to organize patient information and provide AI-driven insights is revolutionary for modern healthcare.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
  }
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const itemsToShow = 3;
  const maxIndex = testimonials.length - itemsToShow;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0f172a] to-[#0a0f1a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="mb-4 bg-gradient-to-r from-[#F97316] to-[#14B8A6] bg-clip-text text-transparent"
            style={{ fontSize: '2.5rem', fontWeight: 700 }}
          >
            What Our Users Say
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Join thousands of satisfied users who trust Hayaat with their health
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-white/10 hover:border-[#14B8A6]/30 transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                      ))}
                    </div>
                    <p className="text-[#E5E7EB] mb-6" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full overflow-hidden bg-[#14B8A6]/20 border-2 border-[#14B8A6]"
                      >
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full" />
                      </div>
                      <div>
                        <div className="text-white" style={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </div>
                        <div className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-[#1e293b] hover:bg-[#38BDF8]/20 text-white border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl p-3"
              variant="ghost"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="bg-[#1e293b] hover:bg-[#38BDF8]/20 text-white border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl p-3"
              variant="ghost"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
