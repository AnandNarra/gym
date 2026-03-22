import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import OnlineTraining from './pages/OnlineTraining';
import HomeTraining from './pages/HomeTraining';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="online-training" element={<OnlineTraining />} />
          <Route path="home-training" element={<HomeTraining />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
