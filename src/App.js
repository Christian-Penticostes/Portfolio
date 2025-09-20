import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import up from './assets/up.png';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={scrollToTop} style={{position: 'fixed', bottom: '20px', right: '20px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#343434', color: 'white', border: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease', zIndex: 1000, display: isVisible ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center',}}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#434343';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#343434';
        e.target.style.transform = 'scale(1)';
      }}
    >
      <img src={up} alt="Back to top" style={{ width: '22px', height: '22px', filter: 'brightness(0) invert(1)',}}/>
    </button>
  );
};

const ScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); 
      }
      navigate(location.pathname, { replace: true, state: {} });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state?.scrollTo, navigate]);

  useEffect(() => {
    const handlePageLoad = () => {
      if (location.pathname === '/Portfolio' && location.state?.scrollTo) {
        navigate('/Portfolio', { replace: true });
      }
    };
    window.addEventListener('load', handlePageLoad);
    
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, [location.pathname, location.state?.scrollTo, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToSection />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/Projects" element={<Projects />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;