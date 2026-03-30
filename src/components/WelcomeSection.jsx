import React from 'react';

function WelcomeSection() {
  return (
    <section className="container" style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--secondary-color)', textTransform: 'uppercase' }}>
        WELCOME TO THE <span style={{ color: 'var(--primary-color)' }}>ORGANIZATION NAME</span>!
      </h2>
      <p style={{ marginBottom: '40px', fontSize: '1.1rem', color: '#555' }}>
        The Organization represents the powerful high-technology and state of the art business corridor. 
        The mission is to be a leader in business advocacy, community engagement and regional connectivity. 
        We help to create a positive business climate in the region through leadership development, 
        community involvement, networking opportunities, educational programs and more!
      </p>

      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--secondary-color)' }}>
        OUR WHY IS <span style={{ color: 'var(--primary-color)' }}>YOU</span>
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        As a member of <strong>Organization Name</strong>, your business stands to gain substantial benefits through our cutting-edge website platform. 
        This translates to an expanded reach of potential customers, heightened brand visibility, and a measurable boost to business exposure.
      </p>
    </section>
  );
}

export default WelcomeSection;
