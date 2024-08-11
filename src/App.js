import React from 'react';
import Header from './components/header/Header';
import AboutUs from './components/aboutUs/AboutUs';
import Games from './components/games/Games';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import './App.css';
import ScrollButton from './input/ScrollButton';

const App = () => {

  return (
    <div className="App">
      <Header />
      <ScrollButton />
      <AboutUs />
      <Games />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
