import { Heart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span 
              className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
              style={{ fontSize: '1.5rem', fontWeight: 700 }}
            >
              Hayaat
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center gap-8 flex-wrap">
            <a 
              href="#about" 
              className="text-[#94a3b8] hover:text-[#14B8A6] transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-[#94a3b8] hover:text-[#14B8A6] transition-colors duration-300"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-[#94a3b8] hover:text-[#14B8A6] transition-colors duration-300"
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-[#94a3b8] hover:text-[#14B8A6] transition-colors duration-300"
            >
              Testimonials
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-end gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-[#1e293b] hover:bg-[#14B8A6]/20 border border-white/10 hover:border-[#14B8A6] flex items-center justify-center text-[#94a3b8] hover:text-[#14B8A6] transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-[#1e293b] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8] flex items-center justify-center text-[#94a3b8] hover:text-[#38BDF8] transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-[#1e293b] hover:bg-[#14B8A6]/20 border border-white/10 hover:border-[#14B8A6] flex items-center justify-center text-[#94a3b8] hover:text-[#14B8A6] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-[#1e293b] hover:bg-[#F97316]/20 border border-white/10 hover:border-[#F97316] flex items-center justify-center text-[#94a3b8] hover:text-[#F97316] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-[#94a3b8]">
          <p>© {currentYear} Hayaat. All rights reserved. Smarter Care, Healthier Life.</p>
        </div>
      </div>
    </footer>
  );
}
