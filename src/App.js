import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Anfragen from './pages/anfragen/Anfragen';
import WebsiteCheck from './pages/websiteCheck/WebsiteCheck';
import Testen from './pages/websiteCheck/subpages/Testen';
import Bewerten from './pages/bewerten/Bewerten';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/anfragen" element={<Anfragen />} />
        <Route path="/checkup" element={<WebsiteCheck />} />
        <Route path="/checkup/testen" element={<Testen />} />
        <Route path="/bewerten" element={<Bewerten />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
