import React, { useEffect } from 'react'; // Import useEffect
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Partners from './components/Partners'; // Import the Partners component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutUs />
              <Partners />
              <Team />
              <Services />
            </>
          } />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
