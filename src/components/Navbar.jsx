import React from 'react';

const Navbar = ({ setCategory, category }) => {
  const handleCategoryChange = (category) => {
    setCategory(category);
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
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        Lang
      </button>
      <ul className="dropdown-menu mg" aria-labelledby="dropdownMenu2">
        <li><button className="dropdown-item" type="button" value="ar">Arabic</button></li>
        <li><button className="dropdown-item" type="button" value="zh">Chinese</button></li>
        <li><button className="dropdown-item" type="button" value="nl">Dutch</button></li>
        <li><button className="dropdown-item" type="button" value="en">English</button></li>
        <li><button className="dropdown-item" type="button" value="fr">French</button></li>
        <li><button className="dropdown-item" type="button" value="de">German</button></li>
        <li><button className="dropdown-item" type="button" value="el">Greek</button></li>
        <li><button className="dropdown-item" type="button" value="he">Hebrew</button></li>
        <li><button className="dropdown-item" type="button" value="hi">Hindi</button></li>
        <li><button className="dropdown-item" type="button" value="it">Italian</button></li>
        <li><button className="dropdown-item" type="button" value="ja">Japanese</button></li>
        <li><button className="dropdown-item" type="button" value="ml">Malayalam</button></li>
        <li><button className="dropdown-item" type="button" value="mr">Marathi</button></li>
        <li><button className="dropdown-item" type="button" value="no">Norwegian</button></li>
        <li><button className="dropdown-item" type="button" value="pt">Portuguese</button></li>
        <li><button className="dropdown-item" type="button" value="ro">Romanian</button></li>
        <li><button className="dropdown-item" type="button" value="ru">Russian</button></li>
        <li><button className="dropdown-item" type="button" value="es">Spanish</button></li>
        <li><button className="dropdown-item" type="button" value="sv">Swedish</button></li>
        <li><button className="dropdown-item" type="button" value="ta">Tamil</button></li>
        <li><button className="dropdown-item" type="button" value="te">Telugu</button></li>
        <li><button className="dropdown-item" type="button" value="uk">Ukrainian</button></li>
      </ul>
    </div>
    
    <div className="dropdown" style={{ marginRight: '20px' }}>
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      Country
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button className="dropdown-item" type="button" value="au">Australia</button></li>
      <li><button className="dropdown-item" type="button" value="br">Brazil</button></li>
      <li><button className="dropdown-item" type="button" value="ca">Canada</button></li>
      <li><button className="dropdown-item" type="button" value="cn">China</button></li>
      <li><button className="dropdown-item" type="button" value="eg">Egypt</button></li>
      <li><button className="dropdown-item" type="button" value="fr">France</button></li>
      <li><button className="dropdown-item" type="button" value="de">Germany</button></li>
      <li><button className="dropdown-item" type="button" value="gr">Greece</button></li>
      <li><button className="dropdown-item" type="button" value="hk">Hong Kong</button></li>
      <li><button className="dropdown-item" type="button" value="in">India</button></li>
      <li><button className="dropdown-item" type="button" value="ie">Ireland</button></li>
      <li><button className="dropdown-item" type="button" value="il">Israel</button></li>
      <li><button className="dropdown-item" type="button" value="it">Italy</button></li>
      <li><button className="dropdown-item" type="button" value="jp">Japan</button></li>
      <li><button className="dropdown-item" type="button" value="nl">Netherlands</button></li>
      <li><button className="dropdown-item" type="button" value="no">Norway</button></li>
      <li><button className="dropdown-item" type="button" value="pk">Pakistan</button></li>
      <li><button className="dropdown-item" type="button" value="pe">Peru</button></li>
      <li><button className="dropdown-item" type="button" value="ph">Philippines</button></li>
      <li><button className="dropdown-item" type="button" value="pt">Portugal</button></li>
      <li><button className="dropdown-item" type="button" value="ro">Romania</button></li>
      <li><button className="dropdown-item" type="button" value="ru">Russian Federation</button></li>
      <li><button className="dropdown-item" type="button" value="sg">Singapore</button></li>
      <li><button className="dropdown-item" type="button" value="es">Spain</button></li>
      <li><button className="dropdown-item" type="button" value="se">Sweden</button></li>
      <li><button className="dropdown-item" type="button" value="ch">Switzerland</button></li>
      <li><button className="dropdown-item" type="button" value="tw">Taiwan</button></li>
      <li><button className="dropdown-item" type="button" value="ua">Ukraine</button></li>
      <li><button className="dropdown-item" type="button" value="gb">United Kingdom</button></li>
      <li><button className="dropdown-item" type="button" value="us">United States</button></li>
    </ul>
  </div>
  
      </nav>
  );
};

export default Navbar;
