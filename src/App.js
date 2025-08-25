import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Anfragen from './pages/anfragen/Anfragen';
import WebsiteCheck from './pages/websiteCheck/WebsiteCheck';
import Freelancer from './pages/freelancer/Freelancer';
import Testen from './pages/websiteCheck/subpages/Testen';
import Bewerten from './pages/bewerten/Bewerten';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import ContentUsagePolicy from './pages/contentUsagePolicy/ContentUsagePolicy';
import NotFound from './pages/notFound/notFound';
import './App.css';

function App() {
  const ascii = `
              0000000000000                                                                   00000000                             
              0000000  00000                                                                  0000000                               
            00000     00000                                                                 00000                                  
          0000000000  00000        00000000     0000       000       0000     00000000    000000000000000       0000               
          000000000000 00000      000000000000   00000     00000     00000   000000000000 00000000000000000      0000               
            00000     00000     00000    00000   0000    0000000    0000  00000     00000   00000    00000     0000                
            00000     00000    00000      00000   0000   00000000  00000  0000       0000   00000     00000   0000                 
            00000     00000    00000      00000   00000 0000 0000 00000   000000000000000   00000      00000 00000                 
            00000     00000    00000      00000    000000000 000000000    00000             00000       000000000                  
            00000     000000    00000    00000      0000000   0000000     000000      00    00000       00000000     0000          
            00000      00000000  000000000000       000000     000000       0000000000000   00000        000000     000000         
              000        000000     00000000          0000       0000          000000000      000          0000       0000          
                                                                                                          00000                     
                                                                                                        00000                      
                                                                                                        0000                       
  `;
  console.log('%c' + ascii, 'color: #742DF8; font-family: monospace; font-size: 12px;');
  console.log('%c' + "> Willst du auch so eine? => Komm zu uns! https://flowefy.de/", 'color: #742DF8; font-size: 26px; font-family: arial;');

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/anfragen" element={<Anfragen />} />
        <Route path="/checkup" element={<WebsiteCheck />} />
        <Route path="/checkup/testen" element={<Testen />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/bewerten" element={<Bewerten />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/content-usage-policy" element={<ContentUsagePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
