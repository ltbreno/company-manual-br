import React from 'react';

function TestimonialSection() {
  const benefits = [
    'Strategic networking with decision-makers',
    'Business visibility and promotion',
    'Access to exclusive events and connections',
    'Market expansion opportunities (U.S. & international)',
    'Partnerships that generate real business',
  ];

  const audience = [
    { icon: '🚀', text: 'Entrepreneurs looking to scale' },
    { icon: '🇺🇸', text: 'Companies entering the U.S. market' },
    { icon: '💰', text: 'Investors seeking opportunities' },
    { icon: '💼', text: 'Service providers and consultants' },
    { icon: '📊', text: 'Established businesses aiming for expansion' },
  ];

  return (
    <section style={{ padding: '100px 24px', background: 'var(--bg-white)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="section-title">
            Why <span style={{ color: 'var(--primary-color)' }}>Join Us</span>
          </h2>
          <p className="section-subtitle">
            Joining the Global Chamber means positioning your business for growth — not just visibility.
          </p>
          <div className="section-divider" />
        </div>

        {/* Benefits + Audience grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '64px' }}>
          {/* Benefits */}
          <div>
            <h3 style={{
              fontSize: '1.4rem', color: 'var(--secondary-color)', marginBottom: '24px',
              fontFamily: 'var(--font-display)',
            }}>Member Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', background: 'var(--bg-section-alt)',
                  borderRadius: 'var(--radius-sm)', transition: 'all var(--transition-fast)',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '14px', flexShrink: 0, fontWeight: '700',
                  }}>✓</div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-body)', fontWeight: '500' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div>
            <h3 style={{
              fontSize: '1.4rem', color: 'var(--secondary-color)', marginBottom: '24px',
              fontFamily: 'var(--font-display)',
            }}>Built For</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {audience.map((a, i) => (
                <div key={i} className="card" style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 24px',
                }}>
                  <span style={{ fontSize: '24px' }}>{a.icon}</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-body)', fontWeight: '500' }}>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiator */}
        <div style={{
          background: 'linear-gradient(135deg, #0a1628, var(--secondary-color))',
          borderRadius: 'var(--radius-lg)', padding: '56px 48px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px',
            borderRadius: '50%', border: '2px solid rgba(140,198,63,0.1)',
          }} />
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'white',
            marginBottom: '16px',
          }}>
            Why Global Chamber of Commerce?
          </h3>
          <p style={{
            fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '600px',
            margin: '0 auto 32px', lineHeight: '1.7',
          }}>
            Because we focus on results, not just connections. We don't just connect people — we create opportunities that turn into business.
          </p>
          <p style={{
            fontSize: '1.2rem', color: 'white', fontWeight: '600', marginBottom: '32px',
          }}>
            Ready to expand your business?
          </p>
          <button className="btn" style={{
            padding: '18px 48px', fontSize: '15px',
          }}>
            Become a Member Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
