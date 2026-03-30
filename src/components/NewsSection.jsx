import React from 'react';

function NewsSection() {
  const Card = ({ title, bgColor, contentHeight = '300px' }) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h3 style={{ textAlign: 'center', color: '#555', borderBottom: '1px dashed #ccc', paddingBottom: '15px' }}>{title}</h3>
      <div style={{ background: bgColor, borderRadius: '5px', minHeight: contentHeight, padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.9)', padding: '10px', fontSize: '12px', borderRadius: '3px', fontWeight: 'bold' }}>
            Generic Name {i}<br/>
            <span style={{ fontWeight: 'normal', color: '#666' }}>Location info</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container" style={{ margin: '60px auto', display: 'flex', gap: '30px' }}>
      <Card title="Newest Members" bgColor="var(--secondary-color)" />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h3 style={{ textAlign: 'center', color: '#555', borderBottom: '1px dashed #ccc', paddingBottom: '15px' }}>Directory & Events</h3>
        <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', flex: 1 }}>
          <div style={{ flex: 1, border: '1px solid #eee', padding: '20px', background: 'white', borderRadius: '5px' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '10px', color: 'var(--secondary-color)' }}>BUSINESS DIRECTORY</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>
              Explore our business directory and connect with companies across multiple industries. Find partners, suppliers, and opportunities — all in one place.
            </p>
            <a href="#" style={{ fontSize: '14px', color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>👉 View Directory</a>
          </div>
          <div style={{ flex: 1, border: '1px solid #eee', padding: '20px', background: 'white', borderRadius: '5px' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '10px', color: 'var(--secondary-color)' }}>EVENTS</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px', lineHeight: '1.5' }}>
              We create opportunities for connection and growth through:
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '14px', color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
              <li>Networking events</li>
              <li>Business meetups</li>
              <li>Strategic roundtables</li>
              <li>International business sessions</li>
            </ul>
          </div>
        </div>
      </div>

      <Card title="Renewed Members" bgColor="var(--primary-color)" />
    </section>
  );
}

export default NewsSection;
