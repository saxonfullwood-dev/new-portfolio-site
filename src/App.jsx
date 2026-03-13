import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SoundPavilion from './pages/SoundPavilion';
import VisualProcess from './pages/VisualProcess';
import HotelDesign from './pages/HotelDesign';
import ResonanceCollective from './pages/ResonanceCollective';
import NourishHub from './pages/NourishHub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sound-pavilion" element={<SoundPavilion />} />
        <Route path="/visual-process" element={<VisualProcess />} />
        <Route path="/hotel-design" element={<HotelDesign />} />
        <Route path="/resonance-collective" element={<ResonanceCollective />} />
        <Route path="/nourish-hub" element={<NourishHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
