import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'MJ Project Solutions Website',
      period: 'January 16, 2026 – January 31, 2026',
      description:
        'Developed a professional website for a construction company to showcase their services and portfolio.',
      technologies: ['WordPress', 'Elementor Pro', 'PHP', 'MySQL'],
      contributions: [
        'Implemented AI-generated Figma design into responsive website',
        'Conducted thorough testing prior to project handover',
        'Ensured quality and reliability across all devices',
      ],
      link: 'https://mjprojectsolutions.net/',
    },
    {
      title: 'Qatar Sotheby\'s International Realty (Redevelopment)',
      period: 'December 2025 – January 2026',
      description:
        'Redeveloped the Qatar Sotheby\'s International Realty website using Divi 5, improving performance, design, and user experience for property listing browsing.',
      technologies: ['WordPress', 'Divi 5', 'PHP', 'MySQL', 'cPanel'],
      contributions: [
        'Led end-to-end redevelopment from Elementor to Divi 5',
        'Maintained feature parity while improving performance',
        'Enhanced design consistency and user experience',
      ],
      link: 'https://qatarsothebysrealty.com/',
    },
    {
      title: 'YSK Project Developers, Inc. Website',
      period: 'November 2025 – December 2025',
      description:
        'Developed a professional website for a real estate company to showcase their projects, properties, and portfolio.',
      technologies: ['WordPress', 'Elementor Pro', 'PHP', 'MySQL', 'Hostinger'],
      contributions: [
        'Implemented Figma design into responsive and interactive website',
        'Conducted thorough testing prior to project handover',
        'Ensured quality and reliability across all platforms',
      ],
      link: 'https://yskprojdev.ph/',
    },
    {
      title: 'Wahat Website',
      period: 'November 2024',
      description:
        'Developed and implemented a refreshed design for the Wahat static website, showcasing the company\'s services offered in Qatar.',
      technologies: ['WordPress', 'Elementor Pro', 'PHP', 'MySQL', 'cPanel'],
      contributions: [
        'Translated Figma prototype designs into responsive website',
        'Conducted comprehensive testing prior to deployment',
        'Successfully deployed from development to live server',
      ],
      link: '#',
    },
    {
      title: 'Qatar Sotheby\'s International Realty Website',
      period: 'August 2024 – November 2024',
      description:
        'Developed a fully functional real estate website enabling users to browse and view detailed property listings.',
      technologies: ['WordPress', 'Elementor Pro', 'PHP', 'MySQL', 'cPanel'],
      contributions: [
        'Translated Figma prototype designs into responsive website',
        'Conducted comprehensive testing prior to deployment',
        'Successfully deployed from development to live server',
      ],
      link: 'https://qatarsothebysrealty.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f1d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-4 text-center">
            Recent Projects
          </h2>
          <p className="text-center text-[#FFF8F0]/70 mb-12 max-w-2xl mx-auto">
            A showcase of projects I've built and contributed to
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#091413] border border-[#FFF8F0]/10 rounded-xl overflow-hidden hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10 group"
              >
                <div className="h-48 bg-gradient-to-br from-[#285A48] to-[#1a3d32] flex items-center justify-center">
                  <div className="text-6xl text-[#FFF8F0]/20 font-bold">
                    {project.title.substring(0, 2)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#FFF8F0] group-hover:text-[#285A48] transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#285A48] hover:text-[#FFF8F0] transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-sm text-[#FFF8F0]/60 mb-3">{project.period}</p>
                  <p className="text-[#FFF8F0]/80 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#285A48] mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#285A48]/10 text-[#FFF8F0] text-xs rounded border border-[#285A48]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#285A48] mb-2">Key Contributions:</h4>
                    <ul className="space-y-1 ml-4">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="text-sm text-[#FFF8F0]/70 list-disc">
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
