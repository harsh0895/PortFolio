import React from 'react';
import projectImage from '../assets/project1.jpg';
import studyNotion from '../assets/study_notion.jpg'
import pointandclick from '../assets/poc.jpg'
import realtime from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/pro6.jpg'

const ProjectsSection = ({ isDarkMode }) => {
const projects = [
    {
      title: "1. Study Notion Edtech",
      description:
        "Study Notion is a dynamic web-based EdTech platform where users can explore and purchase tech-related courses. It offers a seamless experience for both students and teachers, enabling efficient learning, course management, and content delivery.",
      image: studyNotion,
    },
    {
      title: "2. Point and Click ML",
      description:
        "The Point and Click ML project aims to build an automated system for predicting outcomes based on demographic data derived from geographic information. It enables users to obtain predictions by supplying specific geographic inputs.",
      image: pointandclick,
    },
    {
      title: "3. Real-Time Data Pipeline with Kafka & Spark",
      description:
        "Designed and implemented a real-time ETL pipeline using Apache Kafka, Spark Streaming, and AWS S3/Redshift. The system ingests millions of streaming events, performs on-the-fly transformations, and stores data for analytics and dashboarding.",
      image: realtime,
    },
    {
      title: "4. Data Lakehouse on AWS",
      description:
        "Built a scalable Data Lakehouse architecture using AWS Glue, S3, Athena, and Redshift Spectrum. Enabled batch + streaming ingestion, automated schema evolution, and optimized querying with partitioning and Parquet format.",
      image: project4,
    },
    {
      title: "5. End-to-End ELT with Airflow & Snowflake",
      description:
        "Developed an ELT pipeline orchestrated with Apache Airflow to move raw data from APIs and relational databases into Snowflake. Applied transformations inside Snowflake using dbt for analytics-ready datasets.",
      image: project5,
    },
    {
      title: "6. Log Analytics Platform",
      description:
        "Created a centralized log analytics solution where CloudWatch logs are ingested into S3, processed via PySpark, and visualized in Power BI. The project highlights scalable log processing for observability and monitoring.",
      image: project6,
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
