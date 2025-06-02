import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 2rem;
  background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #fff 0%, #888 100%);
  border: none;
  border-radius: 25px;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 200px;
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #fff;
`;

const ContactText = styled.p`
  color: #888;
  margin: 0;
  text-align: center;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: '4rem',
          fontWeight: 700,
          marginBottom: '2rem',
          background: 'linear-gradient(90deg, #fff 0%, #888 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get in Touch
      </motion.h2>
      <ContactForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </ContactForm>

      <ContactInfo>
        <ContactCard
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactIcon>📧</ContactIcon>
          <ContactText>hasithasawbhagya@gmail.com</ContactText>
        </ContactCard>
        <ContactCard
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactIcon>📱</ContactIcon>
          <ContactText>+94 71 111 95 53</ContactText>
        </ContactCard>
        <ContactCard
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ContactIcon>📍</ContactIcon>
          <ContactText>Gampaha, Sri Lanka</ContactText>
        </ContactCard>
      </ContactInfo>
    </ContactSection>
  );
}

export default Contact; 