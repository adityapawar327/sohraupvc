import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Body.css";
import UpvcImage from "./logo/upvc.png";

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Toggle class on <body> to prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const openVideo = () => setShowModal(true);
  const closeVideo = () => setShowModal(false);

  return (
    <div className="body-section">
      <div className="body-left">
        <h1 className="body-title">
          Bringing Comfort and Clarity to Every Space
        </h1>
        <p className="body-description">
          Sohra UPVC Industries delivers world-class UPVC doors and windows,
          combining durability with elegant design. Enhance your home and office
          with our energy-efficient, secure, and stylish solutions.
        </p>
        <div className="button-row">
          <button className="learn-more-btn" onClick={() => navigate('/productsredirect')}>
            Explore Our Products
          </button>
          <button className="company-story-btn" onClick={openVideo}>
            Discover Our Story
          </button>
        </div>
      </div>
      <div className="body-right">
        <img
          src={UpvcImage}
          alt="UPVC Door and Windows"
          className="door-window-img"
        />
      </div>
      
      {/* Video Modal */}
      {showModal && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-content-container" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeVideo} aria-label="Close video">
              ✕
            </button>
            <div style={{
              padding:'56.25% 0 0 0',
              position:'relative',
              width: '100%',
              background: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
            }}>
              <iframe
                src="https://player.vimeo.com/video/1120800744?autoplay=1&title=0&byline=0&portrait=0&controls=0&sidedock=0&badge=0&background=1&muted=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px',
                }}
                title="Sohra UPVC Story"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
