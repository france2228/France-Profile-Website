import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-[#285A48] rounded-2xl transform rotate-6"></div>
                <img
                  src="/src/imports/82b77c40-e0f5-4b70-b616-7d3a4e665fbe.jfif"
                  alt="France Samaniego"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-[#FFF8F0]/90">
              <p className="text-lg leading-relaxed">
                I'm a dedicated WordPress Developer and Full Stack Engineer based in Pampanga, Philippines,
                specializing in creating high-performance, custom WordPress solutions for clients across the globe.
              </p>
              <p className="text-lg leading-relaxed">
                With extensive experience in WordPress custom theme development, site optimization, and maintenance,
                I excel at transforming Figma designs into pixel-perfect, responsive websites. My expertise spans
                WordPress, Elementor Pro, Divi, and full-stack development with ASP.NET Core and Blazor.
              </p>
              <p className="text-lg leading-relaxed">
                From real estate platforms to corporate websites, I've successfully delivered projects for clients
                in Qatar and the Philippines. I'm passionate about writing clean code, optimizing website performance,
                and ensuring exceptional user experiences across all devices.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-[#285A48] font-semibold">Location: Pampanga, Philippines</p>
                <p className="text-[#285A48] font-semibold">Email: francesamaniego21@gmail.com</p>
                <p className="text-[#285A48] font-semibold">Phone: +63 961638 8633</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
