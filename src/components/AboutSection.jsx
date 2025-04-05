import React from "react";

const AboutSection = ({ isDarkMode }) => (
  <section
    className={`py-20 px-6 ${
      isDarkMode
        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-600"
        : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900"
    }`}
  >
    <h2
      className={`text-4xl font-semibold text-center mb-8 underline underline-offset-8 ${
        isDarkMode
          ? "text-white decoration-orange-500"
          : "text-gray-900 decoration-blue-500"
      }`}
    >
      About Me
    </h2>
    <div
      className={`max-w-3xl mx-auto rounded-lg p-8 shadow-xl ${
        isDarkMode
          ? "bg-gray-800 shadow-orange-600"
          : "bg-white shadow-blue-400"
      }`}
    >
      <p
        className={`text-center text-lg font-medium leading-relaxed ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Hello! I'm a passionate Data Engineer who specializes in transforming
        raw data into actionable insights. With expertise in
        <span
          className={`${
            isDarkMode ? "text-orange-500" : "text-blue-500"
          } font-semibold`}
        >
          {" "}
          data pipelines
        </span>
        ,{" "}
        <span
          className={`${
            isDarkMode ? "text-orange-500" : "text-blue-500"
          } font-semibold`}
        >
          ETL processes
        </span>
        , and cloud technologies, I design and implement scalable solutions
        that make data both accessible and optimized for advanced analysis. I’m
        proficient in tools and languages like
        <span
          className={`${
            isDarkMode ? "text-orange-500" : "text-blue-500"
          } font-semibold`}
        >
          {" "}
          Python
        </span>
        ,{" "}
        <span
          className={`${
            isDarkMode ? "text-orange-500" : "text-blue-500"
          } font-semibold`}
        >
          SQL
        </span>
        , and cloud platforms like
        <span
          className={`${
            isDarkMode ? "text-orange-500" : "text-blue-500"
          } font-semibold`}
        >
          {" "}
          AWS
        </span>{" "}
        and
        <span
          className={`${
            isDarkMode ? "text-orange-500" : "text-blue-500"
          } font-semibold`}
        >
          {" "}
          Azure
        </span>
        , and I have a strong foundation in big data frameworks. I thrive on
        building systems that empower teams to make fast, data-driven decisions
        while ensuring data integrity and security. My mission is to design
        robust, efficient workflows and continue evolving in the dynamic and
        fast-paced world of data engineering...
      </p>
    </div>
  </section>
);

export default AboutSection;
