import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About Us', 'Members', 'Events', 'Directory', 'Join Us'];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '10px 40px' : '16px 40px',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'white',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-light)' : 'transparent'}`,
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--transition-smooth)',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logoImg}
          alt="Chamber Logo"
          style={{
            height: scrolled ? '60px' : '85px',
            width: 'auto',
            transition: 'all var(--transition-smooth)'
          }}
        />
      </div>

      {/* Nav */}
      <nav>
        <ul style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}>
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href="#"
                style={{
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  letterSpacing: '0.3px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary-color)';
                  e.target.style.background = 'var(--bg-section-alt)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-dark)';
                  e.target.style.background = 'transparent';
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="#" style={{
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--secondary-color)',
        }}>Login</a>
        <button className="btn" style={{
          padding: '10px 24px',
          fontSize: '12px',
        }}>
          Become a Member
        </button>
      </div>
    </header>
  );
}

export default Header;
