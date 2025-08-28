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
import CustomImage from "./components/customimage"; // Import CustomImage component
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
    subtitle: "React, Tailwind CSS & Hero UI frontend integrated with a powerful Ruby on Rails backend.",
    imageSrc: "/image/projectrhino.png", // Update to your actual image path
    imageAlt: "SayRhino Web App Screenshot",
    description: `
    SayRhino is a modern web application combining a powerful React-based frontend with a Ruby on Rails (RoR) backend.
    I developed the UI using React, Tailwind CSS, and Hero UI to ensure a responsive and accessible user experience.
    The interface includes advanced animations via GSAP, styled components with Stitches, and modular architecture 
    using lit-html and lit-element. The RoR backend powers robust API interactions and secure business logic. 
    I also leveraged Bootstrap 4.5.2, jQuery, and Lodash for enhanced utility and cross-browser support.
    This full-stack integration delivers a high-performance, scalable, and visually compelling product.
  `,
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
  ventinove: {
    title: "Ventinove: Premium Wellness Shopify Store",
    subtitle: "Developed with Shopify using custom Liquid templates and UI enhancements to elevate brand trust and conversion.",
    imageSrc: "/image/ventinove.png", // Replace with correct image path
    imageAlt: "Ventinove Shopify Store Screenshot",
    description:
      "Built a modern, conversion-focused Shopify storefront for VENTINOVE—a premium wellness brand offering sleep and skin renewal supplements. Implemented advanced theme customization using Shopify Liquid to tailor product pages, homepage sections, and collection layouts. Enhanced the user interface with custom SCSS and Shopify metafields for dynamic content management. The store integrates multiple secure payment gateways including Shopify Payments, PayPal, and Apple Pay. Key features include an optimized mobile shopping experience, educational product storytelling, comparison tables, subscription prompts, and a frictionless checkout process.",
    links: [
      {
        label: "Visit Ventinove",
        url: "https://ventinove.co/", // Replace with actual URL if different
        icon: "🛒",
        internal: false
      }
    ]
  },
  nutriworld: {
    title: "Nutriworld: High-Performance Sports Nutrition Store",
    subtitle: "Built with Shopify using custom Liquid development, fast-loading UI, and integrated review and delivery trust markers.",
    imageSrc: "/image/nutrition.png", // Replace with the correct image path
    imageAlt: "Nutriworld Shopify Store Screenshot",
    description:
      "Developed a robust Shopify storefront for Nutriworld—a performance-driven sports nutrition brand. The store features fully customized Shopify theme development using Liquid templates, enabling dynamic product filtering, promotional banners, and custom-built landing pages for SEO campaigns. Enhanced UI using custom CSS and metafields to ensure a responsive and high-converting layout. Integrated Shopify Reviews app for social proof and customer feedback, along with trust-building elements like 'Free Shipping', 'Next-Day Delivery', and '100% Quality Guarantee' on key pages. Checkout process supports Shopify Payments, PayPal, and Google Pay, ensuring secure and fast transactions for mobile and desktop users.",
    links: [
      {
        label: "Visit Nutriworld",
        url: "https://nutriworld.com", // Replace with the actual live URL
        icon: "💪",
        internal: false
      }
    ]
  },
  fitgirl: {
    title: "FitGirl Nutrition: Bold & Feminine Wellness Store for Women",
    subtitle: "Built with Shopify, combining custom Liquid development, product bundling, and conversion-focused wellness UX.",
    imageSrc: "/image/fitgirl.png", // Replace with correct image path
    imageAlt: "FitGirl Nutrition Shopify Store Screenshot",
    description:
      "Developed a vibrant and feminine Shopify storefront for FitGirl Nutrition—offering science-backed supplements tailored for modern women. Leveraged Shopify Liquid for advanced theme customization, enabling features like personalized product bundles, dynamic badges (e.g., 'Glow Support', 'Hormone Balance'), and reusable content blocks for promotions and expert blog integration. The store highlights user trust with embedded customer testimonials, a reviews system powered by Judge.me, and educational blog content managed via Shopify's native CMS. Optimized for both mobile and desktop, the site also supports secure checkout via Shopify Payments, PayPal, and Apple Pay, with a strong focus on daily wellness journeys and clean nutrition.",
    links: [
      {
        label: "Visit FitGirl Nutrition",
        url: "https://fitgirlnutrition.com", // Replace with the actual live URL
        icon: "🌸",
        internal: false
      }
    ]
  },
  vivanmn: {
    title: "VIVANMN: UK-Based Cellular Health & NMN Supplement Store",
    subtitle: "Built with Shopify and powered by custom Liquid, Skio Subscriptions, and a bold science-first brand identity.",
    imageSrc: "/image/vivanum.png", // Replace with actual image path
    imageAlt: "VIVANMN Shopify Store Screenshot",
    description:
      "Developed a sleek, science-backed Shopify store for VIVANMN, a premium NMN supplement brand targeting longevity and cellular energy. The site was built with custom Shopify Liquid for complete control over layout and content sections, optimized for SEO and performance. Features include conversion-focused landing pages, persuasive product storytelling, and trust-building badges like 'Third-Party Tested', 'Made in the UK', and '100-Day Guarantee'. Integrated the Skio Subscriptions app to enable flexible monthly plans and increase customer retention. The store supports secure payments via Visa, MasterCard, Google Pay, Apple Pay, and American Express, offering a frictionless checkout experience. Additional enhancements include a blog-driven education strategy, embedded customer reviews, and fast free shipping labels to boost trust and engagement.",
    links: [
      {
        label: "Visit VIVANMN",
        url: "https://vivanmn.com",
        icon: "💊",
        internal: false
      }
    ]
  },
  conatural: {
    title: "Conatural: Organic Beauty & Wellness Store",
    subtitle: "Built with Shopify, featuring Liquid-based UI customization, dynamic product collections, and a powerful review engine.",
    imageSrc: "/image/conatural.png", // Replace with actual image path
    imageAlt: "Conatural Shopify Store Screenshot",
    description:
      "Built a comprehensive Shopify storefront for Conatural, Pakistan’s leading organic beauty and skincare brand. Developed using Shopify Liquid to create flexible, high-performance templates across a diverse product range—spanning skincare, cosmetics, baby care, and wellness kits. Integrated advanced customer reviews and transformation stories across products to boost trust and engagement. Enhanced the user interface with mobile-first optimizations, detailed product categorization, and dynamic landing sections like Best Sellers, Bundles, and Clearance. Trust labels such as 'Organic', 'Halal Certified', 'Paraben Free', and 'Cruelty Free' reinforce credibility. Payment integration supports Visa, MasterCard, Apple Pay, and Google Pay. Additional features include a blog-based education funnel, loyalty program integration, and robust bundle promotions tailored for repeat purchase behavior.",
    links: [
      {
        label: "Visit Conatural",
        url: "https://conaturalintl.com", // Replace with the actual final URL if needed
        icon: "🌿",
        internal: false
      }
    ]
  },
  feals: {
    title: "Feals: CBD + THC Wellness Gummies Store",
    subtitle: "Built with Shopify, featuring Liquid-based UI customization, subscription-ready product flow, and third-party verified wellness branding.",
    imageSrc: "/image/projectfeals.png", // Replace with correct image path
    imageAlt: "Feals Shopify Store Screenshot",
    description:
      "Developed a premium Shopify storefront for Feals, a U.S.-based wellness brand offering CBD + THC microdosed sleep and anxiety relief products. The site was designed for high conversion and trust-building, using custom Shopify Liquid templates for product storytelling, FAQ-rich landing pages, and interactive educational flows like the 'Take the Quiz' feature. Subscription support is seamlessly integrated to enable recurring orders for gummies, mints, and tinctures. The store highlights critical wellness features such as USDA Organic sourcing, non-GMO ingredients, and triple lab-tested certifications with Certificates of Analysis available. Payment gateways include Visa, MasterCard, American Express, and Discover. Key features include a Happiness Guarantee (30-day return policy), review-rich content, responsive design, and nationwide shipping across the U.S.",
    links: [
      {
        label: "Visit Feals",
        url: "https://feals.com/", // Confirm if this is the latest working URL
        icon: "🌿",
        internal: false
      }
    ]
  },
  mariot: {
    title: "Mariot Store: Commercial Kitchen Equipment Ecommerce",
    subtitle: "Feature-rich ecommerce platform built with WordPress, WooCommerce, Elementor, and custom theme development.",
    imageSrc: "/image/mariostore.png", // Replace with actual image path
    imageAlt: "Mariot Store WordPress WooCommerce Website Screenshot",
    description:
      "Developed Mariot Store, a robust ecommerce platform tailored for commercial kitchen equipment. The site leverages WordPress and WooCommerce with Elementor and custom CSS to deliver a visually engaging and high-conversion shopping experience. Key features include advanced catalog management with product filters, price ranges, and category segmentation, alongside support for color and size variations. Each product card is enhanced with a floating WhatsApp CTA button for instant inquiries. Secure payment integrations, real-time shipping rate calculation, and a dynamic cart/checkout system ensure a frictionless purchasing process. Customer-centric policies like easy returns and 24/7 support build trust and reliability, while the design reflects a professional and modern identity suited for the B2B kitchen equipment market.",
    links: [
      {
        label: "Visit Mariot Store",
        url: "https://mariotstore.com/", // Replace with actual live URL
        icon: "🍳",
        internal: false
      }
    ]
  },
  fabbrica: {
    title: "Fabbrica Group: Italian Restaurant Collective in Paris",
    subtitle: "Showcase website built with WordPress, featuring immersive storytelling, multiple restaurant locations, and menu highlights.",
    imageSrc: "/image/fabrica.webp", // Replace with actual image path
    imageAlt: "Fabbrica Group WordPress Website Screenshot",
    description:
      "Developed for Fabbrica Group, a collective of Italian-inspired restaurants in Paris. The site serves as a digital showcase rather than an e-commerce store, emphasizing brand storytelling and customer engagement. Built with WordPress, it features smooth scroll effects, playful animations, and location-specific pages for Montmartre, Ternes, and Saint-Georges, plus a delivery-only option in Courbevoie. Visitors can explore the 'La Storia' section, which includes detailed menu highlights under 'Cosa si mangia' and a brand philosophy page titled 'Noi'. Additional features include reservation booking, click & collect options, delivery integrations, allergen information, and legal notices. Designed as a lifestyle experience, the Fabbrica site combines Italian culture, visual storytelling, and seamless navigation to attract and engage diners.",
    links: [
      {
        label: "Visit Fabbrica Group",
        url: "https://fabbricagroup.fr",
        icon: "🍝",
        internal: false
      }
    ]
  },
  arredoDalPozzo: {
    title: "Arredo Dal Pozzo: Italian Luxury Interior Design & Ecommerce",
    subtitle: "Ecommerce platform built with WordPress, WooCommerce, Elementor, and custom theme development.",
    imageSrc: "/image/arredodalpozzo.webp", // Replace with actual image path
    imageAlt: "Arredo Dal Pozzo Online Shop Screenshot",
    description:
      "Arredo Dal Pozzo is a high-end Italian interior design and lifestyle brand offering both professional design services and an extensive online shop. Built with WordPress and WooCommerce, the platform showcases a catalog of over 800,000 designer products, including furniture, lighting, bathroom, office, and outdoor collections. Elementor and custom theme development ensure a polished, luxury brand aesthetic. Key features include brand and designer filters, ready-to-ship product listings, personalized moodboards, and a reserved area for professionals. The site also supports secure payment integrations, real-time shipping logistics, multilingual browsing, and interior design service consultations—seamlessly blending commerce and design expertise.",
    links: [
      {
        label: "Visit Arredo Dal Pozzo Shop",
        url: "https://shop.arredodalpozzo.it",
        icon: "🛋️",
        internal: false
      }
    ]
  },
  lineHotel: {
    title: "The LINE Hotel: Boutique Lifestyle Hotel Brand",
    subtitle: "Hospitality website built with WordPress, custom theme development, and booking engine integration.",
    imageSrc: "/image/thelinehotel.webp", // Replace with actual image path
    imageAlt: "The LINE Hotel Website Screenshot",
    description:
      "The LINE Hotel is a boutique hospitality brand with locations in Los Angeles, Austin, and Washington, D.C. Their website is built on WordPress with a custom-designed theme to showcase hotels, dining, and cultural programming. It integrates a booking engine for real-time availability and reservations, and uses Elementor-style layouts for flexible page creation. The site blends immersive visuals with editorial storytelling through HERE Magazine, which is managed via WordPress CMS for dynamic content updates. Key features include direct hotel bookings, curated offers, events calendar, city guides, and newsletter sign-ups. Custom theme customization ensures a design-forward aesthetic aligned with The LINE’s brand identity, while multilingual and multi-location support enables global reach. This combination of WordPress, custom development, and third-party integrations makes the site both content-rich and conversion-focused.",
    links: [
      {
        label: "Visit The LINE Hotel",
        url: "https://www.thelinehotel.com/",
        icon: "🏨",
        internal: false
      }
    ]
  },
  caesarstone: {
    title: "Caesarstone: Premium Countertops & Surface Design",
    subtitle: "Corporate ecommerce and brand experience site built with WordPress, WooCommerce, and custom visualization tools.",
    imageSrc: "image/caesarstoneus.webp", // Replace with actual image path
    imageAlt: "Caesarstone US Website Screenshot",
    description:
      "Caesarstone is a global pioneer in surface design, offering premium quartz, porcelain, and fusion surfaces for kitchens, bathrooms, and commercial interiors. The US website is built on WordPress with WooCommerce support for sample ordering and retail partner integrations, combining brand storytelling with ecommerce functionality. Visitors can browse the full surface catalog, compare colors, explore the latest ICON™ 2025 collection, and access professional resources through 'Caesarstone Studio.' Interactive visualization tools like 'View in Your Room' and sample ordering provide a hands-on digital experience for homeowners and trade professionals. Custom theme development ensures alignment with Caesarstone’s premium identity, while multilingual content, sustainability reporting, warranty details, and dealer locators reinforce trust and global reach. The site also integrates blog-style inspiration pages, design elements, and ESG highlights, making it both a sales driver and brand showcase.",
    links: [
      {
        label: "Visit Caesarstone US",
        url: "https://www.caesarstoneus.com/",
        icon: "🪨",
        internal: false
      }
    ]
  },
  handtechsolution: {
    title: "HandTech Solution: Innovative Tech Startup Services",
    subtitle: "Modern corporate website built with WordPress, SMTP integration, and interactive design.",
    imageSrc: "/image/HTS.png", // Replace with actual image path
    imageAlt: "HandTech Solution Website Screenshot",
    description:
      "HandTech Solution is a forward-thinking tech startup that provides innovative digital services with a focus on responsive design, brand identity, and customer engagement. The website is built on WordPress with full theme customization, delivering a clean and professional experience. SMTP integration ensures reliable communication through branded emails, while interactive design elements highlight the company’s modern approach. Responsive layouts and strong visual identity reinforce credibility, making the platform both service-oriented and brand-focused.",
    links: [
      {
        label: "Visit HandTech Solution",
        url: "https://handtechsolution.com/",
        icon: "💻",
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
        <Route
          path="/projectventinove"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.ventinove} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectnutriworld"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.nutriworld} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectfitgirl"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.fitgirl} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectvivanmn"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.vivanmn} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectconatural"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.conatural} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectfeals"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.feals} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectmariot"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.mariot} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectfabbrica"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.fabbrica} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectarredodalpozzo"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.arredoDalPozzo} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectlinehotel"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.lineHotel} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projectcaesarstone"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.caesarstone} />
              <FooterSection />
            </>
          }
        />
        <Route
          path="/projecthandtechsolution"
          element={
            <>
              <Navbar />
              <ProjectPage {...projects.handtechsolution} />
              <FooterSection />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
