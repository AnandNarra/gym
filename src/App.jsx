import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Training from './pages/Training';
import Nutrition from './pages/Nutrition';
import OnlineTraining from './pages/OnlineTraining';
import HomeTraining from './pages/HomeTraining';
import Franchise from './pages/Franchise';
import GymEquipments from './pages/GymEquipments';
import Contact from './pages/Contact';
import SuccessStory from './pages/SuccessStory';
import PinkAngels from './pages/PinkAngels';
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
          <Route path="training" element={<Training />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="online-training" element={<OnlineTraining />} />
          <Route path="home-training" element={<HomeTraining />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="gym-equipments" element={<GymEquipments />} />
          <Route path="contact" element={<Contact />} />
          <Route path="success-story" element={<SuccessStory />} />
          <Route path="pink-angels" element={<PinkAngels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
