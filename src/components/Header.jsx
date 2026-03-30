import React from 'react';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0', background: '#fff', borderBottom: '1px solid #eaeaea' }}>
      <div style={{ padding: '20px' }}>
        <img src="https://via.placeholder.com/200x60?text=LOGO+PLACEHOLDER" alt="Logo" style={{ height: '60px' }} />
      </div>
      
      <nav style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <ul style={{ display: 'flex', gap: '20px', fontWeight: 'bold', fontSize: '12px' }}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT US ▾</a></li>
          <li><a href="#">MEMBER HUB ▾</a></li>
          <li><a href="#">EVENTS ▾</a></li>
          <li><a href="#">JOIN US</a></li>
          <li><a href="#">RESOURCES ▾</a></li>
          <li><a href="#">MORE ▾</a></li>
        </ul>
      </nav>

      <div style={{ background: 'var(--secondary-color)', color: 'white', padding: '20px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
          CALL US :<br/>
          (123) 456-7890
        </div>
        <button className="btn" style={{ padding: '5px 30px', fontSize: '12px' }}>LOGIN</button>
      </div>
    </header>
  );
}

export default Header;
