import React from 'react';

function SponsorsFooter() {
  const SponsorLogo = ({ text, width = '150px' }) => (
    <div style={{ padding: '0 20px' }}>
      <img src={`https://via.placeholder.com/${width}x60?text=${text}`} alt="Sponsor" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
    </div>
  );

  return (
    <>
      <section className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '10px', textAlign: 'left' }}>Presidents Circle</h3>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
          <SponsorLogo text="Sponsor+1" />
          <SponsorLogo text="Sponsor+2" />
          <SponsorLogo text="Sponsor+3" />
          <SponsorLogo text="Sponsor+4" />
          <SponsorLogo text="Sponsor+5" />
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '10px', textAlign: 'left' }}>Trustees</h3>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <SponsorLogo text="Trustee+1" />
          <SponsorLogo text="Trustee+2" />
          <SponsorLogo text="Trustee+3" />
          <SponsorLogo text="Trustee+4" />
          <SponsorLogo text="Trustee+5" />
          <SponsorLogo text="Trustee+6" />
        </div>
      </section>

      <div style={{ background: '#333', padding: '60px 20px', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '40px', color: 'white' }}>Diamond <span style={{ color: 'var(--primary-color)' }}>Members</span></h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', rowGap: '40px' }}>
            {[1,2,3,4,5,6,7,8,9,10,11].map(i => (
              <SponsorLogo key={i} text={`Diamond+${i}`} width="120px" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorsFooter;
