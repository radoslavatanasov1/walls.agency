import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import the Privacy Policy component
import Pricing from './components/Pricing'; // Import the Pricing component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutUs />
                <Team />
                <Services />
                <Pricing /> {/* Add the Pricing component here */}

              </>
            } />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add Privacy Policy Route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
