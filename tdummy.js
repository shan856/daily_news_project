import React, { useState } from 'react';

const Navbar = ({ setCategory, setLang, setCountry, category }) => {
  const [lang, setLangValue] = useState('en'); // Default language
  const [country, setCountryValue] = useState('us'); // Default country

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleLangChange = (value) => {
    setLangValue(value);
    setLang(value);
  };

  const handleCountryChange = (value) => {
    setCountryValue(value);
    setCountry(value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={() => { window.location.reload(); }}>
          <span className='badge bg-light text-dark fs-4'>Daily News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#business"
                className={`nav-link border-0 bg-transparent ${category === 'business' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('business')}
                style={{ fontWeight: 'bold' }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#entertainment"
                className={`nav-link border-0 bg-transparent ${category === 'entertainment' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('entertainment')}
                style={{ fontWeight: 'bold' }}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#genral"
                className={`nav-link border-0 bg-transparent ${category === 'general' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('general')}
                style={{ fontWeight: 'bold' }}
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#health"
                className={`nav-link border-0 bg-transparent ${category === 'health' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('health')}
                style={{ fontWeight: 'bold' }}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#science"
                className={`nav-link border-0 bg-transparent ${category === 'science' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('science')}
                style={{ fontWeight: 'bold' }}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#sports"
                className={`nav-link border-0 bg-transparent ${category === 'sports' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('sports')}
                style={{ fontWeight: 'bold' }}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#technology"
                className={`nav-link border-0 bg-transparent ${category === 'technology' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('technology')}
                style={{ fontWeight: 'bold' }}
              >
                Technology
              </a>
            </li>

          </ul>
        </div>
        
      </div>
      <div className="dropdown" style={{ marginRight: '10px' }}>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Lang
        </button>
        <ul className="dropdown-menu mg" aria-labelledby="langDropdown">
          <li><button className="dropdown-item" type="button" value="ar" onClick={() => handleLangChange('ar')}>Arabic</button></li>
          <li><button className="dropdown-item" type="button" value="zh" onClick={() => handleLangChange('zh')}>Chinese</button></li>
          <li><button className="dropdown-item" type="button" value="nl" onClick={() => handleLangChange('nl')}>Dutch</button></li>
          <li><button className="dropdown-item" type="button" value="en" onClick={() => handleLangChange('en')}>English</button></li>
          <li><button className="dropdown-item" type="button" value="fr" onClick={() => handleLangChange('fr')}>French</button></li>
          <li><button className="dropdown-item" type="button" value="de" onClick={() => handleLangChange('de')}>German</button></li>
          <li><button className="dropdown-item" type="button" value="el" onClick={() => handleLangChange('el')}>Greek</button></li>
          <li><button className="dropdown-item" type="button" value="he" onClick={() => handleLangChange('he')}>Hebrew</button></li>
          <li><button className="dropdown-item" type="button" value="hi" onClick={() => handleLangChange('hi')}>Hindi</button></li>
          <li><button className="dropdown-item" type="button" value="it" onClick={() => handleLangChange('it')}>Italian</button></li>
          <li><button className="dropdown-item" type="button" value="ja" onClick={() => handleLangChange('ja')}>Japanese</button></li>
          <li><button className="dropdown-item" type="button" value="ml" onClick={() => handleLangChange('ml')}>Malayalam</button></li>
          <li><button className="dropdown-item" type="button" value="mr" onClick={() => handleLangChange('mr')}>Marathi</button></li>
          <li><button className="dropdown-item" type="button" value="no" onClick={() => handleLangChange('no')}>Norwegian</button></li>
          <li><button className="dropdown-item" type="button" value="pt" onClick={() => handleLangChange('pt')}>Portuguese</button></li>
          <li><button className="dropdown-item" type="button" value="ro" onClick={() => handleLangChange('ro')}>Romanian</button></li>
          <li><button className="dropdown-item" type="button" value="ru" onClick={() => handleLangChange('ru')}>Russian</button></li>
          <li><button className="dropdown-item" type="button" value="es" onClick={() => handleLangChange('es')}>Spanish</button></li>
          <li><button className="dropdown-item" type="button" value="sv" onClick={() => handleLangChange('sv')}>Swedish</button></li>
          <li><button className="dropdown-item" type="button" value="ta" onClick={() => handleLangChange('ta')}>Tamil</button></li>
          <li><button className="dropdown-item" type="button" value="te" onClick={() => handleLangChange('te')}>Telugu</button></li>
          <li><button className="dropdown-item" type="button" value="uk" onClick={() => handleLangChange('uk')}>Ukrainian</button></li>
        </ul>
      </div>
      
      <div className="dropdown" style={{ marginRight: '20px' }}>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Country
        </button>
        <ul className="dropdown-menu" aria-labelledby="countryDropdown">
          <li><button className="dropdown-item" type="button" value="au" onClick={() => handleCountryChange('au')}>Australia</button></li>
          <li><button className="dropdown-item" type="button" value="br" onClick={() => handleCountryChange('br')} >Brazil</button></li>
          <li><button className="dropdown-item" type="button" value="ca" onClick={() => handleCountryChange('ca')} >Canada</button></li>
          <li><button className="dropdown-item" type="button" value="cn" onClick={() => handleCountryChange('cn')} >China</button></li>
          <li><button className="dropdown-item" type="button" value="eg" onClick={() => handleCountryChange('eg')} >Egypt</button></li>
          <li><button className="dropdown-item" type="button" value="fr" onClick={() => handleCountryChange('fr')} >France</button></li>
          <li><button className="dropdown-item" type="button" value="de" onClick={() => handleCountryChange('de')} >Germany</button></li>
          <li><button className="dropdown-item" type="button" value="gr" onClick={() => handleCountryChange('gr')} >Greece</button></li>
          <li><button className="dropdown-item" type="button" value="hk" onClick={() => handleCountryChange('hk')} >Hong Kong</button></li>
          <li><button className="dropdown-item" type="button" value="in" onClick={() => handleCountryChange('in')} >India</button></li>
          <li><button className="dropdown-item" type="button" value="ie" onClick={() => handleCountryChange('ie')} >Ireland</button></li>
          <li><button className="dropdown-item" type="button" value="il" onClick={() => handleCountryChange('il')} >Israel</button></li>
          <li><button className="dropdown-item" type="button" value="it" onClick={() => handleCountryChange('it')} >Italy</button></li>
          <li><button className="dropdown-item" type="button" value="jp" onClick={() => handleCountryChange('jp')} >Japan</button></li>
          <li><button className="dropdown-item" type="button" value="nl" onClick={() => handleCountryChange('nl')} >Netherlands</button></li>
          <li><button className="dropdown-item" type="button" value="no" onClick={() => handleCountryChange('no')} >Norway</button></li>
          <li><button className="dropdown-item" type="button" value="pk" onClick={() => handleCountryChange('pk')} >Pakistan</button></li>
          <li><button className="dropdown-item" type="button" value="pe" onClick={() => handleCountryChange('pe')} >Peru</button></li>
          <li><button className="dropdown-item" type="button" value="ph" onClick={() => handleCountryChange('ph')} >Philippines</button></li>
          <li><button className="dropdown-item" type="button" value="pt" onClick={() => handleCountryChange('pt')} >Portugal</button></li>
          <li><button className="dropdown-item" type="button" value="ro" onClick={() => handleCountryChange('ro')} >Romania</button></li>
          <li><button className="dropdown-item" type="button" value="ru" onClick={() => handleCountryChange('ru')} >Russian Federation</button></li>
          <li><button className="dropdown-item" type="button" value="sg" onClick={() => handleCountryChange('sg')} >Singapore</button></li>
          <li><button className="dropdown-item" type="button" value="es" onClick={() => handleCountryChange('es')} >Spain</button></li>
          <li><button className="dropdown-item" type="button" value="se" onClick={() => handleCountryChange('se')} >Sweden</button></li>
          <li><button className="dropdown-item" type="button" value="ch" onClick={() => handleCountryChange('ch')} >Switzerland</button></li>
          <li><button className="dropdown-item" type="button" value="tw" onClick={() => handleCountryChange('tw')} >Taiwan</button></li>
          <li><button className="dropdown-item" type="button" value="ua" onClick={() => handleCountryChange('ua')} >Ukraine</button></li>
          <li><button className="dropdown-item" type="button" value="gb" onClick={() => handleCountryChange('gb')} >United Kingdom</button></li>
          <li><button className="dropdown-item" type="button" value="us" onClick={() => handleCountryChange('us')} >United States</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
