import React from 'react';
import WhatsAppPopup from './Components/WhatsAppPopup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Components/index';   // Capitalize component name
import Contact from './Components/Contact';
import Productsredirect from './Components/Productsredirect';
import AboutUs from './Components/about';
import TeamPage from './Components/TeamPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productsredirect" element={<Productsredirect />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/TeamPage" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppPopup />
    </>
  );
}

export default App;
