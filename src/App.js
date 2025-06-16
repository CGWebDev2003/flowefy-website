
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Service from './pages/service/Service';
import Portfolio from './pages/portfolio/Portfolio';
import Kontakt from './pages/kontakt/Kontakt';
import Anfragen from './pages/anfragen/Anfragen';
import WebsiteCheck from './pages/websiteCheck/WebsiteCheck';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import Placeholder from './pages/placeholder/Placeholder';
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
        <Route path="/placeholder" element={<Placeholder />} />
      </Routes>
    </div>
  );
}

export default App;
