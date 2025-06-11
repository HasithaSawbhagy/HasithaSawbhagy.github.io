import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificatesSection = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 2rem;
  background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-top: 3rem;
`;

const Certificate = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
`;

const CertificateImage = styled(motion.img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const CertificateTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

const CertificateIssuer = styled.p`
  color: #888;
  margin: 0;
`;

const CertificateDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const certificates = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'March 2023',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: 'June 2023',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 3,
    title: 'React Native Development',
    issuer: 'Udemy',
    date: 'September 2023',
    image: 'https://via.placeholder.com/300x150',
  },
];

function Certificates() {
  return (
    <CertificatesSection
      id="certificates"
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
        My Certificates
      </motion.h2>
      <CertificatesGrid>
        {certificates.map((cert) => (
          <Certificate
            key={cert.id}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CertificateImage
              src={cert.image}
              alt={cert.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <CertificateTitle>{cert.title}</CertificateTitle>
            <CertificateIssuer>{cert.issuer}</CertificateIssuer>
            <CertificateDate>{cert.date}</CertificateDate>
          </Certificate>
        ))}
      </CertificatesGrid>
    </CertificatesSection>
  );
}

export default Certificates; 