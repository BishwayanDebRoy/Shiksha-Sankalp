import React from 'react';
import './Resources.css';

const ScholarshipList = () => {
  const scholarshipData = [
    {
      "img_link": "https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_24439_1716819203.jpg",
      "Name": "KOTAK JUNIOR SCHOLARSHIP PROGRAM 2024-25",
      "Award": "Award Scholarship of INR 3,500 per month and other benefits",
      "eligibility": "Eligibility For Class 11 students in Mumbai Metropolitan Region",
      "deadline": "Deadline 30 Jun, 24"
    },
    {
      "img_link": "https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_24439_1716819203.jpg",
      "Name": "XYZ SCHOLARSHIP PROGRAM 2024-25",
      "Award": "Award Scholarship of INR 5,000 per month and other benefits",
      "eligibility": "Eligibility For Class 12 students in Delhi",
      "deadline": "Deadline 15 Jul, 24"
    }
  ];

  return (
    <div className="scholarship-list">
      {scholarshipData.map((schol, index) => (
        <div key={index} className="scholarship-card">
          <img src={schol.img_link} alt={schol.Name} className="scholarship-image" />
          <div className="scholarship-details">
            <h2>{schol.Name}</h2>
            <p><strong>Award:</strong> {schol.Award}</p>
            <p><strong>Eligibility:</strong> {schol.eligibility}</p>
            <p><strong>Deadline:</strong> {schol.deadline}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipList;
