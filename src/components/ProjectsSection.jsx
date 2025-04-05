import React from 'react';
import projectImage from '../assets/project1.jpg';
import studyNotion from '../assets/study_notion.jpg'
import pointandclick from '../assets/poc.jpg'

const ProjectsSection = ({ isDarkMode }) => {
  const projects = [
    {
      title: "1. Study Notion Edtech",
      description: "Study Notion is a dynamic web-based EdTech platform where users can explore and purchase tech-related courses. It offers a seamless experience for both students and teachers, enabling efficient learning, course management, and content delivery.",
      image: studyNotion,
    },
    {
      title: "2. Point and Click ML",
      description: "The Point and Click ML project aims to build an automated system for predicting outcomes based on demographic data derived from geographic information enables users to obtain predictions by supplying specific geographic inputs body",
      image: pointandclick,
    },
    {
      title: "Project 3",
      description: "A data visualization tool for real-time analytics. An AI-powered chatbot designed for customer support.",
      image: projectImage,
    },
    {
      title: "Project 4",
      description: "A cloud-based storage solution with enhanced security. A data visualization tool for real-time analytics.",
      image: projectImage,
    },
  ];

  return (
    <section
      className={`py-20 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100'
          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
      }`}
    >
      <h2
        className={`text-4xl font-semibold text-center mb-12 underline underline-offset-8 ${
          isDarkMode ? 'decoration-orange-500' : 'decoration-blue-500'
        }`}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-2xl overflow-hidden ${
              isDarkMode
                ? 'bg-gray-900 shadow-lg shadow-orange-400/20 hover:shadow-xl hover:shadow-orange-500/30'
                : 'bg-white shadow-lg shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-500/30'
            } hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? 'text-orange-400' : 'text-blue-500'
                } mb-2`}
              >
                {project.title}
              </h3>
              <p
                className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-800'
                }`}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
