import React from 'react';
import './/styles/Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <button className="carl" onClick={() => scrollToSection('about')}><h1>Carl</h1></button>
      <div className="header-content">
        
        <nav>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('certifications')}>Certifications</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
    </header>
  );
}

export default Header;
