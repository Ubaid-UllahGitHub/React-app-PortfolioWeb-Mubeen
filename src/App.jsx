import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary router components
import Navbar from './components/navbar';
import MainContent from './components/main'; 
import BioSection from './components/Bio';
import ExpertiseSection from './components/expertise';
import Portfolio from './components/portfolio';
import GitHubButton from './components/GitHubBtn'; 
import ContactForm from './components/contact-form';
import ContactHeader from './components/contact-header';
import ContactMain from './components/contact-main';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home page */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <MainContent />
              <BioSection />
              <ExpertiseSection />
              <Portfolio />
              <GitHubButton />
            </>
          } 
        />

        {/* Route for the Contact page */}
        <Route 
          path="/contact" 
          element={
            <>
              <ContactHeader />
              <ContactMain />
              <ContactForm />
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
