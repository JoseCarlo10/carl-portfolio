import React, { useEffect, useRef } from 'react';
import './styles/Certifications.css';

function Certifications() {
  const badgeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    badgeRef.current.appendChild(script);
  }, []);

  return (
    <section id="certifications" className="certif">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        <li>
          <h3>Computer System Servicing NCII</h3>
          <p>Issued by TESDA</p>
          <p>Date: [Insert Date]</p>
        </li>
        <li>
          <h3>Microsoft Office Specialist: Excel Certification</h3>
          <p>Issued by Certiport</p>
          <p>Date: September 29, 2024</p>
          <div
            ref={badgeRef} 
            data-iframe-width="150" 
            data-iframe-height="270" 
            data-share-badge-id="8d42cf59-45ab-48a7-802b-46a253e61772" 
            data-share-badge-host="https://www.credly.com"
          ></div>
        </li>
        <li>
          <h3>Civil Service Eligibility</h3>
          <p>Issued by the Civil Service Commission</p>
          <p>Date: [Insert Date]</p>
        </li>
        <li>
          <h3>ICT Proficiency Exam</h3>
          <p>Issued by DICT</p>
          <p>Date: [Insert Date]</p>
        </li>
      </ul>
    </section>
  );
}

export default Certifications;
