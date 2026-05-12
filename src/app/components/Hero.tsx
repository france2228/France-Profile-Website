import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFF8F0] mb-4">
            France Samaniego
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#285A48] mb-6">
            WordPress Developer & Full Stack Engineer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#FFF8F0]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Specializing in WordPress development, custom theme creation, and website optimization.
            Transforming Figma designs into responsive, high-performance websites with exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#285A48] text-[#FFF8F0] rounded-lg hover:bg-[#285A48]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#285A48] text-[#FFF8F0] rounded-lg hover:bg-[#285A48]/20 transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF8F0] hover:text-[#285A48] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/france-samaniego-0a2011227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF8F0] hover:text-[#285A48] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:francesamaniego21@gmail.com"
              className="text-[#FFF8F0] hover:text-[#285A48] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
