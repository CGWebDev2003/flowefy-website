import Header from './components/header/Header';
import PlaceholderSection from './components/placeholder/Placeholder';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <PlaceholderSection></PlaceholderSection>
      <div className='legalLinks'>
        <a href="#">Impressum</a> <span className='devider'>|</span> <a href="#"> Datenschutz</a>
      </div>
    </div>
  );
}

export default App;
