import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import heroImage from '../src/img/hero-image.jpg';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {

  // Zakucani podaci pre kreiranja baze i backenda

  const movies = [
    {id:1,title:'Movie 1', rating:4, image:heroImage},
    {id:2,title:'Movie 2', rating:5, image:heroImage},
    {id:3,title:'Movie 3', rating:3, image:heroImage},
    {id:4,title:'Movie 4', rating:4, image:heroImage},

    {id:5,title:'Movie 5', rating:4, image:heroImage},
    {id:6,title:'Movie 6', rating:5, image:heroImage},
    {id:7,title:'Movie 7', rating:3, image:heroImage},
    {id:8,title:'Movie 8', rating:4, image:heroImage},

    {id:9,title:'Movie 9', rating:4, image:heroImage},
    {id:10,title:'Movie 10', rating:5, image:heroImage},
    {id:11,title:'Movie 11', rating:3, image:heroImage},
    {id:12,title:'Movie 12', rating:4, image:heroImage},
  ];
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <HeroSection></HeroSection>
    <MovieGrid movies={movies}></MovieGrid>
    <Footer></Footer>
    </>
  );
}

export default App;
