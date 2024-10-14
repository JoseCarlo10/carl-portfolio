import './components/styles/App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <section id="projects"></section>
      <Projects />
      <section id="certifications"></section>
      <Certifications />
      <section id="contact"></section>
      <Contact />
    </div>
  );
}

export default App;
