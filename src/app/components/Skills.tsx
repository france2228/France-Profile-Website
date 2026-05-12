import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Boxes, Database, Cloud, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['C#', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'PHP'],
    },
    {
      icon: Boxes,
      title: 'Frameworks',
      skills: ['ASP.NET Core', 'Blazor (Server & WASM)', 'Entity Framework Core', 'Bootstrap'],
    },
    {
      icon: Wrench,
      title: 'CMS & Tools',
      skills: ['WordPress', 'Elementor Pro', 'Divi'],
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['Microsoft SQL Server', 'MySQL'],
    },
    {
      icon: Cloud,
      title: 'DevOps',
      skills: ['IIS', 'cPanel', 'AWS'],
    },
    {
      icon: Layers,
      title: 'Other',
      skills: ['REST APIs', 'PWA', 'Service Workers', 'Figma', 'Visual Studio', 'Git', 'Postman', 'GitHub', 'Bitbucket'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f1d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-center text-[#FFF8F0]/70 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern web applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#091413] border border-[#FFF8F0]/10 rounded-xl p-6 hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#285A48]/20 rounded-lg">
                      <Icon className="text-[#285A48]" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#FFF8F0]">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#285A48]/10 text-[#FFF8F0] text-sm rounded-full border border-[#285A48]/30 hover:bg-[#285A48]/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
