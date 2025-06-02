import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Certificates from './components/Certificates';
import Products from './components/Products';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #fff, #888);
    border-radius: 5px;
    
    &:hover {
      background: linear-gradient(180deg, #fff, #666);
    }
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: #000;
  color: #fff;
  position: relative;
`;

const Section = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform-origin: center center;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(180deg, #000 0%, #1a1a1a 100%);
`;

const ProjectsSection = styled(Section)`
  background: #1a1a1a;
`;

const CertificatesSection = styled(Section)`
  background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
`;

const ProductsSection = styled(Section)`
  background: linear-gradient(180deg, #000 0%, #1a1a1a 100%);
`;

const ContactSection = styled(Section)`
  background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #fff 0%, #888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #888;
  margin-top: 1rem;
  text-align: center;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  
  &::before {
    content: '';
    width: 4px;
    height: 8px;
    background: #fff;
    border-radius: 2px;
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

function App() {
  const projectsRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const certificatesSectionRef = useRef(null);
  const productsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: projectsSectionRef, delay: 0 },
      { ref: certificatesSectionRef, delay: 0.2 },
      { ref: productsSectionRef, delay: 0.4 },
      { ref: contactSectionRef, delay: 0.6 }
    ];

    sections.forEach(({ ref, delay }) => {
      const section = ref.current;
      if (!section) return;

      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          delay: delay
        }
      );
    });

    // Animate project cards
    gsap.fromTo(
      projectsRef.current?.children,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>
        <HeroSection
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroTitle
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hasitha Saubhagya
          </HeroTitle>
          <HeroSubtitle
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting digital experiences with passion
          </HeroSubtitle>
          <ScrollIndicator
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
        </HeroSection>

        <ProjectsSection ref={projectsSectionRef} id="projects">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            Featured Projects
          </motion.h2>
          <ProjectGrid ref={projectsRef}>
            {[1, 2, 3].map((project) => (
              <ProjectCard
                key={project}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: project * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Project {project}</h3>
                <p>Description of the project goes here. This is a beautiful project card with hover effects.</p>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectsSection>

        <CertificatesSection ref={certificatesSectionRef} id="certificates">
          <Certificates />
        </CertificatesSection>

        <ProductsSection ref={productsSectionRef} id="products">
          <Products />
        </ProductsSection>

        <ContactSection ref={contactSectionRef} id="contact">
          <Contact />
        </ContactSection>
      </AppContainer>
    </>
  );
}

export default App; 