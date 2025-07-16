import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary router components
import Navbar from "./components/navbar";
import MainContent from "./components/main";
import BioSection from "./components/Bio";
import ExpertiseSection from "./components/expertise";
import Portfolio from "./components/portfolio";
import GitHubButton from "./components/GitHubBtn";
import ContactForm from "./components/contact-form";
import ContactHeader from "./components/contact-header";
import ContactMain from "./components/contact-main";
import FooterSection from "./components/footer";
import ProjectPage from "./components/projectpage";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

const projects = {
  ilmversity: {
    title: "ILMVERSITY LMS & Campus Management System",
    subtitle:
      "Built with React and Django for a seamless educational experience.",
    imageSrc: "/image/projectlms.png",
    imageAlt: "ILMVERSITY LMS Screenshot",
    description:
      "I contributed to the development of ILMVERSITY, a powerful LMS & campus management system. The frontend was built using React for an engaging UI, while the backend was handled with Django for robust performance. PostgreSQL served as the primary database. I integrated Redis for caching and used Docker for containerized deployments on AWS. Real-time visualizations were built using ApexCharts.js.",
    links: [
      {
        label: "Live Project",
        url: "https://democollege.ilmversity.com/",
        icon: "🔗",
        internal: false,
      },
      // {
      //   label: "Dashboard",
      //   url: "/dashboard",
      //   icon: "💻",
      //   internal: true,
      // },
    ],
  },

  ternoa: {
    title: "Ternoa – Web3 Blockchain Ecosystem",
    subtitle:
      "Decentralized platform for NFTs, secure data transmission, and smart contract management.",
    imageSrc: "/image/projectternoa.png",
    imageAlt: "Ternoa Screenshot",
    description:
      "I contributed to the development of the Ternoa web platform, a decentralized blockchain-based ecosystem. Using React for the front end and Node.js for the back end, I helped build responsive UI components, implemented API integrations, and ensured smooth user interactions with blockchain data. The project emphasized performance, security, and scalability for handling Web3 interactions.",
    links: [
      {
        label: "Live Platform",
        url: "https://www.ternoa.network/",
        icon: "🌐",
        internal: false,
      },
    ],
  },
  foriio: {
    title: "Foriio – Portfolio Platform Development & Deployment",
    subtitle:
      "Built with React, Express.js, and AWS for scalable and seamless portfolio creation.",
    imageSrc: "/image/projectforrio.png", // update the path based on your asset folder
    imageAlt: "Foriio Portfolio Platform Screenshot",
    description:
      "I contributed to the development and deployment of Foriio, a creator-focused portfolio platform. I implemented dynamic user interfaces with React.js, managed backend services using Express.js, and ensured smooth integration of APIs like Twilio. The platform was deployed and optimized on AWS Cloud9 with Elasticsearch for fast search performance, providing a scalable and responsive experience for a growing user base.",
    links: [
      {
        label: "Live Platform",
        url: "https://foriio.com/", // change to actual live link if different
        icon: "🔗",
        internal: false,
      },
    ],
  },
  CDS_Convert: {
    title: "Enterprise Software for LegalTech Platform",
    subtitle:
      ".NET Core, C#, and Angular-based solution for secure and scalable document processing.",
    imageSrc: "/image/projectcds.png", // Update path to your actual image
    imageAlt: "LegalTech Platform Screenshot",
    description:
      "Developed a secure, scalable document conversion platform for legal enterprises. Built backend APIs using .NET Core, ASP.NET MVC, and C#, handling large data processing workflows. Designed dynamic UI components with Angular and integrated Microsoft Azure for cloud storage and deployment. Focused on performance, data security, and seamless user experience. Contributed across both backend and frontend, ensuring end-to-end delivery of critical features.",
    links: [
      {
        label: "Live Platform",
        url: "https://convert.cdslegal.com/", // Replace with actual link if available
        icon: "🔗",
        internal: false,
      },
    ],
  },
  smartFarming: {
    title: "Smart Farming IoT Platform",
    subtitle: "Built with .NET Core, Azure, and MongoDB to enable real-time agricultural monitoring and automation.",
    imageSrc: "image/projectfarming.png", // Update to your actual image path
    imageAlt: "Smart Farming IoT Platform Screenshot",
    description:
      "Developed a smart farming IoT platform leveraging .NET Core for backend services and Azure for cloud integration. Ingested and managed real-time sensor data using MongoDB and RESTful APIs to provide live monitoring, predictive insights, and automation for agricultural processes. Ensured scalability, data integrity, and low-latency communication between field devices and the cloud infrastructure.",
    links: [
      {
        label: "Further Documentation",
        url: "https://bedm.de/branchen/smart-farming/", // Replace with actual URL if available
        icon: "🌿",
        internal: false
      },
    ],
  },
  casGenesis: {
    title: "CRM Integration & Extension for CAS genesisWorld",
    subtitle: "Automated CRM workflows with .NET Core, C#, and Azure DevOps for business efficiency.",
    imageSrc: "image/projectcrm.png", // Update with actual image path
    imageAlt: "CAS genesisWorld CRM Screenshot",
    description:
      "Integrated and extended the functionality of CAS genesisWorld CRM to automate workflows and enhance business operations. Developed backend modules using .NET Core and C#, built custom integrations via CAS genesisWorld APIs, and managed data operations using SQL Server. Created and deployed RESTful services and Windows Services to streamline CRM tasks. Leveraged Azure DevOps for CI/CD, version control, and team collaboration in a fast-paced environment.",
    links: [
      {
        label: "Further Documentation",
        url: "https://www.cas-crm.com/", // Replace with actual deployment/project link if needed
        icon: "🌐",
        internal: false
      },
    ],
  },

  sharedot: {
    title: "ShareDot – AI-Enhanced Content Aggregator Platform",
    subtitle: "Built with MERN Stack and AI/NLP to deliver smart, real-time content discovery.",
    imageSrc: "image/projectsharedot.png", // Update this to your actual image path
    imageAlt: "ShareDot Platform Screenshot",
    description:
      "Built ShareDot using the MERN stack to aggregate and surface trending content. Implemented an AI-powered NLP feature on the 'Ask' page to intelligently respond to user queries. Developed dynamic UI with React and Material UI, handled backend logic with Express, and integrated MongoDB for robust data handling. Ensured performance, responsiveness, and real-time delivery of curated content.",
    links: [
      {
        label: "Live Project",
        url: "https://sharedot.com/",
        icon: "🔗",
        internal: false
      }
    ],
  },

  sayrhino: {
    title: "SayRhino Web App UI Development",
    subtitle: "Developed with React and Tailwind CSS for a modern, animated, and responsive user interface.",
    imageSrc: "/image/projectrhino.png", // Update to your actual image path
    imageAlt: "SayRhino Web App Screenshot",
    description:
      "I developed the front end of the SayRhino web application using React, GSAP, Stitches, and Tailwind CSS to create a smooth, responsive, and engaging user experience. The project included advanced animations, modular components with lit-html and lit-element, and cross-browser support using core-js and Lodash. I also integrated Bootstrap 4.5.2, HeroUI, and jQuery for enhanced styling and functionality, delivering a high-performance UI that meets modern design and usability standards.",
    links: [
      {
        label: "Live Website",
        url: "https://sayrhino.com", // Replace with actual live URL if different
        icon: "🚀",
        internal: false
      }
    ]
  },

  freshtix: {
    title: "Freshtix: Advanced Event Ticketing Platform",
    subtitle: "Developed with Ruby on Rails and Bootstrap for robust ticketing, email integration, and responsive UI.",
    imageSrc: "/image/projectticketing.png", // Update with the correct image path
    imageAlt: "Freshtix Event Ticketing Platform Screenshot",
    description:
      "Developed an advanced event ticketing platform with Ruby on Rails for backend functionality. Implemented a responsive UI using Bootstrap, enhanced with JavaScript libraries like jQuery UI, Moment.js, core-js, and lit-html. Integrated email functionalities using Mailchimp for seamless communication with users. The platform supports features like online ticket sales, reserved seating, social media integration, mobile ticketing, and ticket scanning, providing a comprehensive solution for event management.",
    links: [
      {
        label: "Visit Freshtix",
        url: "https://www.freshtix.com", // Replace with live link if different
        icon: "🎟️",
        internal: false
      }
    ]
  },
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
              <FooterSection />
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
              <FooterSection />
            </>
          }
        />
        {/* Route for the projectlms page */}
        <Route
          path="/projectlms"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.ilmversity} />
              <FooterSection />
            </>
          }
        />

        <Route
          path="/projectternoa"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.ternoa} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectforiio"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.foriio} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectlegaltech"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.CDS_Convert} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectcasgenesis"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.casGenesis} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectsmartfarming"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.smartFarming} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectsharedot"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.sharedot} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectsayrhino"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.sayrhino} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectfreshtix"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.freshtix} />
              <FooterSection />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
