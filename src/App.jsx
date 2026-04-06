import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"; // Import the new Banner
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <div className="scroll-smooth antialiased bg-black">
        <Navbar />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <main>
                {/* 1. New Banner Section */}
                <Banner /> 

                {/* 2. Video Hero Section (with Parallax) */}
                <Hero /> 
<Category/>
                {/* 3. Other Sections */}
       
                <About />
                <Contact />
              </main>
            } 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;