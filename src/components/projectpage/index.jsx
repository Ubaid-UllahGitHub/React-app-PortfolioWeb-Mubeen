// components/ProjectPage.jsx
import React from 'react';
import './style.css'; // Import your styles
const ProjectPage = ({ title, subtitle, imageSrc, imageAlt, description, links }) => {
  return (
    <div className="project-wrapper">
      <div className="project-container">
        {/* Hero Section */}
        <div className="project-hero">
          <div className="project-text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="project-image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Project Description</h2>
          <p>{description}</p>
        </div>

        {/* Links */}
        <div className="project-links">
          <h2>Important Links</h2>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.internal ? (
                  <a href={link.url}>{link.icon} {link.label}</a>
                ) : (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon} {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
