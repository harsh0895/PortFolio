import React from 'react';
import { motion } from 'framer-motion'; // Add framer-motion for animations

const SkillsSection = ({ isDarkMode }) => {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🌬️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'SQL', icon: '📊' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '🔧' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '💻' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'PySpark', icon: '🔥' },
    { name: 'NumPy', icon: '📐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Databricks', icon: '✨' },
  ];

  return (
    <section
      className={`py-20 ${
        isDarkMode
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900'
      }`}
    >
      <motion.h2
        className={`text-4xl font-semibold font-serif text-center mb-8 underline underline-offset-8 ${
          isDarkMode ? 'decoration-orange-500' : 'decoration-blue-500'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg ${
              isDarkMode
                ? 'bg-gray-900 border-orange-500 shadow-[0_8px_15px_rgba(255,165,0,0.5)]'
                : 'bg-white border-blue-500 shadow-[0_8px_15px_rgba(0,0,255,0.5)]'
            } hover:scale-110 transition-transform`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ rotate: 5 }}
          >
            <span className="text-5xl mb-4">{skill.icon}</span>
            <p
              className={`font-serif font-bold text-lg ${
                isDarkMode ? 'text-orange-400' : 'text-blue-500'
              }`}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
