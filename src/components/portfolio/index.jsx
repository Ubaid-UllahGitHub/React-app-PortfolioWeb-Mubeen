import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
import './style.css'; // Import your styles

function Portfolio() {
  return (
    <section className="s3" id="portfolio">
      <div className="work-heading">
        <h2>My Recent Work</h2>
        <p>
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <a href="mailto:mubeenmughal111@gmail.com">Email me.</a>
        </p>
      </div>
      <div className="main-container">
        <div className="col">
          <div className="img-container cursor-pointer">
            <img src="/image/projectlms.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                ILMVERSITY LMS, built with React and Django, offers a complete educational platform with features like course management, attendance tracking, student progress reports, and real-time analytics for schools and colleges.
              </p>
              <Link to="/projectlms" className="button-link">
                <div className="img-btn">
                  Visit Website
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="img-container">
            <img src="\image\projectternoa.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Blockchain app built with React and Node.js for secure, censorship-resistant digital asset management.
              </p>
              <Link to="/projectternoa" className="button-link">
                <div className="img-btn">
                  Visit Website
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="img-container">
            <img src="\image\projectforrio.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Foriio is built with React.js & Express.js. It provides features to create a portfolio of our work and share it with others. You can also become a collaborator with others. You can upload images, videos, and articles
              </p>
              <Link to="/projectforiio" className="button-link">
                <div className="img-btn">
                  Visit Website
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="img-container">
            <img src="\image\projectcds.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Built a secure, scalable document conversion system for legal firms using .NET Core and Angular. Developed APIs for processing large files, integrated Azure for deployment, and ensured performance, compliance, and seamless user experience.
              </p>
              <Link to="/projectlegaltech" className="button-link">
                <div className="img-btn">
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="img-container">
            <img src="image\projectcrm.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Integrated CAS genesisWorld CRM using .NET Core and C#, automating workflows, enhancing data operations with SQL Server, and deploying RESTful services via Azure DevOps to streamline CRM processes and boost business productivity.
              </p>
              <Link to="/projectcasgenesis" className="button-link">
                <div className="img-btn">
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="img-container">
            <img src="image\projectfarming.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Developed a smart farming IoT platform using .NET Core, Azure, and MongoDB. Integrated cloud-based APIs, managed sensor data ingestion, and deployed scalable backend services to optimize agricultural monitoring and automate real-time insights.
              </p>
              <Link to="/projectsmartfarming" className="button-link">
                <div className="img-btn">
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="img-container">
            <img src="\image\projectsharedot.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Smart content discovery platform built with MERN and NLP for real-time, AI-assisted content delivery
              </p>
              <Link to="/projectsharedot" className="button-link">
                <div className="img-btn">
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="img-container">
            <img src="/image/projectrhino.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Rhino is a platform built with React.js and Ruby on Rails that
                simplifies renting by replacing traditional security deposits
                with affordable insurance options, all managed digitally for a
                seamless experience.
              </p>
              <Link to="/projectsayrhino" className="button-link">
                <div className="img-btn">
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="img-container">
            <img src="\image\projectticketing.png" alt="portfolio-img1" />
            <div className="img-content">
              <p>
                Advanced ticketing platform with RoR backend and a modern, interactive React UI.
              </p>

              <Link to="/projectfreshtix" className="button-link">
                <div className="img-btn">
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;

