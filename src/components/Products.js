import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsSection = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 2rem;
  background: linear-gradient(180deg, #000 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-top: 3rem;
`;

const Product = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

const ProductImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 2rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin: 0 0 1rem 0;
`;

const ProductDescription = styled.p`
  color: #888;
  margin: 0 0 1rem 0;
  line-height: 1.6;
`;

const ProductLink = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(90deg, #fff 0%, #888 100%);
  color: #000;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  margin-top: 1rem;
`;

const products = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

function Products() {
  return (
    <ProductsSection
      id="products"
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
        My Products
      </motion.h2>
      <ProductsGrid>
        {products.map((product) => (
          <Product
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProductImage
              src={product.image}
              alt={product.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductLink
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </ProductLink>
            </ProductInfo>
          </Product>
        ))}
      </ProductsGrid>
    </ProductsSection>
  );
}

export default Products; 