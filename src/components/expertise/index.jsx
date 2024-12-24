import React from 'react';
import './style.css'; // Import your styles

const ExpertiseSection = () => {
  return (
    <section className="s2">
      <div className="boxes">
        <div className="col">
          <div className="skill-catogary">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e8eaed"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
            </svg>
            <h3>Front-End Developer</h3>
            <p>
              Proficient in crafting intuitive and responsive user interfaces With JavaScript & TypeScript using modern frameworks like
              React.js, Angular, and Next.js to deliver seamless user experiences.
            </p>
          </div>
          <div className="skills">
            <h4>Skills:</h4>
            <p className="skill-list">
              HTML5<br />
              CSS3<br />
              JavaScript<br />
              TypeScript<br />
              React.js<br />
              Next.js<br />
              Angular<br />
              Vue.js<br />
              SASS/SCSS<br />
              Bootstrap<br />
              Tailwind CSS<br />
              jQuery<br />
              Responsive Design<br />
              Web Accessibility (WCAG)<br />
              Performance Optimization
            </p>
          </div>
        </div>
        <div className="col">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#e8eaed"
          >
            <path d="M80-680v-80q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v80H80Zm240 560v-80H160q-33 0-56.5-23.5T80-280v-80h80v80h640v-80h80v80q0 33-23.5 56.5T800-200H640v80H320Zm160-400Zm-288 0 104-104-56-56L80-520l160 160 56-56-104-104Zm576 0L664-416l56 56 160-160-160-160-56 56 104 104Z" />
          </svg>
          <h3>Back-End Developer</h3>
          <p>
            Building robust, scalable server-side applications with .NET Frameworks, Python, Node.js, and Ruby on Rails, ensuring
            efficient data processing and secure API integration.
          </p>
          <div className="skills">
            <h4>Skills:</h4>
            <p className="skill-list">
              C# .NET(ASP.NET, .NET Core)<br />
              Python<br />
              Django<br />
              Flask<br />
              Node.js<br />
              Express.js<br />
              Ruby on Rails<br />
              RESTful APIs<br />
              GraphQL<br />
              SQL<br />
              MySQL<br />
              PostgreSQL<br />
              Database Design<br />
              ORM (Object-Relational Mapping)<br />
              Authentication & Authorization<br />
              Cloud Integration (AWS, Azure)<br />
              Serverless Architecture
            </p>
          </div>
        </div>
        <div className="col">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                    fill="#e8eaed">
                    <path
                        d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z" />
                </svg>
          <h3>Database Specialist</h3>
          <p>
            Designing and managing complex databases with MySQL and PostgreSQL, optimizing data storage,
            retrieval, and performance for high-demand applications.
          </p>
          <div className="skills">
            <h4>Skills:</h4>
            <p className="skill-list">
              MySQL<br />
              PostgreSQL<br />
              SQLite<br />
              MongoDB<br />
              Database Design<br />
              SQL Queries<br />
              Data Modeling<br />
              Performance Tuning<br />
              Backup & Recovery<br />
              Data Migration<br />
              ETL Processes<br />
              Stored Procedures<br />
              Database Security
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
