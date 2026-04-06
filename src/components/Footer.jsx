import React from 'react';
import logoImg from '../assets/logo.png';

function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#999', padding: '40px 20px', fontSize: '12px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
        
        <div style={{ flex: 1, minWidth: '250px' }}>
          <img src={logoImg} alt="Chamber Logo" style={{ height: '90px', width: 'auto', marginBottom: '25px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Texting Policy</a>
            <a href="#">Diversity/Harassment Policy</a>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{ marginBottom: '5px' }}>1234 Generic Road, Suite 100</p>
          <p>Anytown, ST 12345</p>
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4 style={{ color: 'white', marginBottom: '10px' }}>Contact Us</h4>
          <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>123-456-7890</p>
          <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>contact@example.org</p>
        </div>

        <div style={{ flex: 1, minWidth: '150px', textAlign: 'right' }}>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', fontSize: '18px', marginBottom: '40px' }}>
            <span style={{ color: 'white', cursor: 'pointer' }}>f</span>
            <span style={{ color: 'white', cursor: 'pointer' }}>𝕏</span>
            <span style={{ color: 'white', cursor: 'pointer' }}>📷</span>
            <span style={{ color: 'white', cursor: 'pointer' }}>in</span>
          </div>
          <div>
            Powered by <span style={{ color: 'var(--primary-color)' }}>Generic Nation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
