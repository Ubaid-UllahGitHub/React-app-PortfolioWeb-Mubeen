import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './style.css';

const ContactHeader = () => {
  return (
    <header className="header1">
      <div className="portfolio-header1">
        <div className="portfolio-logo1">
          {/* Use Link for routing to home or other pages */}
          <Link to="/">
                      <img 
                        src="/image/M - logo.svg"  // Update this path as needed
                        width="100px" 
                        height="100px" 
                        alt="logo"
                      />
                    </Link>
        </div>
        <div className="header-btn1">
          {/* Resume download button */}
          <a 
            href="public\Mubeen Iqbal Full Stack Developer-.pdf" 
            className="button-link1" 
            download="Mubeen_Iqbal_Resume.pdf"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/>
            </svg>
            Get My Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
