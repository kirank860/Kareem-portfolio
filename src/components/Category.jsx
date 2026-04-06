import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
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

        .categories-container {
          background: #050505;
          padding: 100px 2%;
          position: relative;
          z-index: 10;
        }

        .category-item {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 130px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-decoration: none;
          color: white;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        /* ── THE BACKGROUND IMAGE (Hidden by default) ── */
        .category-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.1);
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: -1;
          filter: brightness(0.4);
        }

        .category-item:hover .category-bg {
          opacity: 1;
          transform: scale(1);
        }

        /* ── TEXT POSITIONING ── */
        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 70%;
          position: relative;
          z-index: 2;
        }

        .category-title {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(1.5rem, 3.5vw, 3rem);
          font-weight: 500;
          text-transform: uppercase;
          margin: 0;
          transition: transform 0.5s ease;
        }

        .category-meta {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          color: #a855f7;
          text-transform: uppercase;
        }

        .category-description {
          font-family: 'Outfit', sans-serif;
          max-width: 600px;
          margin-top: 30px;
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.5s ease;
        }

        .category-item:hover .category-description {
          color: rgba(255, 255, 255, 0.9);
        }

        .category-item:hover .category-title {
          transform: translateX(20px);
        }
      `}</style>

      <div className="categories-container" id="category">
        {/* FASHION CATEGORY */}
        <Link to="/fashion" className="category-item">
          {/* Background image from your /public/Kareem/ directory */}
          <img 
            src="/Kareem/fashion.png" 
            alt="Fashion Photography" 
            className="category-bg" 
          />
          
          <div className="category-header">
            <h2 className="category-title">Fashion & Lifestyle</h2>
     
          </div>

          <p className="category-description">
            High-end editorial and lifestyle photography capturing the essence of modern style. 
            Specializing in brand narratives across the UAE.
          </p>
        </Link>

        {/* EVENTS CATEGORY */}
        <Link to="/events" className="category-item">
        <img 
            src="/Kareem/fashion.png" 
            alt="Fashion Photography" 
            className="category-bg" 
          />
          <div className="category-header">
            <h2 className="category-title">Events & Portraits</h2>
        
          </div>
          <p className="category-description">
            Candid moments and professional portraits delivered with cinematic clarity.
          </p>
        </Link>

        {/* PRODUCT CATEGORY */}
        <Link to="/product" className="category-item">
        <img 
            src="/Kareem/fashion.png" 
            alt="Fashion Photography" 
            className="category-bg" 
          />
          <div className="category-header">
            <h2 className="category-title">Product & Brand</h2>
  
          </div>
          <p className="category-description">
            Strategic visual content designed to improve brand presentation and engagement.
          </p>
        </Link>
        <Link to="/product" className="category-item">
        <img 
            src="/Kareem/fashion.png" 
            alt="Fashion Photography" 
            className="category-bg" 
          />
          <div className="category-header">
            <h2 className="category-title">Street and Architecture</h2>
  
          </div>
          <p className="category-description">
            Strategic visual content designed to improve brand presentation and engagement.
          </p>
        </Link>
        <Link to="/product" className="category-item">
        <img 
            src="/Kareem/fashion.png" 
            alt="Fashion Photography" 
            className="category-bg" 
          />
          <div className="category-header">
            <h2 className="category-title">Food and beverage</h2>
  
          </div>
          <p className="category-description">
            Strategic visual content designed to improve brand presentation and engagement.
          </p>
        </Link>
      </div>
    </>
  );
};

export default Category;