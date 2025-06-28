import React from 'react';
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

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

function Skills() {
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
    }
  ];

  const technologies = [
    "React", "Node.js", "JavaScript", "TypeScript", "Python", "MongoDB", 
    "PostgreSQL", "Express.js", "Next.js", "GraphQL", "Docker", "AWS", 
    "Git", "Figma", "Tailwind CSS", "SASS", "Jest", "Webpack"
  ];

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
      
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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