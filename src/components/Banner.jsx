import React, { useEffect, useState } from "react";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Outfit:wght@200;400;600&display=swap');

        .luxury-banner {
          position: relative;
          background: #050505;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
          font-family: 'Outfit', sans-serif;
        }

        /* ── SLOW VERTICAL REVEAL ── */
        @keyframes revealSlowly {
          0% {
            opacity: 0;
            transform: translateY(80px); /* Starts further down for a longer path */
            filter: blur(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 5%;
        }

        /* Applied to all animated elements with staggered delays */
        .animate-up {
          opacity: 0;
          animation: revealSlowly 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        .premium-badge {
          font-family: 'Syncopate', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.5em;
          color: #a855f7;
          text-transform: uppercase;
          border: 1px solid rgba(168, 85, 247, 0.3);
          padding: 10px 20px;
          border-radius: 50px;
          background: rgba(168, 85, 247, 0.05);
          backdrop-filter: blur(10px);
          display: inline-block;
          margin-bottom: 50px;
          animation-delay: 0.3s;
        }

        .main-name {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(2.5rem, 8vw, 5.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1;
          margin: 0;
          text-transform: uppercase;
          background: linear-gradient(to bottom, #ffffff 40%, #666666 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation-delay: 0.6s;
        }

        .role-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.2rem, 3.2vw, 2.2rem);
          font-weight: 200;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          margin: 20px 0 40px;
          animation-delay: 0.9s;
        }

        .description-box {
          max-width: 700px;
          margin: 0 auto;
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          font-weight: 300;
          line-height: 1.8;
          color: #94a3b8;
          letter-spacing: 0.02em;
          animation-delay: 1.2s;
        }

        .luxury-cta {
          margin-top: 60px;
          display: inline-block;
          padding: 18px 45px;
          font-family: 'Syncopate', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-decoration: none;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 2px;
          transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          animation-delay: 1.5s;
        }

        .luxury-cta:hover {
          color: #000;
          background: #fff;
          letter-spacing: 0.5em;
          transform: translateY(-10px);
        }

        /* ── BACKGROUND AMBIANCE ── */
        .orb {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%);
          filter: blur(100px);
          z-index: 0;
        }
      `}</style>

      <section className="luxury-banner"      style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}>
        {/* Subtle Parallax Background Orb */}
        <div 
          className="orb" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }} 
        />
        
        <div className="content-wrapper">
          <div 
            className="premium-badge animate-up"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Available for Worldwide projects
          </div>

          <div style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: 1 - scrollY/700 }}>
            <h1 className="main-name animate-up">Mohammed Kareem</h1>
            <p className="role-title animate-up">photographer and videographer</p>
          </div>

          <div style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: 1 - scrollY/800 }}>
            <p className="description-box animate-up">
              Professional Photographer and Videographer with over <strong>3 years of experience</strong> based in <strong>Dubai</strong>. 
              Creating cinematic narratives that elevate premium brands.
            </p>

            <a href="#category" className="luxury-cta animate-up">
              VIEW WORK —
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;