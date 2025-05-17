
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Placeholder from './pages/placeholder/Placeholder';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </div>
  );
}

export default App;
