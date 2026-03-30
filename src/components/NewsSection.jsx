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
        <h3 style={{ textAlign: 'center', color: '#555', borderBottom: '1px dashed #ccc', paddingBottom: '15px' }}>Latest News & Updates</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1, border: '1px solid #eee', padding: '20px', background: 'white' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>COMING SOON -</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>A Look Back at Our Journey</p>
            <a href="#" style={{ fontSize: '12px', color: '#888' }}>Read More →</a>
          </div>
          <div style={{ flex: 1, border: '1px solid #eee', padding: '20px', background: 'white' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>What's Next?</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>Be the first to know, Be the first to grow.</p>
            <a href="#" style={{ fontSize: '12px', color: '#888' }}>Read More →</a>
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150x80?text=Sponsor+Badge" alt="Sponsor" />
        </div>
      </div>

      <Card title="Renewed Members" bgColor="var(--primary-color)" />
    </section>
  );
}

export default NewsSection;
