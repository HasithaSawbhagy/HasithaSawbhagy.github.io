import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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

const SkillsGridWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
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

function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const itemsPerPage = 3;

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

  const totalPages = Math.ceil(skillCategories.length / itemsPerPage);
  const displayedCategories = showAllSkills 
    ? skillCategories 
    : skillCategories.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
    <SkillsContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </SectionTitle>
      
      <SkillsGridWrapper>
        <AnimatePresence mode="wait">
          <SkillsGrid
            key={showAllSkills ? 'all' : currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {displayedCategories.map((category, index) => (
              <SkillCategory
                key={`${category.title}-${showAllSkills ? 'all' : currentPage}`}
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
        </AnimatePresence>
      </SkillsGridWrapper>

      <NavigationControls>
        {!showAllSkills && (
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
            setShowAllSkills(!showAllSkills);
            setCurrentPage(0);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAllSkills ? 'Show Less' : `View All Skills (${skillCategories.length})`}
        </ViewToggle>
      </NavigationControls>

      <motion.div
        style={{ marginTop: '3rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem', 
          color: '#fff',
          fontSize: '1.5rem'
        }}>
          Technologies I Work With
        </h3>
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
      </motion.div>
    </SkillsContainer>
  );
}

export default Skills;