import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="form-wrapper">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="appointment-form"
          >
            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="name" style={{ color: '#000000', fontWeight: 'bold', display: 'block' }}>Full Name</label>
              <input type="text" id="name" name="name" placeholder="E.g. Jane Doe" required />
            </motion.div>

            <div className="form-row">
              <motion.div variants={itemVariants} className="form-group">
                 <label htmlFor="email" style={{ color: '#000000', fontWeight: 'bold', display: 'block' }}>Email Address</label>
                 <input type="email" id="email" name="email" placeholder="jane@example.com" required />
              </motion.div>
              <motion.div variants={itemVariants} className="form-group">
                 <label htmlFor="phone" style={{ color: '#000000', fontWeight: 'bold', display: 'block' }}>Phone Number</label>
                 <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="service" style={{ color: '#000000', fontWeight: 'bold', display: 'block' }}>Service of Interest</label>
              <div className="select-wrapper">
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="Newborn Care">Newborn Care Specialist</option>
                  <option value="Sleep Training">Sleep Training</option>
                  <option value="Postpartum Support">Postpartum Support</option>
                </select>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="message" style={{ color: '#000000', fontWeight: 'bold', display: 'block' }}>Your Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your baby and how we can help..."></textarea>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button 
                whileHover={{ scale: 1.01, backgroundColor: 'var(--color-accent)' }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="submit-btn"
              >
                Send Request
              </motion.button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="success-message"
          >
            <div className="success-icon">✨</div>
            <h2>Request Received!</h2>
            <p>Kareen Barrett will reach out personally within 24 hours to discuss your needs and confirm availability.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="back-btn"
            >
              Back to Form
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
