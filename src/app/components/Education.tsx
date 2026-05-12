import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f1d]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-12 text-center">
            Education
          </h2>

          <div className="bg-[#091413] border border-[#FFF8F0]/10 rounded-xl p-8 hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-[#285A48]/20 rounded-lg">
                <GraduationCap className="text-[#285A48]" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#FFF8F0] mb-2">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-xl text-[#285A48] font-semibold mb-3">
                  Bulacan State University
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[#FFF8F0]/70">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2019 – 2023</span>
                  </div>
                  <div className="hidden sm:block text-[#FFF8F0]/30">•</div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Bulacan, Philippines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
