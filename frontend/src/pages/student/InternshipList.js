import React from 'react';
import './Resources.css';

const InternshipList = () => {
    const internshipData = [
        {
          "img_link": "https://cdn.vox-cdn.com/thumbor/OL7DhOr7h8yJgNaOFufI2Ym8-q8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
          "Name": "Google Summer Internship",
          "Duration": "Duration: 12 weeks",
          "Stipend": "Stipend: $6,000",
          "EligibilityCriteria": "Eligibility: Undergraduate students in Computer Science or related fields. Minimum GPA of 3.5.",
          "Description": "The Google Summer Internship offers a unique opportunity for students to work on cutting-edge technology projects. Interns will gain valuable experience and mentorship from industry leaders.",
          "Deadline": "Deadline: 1st Feb, 2024",
          "link": "https://careers.google.com/students/"
        },
        {
          "img_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
          "Name": "IBM Research Internship",
          "Duration": "Duration: 10 weeks",
          "Stipend": "Stipend: $5,000",
          "EligibilityCriteria": "Eligibility: Graduate students in AI, Data Science, or related fields. Experience with machine learning required.",
          "Description": "IBM Research Internship allows students to engage in innovative research in AI and Data Science. Interns will collaborate with top researchers and contribute to impactful projects.",
          "Deadline": "Deadline: 15th Mar, 2024",
          "link": "https://www.ibm.com/employment/internships/"
        },
        {
          "img_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWjxuZx__a25hgj1JCqKkQF-6_UiqrUG7_g&s",
          "Name": "Microsoft Internship Program",
          "Duration": "Duration: 8 weeks",
          "Stipend": "Stipend: $7,500",
          "EligibilityCriteria": "Eligibility: Undergraduate and graduate students in Engineering, IT, or Business. Strong analytical skills required.",
          "Description": "The Microsoft Internship Program offers students hands-on experience in software development, IT, and business operations. Interns will work on real-world projects and receive mentorship from Microsoft professionals.",
          "Deadline": "Deadline: 30th Apr, 2024",
          "link": "https://careers.microsoft.com/students/us/en"
        },
        {
          "img_link": "https://www.shutterstock.com/image-vector/colombo-sri-lanka-25-october-260nw-2379551599.jpg",
          "Name": "Tesla Engineering Internship",
          "Duration": "Duration: 16 weeks",
          "Stipend": "Stipend: $8,000",
          "EligibilityCriteria": "Eligibility: Engineering students with a focus on Electrical, Mechanical, or Software Engineering. Passion for sustainable energy solutions.",
          "Description": "Tesla Engineering Internship provides students with the chance to work on groundbreaking electric vehicle and energy projects. Interns will collaborate with experienced engineers and innovate for a sustainable future.",
          "Deadline": "Deadline: 31st Jan, 2024",
          "link": "https://www.tesla.com/careers/internships"
        },
        {
          "img_link": "https://media.licdn.com/dms/image/D4D12AQF3hjt7zoaUJQ/article-cover_image-shrink_600_2000/0/1680862517656?e=2147483647&v=beta&t=99z4_3BAY1nDYB-Ohjbg_-H-McPAmgbK9_59jQaj07c",
          "Name": "Internships.com Internship",
          "Duration": "Duration: 12 weeks",
          "Stipend": "Stipend: $5,000",
          "EligibilityCriteria": "Eligibility: High school graduates interested in exploring various career paths.",
          "Description": "Internships.com Internship offers a wide range of opportunities for high school graduates to gain exposure to different industries. Interns will learn valuable skills and develop professional networks.",
          "Deadline": "Deadline: 15th Feb, 2024",
          "link": "https://www.internships.com/"
        },
        {
          "img_link": "https://www.adroll.com/assets/blog/social/Open-Graph.png",
          "Name": "AdRoll Marketing Internship",
          "Duration": "Duration: 10 weeks",
          "Stipend": "Stipend: $6,500",
          "EligibilityCriteria": "Eligibility: Recent high school graduates with an interest in marketing or business.",
          "Description": "AdRoll Marketing Internship provides hands-on experience in digital marketing and advertising. Interns will learn about campaign strategies and analytics while working on real projects.",
          "Deadline": "Deadline: 20th Mar, 2024",
          "link": "https://www.adroll.com/careers/internships"
        },
        {
            "img_link": "https://cdn.vox-cdn.com/thumbor/OL7DhOr7h8yJgNaOFufI2Ym8-q8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
            "Name": "Google Summer Internship",
            "Duration": "Duration: 12 weeks",
            "Stipend": "Stipend: $6,000",
            "EligibilityCriteria": "Eligibility: Undergraduate students in Computer Science or related fields. Minimum GPA of 3.5.",
            "Description": "The Google Summer Internship offers a unique opportunity for students to work on cutting-edge technology projects. Interns will gain valuable experience and mentorship from industry leaders.",
            "Deadline": "Deadline: 1st Feb, 2024",
            "link": "https://careers.google.com/students/"
          },
          {
            "img_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
            "Name": "IBM Research Internship",
            "Duration": "Duration: 10 weeks",
            "Stipend": "Stipend: $5,000",
            "EligibilityCriteria": "Eligibility: Graduate students in AI, Data Science, or related fields. Experience with machine learning required.",
            "Description": "IBM Research Internship allows students to engage in innovative research in AI and Data Science. Interns will collaborate with top researchers and contribute to impactful projects.",
            "Deadline": "Deadline: 15th Mar, 2024",
            "link": "https://www.ibm.com/employment/internships/"
          },
          {
            "img_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWjxuZx__a25hgj1JCqKkQF-6_UiqrUG7_g&s",
            "Name": "Microsoft Internship Program",
            "Duration": "Duration: 8 weeks",
            "Stipend": "Stipend: $7,500",
            "EligibilityCriteria": "Eligibility: Undergraduate and graduate students in Engineering, IT, or Business. Strong analytical skills required.",
            "Description": "The Microsoft Internship Program offers students hands-on experience in software development, IT, and business operations. Interns will work on real-world projects and receive mentorship from Microsoft professionals.",
            "Deadline": "Deadline: 30th Apr, 2024",
            "link": "https://careers.microsoft.com/students/us/en"
          },
          {
            "img_link": "https://www.shutterstock.com/image-vector/colombo-sri-lanka-25-october-260nw-2379551599.jpg",
            "Name": "Tesla Engineering Internship",
            "Duration": "Duration: 16 weeks",
            "Stipend": "Stipend: $8,000",
            "EligibilityCriteria": "Eligibility: Engineering students with a focus on Electrical, Mechanical, or Software Engineering. Passion for sustainable energy solutions.",
            "Description": "Tesla Engineering Internship provides students with the chance to work on groundbreaking electric vehicle and energy projects. Interns will collaborate with experienced engineers and innovate for a sustainable future.",
            "Deadline": "Deadline: 31st Jan, 2024",
            "link": "https://www.tesla.com/careers/internships"
          },
          {
            "img_link": "https://media.licdn.com/dms/image/D4D12AQF3hjt7zoaUJQ/article-cover_image-shrink_600_2000/0/1680862517656?e=2147483647&v=beta&t=99z4_3BAY1nDYB-Ohjbg_-H-McPAmgbK9_59jQaj07c",
            "Name": "Internships.com Internship",
            "Duration": "Duration: 12 weeks",
            "Stipend": "Stipend: $5,000",
            "EligibilityCriteria": "Eligibility: High school graduates interested in exploring various career paths.",
            "Description": "Internships.com Internship offers a wide range of opportunities for high school graduates to gain exposure to different industries. Interns will learn valuable skills and develop professional networks.",
            "Deadline": "Deadline: 15th Feb, 2024",
            "link": "https://www.internships.com/"
          },
          {
            "img_link": "https://www.adroll.com/assets/blog/social/Open-Graph.png",
            "Name": "AdRoll Marketing Internship",
            "Duration": "Duration: 10 weeks",
            "Stipend": "Stipend: $6,500",
            "EligibilityCriteria": "Eligibility: Recent high school graduates with an interest in marketing or business.",
            "Description": "AdRoll Marketing Internship provides hands-on experience in digital marketing and advertising. Interns will learn about campaign strategies and analytics while working on real projects.",
            "Deadline": "Deadline: 20th Mar, 2024",
            "link": "https://www.adroll.com/careers/internships"
          }
    ];
      

  return (
    <div className="scholarship-list">
      {internshipData.map((internship, index) => (
        <div key={index} className="scholarship-card">
          <img src={internship.img_link} alt={internship.Name} className="scholarship-image" />
          <div className="scholarship-details">
            <h2>{internship.Name}</h2>
            <p>{internship.Duration}</p>
            <p>{internship.Stipend}</p>
            <p>{internship.EligibilityCriteria}</p>
            <p>{internship.Description}</p>
            <p>{internship.Deadline}</p>
            <button><a href={internship.link} target="_blank" rel="noopener noreferrer" className="scholarship-button">Apply Now</a></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternshipList;
