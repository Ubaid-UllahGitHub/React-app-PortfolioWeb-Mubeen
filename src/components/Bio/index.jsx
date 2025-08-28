import React from 'react';
import './style.css'; // Import your CSS
import CustomImage from '../customimage'; // Import CustomImage component
const BioSection = () => {
  return (
    <section className="s1" id="services">
      <div className="container">
        <div className="col3">
          <div className="bio-data">
            <h1>Hello, I am Mubeen, Nice To Meet You</h1>
            <p>
              I am Mubeen Mughal, a Senior Full Stack Developer with over 5 years of experience working
              remotely and leading development projects efficiently.
              My expertise spans front-end technologies like JavaScript, TypeScript, React.js, Next.js, and
              Angular, as well as back-end frameworks such as Python (Django, Flask), Node.js, and Ruby on Rails.
              I also specialize in databases like MySQL and PostgreSQL and have experience with cloud
              platforms including Azure, AWS, and Blazor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
