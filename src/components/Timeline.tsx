import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      role: 'Mobile & Fullstack Developer',
      company: 'Bira Ventures Pvt. Ltd.',
      duration: 'January 2026 – Present',
      bullets: [
        'Spearheaded the end-to-end development and lifecycle management of 4+ high-performance cross-platform iOS and Android applications using React Native and TypeScript, from architecture through internal testing and release readiness.',
        'Architected clean state management solutions by integrating 20+ secure REST APIs with Redux Toolkit, enhancing data synchronization and application security protocols.',
        'Engineered performance-tuning strategies that reduced screen load times by 30%, significantly improving user experience across low-to-high-end mobile devices.',
        'Collaborated within cross-functional Agile/Scrum teams across 2-week sprint cycles, participating in sprint planning, daily stand-ups, and retrospectives, contributing to the on-time delivery of 4+ iOS and Android application builds.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Csharptek Pvt. Ltd.',
      duration: 'June 2024 – December 2025',
      bullets: [
        'Engineered and deployed 5+ robust mobile and web applications for iOS and Android using React Native, React.js, and Node.js, tailored for complex Healthcare and FinTech domains.',
        'Redesigned intuitive UI/UX workflows and integrated 30+ RESTful APIs, driving a 25% increase in user engagement and significantly reducing navigation complexity.',
        'Architected core feature sets for AI-powered, service management, FinTech, and healthcare platforms while maintaining 100% compliance with strict data privacy regulations (e.g., HIPAA).',
        'Managed end-to-end Apple App Store and Google Play Store submission processes for mobile applications including Amalgamate and Companion Medical Scribe, including app signing, provisioning profiles, and release compliance checks, reducing turnaround.',
        'Resolved 100+ critical bugs and proactively participated in peer code reviews, improving codebase stability and reducing production regressions by 20%.',
        'Delivered clean, high-quality code within rapid Agile/Scrum development cycles, cutting post-release bugs by 80% and authoring onboarding documentation.',
      ],
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content glass-card"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
              >
                <div className="timeline-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Briefcase size={20} style={{ color: 'var(--accent)' }} />
                    <span className="timeline-role">{exp.role}</span>
                  </div>
                  <span className="timeline-date">{exp.duration}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
