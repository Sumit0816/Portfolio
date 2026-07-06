import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const skills = [
  { name: 'React Native', rating: 5 },
  { name: 'React.js', rating: 4 },
  { name: 'Node.js', rating: 4 },
  { name: 'Express', rating: 4 },
  { name: 'PostgreSQL', rating: 4 },
  { name: 'MongoDB', rating: 4 },
  { name: 'Firebase', rating: 4 },
  { name: 'TypeScript', rating: 4 },
  { name: 'JavaScript', rating: 5 },
  { name: 'Git', rating: 4 },
  { name: 'REST APIs', rating: 5 },
  { name: 'Redux', rating: 4 },
  { name: 'Prisma', rating: 4 },
  { name: 'Tailwind', rating: 4 },
  { name: 'HTML', rating: 5 },
  { name: 'CSS', rating: 5 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 } 
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="glass-card skill-card"
            variants={cardVariants}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < skill.rating ? 'var(--star-color)' : 'none'}
                  color={i < skill.rating ? 'var(--star-color)' : 'var(--text-muted)'}
                  style={{ display: 'inline-block', marginRight: '2px' }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
