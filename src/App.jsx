import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import './App.css'

const App = () => {
  const [category, setCategory] = useState('general');
  const [lang, setLang] = useState('en'); // Default language
  const [country, setCountry] = useState('in'); // Default country

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <Navbar setCategory={setCategory} setLang={setLang} setCountry={setCountry} />
      <div className='text-center'>
        <NewsBoard category={category} lang={lang} country={country} />
      </div>
      <div className='button-container'>
        <button onClick={scrollToTop} className="button">back to top</button>
      </div>
    </div>
  );
};

export default App;
