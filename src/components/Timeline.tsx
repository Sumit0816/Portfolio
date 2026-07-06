import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'App Development Solutions', // Placeholder company name that looks professional
      duration: '2024 - Present',
      bullets: [
        'Developed, tested, and published cross-platform React Native apps for iOS & Android ecosystems.',
        'Integrated Firebase services (Auth, Firestore, Cloud Functions, and Analytics) to optimize backend workflows.',
        'Architected and consumed robust REST APIs ensuring smooth frontend-backend synchronization.',
        'Configured Push Notifications with FCM and Apple APNS to boost user engagement rates by 25%.',
        'Implemented geolocation mapping services, route matching, and real-time location tracking interfaces.',
        'Embedded popular Payment Gateways (Stripe, Razorpay, In-App Purchases) securely using client-side SDKs.',
      ],
    },
    // We can add a prior experience or freelance projects to make it a real timeline
    {
      role: 'Junior Full Stack Developer',
      company: 'Freelance & Open Source',
      duration: '2023 - 2024',
      bullets: [
        'Built full-stack web applications using React.js, Node.js, Express, and PostgreSQL.',
        'Maintained state management using Redux Toolkit and integrated Prisma ORM for database modeling.',
        'Designed styling systems using CSS Variables, HTML5 semantic layout, and Tailwind CSS.',
        'Collaborated using Git version control and participated in code review processes to ensure code quality.',
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
