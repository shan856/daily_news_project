import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import './App.css'

const App = () => {
  const [category, setCategory] = useState('general');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <div className='text-center'>
        <NewsBoard category={category} />
      </div>
    <div className='button-container'> <button onClick={scrollToTop} className="button"> back to top
    </button></div>
    </div>
  );
};

export default App;
