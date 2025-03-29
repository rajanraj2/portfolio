import React from 'react';
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
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Next.js and Three.js',
    technologies: ['Next.js', 'Three.js', 'TypeScript'],
    image: '/project1.jpg',
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'An interactive data visualization dashboard',
    technologies: ['React', 'D3.js', 'TailwindCSS'],
    image: '/project2.jpg',
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Preview */}
        <div className="relative h-64 md:h-full">
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
        </div>

        {/* Project Info */}
        <div>
          <h3 className="text-2xl font-bold neon-text mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button inline-block"
          >
            View Project
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 