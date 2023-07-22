import React from 'react';

function AboutText() {
    return (
        <div className="about-text-container">
            <h1 className="text-2xl text-center mt-10 mb-5">Welcome to my space</h1>
            <p className="text-xl text-center mb-5 px-10">
                As a backend software developer, I enjoy creating efficient, scalable, and reliable server applications. This is a digital place where I share updates, reflections about my life, my work, and the things I build. 
            </p>
            <p className="text-xl text-center mb-5 px-10">
                Dive in to explore my career path, my start-up journey, past and present projects, and general blog posts where I share my perspective on various topics.
            </p>
            <p className="text-xl text-center mb-10 px-10">
                Thanks for stopping by 🤙
            </p>
            <p className="text-sm text-center mb-5 px-10">
                Connect with me:
                <ul>
                    <li>Email: <a href="mailto:garyianrokas@gmail.com">garyianrokas@gmail.com</a></li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/irokas">Ian Rokas</a></li>
                    <li>GitHub: <a href="https://github.com/ianeen">ianeen</a></li>
                </ul>
            </p>
        </div>
    );
}

export default AboutText;
