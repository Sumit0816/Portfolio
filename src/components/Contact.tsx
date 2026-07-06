import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please fill in all the fields.');
      return;
    }

    setStatus('sending');
    setStatusMsg('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock sending behavior if keys are missing (so the portfolio is fully testable immediately)
      console.warn('EmailJS environment variables are not configured. Running mock message delivery.');
      setTimeout(() => {
        setStatus('success');
        setStatusMsg("Thank you! Your message has been sent successfully (Mock Delivery).");
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    if (formRef.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } catch (err: unknown) {
        console.error('EmailJS Error:', err);
        setStatus('error');
        const errMsg = err && typeof err === 'object' && 'text' in err
          ? String((err as { text: unknown }).text)
          : 'Something went wrong. Please try again later.';
        setStatusMsg(errMsg);
      }
    }
  };

  return (
    <section id="contact" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="glass-card contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-input"
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-input"
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="form-input form-textarea"
                required
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {statusMsg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`form-status ${status === 'success' ? 'success' : 'error'}`}
              >
                {statusMsg}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
