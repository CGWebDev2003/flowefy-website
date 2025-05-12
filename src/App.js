
import { Routes, Route } from 'react-router-dom';
import Placeholder from './pages/placeholder/Placeholder';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Placeholder />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </div>
  );
}

export default App;
