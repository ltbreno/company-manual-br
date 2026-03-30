import React from 'react';

function WelcomeSection() {
  return (
    <section style={{ padding: '100px 24px', background: 'var(--bg-white)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="section-title">
            About <span style={{ color: 'var(--primary-color)' }}>Us</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Main content */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px',
          alignItems: 'center', marginBottom: '80px',
        }}>
          {/* Left - Text */}
          <div>
            <p style={{
              fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: '1.9',
              marginBottom: '24px',
            }}>
              The Global Chamber of Commerce was created to empower businesses that are ready to grow beyond borders.
            </p>
            <p style={{
              fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.9',
              marginBottom: '24px',
            }}>
              We are more than a traditional chamber. We are a platform for strategic connections, business expansion, market opportunities, and international partnerships.
            </p>
            <p style={{
              fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.9',
              marginBottom: '32px',
            }}>
              Based in Orlando — one of the most dynamic business hubs in the United States — we connect local and global entrepreneurs who are looking for real growth, not just visibility.
            </p>
            <div style={{
              borderLeft: '4px solid var(--primary-color)',
              paddingLeft: '20px',
              background: 'linear-gradient(90deg, rgba(140,198,63,0.06), transparent)',
              padding: '20px 20px 20px 24px',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            }}>
              <p style={{
                fontSize: '1.15rem', fontWeight: '600', fontStyle: 'italic',
                color: 'var(--secondary-color)', lineHeight: '1.6',
              }}>
                "Our mission is simple: Turn relationships into business opportunities."
              </p>
            </div>
          </div>

          {/* Right - Feature pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '🤝', title: 'Strategic Connections', desc: 'Access to a curated network of decision-makers and entrepreneurs.' },
              { icon: '🚀', title: 'Business Expansion', desc: 'Support and resources for scaling into the U.S. and global markets.' },
              { icon: '💡', title: 'Market Opportunities', desc: 'Real leads and partnerships that drive measurable growth.' },
              { icon: '🌐', title: 'International Partnerships', desc: 'Cross-border collaboration with companies worldwide.' },
            ].map((f, i) => (
              <div key={i} className="card" style={{
                padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, rgba(10,37,102,0.08), rgba(140,198,63,0.08))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '4px', color: 'var(--secondary-color)' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px',
        }}>
          {[
            {
              title: 'Mission',
              text: 'To connect businesses and create real opportunities for growth through strategic relationships and global access.',
              gradient: 'linear-gradient(135deg, var(--secondary-color), var(--secondary-light))',
            },
            {
              title: 'Vision',
              text: 'To become a leading international business hub connecting companies across the U.S. and global markets.',
              gradient: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: item.gradient, padding: '48px 40px', borderRadius: 'var(--radius-lg)',
              color: 'white', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px',
                borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'white',
                marginBottom: '16px',
              }}>{item.title}</h3>
              <p style={{
                fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.9)',
              }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
