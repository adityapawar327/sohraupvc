import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import upvcImg from "./logo/upvc.png"; // ✅ correct relative path

export default function AboutUs() {
  const [showVideo, setShowVideo] = useState(false);

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "#fff", // solid background
          color: "#1788c7",
          minHeight: "100vh",
          padding: "80px 20px",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3rem)", // ✅ responsive font size
            marginBottom: "60px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          About Sohra UPVC Industries
        </motion.h1>

        {/* Intro Section with Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // ✅ responsive grid
            alignItems: "center",
            gap: "40px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "black",
                marginBottom: "20px",
              }}
            >
              Sohra UPVC Industries is a trusted name in the field of UPVC doors
              and windows. With a strong commitment to quality and innovation,
              we specialize in providing durable, stylish, and energy-efficient
              solutions for residential and commercial spaces.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "black",
              }}
            >
              Our mission is to enhance comfort, safety, and aesthetics while
              ensuring long-term performance, making every space more secure and
              beautiful.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div style={{ textAlign: "center" }}>
            <motion.img
              src={upvcImg}
              alt="UPVC Windows"
              style={{
                width: "100%",
                maxWidth: "500px", // ✅ responsive image
                borderRadius: "12px",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>

        {/* Discover Our Story Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            maxWidth: "1200px",
            margin: "60px auto",
            textAlign: "center",
          }}
        >
          <motion.button
            onClick={() => setShowVideo(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              padding: "15px 30px",
              backgroundColor: "#1788c7",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontWeight: "bold",
            }}
          >
            Discover Our Story
          </motion.button>
        </motion.div>

        {/* Video Modal */}
        {showVideo && (
          <div className="video-modal" onClick={handleCloseVideo}>
            <div className="video-modal-outer">
              <div className="video-modal-container">
                <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                  <button className="close-modal-btn" onClick={handleCloseVideo}>
                    ×
                  </button>
                  <div style={{
                    padding:'56.25% 0 0 0',
                    position:'relative',
                    maxWidth: '900px',
                    margin: '0 auto',
                    width: '100%',
                  }}>
                    <iframe
                      src="https://player.vimeo.com/video/1120800744?autoplay=1&title=0&byline=0&portrait=0&controls=0&sidedock=0&badge=0&background=1&muted=0"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Sohra UPVC Industries Story"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mission, Vision, Values Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", // ✅ responsive cards
            gap: "30px",
            marginTop: "80px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            {
              title: "Our Mission",
              text: "To deliver high-quality UPVC products that combine strength, beauty, and functionality. We aim to make every space more comfortable, secure, and energy-efficient with our modern solutions.",
            },
            {
              title: "Our Vision",
              text: "To be a leading provider of UPVC doors and windows across the region by setting benchmarks in innovation, customer satisfaction, and sustainable solutions.",
            },
            {
              title: "Our Values",
              text: (
                <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
                  <li>Quality – Never compromise on product quality.</li>
                  <li>Customer Focus – Customer satisfaction first.</li>
                  <li>Innovation – Bringing new designs & technologies.</li>
                  <li>Sustainability – Eco-friendly, energy-saving solutions.</li>
                </ul>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                background: "rgba(255, 255, 255, 0.54)", // white cards
                color: "black",
                padding: "30px",
                borderRadius: "16px",
                border: "2px solid #fff",
              }}
            >
              <h2
                style={{
                  marginBottom: "15px",
                  color: "#1788c7",
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)", // ✅ responsive heading
                }}
              >
                {item.title}
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
