import React from 'react';

function QuickActionBar() {
  const items = [
    { icon: '🌍', title: 'Global Connections', sub: 'Expand your reach worldwide' },
    { icon: '👥', title: 'Business Directory', sub: 'Find partners & opportunities' },
    { icon: '📅', title: 'Events & Meetups', sub: 'Networking & roundtables' },
    { icon: '📈', title: 'Growth Focus', sub: 'Real results, real business' },
  ];

  return (
    <div style={{
      background: 'var(--bg-white)',
      padding: '0',
      position: 'relative',
      zIndex: 10,
      marginTop: '-40px',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0',
        background: 'var(--bg-white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
      }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '28px 24px',
              cursor: 'pointer',
              borderRight: index < items.length - 1 ? '1px solid var(--border-light)' : 'none',
              transition: 'all var(--transition-smooth)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10,37,102,0.03), rgba(140,198,63,0.05))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, rgba(10,37,102,0.08), rgba(140,198,63,0.08))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div>
              <div style={{
                fontWeight: '700', fontSize: '14px', color: 'var(--secondary-color)',
                marginBottom: '2px',
              }}>{item.title}</div>
              <div style={{
                fontSize: '12px', color: 'var(--text-muted)', fontWeight: '500',
              }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActionBar;
