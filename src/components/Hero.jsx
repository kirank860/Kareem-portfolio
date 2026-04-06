import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        body {
          margin: 0;
          padding: 0;
        }

        .parallax-wrapper {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .video-sticky-container {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          z-index: 0;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
          text-align: center;
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 10vw, 7rem);
          color: white;
          letter-spacing: 0.2em;
        }

        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: white;
          letter-spacing: 0.5em;
          margin-top: 10px;
        }

        .main-content-area {
          position: relative;
          z-index: 10;
          background: white;
        }

        .summary-section {
          display: flex;
          justify-content: space-between;
          padding: 100px 8%;
          gap: 40px;
        }

        .summary-left {
          flex: 1;
        }

        .summary-label {
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          color: #a855f7;
        }

        .summary-text {
          font-size: 1.3rem;
          line-height: 1.7;
        }

        .custom-photo-perspective {
          flex: 2;
          position: relative;
          height: 500px;
          perspective: 1200px;
        }

        .custom-photo-card {
          position: absolute;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .custom-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cp-1 {
          width: 180px;
          height: 320px;
          left: 5%;
          top: 0;
        }

        .cp-2 {
          width: 220px;
          height: 420px;
          left: 35%;
          top: 40px;
        }

        .cp-3 {
          width: 180px;
          height: 350px;
          left: 70%;
          top: 100px;
        }

        .categories-section {
          padding: 100px 8%;
        }

        .category-item {
          display: flex;
          justify-content: space-between;
          padding: 40px 0;
          border-bottom: 1px solid #ddd;
          text-decoration: none;
          color: black;
          transition: 0.3s;
        }

        .category-item:hover {
          padding-left: 20px;
        }

        .category-title {
          font-size: 2rem;
        }
      `}</style>

      <section>
        {/* HERO PARALLAX */}
        <div className="parallax-wrapper">
          <div className="video-sticky-container" >
            <video
            
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
          
            >
              <source src="Kareem/song.mp4"  type="video/mp4" />
            </video>
            <div className="hero-overlay" />
          </div>

          <div
            className="hero-content-overlay"
       
          >
            {/* <h1 className="hero-name">Kiran Lens</h1> */}
            {/* <p className="hero-subtitle">Visual Content Creator</p> */}
          </div>
        </div>

      
      </section>
    </>
  );
};

export default Hero;