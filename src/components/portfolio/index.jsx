import React from 'react';
import './style.css'; // Make sure to create this CSS file for styling

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
        <div className="img-container">
        <img src="image\91.png" alt="portfolio-img1" />
          <div className="img-content">
            <p>
              Wings and Rings, built with Angular and Node.js, offers a
              premier sports restaurant experience with features like online
              ordering, rewards through their app, and location-based services
              for food and drinks.
            </p>
            <div className="img-btn">
              <a href="https://www.wingsandrings.com/" className="button-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="img-container">
        <img src="image\30.png" alt="portfolio-img1" />
          <div className="img-content">
            <p>
              Ternoa, built with React.js, Python (Django), and Ruby on Rails,
              provides a blockchain platform with privacy and censorship
              resistance. It features EVM-equivalent and WASM infrastructure
              for secure digital asset management.
            </p>
            <div className="img-btn">
              <a href="https://www.ternoa.network/" className="button-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="img-container">
        <img src="image\24.png" alt="portfolio-img1" />
          <div className="img-content">
            <p>
              Rhino is a platform built with React.js and Ruby on Rails that
              simplifies renting by replacing traditional security deposits
              with affordable insurance options, all managed digitally for a
              seamless experience.
            </p>
            <div className="img-btn">
              <a href="https://www.sayrhino.com/" className="button-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="img-container">
        <img src="image\92.png" alt="portfolio-img1"/>
          <div className="img-content">
            <p>
              NZero, developed with Vue.js, Nuxt.js, and Node.js, is a platform
              for climate action that offers reporting on carbon emissions. It
              provides governments with tools to measure and reduce their
              environmental impact effectively.
            </p>
            <div className="img-btn">
              <a href="https://nzero.com/" className="button-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="img-container">
        <img src="image\Upwork Project Catelog Image  (5).png" alt="portfolio-img1" />
          <div className="img-content">
            <p>
              Forrio is built with React.js & Express.js. It provides features
              to create a portfolio of our work and share it with others. You
              can also become a collaborator with others. You can upload images,
              videos, and articles.
            </p>
            <div className="img-btn">
              <a href="https://www.foriio.com/" className="button-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="img-container">
        <img src="image\Upwork Project Catelog Image .png" alt="portfolio-img1" />
          <div className="img-content">
            <p>
              Apollo, the all-in-one sales platform built with React.js, Next.js,
              and Node.js. Seamlessly find leads, engage prospects, manage deals,
              and boost performance with automation and insights. Trusted by
              millions for sales.
            </p>
            <div className="img-btn">
              <a href="https://www.apollo.io/" className="button-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Portfolio;

