import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import NeuralBackground from '../components/NeuralBackground';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  const skills = [
    { category: 'Languages', items: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python'] },
    { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'] },
    { category: 'AI/ML', items: ['CNN', 'KNN', 'ANN', 'SVM', 'Decision Trees', 'NLP'] },
    { category: 'DevOps', items: ['Linux', 'Docker', 'Git/GitHub', 'AWS'] },
    { category: 'Other', items: ['WebRTC', 'Socket.io', 'Postgres', 'Firebase'] },
  ];

  const achievements = [
    {
      title: 'Morgan Stanley Code to Give',
      description: 'Finalist in Track 2: Pi Jam Foundation - Built an AI-powered student evaluation platform with speech-to-text and rubric-based grading',
    },
    {
      title: 'Road Safety Hackathon',
      description: 'By NHAI & HOAI - Designed solutions for pedestrian safety, FOB engagement, and road awareness',
    },
    {
      title: 'Sparkathon',
      description: 'Retail Tech Innovation Challenge - Developed tech solutions for shopping experiences and supply chain optimization',
    },
    {
      title: '100xDevs Meetup',
      description: 'Delhi - Participated in networking and learning sessions',
    },
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
          className="max-w-4xl mx-auto"
        >
          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 neon-text">Rajan Raj</h1>
            <h2 className="text-2xl text-[#00f6ff] mb-2">Aspiring Software Developer | AI & Web Enthusiast</h2>
            <p className="text-lg text-gray-300">New Delhi, India</p>
          </motion.div>

          {/* About Me */}
          <div className="glass-card p-8 mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg mb-6">
                I am an aspiring software developer with a strong passion for AI/ML, Web Development, and DevOps. 
                I love building innovative solutions, exploring cutting-edge technologies, and solving complex problems. 
                My expertise spans MERN stack, WebRTC, AI-based applications, and cloud technologies. 
                I am also an active participant in hackathons, coding competitions, and open-source contributions.
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <h2 className="text-3xl font-bold mb-6 neon-text text-center">
            Tech Stack & Skills
          </h2>

          <div className="glass-card p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-semibold text-[#00f6ff]">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <h2 className="text-3xl font-bold mb-6 neon-text text-center">
            Achievements & Hackathons
          </h2>

          <div className="glass-card p-8">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-[#00f6ff] pl-4"
                >
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#00f6ff] to-[#b026ff] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 