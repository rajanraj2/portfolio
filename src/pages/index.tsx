import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';
import NeuralBackground from '../components/NeuralBackground';
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: 'Rubrix',
      description: 'AI-powered Hackathon Evaluation Platform',
      technologies: ['AI/ML', 'Speech-to-Text', 'NLP', 'Transformers'],
      images: ['/Rubrix/rubrix-1.png', '/Rubrix/rubrix-2.png'],
      link: '/projects#rubrix'
    },
    {
      "title": "Fireshark",
      "description": "Real-time Network Traffic Monitoring & Analysis",
      "technologies": ["Python", "Packet Sniffing", "Cybersecurity"],
      "images": ["/Fireshark/fireshark-1.png  ", "/Fireshark/fireshark-2.png"],
      "link": "/projects#fireshark"
    },
    {
      "title": "Fashion Fusion",
      "description": "AI-Powered Outfit Recommendation Platform",
      "technologies": ["AI/ML", "Computer Vision", "React"],
      "images": ["/Fashion_Fusion/fashion-fusion-1.png", "/Fashion_Fusion/fashion-fusion-2.png"],
      "link": "/projects#fashionfusion"
    },
    {
      "title": "Road Sense",
      "description": "Gamified Driving Rules Learning Platform",
      "technologies": ["Java", "QuizGame", "Simulation"],
      "images": ["/Road_Sense/road-sense-1.png"],
      "link": "/projects#roadsense"
    },
    {
      "title": "Paint Palace",
      "description": "Interactive Painting & Drawing App",
      "technologies": ["Tkinter", "Python", "GUI"],
      "images": ["/Paint_Palace/paint-palace-1.png"],
      "link": "/projects#paintpalace"
    },
    {
      "title": "MyShell",
      "description": "Custom Shell Built with C++",
      "technologies": ["C++", "Linux", "Shell Scripting"],
      "images": ["/MyShell/myshell-1.png"],
      "link": "/projects#myshell"
    } 
    // {
    //   title: 'SkillSwap',
    //   description: 'P2P Skill Exchange & Collaboration Platform',
    //   technologies: ['MERN Stack', 'WebRTC', 'Socket.io'],
    //   images: ['/projects/skillswap-1.jpg', '/projects/skillswap-2.jpg'],
    //   link: '/projects#skillswap'
    // },
    // {
    //   title: 'NutriGuide AI',
    //   description: 'AI-Powered Nutrition Assistant',
    //   technologies: ['MERN Stack', 'AI/ML', 'React'],
    //   images: ['/projects/nutriguide-ai-1.jpg', '/projects/nutriguide-ai-2.jpg'],
    //   link: '/projects#nutriguide'
    // }
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

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold mb-6 neon-text">
            Rajan Raj
          </h1>
          <h2 className="text-2xl text-[#00f6ff] mb-8">
            Competitive Programmer | Full Stack Developer | AI/ML Developer
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Building innovative solutions with cutting-edge technologies
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-[#00f6ff] to-[#b026ff] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Featured Projects */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 neon-text text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <ImageCarousel images={project.images} alt={project.title} />
                
                <h3 className="text-2xl font-bold mb-2 text-[#00f6ff]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-6">
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

                <Link
                  href={project.link}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-[#00f6ff] to-[#b026ff] rounded-full text-sm hover:opacity-90 transition-opacity"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 