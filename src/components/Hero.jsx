import React from 'react';

function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '500px', background: 'url(https://via.placeholder.com/1920x600?text=Hero+Image+Collage) center/cover no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '40px', borderRadius: '10px', textAlign: 'center', color: 'white', width: '80%', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'white' }}>Organization Name</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Organization sub-headline or tagline description goes here.</p>
        
        <div style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '20px', borderRadius: '5px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'white', marginBottom: '5px' }}>Main Event Name</h3>
            <p style={{ fontSize: '14px' }}>Purchase Tickets Here</p>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>00</div>
              <div style={{ fontSize: '12px' }}>Days</div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>:</div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>00</div>
              <div style={{ fontSize: '12px' }}>Hours</div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>:</div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>00</div>
              <div style={{ fontSize: '12px' }}>Minutes</div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>:</div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>00</div>
              <div style={{ fontSize: '12px' }}>Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
