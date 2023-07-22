import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import './App.css';

const Projects = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const projects = [
    {
      title: "MemoryLane",
      image: "/res/memorylane.png",
      description: "Group project crafting an AI-driven journaling app for ECE 452 architecture class, designed to assist users in analyzing and reflecting on their daily experiences.",
      github: "https://github.com/Geri0704/MemoryLane",
    },
    {
      title: "Community Compass",
      image: "/res/communitycompass.png",
      description: "Waterloo FYDP crafting a system for community members to report, track, and respond to local incidents in real-time, whilst also sharing local events.",
      github: "Private",
    },
    {
      title: "Battlesnake",
      image: "/res/battlesnake.jpg",
      description: "Ultimate snake for Battlesnake: a multiplayer programming game played against other programed snakes.",
      github: "https://github.com/ianeen/battlesnake",
    },
    {
      title: "Short Stories AI",
      image: "/res/ai.jpg",
      description: "Pioneered AI production of short story videos, integrating AI text and image generation, text-to-speech synthesis, and automated video creation.",
      github: "https://github.com/ianeen/shortstories-ai",
    },
    {
      title: "Pixel Puzzles",
      image: "/res/puzzles.jpeg",
      description: "Jigsaw puzzle NFT project deployed on the Polygon network. Users can mint puzzles, solve them, and trade them on the marketplace.",
      github: "Private",
    },
    {
      title: "Stock Sniffer",
      image: "/res/stocksniffer.png",
      description: "Software that performs sector-specific stock analysis, generates reports, and manages transactions based on user preference.",
      github: "Private",
    },
    {
      title: "Crypto Trader",
      image: "/res/cryptotrader.jpg",
      description: "An agile bot executing technical analysis and trades between USDC and MATIC on the Polygon Network.",
      github: "Private",
    },
  ];

  return (
    <div className={`w-full min-h-screen flex flex-col items-center p-10 overflow-auto ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-4xl mb-2">Projects</h1>
      <p className="text-lg mb-6">Some more recent things I've been working on to keep me occupied.</p>
      <div className="flex flex-col w-1/2 space-y-10">
        {projects.map((project, index) => (
          <div key={index} className={`flex justify-between p-5 shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
            <div>
              <h2 className="text-2xl mb-2">{project.title}</h2>
              <p className="text-base">{project.description}</p>
              {project.github !== 'Private' ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={`text-lg ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>View on GitHub</a>
              ) : (
                  <p className={`text-lg ${theme === 'light' ? 'text-red-700' : 'text-red-300'}`}>Code confidential.</p>
              )}
            </div>
            <img src={project.image} alt={project.title} className="h-32 w-32 ml-4 rounded-md" />
          </div>
        ))}
      </div>
      <button onClick={toggleTheme} className={`fixed top-5 right-5 p-3 rounded text-2xl`}>
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
      <Link to="/" className={`fixed top-5 left-5 p-3 rounded text-2xl ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>
        🔙
      </Link>
    </div>
  );
};

export default Projects;
