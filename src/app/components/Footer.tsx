import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#091413] border-t border-[#FFF8F0]/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF8F0] hover:text-[#285A48] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/france-samaniego-0a2011227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF8F0] hover:text-[#285A48] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:francesamaniego21@gmail.com"
              className="text-[#FFF8F0] hover:text-[#285A48] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-[#FFF8F0]/70 text-sm flex items-center gap-2">
            <span>© 2026 France Samaniego. Built with</span>
            <Heart size={14} className="text-[#285A48] fill-current" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
