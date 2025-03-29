import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home; 