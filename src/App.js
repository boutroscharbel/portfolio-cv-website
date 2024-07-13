import React, { useState } from 'react';
import './App.css';
import Certifications from './components/Certifications/Certifications';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Personal from './components/Personal/Personal';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <div className="button-container">
        <input type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'} />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
      <div className="grid-2">
        <div className="section-1">
          <i className="fas fa-code fa-5x white"></i>
          <Personal />
        </div>
        <div className="section-2">
          <About />
          <Work />
          <Skills />
          <Certifications />
          <Education />
        </div>
      </div>
    </div>

  );
}

export default App;
