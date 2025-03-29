import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import NeuralBackground from '../components/NeuralBackground';
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'SkillSwap',
      description: 'P2P Skill Exchange & Collaboration Platform',
      technologies: ['MERN Stack', 'WebRTC', 'Socket.io', 'Stripe/Razorpay'],
      features: [
        'Real-time video calling',
        'Messaging system',
        'Skill exchange marketplace',
        'Secure payment integration'
      ],
      images: [
        '/projects/skillswap-1.jpg',
        '/projects/skillswap-2.jpg',
        '/projects/skillswap-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'NutriGuide AI',
      description: 'AI-Powered Nutrition Assistant',
      technologies: ['MERN Stack', 'Vite', 'AI/ML', 'React'],
      features: [
        'Personalized meal plans',
        'AI chat assistance',
        'Recipe suggestions',
        'Health tracking',
        'Allergy alerts'
      ],
      images: [
        '/projects/nutriguide-ai-1.jpg',
        '/projects/nutriguide-ai-2.jpg',
        '/projects/nutriguide-ai-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Road Sense',
      description: 'Java-based Learning Game for Road Safety',
      technologies: ['Java', 'JavaFX', 'Game Development'],
      features: [
        'QuizGame module',
        'DrivingSchool module',
        'Interactive learning',
        'Gamified approach'
      ],
      images: [
        '/projects/road-sense-1.jpg',
        '/projects/road-sense-2.jpg',
        '/projects/road-sense-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Royal Driving School',
      description: 'MERN-based Web App for Driving Rules',
      technologies: ['MERN Stack', 'Firebase', 'React', 'Node.js'],
      features: [
        'Educational games',
        'Virtual garage management',
        'Driving rule quizzes',
        'Firebase authentication'
      ],
      images: [
        '/projects/royal-driving-school-1.jpg',
        '/projects/royal-driving-school-2.jpg',
        '/projects/royal-driving-school-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI-Based Question Paper Generator',
      description: 'Automated Quiz and Test Generation System',
      technologies: ['Python', 'Transformer Models', 'NLP', 'AI/ML'],
      features: [
        'Multiple difficulty levels',
        'Various question formats',
        'MCQ generation',
        'Coding questions'
      ],
      images: [
        '/projects/ai-based-question-paper-generator-1.jpg',
        '/projects/ai-based-question-paper-generator-2.jpg',
        '/projects/ai-based-question-paper-generator-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'The Rubrix',
      description: 'AI-powered Student Evaluation Platform',
      technologies: ['AI/ML', 'Speech-to-Text', 'NLP', 'React'],
      features: [
        'Video submission evaluation',
        'Audio processing',
        'Document analysis',
        'Rubric-based grading'
      ],
      images: [
        '/projects/the-rubrix-1.jpg',
        '/projects/the-rubrix-2.jpg',
        '/projects/the-rubrix-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Fashion Fusion',
      description: 'AI-Powered Fashion Assistant',
      technologies: ['ML Models', 'Computer Vision', 'Python', 'React'],
      features: [
        'Weather-based recommendations',
        'Occasion-based suggestions',
        'Style recognition',
        'Personal style analysis'
      ],
      images: [
        '/projects/fashion-fusion-1.jpg',
        '/projects/fashion-fusion-2.jpg',
        '/projects/fashion-fusion-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Paint Palace',
      description: 'Tkinter-based Drawing App',
      technologies: ['Python', 'Tkinter', 'GUI Development'],
      features: [
        'Various brush styles',
        'Color palette',
        'Undo/redo functionality',
        'Save/load drawings'
      ],
      images: [
        '/projects/paint-palace-1.jpg',
        '/projects/paint-palace-2.jpg',
        '/projects/paint-palace-3.jpg'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Custom Shell',
      description: 'C++ Based Terminal Shell',
      technologies: ['C++', 'Operating Systems', 'Shell Development'],
      features: [
        'Basic command execution',
        'Piping support',
        'Redirections',
        'Bash-like functionality'
      ],
      images: [
        '/projects/custom-shell-1.jpg',
        '/projects/custom-shell-2.jpg',
        '/projects/custom-shell-3.jpg'
      ],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      
      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <NeuralBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-12 neon-text text-center">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <ImageCarousel images={project.images} alt={project.title} />
                
                <h2 className="text-2xl font-bold mb-2 text-[#00f6ff]">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-[#00f6ff] to-[#b026ff] rounded-full text-sm hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 