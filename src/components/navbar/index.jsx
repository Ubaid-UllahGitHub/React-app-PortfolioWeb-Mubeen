import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for routing
import './style.css'; // Import your styles

const Navbar = () => {
  return (
    <header>
      <div className="portfolio-header">
        {/* Logo Section */}
        <div className="portfolio-logo">
          {/* Link to Home page */}
          <Link to="/">
            <img 
              src="/image/M - logo.svg"  // Update this path as needed
              width="100px" 
              height="100px" 
              alt="logo"
            />
          </Link>
        </div>
        
        {/* Navbar Links */}
        <div className="portfolio-navbar">
          <ul>
            <li><a href="#services">Services</a></li> {/* Use Link for internal navigation */}
            <li><a href="#portfolio">Portfolio</a></li> {/* Use Link for internal navigation */}
          </ul>
        </div>
        
        {/* Header Buttons */}
        <div className="header-buttons">
          <div className="header-btn">
            {/* Link to Contact page */}
            <Link to="/contact" className="button-link">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="m430-500 283-283q12-12 28-12t28 12q12 12 12 28t-12 28L487-444l-57-56Zm99 99 254-255q12-12 28.5-12t28.5 12q12 12 12 28.5T840-599L586-345l-57-56ZM211-211q-91-91-91-219t91-219l120-120 59 59q7 7 12 14.5t10 15.5l148-149q12-12 28.5-12t28.5 12q12 12 12 28.5T617-772L444-599l-85 84 19 19q46 46 44 110t-49 111l-57-56q23-23 25.5-54.5T321-440l-47-46q-12-12-12-28.5t12-28.5l57-56q12-12 12-28.5T331-656l-64 64q-68 68-68 162.5T267-267q68 68 163 68t163-68l239-240q12-12 28.5-12t28.5 12q12 12 12 28.5T889-450L649-211q-91 91-219 91t-219-91Zm219-219ZM680-39v-81q66 0 113-47t47-113h81q0 100-70.5 170.5T680-39ZM39-680q0-100 70.5-170.5T280-921v81q-66 0-113 47t-47 113H39Z"/>
              </svg>
              Say Hello
            </Link>
          </div>
          <div className="header-btn">
            {/* Link to download Resume */}
            <a href="image/Mubeen Iqbal Full Stack Developer.pdf" className="button-link" download="Mubeen_Iqbal_Resume.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
