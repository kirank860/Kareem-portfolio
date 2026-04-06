import React from "react";

const Contact = () => {
  return (
    <>
      {/* ── FONT AWESOME CDN ── */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@100;300;400;600&display=swap');

        .contact-container {
          background: #000;
          color: #fff;
          padding: 100px 8% 40px 8%;
          position: relative;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-wrapper {
          width: 100%;
          max-width: 1200px;
        }

        /* ── LEFT-ALIGNED LABEL ── */
        .cta-label {
            font-family: 'Syncopate', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 2.2rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a855f7;
          margin-bottom: 30px;
          display: block;
          text-align: left; /* Explicitly kept left */
        }

        /* ── CENTER-ALIGNED ICONS ── */
        .social-icons {
          display: flex;
          justify-content: center; /* This centers the icons horizontally */
          gap: clamp(25px, 5vw, 50px);
          margin-bottom: 80px;
          width: 100%;
        }

        .social-icon {
          color: #fff;
          font-size: 1.6rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0.5;
          text-decoration: none;
        }

        .social-icon:hover {
          color: #a855f7;
          opacity: 1;
          transform: translateY(-8px) scale(1.1);
        }

        /* ── BOTTOM CREDITS ── */
        .copyright-area {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 30px;
        }

        @media (max-width: 768px) {
          .contact-container { padding: 60px 5% 30px 5%; }
          .copyright-area { 
            flex-direction: column; 
            gap: 15px; 
            align-items: center; 
            text-align: center;
          }
          .cta-label { text-align: center; } /* Centers label on mobile for better balance */
        }
      `}</style>

      <section id="contact" className="contact-container">
        <div className="contact-wrapper">
          <span className="cta-label">Contact</span>
          
          <div className="social-icons">
          <a href="mailto:kareembuflyzz@gmail.com" className="social-icon" title="Email">
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a href="https://wa.me/971544572471" target="_blank" rel="noreferrer" className="social-icon" title="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://linkedin.com/in/mohammed-kareem" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
    
          </div>
        </div>

        <div className="copyright-area">
          <span>© 2026 Mohammed Kareem </span>
          <span>Dubai • United Arab Emirates </span>
        </div>
      </section>
    </>
  );
};

export default Contact;