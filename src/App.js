import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Certificates from './components/Certificates';
import Products from './components/Products';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger);

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: #000;
    color: #fff;
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #fff, #888);
    border-radius: 4px;
    
    &:hover {
      background: linear-gradient(180deg, #fff, #666);
    }
  }

  /* Selection styles */
  ::selection {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  /* Focus styles for accessibility */
  button:focus,
  input:focus,
  textarea:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
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
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const AboutSection = styled(Section)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
`;

const SkillsSection = styled(Section)`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #000 100%);
`;

const ProjectsSection = styled(Section)`
  background: linear-gradient(135deg, #000 0%, #1a1a1a 50%, #2a2a2a 100%);
`;

const CertificatesSection = styled(Section)`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #000 100%);
`;

const ProductsSection = styled(Section)`
  background: linear-gradient(135deg, #000 0%, #1a1a1a 50%, #2a2a2a 100%);
`;

const ContactSection = styled(Section)`
  background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #fff 0%, #888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #888;
  margin: 1.5rem 0 2rem 0;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const HeroButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &.primary {
    background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
    color: #000;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  cursor: pointer;
  
  &::before {
    content: '';
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    width: 25px;
    height: 40px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #888;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
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
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

function App() {
  const projectsRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const certificatesSectionRef = useRef(null);
  const productsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: aboutSectionRef, delay: 0 },
      { ref: skillsSectionRef, delay: 0.1 },
      { ref: projectsSectionRef, delay: 0.2 },
      { ref: certificatesSectionRef, delay: 0.3 },
      { ref: productsSectionRef, delay: 0.4 },
      { ref: contactSectionRef, delay: 0.5 }
    ];

    sections.forEach(({ ref, delay }) => {
      const section = ref.current;
      if (!section) return;

      gsap.fromTo(
        section,
        {
          scale: 0.95,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          delay: delay
        }
      );
    });

    // Animate project cards
    if (projectsRef.current?.children) {
      gsap.fromTo(
        projectsRef.current.children,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>
        <HeroSection
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <HeroContent>
            <HeroTitle
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "power3.out" }}
            >
              Hasitha Saubhagya
            </HeroTitle>
            <HeroSubtitle
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "power3.out" }}
            >
              Full-Stack Developer & UI/UX Designer crafting digital experiences with passion and precision
            </HeroSubtitle>
            <HeroButtons
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "power3.out" }}
            >
              <HeroButton
                className="primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </HeroButton>
              <HeroButton
                className="secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </HeroButton>
            </HeroButtons>
          </HeroContent>
          <ScrollIndicator
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
          />
        </HeroSection>

        <AboutSection ref={aboutSectionRef} id="about">
          <About />
        </AboutSection>

        <SkillsSection ref={skillsSectionRef} id="skills">
          <Skills />
        </SkillsSection>

        <ProjectsSection ref={projectsSectionRef} id="projects">
          <SectionTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </SectionTitle>
          <ProjectGrid ref={projectsRef}>
            {[
              {
                title: "E-Commerce Platform",
                description: "A modern, responsive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"]
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                tech: ["React", "Socket.io", "Express", "PostgreSQL"]
              },
              {
                title: "Portfolio Website",
                description: "A stunning portfolio website with smooth animations, responsive design, and optimized performance. Built with modern web technologies.",
                tech: ["React", "GSAP", "Styled Components", "Framer Motion"]
              }
            ].map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#fff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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