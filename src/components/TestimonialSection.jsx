import React from 'react';

function TestimonialSection() {
  return (
    <section className="container" style={{ margin: '40px auto', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
      <div style={{ flex: 1, position: 'relative', background: '#333', borderRadius: '5px', overflow: 'hidden', minHeight: '300px' }}>
        <img 
          src="https://via.placeholder.com/600x400?text=Video+Thumbnail" 
          alt="Video Thumbnail" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255,0,0,0.8)', padding: '15px 20px', borderRadius: '50%', cursor: 'pointer' }}>
          ▶
        </div>
        <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '10px' }}>
          <img src="https://via.placeholder.com/40" style={{ borderRadius: '50%' }} alt="Avatar" />
          <div style={{ fontWeight: 'bold' }}>Member Testimonial Name</div>
        </div>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', background: 'white' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #ddd', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-color)', fontWeight: 'bold' }}>
            We Champion Your Business Growth <span>﹀</span>
          </div>
          <div style={{ padding: '20px', borderBottom: '1px solid #ddd', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-color)', fontWeight: 'bold' }}>
            Why Join the Organization? <span>﹀</span>
          </div>
          <div style={{ padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-color)', fontWeight: 'bold' }}>
            Let's Start the Conversation <span>﹀</span>
          </div>
        </div>
        
        <button className="btn" style={{ width: '100%', padding: '20px', fontSize: '1.2rem' }}>
          Click Here To Become a Member
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;
