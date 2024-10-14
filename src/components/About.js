import React from 'react';
import profileLogo from '../assets/Star Trek Data Cat Formation Essential T-Shirt by FifthSun.png';
import './styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2>Hello I'm</h2>
          <h2>Jose Carlo M. Avila</h2>
          <img src={profileLogo} alt="Profile Logo" className="profile-logo" />
        </div>
        <div className="about-right">
          <p>
            I am a recent Bachelor of Science in Computer Science graduate, honored to have graduated cum laude. 
            My primary expertise lies in Java, which I have extensively used in application development. 
            Additionally, I have hands-on experience with Python, C#, and C, though my proficiency in these is more basic. 
            I also have hands-on experience in web programming, where I work with HTML, CSS, JavaScript, and PHP.
          <br/><br/>
            Beyond programming, I am continuously learning 3D modeling using Blender and have developed a strong interest in game development designs.
            Additionally, I have been honing my analytical skills through data analysis projects and am proficient in utilizing Microsoft Office tools
            to enhance productivity and manage projects effectively.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Java, C#</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, ReactJS</li>
          <li><strong>Software/Tools:</strong> Microsoft Office, Blender, Git</li>
          <li><strong>Database Management:</strong> MySQL, MongoDB</li>
          <li><strong>Game Development:</strong> Basic knowledge of Godot and game design concepts</li>
          <li><strong>Data Analysis:</strong> Analytical skills with experience in data analysis projects</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
