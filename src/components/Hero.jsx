import React from 'react';

function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '90vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #0d2147 40%, #132d5e 70%, #1a3a7a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.08,
        background: 'radial-gradient(circle at 20% 80%, var(--primary-color) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--accent-gold) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute', top: '-50%', right: '-20%', width: '800px', height: '800px',
        borderRadius: '50%', border: '1px solid rgba(140,198,63,0.08)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1, textAlign: 'center', color: 'white',
        maxWidth: '900px', padding: '40px 24px',
        animation: 'fadeInUp 0.8s ease-out',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(140,198,63,0.15)', border: '1px solid rgba(140,198,63,0.3)',
          borderRadius: '50px', padding: '8px 20px', marginBottom: '32px',
          fontSize: '13px', fontWeight: '600', letterSpacing: '1px',
          color: 'var(--primary-light)',
        }}>
          🌍 ORLANDO, FL — GLOBAL BUSINESS HUB
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '800', color: 'white', marginBottom: '24px',
          lineHeight: '1.1', letterSpacing: '-1px',
        }}>
          Global Chamber<br/>
          <span style={{
            background: 'linear-gradient(90deg, var(--primary-color), var(--primary-light))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>of Commerce</span>
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)', marginBottom: '16px',
          color: 'rgba(255,255,255,0.95)', fontWeight: '500', letterSpacing: '1px',
        }}>
          Connecting Businesses. Expanding Opportunities. Building Global Growth.
        </p>
        <p style={{
          fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 40px',
          color: 'rgba(255,255,255,0.65)', fontWeight: '400',
        }}>
          We are a business-driven community designed to connect entrepreneurs, investors, and companies across the United States and beyond. From Orlando to the world.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn" style={{ padding: '16px 36px', fontSize: '14px' }}>
            Become a Member
          </button>
          <button className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '14px' }}>
            Explore Opportunities
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center', marginTop: '64px',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '200+', label: 'Members' },
            { num: '15+', label: 'Countries' },
            { num: '50+', label: 'Events/Year' },
            { num: '100%', label: 'Growth Focus' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.2rem', fontWeight: '800', fontFamily: 'var(--font-display)',
                color: 'var(--primary-color)', lineHeight: '1',
              }}>{stat.num}</div>
              <div style={{
                fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.45)',
                textTransform: 'uppercase', letterSpacing: '2px', marginTop: '6px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(to top, var(--bg-light), transparent)',
      }} />
    </section>
  );
}

export default Hero;
