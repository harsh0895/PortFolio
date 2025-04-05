import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/Herosection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-100 light:bg-gray-100 light:text-gray-900 min-h-screen">
        <header className="flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <main>
          <HeroSection isDarkMode={darkMode} />
          <AboutSection isDarkMode={darkMode} />
          <SkillsSection isDarkMode={darkMode}/>
          <ProjectsSection isDarkMode={darkMode} />
          <ContactSection isDarkMode={darkMode} />
        </main>
      </div>
    </div>
  );
}

export default App;
