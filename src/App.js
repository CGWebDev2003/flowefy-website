import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Anfragen from './pages/anfragen/Anfragen';
import WebsiteCheck from './pages/websiteCheck/WebsiteCheck';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/anfragen" element={<Anfragen />} />
        <Route path="/checkup" element={<WebsiteCheck />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
