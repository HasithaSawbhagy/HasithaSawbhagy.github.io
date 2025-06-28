import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fff 0%, #888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #fff;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
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
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
  border: none;
  border-radius: 10px;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    min-width: 50px;
  }
`;

const ContactDetails = styled.div`
  h3 {
    color: #fff;
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  p {
    color: #888;
    margin: 0;
    font-size: 1rem;
    line-height: 1.4;
  }

  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'hasithasawbhagya@gmail.com',
      link: 'mailto:hasithasawbhagya@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      details: '+94 71 111 95 53',
      link: 'tel:+94711119553'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Gampaha, Sri Lanka',
      link: null
    }
  ];

  const socialLinks = [
    { icon: '💼', link: '#', label: 'LinkedIn' },
    { icon: '🐙', link: '#', label: 'GitHub' },
    { icon: '🐦', link: '#', label: 'Twitter' },
    { icon: '📷', link: '#', label: 'Instagram' },
  ];

  return (
    <ContactContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </SectionTitle>
      
      <ContactContent>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello!"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>

        <ContactInfo>
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <ContactIcon>{info.icon}</ContactIcon>
              <ContactDetails>
                <h3>{info.title}</h3>
                {info.link ? (
                  <p><a href={info.link}>{info.details}</a></p>
                ) : (
                  <p>{info.details}</p>
                )}
              </ContactDetails>
            </ContactCard>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              textAlign: 'center', 
              color: '#fff', 
              marginBottom: '1rem',
              fontSize: '1.3rem'
            }}>
              Follow Me
            </h3>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </motion.div>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;