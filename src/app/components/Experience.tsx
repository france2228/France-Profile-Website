import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Junior Full Stack Developer',
      company: 'Odecci Solutions Inc.',
      location: 'Bulacan, Philippines',
      period: 'May 2024 – June 2026',
      responsibilities: [
        'Developed and deployed full-stack web applications using ASP.NET Core, Blazor, and WordPress for clients in Qatar and Philippines',
        'Converted Figma designs into responsive, user-friendly interfaces and websites',
        'Developed CMS platforms for content management, reporting, and dashboard monitoring',
        'Deployed applications via IIS, AWS, and cPanel environments',
        'Performed functional and integration testing to ensure system stability',
        'Collaborated with cross-functional teams using GitHub, Bitbucket, and Jira',
      ],
    },
    {
      title: 'ERP Support Assistant (L1 IT Support)',
      company: 'HoopPine Holdings',
      location: 'Pampanga, Philippines',
      period: 'June 2023 – February 2024',
      responsibilities: [
        'Monitored daily ERP system health and ensured uptime reliability',
        'Managed user roles and access control within the ERP system',
        'Maintained API integrations between ERP and third-party applications',
        'Troubleshot transaction issues (Sales Orders, Delivery Notes, etc.)',
        'Created SQL scripts for reporting and data extraction',
        'Supported system backups and web-related technical issues',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-4 text-center">
            Professional Experience
          </h2>
          <p className="text-center text-[#FFF8F0]/70 mb-12 max-w-2xl mx-auto">
            My journey in building impactful software solutions
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#0f1f1d] border border-[#FFF8F0]/10 rounded-xl p-6 md:p-8 hover:border-[#285A48]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#285A48]/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#FFF8F0] mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-[#285A48] mb-1">
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 space-y-1 text-[#FFF8F0]/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 ml-6">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-[#FFF8F0]/80 list-disc leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
