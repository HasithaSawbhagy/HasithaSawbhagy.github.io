import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificatesContainer = styled.div`
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

const ScrollableContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const CertificatesGrid = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0;
  
  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const Certificate = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 350px;
  max-width: 350px;
  height: 380px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    min-width: 300px;
    max-width: 300px;
    height: 360px;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    max-width: 280px;
    height: 340px;
  }
`;

const CertificateImage = styled(motion.div)`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    height: 150px;
    font-size: 2.5rem;
  }
`;

const CertificateContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const CertificateTitle = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  margin: 0 0 1rem 0;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CertificateIssuer = styled.p`
  color: #888;
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
`;

const CertificateDate = styled.span`
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  display: block;
`;

const CertificateBadge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  align-self: flex-start;
`;

const NavArrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'The Complete Web Developer Course',
    date: 'March 2023',
    icon: '🎓',
    type: 'Certification',
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University - Coursera',
    date: 'June 2023',
    icon: '🤖',
    type: 'Specialization',
  },
  {
    id: 3,
    title: 'React Native Development',
    issuer: 'Meta - Professional Certificate',
    date: 'September 2023',
    icon: '📱',
    type: 'Professional Certificate',
  },
  {
    id: 4,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'December 2023',
    icon: '☁️',
    type: 'Cloud Certification',
  },
  {
    id: 5,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google UX Design Certificate',
    date: 'February 2024',
    icon: '🎨',
    type: 'Design Certificate',
  },
  {
    id: 6,
    title: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    date: 'May 2024',
    icon: '⚡',
    type: 'Programming Certificate',
  },
  {
    id: 7,
    title: 'Docker & Kubernetes',
    issuer: 'Docker Inc.',
    date: 'August 2024',
    icon: '🐳',
    type: 'DevOps Certificate',
  },
  {
    id: 8,
    title: 'GraphQL Development',
    issuer: 'Apollo GraphQL',
    date: 'October 2024',
    icon: '🚀',
    type: 'API Certificate',
  },
  {
    id: 9,
    title: 'Cybersecurity Fundamentals',
    issuer: 'CompTIA Security+',
    date: 'December 2024',
    icon: '🔒',
    type: 'Security Certificate',
  }
];

function Certificates() {
  const certificatesGridRef = useRef(null);

  const scrollCertificates = (direction) => {
    const container = certificatesGridRef.current;
    if (container) {
      const scrollAmount = 370; // Card width + gap
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <CertificatesContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certificates & Achievements
      </SectionTitle>
      
      <ScrollableContainer>
        <NavArrow
          className="left"
          onClick={() => scrollCertificates('left')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </NavArrow>
        <CertificatesGrid ref={certificatesGridRef}>
          {certificates.map((cert, index) => (
            <Certificate
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <CertificateImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {cert.icon}
              </CertificateImage>
              <CertificateContent>
                <CertificateTitle>{cert.title}</CertificateTitle>
                <CertificateIssuer>{cert.issuer}</CertificateIssuer>
                <CertificateDate>{cert.date}</CertificateDate>
                <CertificateBadge>{cert.type}</CertificateBadge>
              </CertificateContent>
            </Certificate>
          ))}
        </CertificatesGrid>
        <NavArrow
          className="right"
          onClick={() => scrollCertificates('right')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </NavArrow>
      </ScrollableContainer>
    </CertificatesContainer>
  );
}

export default Certificates;