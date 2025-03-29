import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NeuralBackground from './NeuralBackground';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-bg opacity-20" />
      <Canvas className="absolute inset-0">
        <OrbitControls enableZoom={false} />
        <NeuralBackground />
      </Canvas>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold neon-text">
            Your Name
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-cyber-purple">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with modern web technologies
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
          className="flex justify-center space-x-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyber-blue rounded-lg flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 