import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import HeroSection from './components/HeroSection.jsx';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <HeroSection></HeroSection>
    </>
  );
}

export default App;
