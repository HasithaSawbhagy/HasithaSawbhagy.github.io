import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled.div`
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

const ProductsGrid = styled.div`
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

const Product = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 380px;
  max-width: 380px;
  height: 520px;
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
    min-width: 320px;
    max-width: 320px;
    height: 480px;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    max-width: 280px;
    height: 450px;
  }
`;

const ProductImage = styled(motion.div)`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
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
    height: 160px;
    font-size: 3rem;
  }
`;

const ProductInfo = styled.div`
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

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  color: #fff;
  margin: 0 0 1rem 0;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProductDescription = styled.p`
  color: #888;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProductTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProductActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;
`;

const ProductLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
  color: #000;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
  min-width: 120px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
  }

  &.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.6);
    }
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.status === 'live' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(251, 191, 36, 0.2)'};
  color: ${props => props.status === 'live' ? '#22c55e' : '#fbbf24'};
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.status === 'live' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(251, 191, 36, 0.3)'};
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

const products = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform with advanced features including user authentication, payment processing, inventory management, and admin dashboard.',
    icon: '🛒',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    liveLink: '#',
    codeLink: '#',
    status: 'live'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration, and progress tracking.',
    icon: '📋',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
    liveLink: '#',
    codeLink: '#',
    status: 'live'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and comprehensive reporting features.',
    icon: '📊',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma', 'Tailwind'],
    liveLink: '#',
    codeLink: '#',
    status: 'development'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    icon: '🌤️',
    tech: ['React Native', 'Expo', 'Weather API', 'Maps'],
    liveLink: '#',
    codeLink: '#',
    status: 'live'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A stunning portfolio website with smooth animations, responsive design, and optimized performance built with modern technologies.',
    icon: '💼',
    tech: ['React', 'GSAP', 'Styled Components', 'Framer Motion'],
    liveLink: '#',
    codeLink: '#',
    status: 'live'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with group messaging, file sharing, emoji support, and end-to-end encryption.',
    icon: '💬',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    liveLink: '#',
    codeLink: '#',
    status: 'development'
  },
  {
    id: 7,
    title: 'Learning Management System',
    description: 'Comprehensive LMS with course management, progress tracking, video streaming, and interactive assessments.',
    icon: '📚',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Stripe'],
    liveLink: '#',
    codeLink: '#',
    status: 'live'
  },
  {
    id: 8,
    title: 'Fitness Tracker',
    description: 'Mobile fitness application with workout tracking, nutrition monitoring, and social features for fitness enthusiasts.',
    icon: '💪',
    tech: ['React Native', 'Firebase', 'Redux', 'Health APIs'],
    liveLink: '#',
    codeLink: '#',
    status: 'development'
  },
  {
    id: 9,
    title: 'Cryptocurrency Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market analysis tools.',
    icon: '₿',
    tech: ['Vue.js', 'Node.js', 'WebSocket', 'Chart.js', 'CoinGecko API'],
    liveLink: '#',
    codeLink: '#',
    status: 'live'
  }
];

function Products() {
  const productsGridRef = useRef(null);

  const scrollProducts = (direction) => {
    const container = productsGridRef.current;
    if (container) {
      const scrollAmount = 400; // Card width + gap
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
    <ProductsContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Products
      </SectionTitle>
      
      <ScrollableContainer>
        <NavArrow
          className="left"
          onClick={() => scrollProducts('left')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </NavArrow>
        <ProductsGrid ref={productsGridRef}>
          {products.map((product, index) => (
            <Product
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <ProductImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {product.icon}
                <StatusBadge status={product.status}>
                  {product.status === 'live' ? 'Live' : 'In Development'}
                </StatusBadge>
              </ProductImage>
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductTech>
                  {product.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProductTech>
                <ProductActions>
                  <ProductLink
                    href={product.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Live Demo
                  </ProductLink>
                  <ProductLink
                    href={product.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💻 View Code
                  </ProductLink>
                </ProductActions>
              </ProductInfo>
            </Product>
          ))}
        </ProductsGrid>
        <NavArrow
          className="right"
          onClick={() => scrollProducts('right')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </NavArrow>
      </ScrollableContainer>
    </ProductsContainer>
  );
}

export default Products;