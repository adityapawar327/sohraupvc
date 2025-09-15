import React, { useState, useEffect } from "react";
import "./Body.css";
import UpvcImage from "./logo/upvc.png";
import CompanyVideo from "./logo/sohra_video_2.mp4";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle class on <body> to prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
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
          <button className="learn-more-btn">
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
      {showModal && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-outer">
            <div className="video-modal-container">
              <button className="close-modal-btn" onClick={closeVideo}>
                &times;
              </button>
              <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                <video controls autoPlay>
                  <source src={CompanyVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
