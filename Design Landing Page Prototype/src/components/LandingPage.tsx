import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { AboutSection } from './AboutSection';
import { HowItWorksSection } from './HowItWorksSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';
import { Footer } from './Footer';
import { motion } from 'motion/react';

interface LandingPageProps {
  onGetStarted?: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <motion.div
      className="min-h-screen bg-[#0a0f1a] text-[#E5E7EB]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection onGetStarted={onGetStarted} />
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
}
