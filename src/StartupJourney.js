import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';

const StartupJourney = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const startup = { 
    name: 'Newmonic Technologies', 
    period: 'July 2023 - Present', 
    description: 'Startup that aims to improve recall through memory digitization.', 
    icon: theme === 'light' ? './res/lightnewmonic.png' : './res/newmonic.png',
    posts: [
      { title: 'Newmonic Founding', date: 'July 2023', content: 'Embarked on an innovative journey around memory digitization, a pioneering move poised to revolutionize daily life.' },
      { title: '🛠️ Hard at work 🛠️', date: 'Currently', content: 'Check back for updates...' },
    ],
  };

  return (
    <div className={`w-full min-h-screen flex flex-col items-center p-10 overflow-auto ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-4xl mb-6">{startup.name}</h1>
      <img src={startup.icon} alt={startup.name} className="mb-4 w-1/5" />
      <p className="text-lg mb-6">{startup.period}</p>
      <p className="text-base mb-10">{startup.description}</p>
      <div className="flex flex-col w-1/2">
        {startup.posts.map((post, index) => (
          <div className={`p-5 m-5 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`} key={index}>
            <h3 className="text-2xl mb-2">{post.title}</h3>
            <h5 className="text-lg mb-4">{post.date}</h5>
            <p className="text-base">{post.content}</p>
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

export default StartupJourney;
