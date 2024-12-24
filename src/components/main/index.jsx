import React from 'react';

import './style.css'; // Import your CSS

const MainContent = () => {
  return (
    <main>
      <div className="portfolio-header-main">
        <div className="header-col1">
          <h3 className="header-subh">Hi I'm</h3>
          <h1 className="header-main-h">
            Mubeen Iqbal <span> - </span> <span>Full Stack Developer</span>
          </h1>
          <p>
            I am a Full Stack Developer with expertise in both front-end and back-end technologies. I specialize
            in creating efficient, scalable, and user-centric applications that meet the needs of today's
            dynamic digital landscape.
          </p>
        </div>
        <div className="header-col2">
        <img class="avatar" src="image\Abstract Background Depop Profile Picture (1).png" alt="avatar"/>
        </div>
        <div className="header-col3">
        <img class="avatar" src="image\hero-devices.svg" alt="hero-device"/>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
