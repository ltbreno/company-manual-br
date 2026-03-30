import React from 'react';

function QuickActionBar() {
  const items = [
    { icon: 'ℹ️', title: 'Bringing Local Back', sub: 'Everything in One Place' },
    { icon: '👥', title: 'Business Directory', sub: 'Search for Businesses' },
    { icon: '📅', title: 'Events Calendar', sub: 'View Upcoming Events' },
    { icon: '🤝', title: 'Job Board', sub: 'Find Opportunities' },
  ];

  return (
    <div style={{ background: 'var(--secondary-color)', color: 'white', padding: '15px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, justifyContent: 'center', borderRight: index < items.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActionBar;
