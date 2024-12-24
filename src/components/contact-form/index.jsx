import React from 'react';
import './style.css'; 

const ContactForm = () => {
  return (
    <section className='contact-section'>
      <div className="form-container">
        <form action="https://formspree.io/f/mzzblwpj" method="POST">
          {/* First Row: Full Name and Email */}
          <div className="p-col1">
            <div className="col">
              <label htmlFor="fname" className="form-name-label">Full Name</label>
              <input 
                type="text" 
                id="fname" 
                name="fullname" 
                className="form-name-input" 
                required 
                placeholder="Your Full Name" 
              />
            </div>
            <div className="col">
              <label htmlFor="uemail" className="form-email-label">Email</label>
              <input 
                type="email" 
                id="uemail" 
                name="useremail" 
                className="form-email-input" 
                required 
                placeholder="Your Email" 
              />
            </div>
          </div>

          {/* Second Row: Message */}
          <div className="p-col1">
            <div className="col">
              <label htmlFor="umessage" className="form-message-label">Message</label>
              <textarea 
                id="umessage" 
                name="usermessage" 
                rows="5" 
                placeholder="Your Message" 
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" className="submit-button">Submit Your Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
