import React, { useState } from 'react';
import fernandoImg from '../assets/fernando.jpeg';
import carlosImg from '../assets/FotoX.png';
import calebImg from '../assets/caleb.jpeg';
import ceciliaImg from '../assets/cecilia.jpeg';
import rodrigoImg from '../assets/rodrigo.png';

const leaders = [
  {
    name: 'Fernando Nascimento dos Santos',
    role: 'President',
    image: fernandoImg,
    bio: [
      'Fernando Nascimento is a Brazilian entrepreneur and business strategist with over 20 years of experience in business expansion, franchising, and international market development, with a track record of contributing to the growth and scaling of business networks in Brazil and in international contexts.',
      'Throughout his career, he has supported the expansion of recognized brands such as Chilli Beans and Herbalife International, leading initiatives focused on scalability, leadership development, and operational structuring.',
      'Currently based in Florida (USA), Fernando maintains a strategic role focused on market connectivity and the strengthening of business relationships between Brazil, Europe, and the United States.',
      'He is the founder of OnBridge Group in Brazil and the creator of the ChangeLives Movement (MCL) and the EES Method – Sustainable Expansion Ecosystem.',
      'As President, he is committed to strengthening institutional relationships and advancing sustainable growth across global markets.',
    ],
  },
  {
    name: 'Carlos A. Porfirio Paz Junior',
    role: 'Vice President',
    image: carlosImg,
    bio: [
      'A Brazilian Attorney with over 15 years of experience, Carlos Junior holds a Post-Graduate degree in Administrative Law and a Bachelor\'s in Business Administration. His distinguished career in Brazil includes serving as Municipal Secretary of Administration, Personnel Management, and Finance.',
      'Living in the United States for nearly 10 years, he enhanced his expertise with a U.S. Public Policy certification from Harvard. Carlos built a solid American career path, currently serving as a Business Development Specialist at the renowned law firm Bogin, Munns & Munns.',
      'His deep connection to the business community is further evidenced by his tenure as a member of the Central Florida Brazilian American Chamber of Commerce.',
      'A devout Christian and a musician in his spare time, Carlos brings to the Chamber\'s Vice Presidency the loyalty, determination, and pursuit of excellence that define his life.',
    ],
  },
  {
    name: 'Caleb Flugum',
    role: 'Advisory Board',
    image: calebImg,
    bio: [
      'Caleb Flugum is a results-driven business professional with over 15 years of experience in a family-owned business, where he has played a key role in sustaining growth, strengthening operations, and building long-term client relationships. His background in real estate and lending equips him with an understanding of market dynamics, financing strategies, and value-driven decision-making.',
      'With a global perspective shaped by international travel and hands-on mission work, Caleb brings cultural awareness, adaptability, and a people-first mindset to his professional endeavors. He is equally passionate about leadership beyond the workplace, actively coaching sports and mentoring individuals to develop discipline, confidence, and a competitive edge.',
      'Caleb is recognized for his integrity, strategic thinking, and ability to execute with focus and consistency. He thrives in environments that demand leadership, accountability, and vision, and is committed to creating meaningful impact across business, community, and personal development.',
    ],
  },
  {
    name: 'Cecilia Alvarez',
    role: 'Board of Governors',
    image: ceciliaImg,
    bio: [
      'Cecilia Alvarez is an accomplished education leader and business professional with over a decade of experience in operations, strategic growth, and team leadership. She is the Founder of Fiorella Preparatory School, where she has successfully built and managed a thriving educational institution from the ground up, overseeing all aspects of development, curriculum implementation, and daily operations.',
      'With a strong background in sales, marketing, and financial management, Cecilia has a proven track record of driving revenue growth, developing high-performing teams, and creating impactful business strategies. Prior to her work in education, she held leadership roles in staffing and media organizations, where she consistently exceeded performance goals and led multi-market operations.',
      'Cecilia holds a Bachelor of Science in Psychology from Florida International University and is fluent in both English and Spanish and a beginner in Portuguese. She is passionate about education, community engagement, and empowering future generations through high-quality learning environments.',
      'Her extensive background in thought leadership includes serving with the Greater Miami Chamber of Commerce (2007–2014) on the GMCC HYPE Committee and as a member of the Board of Governors (2013–2014).',
    ],
  },
  {
    name: 'Rodrigo Moreira',
    role: 'Director of Marketing',
    image: rodrigoImg,
    bio: [
      'Rodrigo Moreira is a marketing strategist and international business consultant with over 18 years of experience in franchising, brand expansion, and market development across Brazil and the United States.',
      'Throughout his career, Rodrigo has contributed to the expansion of major education and franchise brands, including his work with Pearson and its portfolio in Brazil. He has supported the negotiation of more than 1,000 franchise units and worked with over 10 brands in structuring and developing franchise models, helping businesses become scalable and ready for growth.',
      'He currently focuses on international expansion, connecting companies and investors between Brazil and the U.S., with expertise in marketing strategy, sales intelligence, and business development.',
      'Rodrigo also served as a university professor in Brazil for over four years, teaching marketing and business administration. He holds a Bachelor’s degree in Business Administration with a focus on Marketing and an MBA in Business Management from INPG, as well as an MBA in Neuromarketing from UNYLEYA.',
      'As Director of Marketing, Rodrigo brings a results-driven approach to strengthen business connections and support the growth of the Chamber’s network.',
    ],
  },
];

function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = (index) => {
    if (index === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 300);
  };

  const leader = leaders[activeIndex];

  return (
    <section style={{ padding: '100px 24px', background: 'var(--bg-section-alt)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="section-title">
            Our <span style={{ color: 'var(--primary-color)' }}>Leadership</span>
          </h2>
          <p className="section-subtitle">Meet the visionaries driving global business forward.</p>
          <div className="section-divider" />
        </div>

        <div style={{
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {/* Photo */}
          <div style={{ flex: '0 0 340px', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px',
              borderRadius: 'var(--radius-lg)', border: '2px solid var(--primary-color)',
              opacity: 0.3,
            }} />
            <img
              src={leader.image}
              alt={leader.name}
              style={{
                width: '100%', borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xl)', objectFit: 'cover',
                position: 'relative', zIndex: 1,
              }}
            />
            {/* Role badge */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px', zIndex: 2,
              background: 'linear-gradient(135deg, var(--secondary-color), var(--secondary-light))',
              color: 'white', padding: '8px 20px', borderRadius: '50px',
              fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px',
              boxShadow: 'var(--shadow-md)',
            }}>
              {leader.role}
            </div>
          </div>

          {/* Bio */}
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              color: 'var(--secondary-color)', marginBottom: '24px', lineHeight: '1.2',
            }}>{leader.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {leader.bio.map((paragraph, i) => (
                <p key={i} style={{
                  fontSize: '1rem', color: 'var(--text-body)', lineHeight: '1.8',
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '48px',
        }}>
          <button
            onClick={() => goTo(activeIndex === 0 ? leaders.length - 1 : activeIndex - 1)}
            style={{
              background: 'var(--bg-white)', color: 'var(--secondary-color)', border: '1px solid var(--border-light)',
              borderRadius: '50%', width: '48px', height: '48px', fontSize: '1.4rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => { e.target.style.background = 'var(--secondary-color)'; e.target.style.color = 'white'; }}
            onMouseLeave={(e) => { e.target.style.background = 'var(--bg-white)'; e.target.style.color = 'var(--secondary-color)'; }}
          >‹</button>

          {leaders.map((l, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === activeIndex ? '36px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: i === activeIndex
                  ? 'linear-gradient(90deg, var(--primary-color), var(--primary-dark))'
                  : 'var(--border-light)',
                border: 'none', cursor: 'pointer',
                transition: 'all var(--transition-smooth)',
              }}
            />
          ))}

          <button
            onClick={() => goTo(activeIndex === leaders.length - 1 ? 0 : activeIndex + 1)}
            style={{
              background: 'var(--bg-white)', color: 'var(--secondary-color)', border: '1px solid var(--border-light)',
              borderRadius: '50%', width: '48px', height: '48px', fontSize: '1.4rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all var(--transition-fast)', boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => { e.target.style.background = 'var(--secondary-color)'; e.target.style.color = 'white'; }}
            onMouseLeave={(e) => { e.target.style.background = 'var(--bg-white)'; e.target.style.color = 'var(--secondary-color)'; }}
          >›</button>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
