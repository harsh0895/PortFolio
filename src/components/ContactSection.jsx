import React from 'react';
import { SiLeetcode } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const ContactSection = ({ isDarkMode }) => {
  const profiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/Harsh_bhola/",
      icon: <SiLeetcode className="text-orange-500 w-10 h-10" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/harsh-bhola-b77297239/",
      icon: <GrLinkedinOption className="text-orange-500 w-10 h-10" />,
    },
    {
      name: "Gmail",
      link: "mailto:harshbhola7404888499@gmail.com",
      icon: <SiGmail className="text-orange-500 w-10 h-10" />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yourprofile",
      icon: <RiTwitterXLine className="text-orange-500 w-10 h-10" />,
    },
    {
      name: "Github",
      link: "https://github.com/harsh0895",
      icon: <FaGithub className="text-orange-500 w-10 h-10" />,
    },
  ];

  return (
    <section
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <h2 className={`text-4xl font-semibold text-center mb-8 underline underline-offset-8 ${isDarkMode ? 'decoration-orange-500' : 'decoration-blue-500'}`}>
        Contact Me
      </h2>
      <form className="max-w-md mx-auto bg-gray-300 p-8 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Name"
          className={`w-full p-4 mb-4 border rounded-3xl ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-800 placeholder-gray-600 border-gray-300'}`}
        />
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-4 mb-4 border rounded-3xl ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-800 placeholder-gray-600 border-gray-300'}`}
        />
        <textarea
          placeholder="Message"
          className={`w-full p-4 mb-4 border rounded-3xl ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-800 placeholder-gray-600 border-gray-300'}`}
        ></textarea>
        <button
          type="submit"
          className={`w-full p-4 ${isDarkMode ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-blue-500 text-gray-900 hover:bg-blue-600'} font-bold rounded-3xl shadow-lg transition duration-300`}
        >
          Send Message
        </button>
      </form>

      {/* Social Profiles Section */}
      <div className="mt-16 text-center">
        <div className="flex justify-center space-x-12">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div
                className={`w-12 h-12 rounded-full flex justify-center items-center transition duration-200 ${
                  isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
                }`}
              >
                {profile.icon}
              </div>
              <span className={`mt-2 text-lg font-serif font-bold ${isDarkMode ? 'text-orange-500 group-hover:text-orange-400' : 'text-blue-500 group-hover:text-blue-400'}`}>
                {profile.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
