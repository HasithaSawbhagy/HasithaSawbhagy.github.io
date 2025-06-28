import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
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
`;

const SkillsGrid = styled.div`
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

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 300px;
  flex-shrink: 0;

  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-width: 280px;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, #888 100%);
  border-radius: 4px;
`;

const SkillItem = styled.div`
  margin-bottom: 1rem;

  .skill-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    color: #fff;
    font-weight: 500;
  }

  .skill-level {
    color: #888;
    font-size: 0.9rem;
  }
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
    left: -25px;
  }

  &.right {
    right: -25px;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
    
    &.left {
      left: -22px;
    }

    &.right {
      right: -22px;
    }
  }
`;

const TechnologiesSection = styled(motion.div)`
  margin-top: 3rem;
  text-align: center;

  h3 {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 1.5rem;
  }
`;

function Skills() {
  const skillsGridRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "SASS/SCSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 70 },
        { name: "Expo", level: 80 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
        { name: "Prototyping", level: 85 },
        { name: "User Research", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Nginx", level: 70 },
        { name: "Linux", level: 80 }
      ]
    }
  ];

  const technologies = [
    "React", "Node.js", "JavaScript", "TypeScript", "Python", "MongoDB", 
    "PostgreSQL", "Express.js", "Next.js", "GraphQL", "Docker", "AWS", 
    "Git", "Figma", "Tailwind CSS", "SASS", "Jest", "Webpack", "React Native",
    "Flutter", "Firebase", "Redux", "Vue.js", "Angular", "Laravel", "Django"
  ];

  const scrollSkills = (direction) => {
    const container = skillsGridRef.current;
    if (container) {
      const scrollAmount = 320; // Card width + gap
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
    <SkillsContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </SectionTitle>
      
      <ScrollableContainer>
        <NavArrow
          className="left"
          onClick={() => scrollSkills('left')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </NavArrow>
        <SkillsGrid ref={skillsGridRef}>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3>{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <ProgressBar>
                    <Progress
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
        <NavArrow
          className="right"
          onClick={() => scrollSkills('right')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </NavArrow>
      </ScrollableContainer>

      <TechnologiesSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Technologies I Work With</h3>
        <SkillsList style={{ justifyContent: 'center' }}>
          {technologies.map((tech, index) => (
            <SkillTag
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </SkillTag>
          ))}
        </SkillsList>
      </TechnologiesSection>
    </SkillsContainer>
  );
}

export default Skills;