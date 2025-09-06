import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt,
  faTools,
  faFire,
  faSun,
  faLeaf, 
  faVolumeMute, 
  faCloudRain, 
  faWind,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './WhyChooseSohra.css';

const features = [
  { icon: faShieldAlt, title: 'DUST RESISTANT' },
  { icon: faTools, title: 'LOW MAINTENANCE' },
  { icon: faFire, title: 'HEAT INSULATION' },
  { icon: faSun, title: 'UV PROTECTION' },
  { icon: faLeaf, title: 'ENERGY EFFICIENT' },
  { icon: faVolumeMute, title: 'NOISE INSULATION' },
  { icon: faCloudRain, title: 'RAINWATER INSULATION' },
  { icon: faWind, title: 'STORM RESISTANT' }
];

const WhyChooseShora = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsToShow(1); // Show 1 card on mobile
      } else if (window.innerWidth <= 900) {
        setItemsToShow(2); // Show 2 cards on tablet
      } else {
        setItemsToShow(4); // Show 4 cards on desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < features.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="features-benefits">
      <div className="features-benefits-box">
        <div className="section-header">
          <h2>Features & Benefits</h2>
          <p>
            Our high-performance windows add an architectural dimension to your home. Sohra Windows keep out street noise, dust, pollution, rain and gale force winds. At the same time, they are energy efficient, low maintenance, and long-lasting.
          </p>
        </div>
        
        <div className="carousel-container">
          <button 
            className={`carousel-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="features-carousel">
            <div 
              className="features-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3>{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`carousel-arrow ${currentIndex >= features.length - itemsToShow ? 'disabled' : ''}`}
            onClick={nextSlide}
            disabled={currentIndex >= features.length - itemsToShow}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseShora;