import React, { useState } from 'react';
import './styles/Projects.css';

// Water Demand Forecasting System
import UserLogin from '../assets/Water Demand Forecasting System/User Login.jpg';
import UserDashboard from '../assets/Water Demand Forecasting System/User Dashboard.jpg';
import Analytics1 from '../assets/Water Demand Forecasting System/Analytics 1.jpg';
import Analytics2 from '../assets/Water Demand Forecasting System/Analytics 2.jpg';
import Analytics3 from '../assets/Water Demand Forecasting System/Analytics 3.jpg';
import Analytics4 from '../assets/Water Demand Forecasting System/Analytics 4.jpg';
import Analytics5 from '../assets/Water Demand Forecasting System/Analytics 5.jpg';
import Analytics6 from '../assets/Water Demand Forecasting System/Analytics 6.jpg';
import Analytics7 from '../assets/Water Demand Forecasting System/Analytics 7.jpg';
import UserAbout from '../assets/Water Demand Forecasting System/User About.jpg';
import UserRecords from '../assets/Water Demand Forecasting System/Records.jpg';
import UserAnalytics from '../assets/Water Demand Forecasting System/User Analytics.jpg';

// DICT Attendance System
import DICTAttendanceSystemMain from '../assets/DICT Attendance System/Main.jpg';
import DICTAttendanceSystemDatabase from '../assets/DICT Attendance System/Database.jpg';

// DICT Archive System
import DICTArchiveLogin from '../assets/DICT Archive System/Log in.jpg';
import DICTArchives from '../assets/DICT Archive System/Archives.jpg';
import DICTArchiveAddNewProject from '../assets/DICT Archive System/Add New Project.jpg';
import DICTArchiveDeleteProject from '../assets/DICT Archive System/Delete Project.jpg';
import DICTArchiveProject from '../assets/DICT Archive System/Projects.jpg';
import DICTArchiveAddActivity from '../assets/DICT Archive System/Add Activity.jpg';
import DICTArchiveSaveActivity from '../assets/DICT Archive System/Save Activity.jpg';
import DICTArchiveDeleteActivity from '../assets/DICT Archive System/Delete Activity.jpg';

// Personal Projects Resources
import BirdsInABasket from '../assets/PhotoShop/Avila_JoseCarlo_ArtFinal.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = {
    'DICT Archive System': {
      title: 'DICT Archive System',
      description: 'A system designed for archiving documents for the Department of Information and Communications Technology.',
      started: 'January 2024',
      images: [DICTArchiveLogin, DICTArchives, DICTArchiveAddNewProject, DICTArchiveDeleteProject, DICTArchiveProject, DICTArchiveAddActivity, DICTArchiveSaveActivity, DICTArchiveDeleteActivity],
    },
    'DICT Attendance System': {
      title: 'DICT Attendance System',
      description: 'A system designed for recording client information as an attendance for the Department of Information and Communications Technology.',
      started: 'January 2024',
      images: [DICTAttendanceSystemMain, DICTAttendanceSystemDatabase],
      link: 'https://github.com/JoseCarlo10/dict-attendance-system.git'
    },
    'Water Demand Forecasting System': {
      title: 'Water Demand Forecasting System',
      description: 'A system for forecasting water demand using machine learning algorithms.',
      started: 'February 2024',
      images: [UserLogin, UserDashboard, UserAnalytics, Analytics1, Analytics2, Analytics3, Analytics4, Analytics5, Analytics6, Analytics7, UserRecords, UserAbout],
    link: 'https://github.com/JoseCarlo10/Web-based-Water-Demand-Forecasting-System.git'
    },
    'Aseprite: Lonely Wizard Pixel Art (Referenced)': {
      title: 'Aseprite: Lonely Wizard Pixel Art (Referenced)',
      description: 'Pixel art project using Aseprite to create a lonely wizard character.',
      started: 'March 2024',
      images: [],
    },
    'PhotoShop: Birds in the Basket (Original)': {
      title: 'PhotoShop: Birds in the Basket (Original)',
      description: 'An original digital painting of birds sitting in a basket using Photoshop.',
      started: 'April 2024',
      images: [BirdsInABasket],
    }
  };

  const handleProjectClick = (projectTitle) => {
    setSelectedProject(projectData[projectTitle]);
    setCurrentImageIndex(0);
  };

  const handleReturn = () => {
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      {selectedProject ? (
        <div className="project-details">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <p><strong>Started:</strong> {selectedProject.started}</p>

          {selectedProject.link && (
            <p>
              <strong>Link: </strong> 
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                {selectedProject.link}
              </a>
            </p>
          )}

          {selectedProject.images.length > 0 && (
            <div className="image-documentation">
              <div className="image-nav-left" onClick={handlePreviousImage}></div>
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} documentation`}
                className="documentation-image"
              />
              <div className="image-nav-right" onClick={handleNextImage}></div>
            </div>
          )}

          <button onClick={handleReturn} className="return-button">Return</button>
        </div>
      ) : (
        <div className="projects-container">

          <div className="work-projects">
            <div className="project-card" onClick={() => handleProjectClick('DICT Archive System')}>
              <h3>DICT Archive System</h3>
            </div>
            <div className="project-card" onClick={() => handleProjectClick('DICT Attendance System')}>
              <h3>DICT Attendance System</h3>
            </div>
            <div className="project-card" onClick={() => handleProjectClick('Water Demand Forecasting System')}>
              <h3>Water Demand Forecasting System</h3>
            </div>
          </div>

          <h2 className="personal">Personal Projects</h2>
          <div className="personal-projects">
            <div className="project-card" onClick={() => handleProjectClick('Aseprite: Lonely Wizard Pixel Art (Referenced)')}>
              <h3>Aseprite: Lonely Wizard Pixel Art (Referenced)</h3>
            </div>
            <div className="project-card" onClick={() => handleProjectClick('PhotoShop: Birds in the Basket (Original)')}>
              <h3>PhotoShop: Birds in the Basket (Original)</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
