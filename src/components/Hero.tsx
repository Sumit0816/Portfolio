import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Smartphone, Code, Server, Heart } from 'lucide-react';

const words = ['React Native Developer', 'Full Stack Developer', 'Mobile App Specialist'];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  // Generate random shapes for floating background
  const [shapes] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -10,
      driftX: Math.random() * 50 - 25,
    }))
  );

  const floatingIcons = [
    { Icon: Smartphone, top: '20%', left: '15%', color: '#818cf8', delay: 0 },
    { Icon: Code, top: '15%', right: '20%', color: '#c084fc', delay: 2 },
    { Icon: Server, top: '65%', left: '10%', color: '#38bdf8', delay: 4 },
    { Icon: Heart, top: '75%', right: '15%', color: '#f43f5e', delay: 1 },
  ];

  return (
    <section id="home" className="hero-container">
      {/* Animated Background Shapes */}
      <div className="canvas-container">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            style={{
              position: 'absolute',
              width: shape.size,
              height: shape.size,
              borderRadius: '50%',
              background: 'var(--accent-light)',
              opacity: 0.15,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, shape.driftX, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Floating Tech Icons */}
        {floatingIcons.map(({ Icon, top, left, right, color, delay }, idx) => (
          <motion.div
            key={idx}
            className="floating-icon"
            style={{
              position: 'absolute',
              top,
              left,
              right,
              color,
              zIndex: 2,
              filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.2))',
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          >
            <Icon size={36} opacity={0.6} />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-subtitle">Welcome to my space</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sumit Rajbhar</span>
        </motion.h1>

        <motion.div
          className="hero-taglines"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>{displayedText}</span>
          <span className="typing-cursor"></span>
        </motion.div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Dedicated software engineer specializing in building high-fidelity cross-platform mobile apps with React Native, and full-stack web architectures with Node.js & React.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-cta"
        >
          <a href="/resume.pdf" download className="btn btn-primary">
            <Download size={18} />
            Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--accent-light)',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}
        >
          <span>✨ 2.4+ Years Industry Experience</span>
        </motion.div>
      </div>
    </section>
  );
}
