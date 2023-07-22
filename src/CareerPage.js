import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import collageImage1 from './res/photo.jpeg';

const CareerPath = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

    const seed = Math.random() < 0.5 ? 'left' : 'right';

    const jobs = [
    {
      title: 'High School Education',
      company: 'The Country Day School',
      period: '2015 - 2019',
      description: 'Participated in FRC and VEX Robotics Teams from 2015 to 2019. Served as a Junior LEGO Robotics Team Mentor in 2017 and as a Senior Performing Arts Centre Technician.',
      icon: './res/icon0.png',
      image: './res/cds.jpg',
      side: seed,
      margin: Math.floor(Math.random() * 4) + 1
    },
    {
      title: 'Android Developer Co-op',
      company: 'OpenText',
      period: 'Jan 2020 - Apr 2020',
      description: 'Worked with Java and Kotlin languages to program Android features for the OpenText Core Share project.',
      icon: './res/icon1.jpg',
      image: 'res/opentext.jpg',
      side: seed === 'left' ? 'right' : 'left',
      margin: Math.floor(Math.random() * 4) + 1
    },
    {
      title: 'Software Developer Co-op',
      company: 'Ericsson',
      period: 'Sep 2020 - Dec 2020',
      description: 'Served as a software developer with the Service Exploration Team for Ericsson Canada. Worked on different proof of concept projects using various languages.',
      icon: './res/icon2.jpg',
      image: './res/ericsson.jpg',
      side: seed,
      margin: Math.floor(Math.random() * 4) + 1
    },
    {
      title: 'Software Developer Co-op (Continued)',
      company: 'Ericsson',
      period: 'May 2021 - Aug 2021',
      description: 'Continued as a developer with the Service Exploration Team for Ericsson Canada.',
      icon: './res/icon2.jpg',
      image: './res/ericsson.jpg',
      side: seed === 'left' ? 'right' : 'left',
      margin: Math.floor(Math.random() * 4) + 1
    },
    {
      title: 'Backend Crypto Developer Co-op',
      company: 'Layer2 Financial',
      period: 'Jan 2022 - Apr 2022',
      description: 'Served as a backend developer working on numerous domain services within a SaaS crypto banking application.',
      icon: './res/icon3.jpg',
      image: './res/crypto.png',
      side: seed,
      margin: Math.floor(Math.random() * 4) + 1
    },
    {
      title: 'Software Development Engineering (Back-end) Co-op',
      company: 'Splunk',
      period: 'Jan 2023 - Apr 2023',
      description: 'Worked as a backend software developer for the Splunk SOAR (Security, Orchestration, Automation, and Response) product.',
      icon: './res/icon4.jpg',
      image: './res/splunk.jpg',
      side: seed === 'left' ? 'right' : 'left',
      margin: Math.floor(Math.random() * 4) + 1
    },
    {
      title: 'Bachelor of Applied Science - BASc, Computer Engineering',
      company: 'University of Waterloo',
      period: '2019 - 2024',
      description: 'Currently a fourth-year Computer Engineering student at the University of Waterloo.',
      icon: './res/icon5.jpg',
      image: collageImage1,
      side: seed,
      margin: Math.floor(Math.random() * 4) + 1
    }
  ];

  return (
    <div className={`w-full min-h-screen flex flex-col items-center p-10 overflow-auto ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-4xl mb-6">Career Path</h1>
      <div className="flex flex-col w-3/4">
        {jobs.map((job, index) => (
          <div className={`flex items-start mb-10 ${job.side === 'right' ? 'flex-row-reverse' : ''}`} key={index}>
            <img src={job.image} alt={`Job ${index}`} className="w-32 h-32 object-cover rounded-md" style={{ margin: `${job.margin}rem` }} />
            <div className={`p-5 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full max-w-2xl ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
              <img src={job.icon} alt={job.title} className="h-10 w-10 mb-2 rounded-md" />
              <h3 className="text-2xl mb-2">{job.title}</h3>
              <h4 className="text-xl mb-2">{job.company}</h4>
              <h5 className="text-lg mb-4">{job.period}</h5>
              <p className="text-base">{job.description}</p>
            </div>
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

export default CareerPath;
