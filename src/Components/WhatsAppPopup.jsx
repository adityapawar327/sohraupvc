import React, { useState } from 'react';

const whatsappNumber = '7470955631';

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <div
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 9999,
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: '#25d366',
            border: 'none',
            borderRadius: '50%',
            width: 60,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
          }}
          aria-label="Open WhatsApp Chat"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: 36, height: 36 }}
          />
        </button>
        {/* Popup */}
        {open && (
          <div
            style={{
              position: 'absolute',
              bottom: 70,
              right: 0,
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              padding: 16,
              minWidth: 220,
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontWeight: 500 }}>Chat with us on WhatsApp!</p>
            <p style={{ margin: '8px 0 0 0', fontSize: 14, color: '#444' }}>
              We are here to help you with any queries or support.<br />
              <strong>Business Hours:</strong><br />
              Mon-Sat: 9:00 AM - 7:00 PM
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: 12,
                background: '#25d366',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: 4,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Start Chat
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppPopup;
