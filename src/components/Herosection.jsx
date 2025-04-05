import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/LOGO.jpeg';
import resume from '../assets/Resume_final.pdf';

const HeroSection = ({ isDarkMode }) => (
  <section
    className={`h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-16 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}
  >
    {/* Left Section for Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <motion.div
        className="relative w-80 h-80 rounded-full flex justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glowing Background Effect */}
        <div
          className={`absolute inset-0 blur-2xl rounded-full ${
            isDarkMode
              ? 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500'
              : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
          }`}
        ></div>
        {/* Image */}
        <img
          src={heroImage}
          alt="Harsh Bhola"
          className="w-80 h-80 object-cover rounded-full shadow-5xl z-10"
        />
      </motion.div>
    </div>

    {/* Right Section for Text */}
    <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
      <motion.h1
        className="text-5xl lg:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm{' '}
        <span className={isDarkMode ? 'text-orange-400' : 'text-blue-500'}>
          Harsh Bhola
        </span>
        ...
      </motion.h1>
      <motion.p
        className="text-2xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate{' '}
        <span
          className={`font-serif text-3xl ${
            isDarkMode ? 'text-orange-400' : 'text-blue-500'
          }`}
        >
          Data Engineer...
        </span>
      </motion.p>
      <motion.a
        href={resume} // Path to your resume file
        download="Harsh_Bhola_Resume.pdf" // Rename the file when downloading
        className={`mt-6 px-6 py-3 font-serif rounded-lg shadow-lg transition duration-300 inline-block text-center ${
          isDarkMode
            ? 'bg-gray-900 border-2 border-orange-600 text-white hover:bg-orange-500'
            : 'bg-white border-2 border-blue-500 text-gray-900 hover:bg-blue-500 hover:text-white'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        Download Resume
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
