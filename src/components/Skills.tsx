import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Three.js', level: 70, category: '3D' },
  { name: 'D3.js', level: 65, category: 'Data' },
  // Add more skills as needed
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    const width = barRef.current.clientWidth;
    const height = 8;
    const margin = { top: 0, right: 0, bottom: 0, left: 0 };

    // Clear previous SVG
    d3.select(barRef.current).selectAll('*').remove();

    // Create SVG
    const svg = d3
      .select(barRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3.scaleLinear().domain([0, 100]).range([0, width - margin.left - margin.right]);

    // Add background bar
    svg
      .append('rect')
      .attr('width', width - margin.left - margin.right)
      .attr('height', height)
      .attr('fill', '#1a1a1a')
      .attr('rx', 4)
      .attr('ry', 4);

    // Add progress bar
    svg
      .append('rect')
      .attr('width', 0)
      .attr('height', height)
      .attr('fill', '#00f6ff')
      .attr('rx', 4)
      .attr('ry', 4)
      .transition()
      .duration(1000)
      .delay(index * 100)
      .attr('width', x(skill.level));
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-cyber-blue">{skill.level}%</span>
      </div>
      <div ref={barRef} className="w-full h-2" />
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-cyber-purple mb-6">{category}</h3>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 