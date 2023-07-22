import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import blogPostsConfig from './blogPosts.json';
import post1 from './post1.txt.js';
import post2 from './post2.txt.js';
import post3 from './post3.txt.js';

Modal.setAppElement('#root');

const Blog = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const postImports = {
    post1,
    post2,
    post3,
  };

  const blogPosts = blogPostsConfig.map(postConfig => {
    const content = postImports[postConfig.contentFile];
    if (!content) {
      console.error(`No content file found for ${postConfig.contentFile}`);
    }
    return {
      title: postConfig.title,
      content: content,
      img: postConfig.img,
      images: postConfig.images,
    };
  });

  const openModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyles = {
    content: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        background: theme === 'light' ? '#F7FAFC' : '#1A202C',
        color: theme === 'light' ? '#1A202C' : '#F7FAFC',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
        border: 'none',
    },
    overlay: {
        backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
    },
  };

  return (
    <div className={`w-full min-h-screen flex flex-col items-center p-10 overflow-auto ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-4xl mb-6">Blog</h1>
      <p className="text-lg mb-6">Some blog posts on various topics (Rokas Bites🍪)</p>
      <div className="flex flex-col w-1/2">
        {blogPosts.map((post, index) => (
          <div onClick={() => openModal(post)} key={index} className={`cursor-pointer p-5 m-5 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800 bg-opacity-75'}`}>
            <div className="post-content" style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <h2 className="text-2xl mb-2">{post.title}</h2>
                <p className="text-base">{post.content.substring(0, 100)}...</p>
              </div>
              <img src={post.img} alt={post.title} style={{borderRadius: '10px', maxHeight: '150px'}} />
            </div>
          </div>
        ))}
      </div>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel="Blog Post" 
        style={modalStyles}
      >
        {selectedPost && (
  <>
    <h2 className="text-2xl mb-2">{selectedPost.title}</h2>
    {selectedPost.content.split(/({{img\d+}})/g).map((section, index) => {
      const imageKey = section.match(/{{img(\d+)}}/);
      if (imageKey && selectedPost.images && selectedPost.images[imageKey[0]]) {
        return <img key={index} src={selectedPost.images[imageKey[0]]} alt="" className="my-4 rounded-lg mx-auto block max-w-md max-h-md object-contain" />;
      } else {
        return section.split('{{line}}').map((textPart, textIndex) => 
          <React.Fragment key={`${index}-${textIndex}`}>
            <div style={{height: '10px'}} />
            <p className="text-base">{textPart}</p>
          </React.Fragment>
        );
      }
    })}
  </>
)}
        <button onClick={closeModal} className="mt-4 p-2 bg-blue-500 text-white rounded">Done</button>
      </Modal>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={`fixed top-5 right-5 p-3 rounded text-2xl`}>
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
      <Link to="/" className={`fixed top-5 left-5 p-3 rounded text-2xl ${theme === 'light' ? 'text-blue-700' : 'text-blue-300'}`}>
        🔙
      </Link>
    </div>
  );
};

export default Blog;
