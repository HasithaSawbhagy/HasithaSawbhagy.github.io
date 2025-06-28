import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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

const CertificatesGridWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CertificatesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
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

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CertificateImage = styled(motion.div)`
  width: 100%;
  height: 200px;
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CertificateTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin: 0 0 1rem 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CertificateIssuer = styled.p`
  color: #888;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
`;

const CertificateDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const CertificateBadge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }
`;

const NavButton = styled(motion.button)`
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
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const ViewToggle = styled(motion.button)`
  background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
  color: #000;
  border: none;
  border-radius: 25px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ProgressDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.6);
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
  const [currentPage, setCurrentPage] = useState(0);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const displayedCertificates = showAllCertificates 
    ? certificates 
    : certificates.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
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
      
      <CertificatesGridWrapper>
        <AnimatePresence mode="wait">
          <CertificatesGrid
            key={showAllCertificates ? 'all' : currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {displayedCertificates.map((cert, index) => (
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
        </AnimatePresence>
      </CertificatesGridWrapper>

      <NavigationControls>
        {!showAllCertificates && (
          <>
            <NavButton
              onClick={prevPage}
              disabled={currentPage === 0}
              whileHover={{ scale: currentPage === 0 ? 1 : 1.1 }}
              whileTap={{ scale: currentPage === 0 ? 1 : 0.95 }}
            >
              ←
            </NavButton>
            
            <ProgressIndicator>
              {Array.from({ length: totalPages }, (_, index) => (
                <ProgressDot
                  key={index}
                  active={index === currentPage}
                  onClick={() => goToPage(index)}
                />
              ))}
            </ProgressIndicator>
            
            <NavButton
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.1 }}
              whileTap={{ scale: currentPage === totalPages - 1 ? 1 : 0.95 }}
            >
              →
            </NavButton>
          </>
        )}
        
        <ViewToggle
          onClick={() => {
            setShowAllCertificates(!showAllCertificates);
            setCurrentPage(0);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAllCertificates ? 'Show Less' : `View All Certificates (${certificates.length})`}
        </ViewToggle>
      </NavigationControls>
    </CertificatesContainer>
  );
}

export default Certificates;