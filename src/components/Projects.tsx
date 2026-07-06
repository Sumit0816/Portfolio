import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, AppWindow } from 'lucide-react';
import scribeImg from '../assets/scribe.png';
import amalgamateImg from '../assets/amalgamate.png';

// Custom inline GitHub icon for compatibility
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'Companion Medical Scribe',
    description: 'An AI-powered React Native application designed for medical practitioners. Captures real-time doctor-patient interactions and processes clinical audio files to output highly accurate medical transcriptions and structured clinical notes synced with Firebase.',
    image: scribeImg,
    tech: ['React Native', 'Node.js', 'AI Integration', 'Firebase'],
    links: [
      { text: 'Live Demo', url: 'https://example.com/scribe', icon: ExternalLink, primary: true },
      { text: 'GitHub', url: 'https://github.com/sumitrajbhar/medical-scribe', icon: GithubIcon, primary: false },
    ],
  },
  {
    title: 'Amalgamate',
    description: 'A robust mobile application that integrates complex financial databases. Designed for seamless client accounting, real-time analytics monitoring, budget insights, and detailed performance metrics synced over secure REST APIs.',
    image: amalgamateImg,
    tech: ['React Native', 'PostgreSQL', 'REST APIs', 'Node.js'],
    links: [
      { text: 'Website', url: 'https://example.com/amalgamate', icon: AppWindow, primary: true },
      { text: 'Play Store', url: 'https://play.google.com', icon: Smartphone, primary: false },
      { text: 'App Store', url: 'https://apps.apple.com', icon: Smartphone, primary: false },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card project-card"
            variants={cardVariants}
          >
            {/* Project Image */}
            <div className="project-img-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
            </div>

            {/* Project Details */}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Technologies used */}
              <div className="project-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Dynamic project links */}
              <div className="project-links">
                {project.links.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${link.primary ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      <Icon size={16} />
                      {link.text}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
