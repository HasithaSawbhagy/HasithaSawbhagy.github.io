import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #fff 0%, #888 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ccc;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
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
    height: 300px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #888;
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function About() {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" }
  ];

  return (
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutContent>
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with over 3 years of experience creating 
            digital solutions that make a difference. I specialize in modern web technologies 
            and have a keen eye for design and user experience.
          </p>
          <p>
            My journey in tech started with a curiosity about how things work, and it has 
            evolved into a career where I get to build amazing products that solve real-world 
            problems. I believe in writing clean, maintainable code and creating intuitive 
            user interfaces.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing my knowledge with the developer community.
          </p>
        </AboutContent>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatCard>
          ))}
        </StatsGrid>
      </motion.div>
      <AboutImage
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <ImagePlaceholder>👨‍💻</ImagePlaceholder>
      </AboutImage>
    </AboutContainer>
  );
}

export default About;