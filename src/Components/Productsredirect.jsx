import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { 
  faEye,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Products.css';

// Corrected import paths based on your directory structure
import CasementWindow from './logo/upvc products/upvc products/one.jpg';
import SlidingWindow from './logo/upvc products/upvc products/two.jpg';
import FrenchDoor from './logo/upvc products/upvc products/three.jpg';
import SlidingDoor from './logo/upvc products/upvc products/four.jpg';
import BifoldDoor from './logo/upvc products/upvc products/five.jpg';
import TiltTurnWindow from './logo/upvc products/upvc products/upvc sliding door.jpg';

const productsData = {
  
  windows: [
    {
      id: 1,
      name: 'UPVC Casement Windows',
      description: 'Our premium UPVC casement windows combine traditional aesthetics with modern technology. Featuring outward-opening sashes that pivot on vertical hinges, these windows offer exceptional ventilation control and easy cleaning access. Built with multi-chambered UPVC profiles and high-performance glazing, they deliver superior energy efficiency and noise reduction. The robust locking mechanisms ensure enhanced security while the weather-sealed design provides excellent protection against harsh weather conditions.',
      detailedDescription: 'These casement windows are engineered for maximum performance and durability. The precision-manufactured UPVC frames resist warping, rotting, and fading, ensuring long-lasting beauty and functionality. With customizable grid patterns and hardware finishes, they seamlessly blend with any architectural style. The advanced sealing system prevents air and water infiltration, while the double or triple glazing options provide excellent thermal insulation, reducing energy costs year-round.',
      features: [
        'Multi-Point Locking System with anti-lift pins for enhanced security',
        'Energy Efficient Double/Triple Glazing with Low-E coating',
        'Weather Strip Sealing with advanced EPDM gaskets',
        'Easy Maintenance with self-cleaning glass options',
        'Customizable grille patterns and hardware finishes',
        'Superior sound insulation up to 40dB reduction',
        'UV-resistant UPVC material with fade-proof colors',
        'Smooth operation with high-quality European hinges'
      ],
      image: CasementWindow,
      price: 'Starting from ₹8,500',
      category: 'windows'
    },
    {
      id: 2,
      name: 'UPVC Sliding Windows',
      description: 'Space-efficient sliding windows that maximize your view while minimizing space requirements. These horizontally sliding windows feature smooth roller systems and expansive glass areas that flood your spaces with natural light. Perfect for modern homes and apartments, they offer excellent functionality without requiring clearance space for opening. The sleek design and slim profiles create an unobstructed view of the outdoors while maintaining superior weather protection and energy efficiency.',
      detailedDescription: 'Our sliding windows incorporate advanced engineering with precision-balanced sashes that glide effortlessly on premium roller tracks. The integrated drainage system prevents water accumulation, while the multi-point locking ensures security. These windows are ideal for areas with limited space, such as near walkways, patios, or where furniture placement restricts traditional opening windows. The large glass panels create a seamless connection with outdoor spaces.',
      features: [
        'Smooth Roller System with maintenance-free ball bearings',
        'Space Saving Design requiring zero clearance for operation',
        'Large Glass Panels maximizing natural light and views',
        'Mosquito Net Compatible with integrated fixing channels',
        'Anti-lift security blocks preventing unauthorized removal',
        'Thermal break technology for energy efficiency',
        'Water drainage system preventing moisture buildup',
        'Slim sightlines for contemporary aesthetics'
      ],
      image: SlidingWindow,
      price: 'Starting from ₹7,200',
      category: 'windows'
    },
    {
      id: 3,
      name: 'UPVC Tilt & Turn Windows',
      description: 'Revolutionary European-style windows offering dual functionality in a single unit. These innovative windows can tilt inward from the top for secure ventilation or turn completely inward like a door for full opening and easy cleaning. The versatile operation makes them perfect for upper floors, child-safe ventilation, and maximum cleaning convenience. With superior sealing technology and robust construction, they provide excellent thermal performance and security.',
      detailedDescription: 'The tilt and turn mechanism represents the pinnacle of window engineering, offering unmatched versatility and performance. In tilt position, the window opens 6-8 inches from the top, providing excellent ventilation while maintaining security and weather protection. In turn position, the entire sash swings inward, allowing complete access for cleaning and maximum ventilation. The sophisticated hardware system ensures smooth operation and long-term durability.',
      features: [
        'Dual Opening Function with tilt and turn operations',
        'Enhanced Security with multi-point locking in both positions',
        'Superior Air Sealing with continuous gasket system',
        'Easy Interior Cleaning with full inward opening capability',
        'Child-Safe Ventilation with secure tilt position',
        'European-grade hardware with 20,000+ operation cycles',
        'Exceptional weather performance in all conditions',
        'Flexible ventilation control for optimal comfort'
      ],
      image: TiltTurnWindow,
      price: 'Starting from ₹12,000',
      category: 'windows'
    }
  ],
  doors: [
    {
      id: 4,
      name: 'UPVC French Doors',
      description: 'Elegant French doors that create a seamless transition between indoor and outdoor living spaces. Featuring floor-to-ceiling glass panels in a classic double-door configuration, these doors maximize natural light while providing wide, unobstructed access to patios, gardens, or balconies. The sophisticated design combines traditional European styling with modern UPVC technology, offering superior energy efficiency, security, and weather resistance.',
      detailedDescription: 'Our French doors embody timeless elegance with contemporary performance. The symmetrical double-door design creates a grand entrance that enhances both interior and exterior aesthetics. Premium multi-point locking systems ensure security, while advanced weatherstripping provides excellent insulation. Available with various glazing options including decorative patterns, these doors can be customized to complement any architectural style from traditional to modern.',
      features: [
        'Full Glass Panels extending from floor to ceiling',
        'Classic European Design with authentic proportions',
        'Maximum Natural Light penetration throughout the day',
        'Wide Opening Space creating expansive access',
        'Multi-point locking system across both door panels',
        'Low-threshold options for accessibility compliance',
        'Decorative glazing patterns and grid options available',
        'Weather-resistant construction for all climates'
      ],
      image: FrenchDoor,
      price: 'Starting from ₹18,500',
      category: 'doors'
    },
    {
      id: 5,
      name: 'UPVC Sliding Patio Doors',
      description: 'Large-format sliding doors designed specifically for patio and garden access. These impressive doors feature expansive glass panels that create stunning panoramic views while providing smooth, effortless operation. The space-saving design requires no swing clearance, making them perfect for areas with limited space. Advanced thermal break technology and superior weatherproofing ensure year-round comfort and energy efficiency.',
      detailedDescription: 'Engineered for superior performance and aesthetics, these patio doors transform the connection between your home and outdoor spaces. The heavy-duty sliding system handles large panels with ease, while precision-engineered tracks ensure smooth, quiet operation for years. Multiple locking points provide security across the full height of the door, and the low-profile threshold creates seamless indoor-outdoor transitions.',
      features: [
        'Large Glass Area up to 12 feet wide for panoramic views',
        'Smooth Sliding Operation with heavy-duty roller systems',
        'Weather Resistant design withstanding extreme conditions',
        'Thermal Break Technology reducing heat transfer',
        'Multi-point locking system for enhanced security',
        'Low-profile threshold for easy access',
        'Customizable panel configurations and sizes',
        'Integrated blinds options available between glass panes'
      ],
      image: SlidingDoor,
      price: 'Starting from ₹22,000',
      category: 'doors'
    },
    {
      id: 6,
      name: 'UPVC Bi-Fold Doors',
      description: 'Contemporary multi-panel doors that fold and stack to create incredibly wide openings, perfect for connecting interior and exterior spaces seamlessly. These innovative doors consist of multiple panels that fold back on themselves, providing unobstructed access across large openings. Ideal for modern homes, restaurants, and commercial spaces, they offer the ultimate in flexible space design and natural light maximization.',
      detailedDescription: 'Bi-fold doors represent the latest in architectural innovation, offering unprecedented flexibility in space design. Each panel is carefully engineered to fold smoothly and stack compactly, creating openings that can span entire walls. The advanced hinge and track system ensures smooth operation even with multiple heavy panels. When closed, they provide the same insulation and security as traditional doors, but when opened, they virtually eliminate the barrier between spaces.',
      features: [
        'Wide Opening Capability spanning up to 20+ feet',
        'Flexible Panel Configuration from 3 to 8 panels',
        'Modern Aesthetic with slim profiles and clean lines',
        'Space Maximizing design with compact panel stacking',
        'Premium hardware with smooth folding mechanisms',
        'Weather sealing across all panel joints',
        'Traffic door option for daily use without full opening',
        'Low-maintenance operation with self-adjusting rollers'
      ],
      image: BifoldDoor,
      price: 'Starting from ₹25,000',
      category: 'doors'
    }
  ]
};

const Productsredirect = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Display all products without any filtering
  const allProducts = [...productsData.windows, ...productsData.doors];

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const handleGetQuote = (product) => {
    // You can integrate with your contact form or WhatsApp here
    const message = `Hi, I'm interested in ${product.name}. Could you please provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/your-number?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Navbar />
    
    
    <section className="products-section">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <h2>Our Premium UPVC Products</h2>
          <p>Discover our comprehensive range of energy-efficient windows and doors designed for modern living</p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {allProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
              </div>
              
              <div className="product-info">
                <div className="product-category">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <h3 className="product-name">{product.name}</h3>
                
                {/* Added short description preview */}
                <p className="product-preview">
                  {product.description.substring(0, 120)}...
                </p>
                
                <button 
                  className="view-details-btn"
                  onClick={() => openProductModal(product)}
                >
                  <FontAwesomeIcon icon={faEye} />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="product-modal-overlay" onClick={closeProductModal}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={closeProductModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              
              <div className="modal-content">
                <div className="modal-image-section">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="modal-product-image"
                  />
                </div>
                
                <div className="modal-info-section">
                  <div className="modal-category">
                    {selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                  </div>
                  <h2 className="modal-product-name">{selectedProduct.name}</h2>
                  <p className="modal-product-description">{selectedProduct.description}</p>
                  
                  {/* Added detailed description */}
                  {selectedProduct.detailedDescription && (
                    <div className="modal-detailed-description">
                      <h4>Detailed Overview:</h4>
                      <p>{selectedProduct.detailedDescription}</p>
                    </div>
                  )}
                  
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-pricing">
                    <span className="modal-price">{selectedProduct.price}</span>
                  </div>
                  
                  <div className="modal-actions">
                    <button 
                      className="contact-btn primary"
                      onClick={() => handleGetQuote(selectedProduct)}
                    >
                      Get Quote Now
                    </button>
                    <button className="brochure-btn secondary">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Productsredirect;
