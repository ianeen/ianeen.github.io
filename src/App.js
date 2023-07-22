import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './App.css';
import myImage from './res/photo.jpeg';
import AboutText from './AboutText';
import BackgroundParticles from './BackgroundParticles';
import CareerPath from './CareerPage';
import StartupJourney from './StartupJourney';
import Blog from './Blog';
import Projects from './Projects';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Routes>
        <Route path="/career-path" element={<CareerPath />} />
        <Route path="/startup-journey" element={<StartupJourney />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={
          <div className={`App relative flex h-screen font-sans overflow-hidden ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white'}`}>
            <BackgroundParticles />
            <div className={`w-1/2 flex flex-col items-center justify-center shadow-lg p-10 transition-transform duration-200 ease-in-out transform hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
              <img src={myImage} className="h-64 w-64 rounded-full mb-10" alt="Ian Rokas"/>
              <h1 className="text-4xl mb-6">Ian Rokas here!</h1> 
              <AboutText />
            </div>
            <div className={`w-1/2 h-full flex flex-col justify-around p-10 transition-transform duration-200 ease-in-out transform hover:scale-105 ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-700'}`}>
              <div className={`flex flex-row justify-around`}>
                <div className={`w-full md:w-1/2 flex flex-col items-center p-5 m-5 shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
                  <h2 className="text-3xl mb-10">Career Path 🎓</h2>
                  <h2 className="text-3xl mb-10">
                    <Link to="/career-path" className={`text-lg ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>Career Path</Link>
                  </h2>
                </div>
                <div className={`w-full md:w-1/2 flex flex-col items-center p-5 m-5 shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
                  <h2 className="text-3xl mb-10">Startup Journey 🚀</h2>
                  <h2 className="text-3xl mb-10">
                    <Link to="/startup-journey" className={`text-lg ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>Startup Journey</Link>
                  </h2>
                </div>
              </div>
              <div className={`flex flex-row justify-around`}>
                <div className={`w-full md:w-1/2 flex flex-col items-center p-5 m-5 shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
                  <h2 className="text-3xl mb-10">Recent Projects 💻</h2>
                  <h2 className="text-3xl mb-10">
                    <Link to="/projects" className={`text-lg ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>Projects</Link>
                  </h2>
                </div>
                <div className={`w-full md:w-1/2 flex flex-col items-center p-5 m-5 shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
                  <h2 className="text-3xl mb-10">Blog 🖊️</h2>
                  <h2 className="text-3xl mb-10">
                    <Link to="/blog" className={`text-lg ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>Blog</Link>
                  </h2>
                </div>
              </div>
            </div>
            <button onClick={toggleTheme} className={`fixed top-5 right-5 p-3 rounded text-2xl`}>
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

