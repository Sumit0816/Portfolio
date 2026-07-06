import { motion } from 'framer-motion';
import aboutMeImg from '../assets/aboutMe.jpeg';
import { Calendar, GraduationCap, Code2, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { num: '2.3+', label: 'Years Experience', icon: Calendar },
    { num: '10+', label: 'Apps & Websites', icon: Award },
    { num: '15+', label: 'Tech & Toolkits', icon: Code2 },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) – Computer Science Engineering',
      institution: 'BNCET, Lucknow',
      duration: '2020 - 2024',
    },
    {
      degree: 'Diploma – Mechanical Engineering',
      institution: 'C.V. Raman College of Engineering, Bhubaneswar',
      duration: '2018 - 2021',
    },
    {
      degree: 'Higher Secondary & Secondary Education',
      institution: 'DAV Public School, Urimari, Hazaribagh',
      duration: 'Completed 2018',
    }
  ];

  return (
    <section id="about" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-grid">
        {/* Left Side: Photo */}
        <motion.div
          className="about-photo-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutMeImg} alt="Sumit Rajbhar" className="about-photo" />
          <div className="about-photo-border"></div>
        </motion.div>

        {/* Right Side: Details */}
        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Hello! I'm Sumit Rajbhar</h3>
          <p className="about-text">
            I am a results-driven Mobile and Full Stack Developer with 2+ years of professional experience specializing in React Native, React.js, and full-stack JavaScript ecosystems. I have a proven track record of architecting, developing, and deploying cross-platform iOS and Android applications across FinTech, Healthcare, and AI domains, with hands-on experience publishing and managing releases on the Apple App Store and Google Play Store.
          </p>
          <p className="about-text">
            I excel in optimizing application performance (reducing screen load times by 30%), integrating secure RESTful APIs, and implementing scalable state management solutions. I enjoy collaborating in Agile/Scrum environments to deliver high-quality, user-centric software.
          </p>

          {/* Stats Grid */}
          <div className="about-stats">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-item">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: 'var(--accent)' }}>
                    <Icon size={24} />
                  </div>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Education Sub-section */}
          <div style={{ marginTop: '30px' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap className="text-accent" size={24} style={{ color: 'var(--accent)' }} />
              Education
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {education.map((edu, index) => (
                <div key={index} style={{ backgroundColor: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: 'var(--text-primary)', flexWrap: 'wrap', gap: '8px' }}>
                    <span>{edu.degree}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>{edu.duration}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
