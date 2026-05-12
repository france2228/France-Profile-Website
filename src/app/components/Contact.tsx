import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-[#FFF8F0]/70 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:francesamaniego21@gmail.com"
              className="bg-[#0f1f1d] border border-[#FFF8F0]/10 rounded-xl p-6 hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#285A48]/20 rounded-lg group-hover:bg-[#285A48]/30 transition-colors">
                  <Mail className="text-[#285A48]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFF8F0] mb-1">Email</h3>
                  <p className="text-[#FFF8F0]/70">francesamaniego21@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+639616388633"
              className="bg-[#0f1f1d] border border-[#FFF8F0]/10 rounded-xl p-6 hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#285A48]/20 rounded-lg group-hover:bg-[#285A48]/30 transition-colors">
                  <Phone className="text-[#285A48]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFF8F0] mb-1">Phone</h3>
                  <p className="text-[#FFF8F0]/70">+63 961638 8633</p>
                </div>
              </div>
            </a>

            <div className="bg-[#0f1f1d] border border-[#FFF8F0]/10 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#285A48]/20 rounded-lg">
                  <MapPin className="text-[#285A48]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFF8F0] mb-1">Location</h3>
                  <p className="text-[#FFF8F0]/70">Pampanga, Philippines</p>
                </div>
              </div>
            </div>

            <a
              href="https://linkedin.com/in/france-samaniego-0a2011227/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f1f1d] border border-[#FFF8F0]/10 rounded-xl p-6 hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#285A48]/20 rounded-lg group-hover:bg-[#285A48]/30 transition-colors">
                  <Linkedin className="text-[#285A48]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFF8F0] mb-1">LinkedIn</h3>
                  <p className="text-[#FFF8F0]/70">Connect with me</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
