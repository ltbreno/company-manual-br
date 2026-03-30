import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickActionBar from './components/QuickActionBar';
import WelcomeSection from './components/WelcomeSection';
import TestimonialSection from './components/TestimonialSection';
import NewsSection from './components/NewsSection';
import SponsorsFooter from './components/SponsorsFooter';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <QuickActionBar />
      <WelcomeSection />
      <TestimonialSection />
      
      {/* Banner Ad Placeholder */}
      <div className="container" style={{ margin: '40px auto', textAlign: 'center' }}>
        <div style={{ background: '#eee', padding: '10px', display: 'inline-block', border: '1px solid #ccc' }}>
          <img src="https://via.placeholder.com/800x90?text=Banner+Ad" alt="Banner Ad" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <NewsSection />
      <SponsorsFooter />
      <Footer />
    </div>
  );
}

export default App;
