import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: '3D Portfolio Website',
    description: 'A modern portfolio website featuring interactive 3D elements and neural network-inspired design.',
    technologies: ['Next.js', 'Three.js', 'TypeScript', 'TailwindCSS'],
    image: '/project1.jpg',
    link: '#',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio.com',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex data using D3.js and React.',
    technologies: ['React', 'D3.js', 'TypeScript', 'TailwindCSS'],
    image: '/project2.jpg',
    link: '#',
    github: 'https://github.com/yourusername/dashboard',
    demo: 'https://your-dashboard.com',
  },
  // Add more projects as needed
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 mb-8 group hover:shadow-neon transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Preview */}
        <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#00f6ff"
                transparent
                opacity={0.8}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div>
          <h3 className="text-2xl font-bold neon-text mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm hover:bg-cyber-blue/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button"
            >
              GitHub
            </motion.a>
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button"
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-cyber-dark pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">
              Featured Projects
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my latest work showcasing modern web technologies and creative solutions.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects; 