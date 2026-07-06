import { motion } from 'framer-motion';
import { Smartphone, Code, Server, Flame, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Developing native-like, cross-platform Android and iOS applications utilizing React Native with smooth gestures, local storage caching, maps, and offline support.',
    icon: Smartphone,
  },
  {
    title: 'React Development',
    description: 'Crafting responsive, search engine optimized, high-fidelity single-page and server-side rendered websites using React.js and Vite.',
    icon: Code,
  },
  {
    title: 'Backend APIs',
    description: 'Building secure, scalable, and fully documented RESTful APIs with Node.js and Express, implementing clean route architecture, pagination, and token-based Auth.',
    icon: Server,
  },
  {
    title: 'Firebase Integration',
    description: 'Connecting Realtime Database, Cloud Firestore, Cloud Functions, and Firebase Authentication to power real-time triggers and automated messaging systems.',
    icon: Flame,
  },
  {
    title: 'Full Stack Development',
    description: 'Combining frontend styling layouts, state managers (Redux), database layers (PostgreSQL, MongoDB via Prisma), and deployment configurations under a single unified lifecycle.',
    icon: Terminal,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
  },
};

export default function Services() {
  return (
    <section id="services" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h2>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="glass-card service-card"
              variants={cardVariants}
            >
              <div className="service-icon-box">
                <Icon className="service-icon" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
