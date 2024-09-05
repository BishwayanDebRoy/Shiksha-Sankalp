import React from 'react';
import './Resources.css'

const LoanList = () => {
    const loanData = [
        {
          "img_link": "https://static.vecteezy.com/system/resources/previews/020/336/703/original/hdfc-logo-hdfc-icon-free-free-vector.jpg",
          "Name": "Bright Future Education Loan",
          "InterestRate": "Interest Rate: 4.5% APR",
          "LoanAmount": "Loan Amount: $5,000 - $50,000",
          "EligibilityCriteria": "Eligibility: Low-income students enrolled in accredited higher education programs. Requires a cosigner with a good credit score.",
          "Description": "The Bright Future Education Loan is designed to support low-income students aiming for higher education. It offers flexible repayment options and a grace period of six months post-graduation.",
          "Deadline": "Deadline: Ongoing",
          "link": "https://www.hdfcbank.com/"
        },
        {
          "img_link": "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/08/19120123/a6113158fb20d9862493f244bddc5fa5.jpg",
          "Name": "Empower Student Loan",
          "InterestRate": "Interest Rate: 3.8% APR",
          "LoanAmount": "Loan Amount: $10,000 - $100,000",
          "EligibilityCriteria": "Eligibility: Undergraduate and graduate students from low-income families. No cosigner required if the student has a part-time job.",
          "Description": "The Empower Student Loan is tailored for undergraduate and graduate students from low-income families. It features competitive interest rates and does not require a cosigner if the student can demonstrate a stable part-time income.",
          "Deadline": "Deadline: 30th Sep, 2024",
          "link": "https://www.icicibank.com/"
        },
        {
          "img_link": "https://www.logo-designer.co/storage/2017/04/2017-Design-Stack-new-logo-design-State-Bank-of-India.png",
          "Name": "Pathway Education Loan",
          "InterestRate": "Interest Rate: 5.2% APR",
          "LoanAmount": "Loan Amount: $2,000 - $20,000",
          "EligibilityCriteria": "Eligibility: Low-income students enrolled in community colleges or vocational schools. Requires a guarantor.",
          "Description": "The Pathway Education Loan offers financial assistance to low-income students attending community colleges or vocational schools. It includes an easy application process and a deferment option during periods of financial hardship.",
          "Deadline": "Deadline: 15th Nov, 2024",
          "link": "https://www.sbi.co.in/"
        },
        {
          "img_link": "https://companieslogo.com/img/orig/PNB.NS-f0a1e3ee.png?t=1611211975",
          "Name": "NextGen Higher Education Loan",
          "InterestRate": "Interest Rate: 4.0% APR",
          "LoanAmount": "Loan Amount: $8,000 - $80,000",
          "EligibilityCriteria": "Eligibility: Students from low-income backgrounds accepted into STEM programs. Must maintain a minimum GPA of 3.0.",
          "Description": "The NextGen Higher Education Loan is specifically for students from low-income backgrounds pursuing degrees in STEM fields. It provides a low interest rate and rewards academic excellence with potential interest rate reductions.",
          "Deadline": "Deadline: 1st Dec, 2024",
          "link": "https://www.pnbindia.in/"
        },
        {
            "img_link": "https://static.vecteezy.com/system/resources/previews/020/336/703/original/hdfc-logo-hdfc-icon-free-free-vector.jpg",
            "Name": "Bright Future Education Loan",
            "InterestRate": "Interest Rate: 4.5% APR",
            "LoanAmount": "Loan Amount: $5,000 - $50,000",
            "EligibilityCriteria": "Eligibility: Low-income students enrolled in accredited higher education programs. Requires a cosigner with a good credit score.",
            "Description": "The Bright Future Education Loan is designed to support low-income students aiming for higher education. It offers flexible repayment options and a grace period of six months post-graduation.",
            "Deadline": "Deadline: Ongoing",
            "link": "https://www.hdfcbank.com/"
          },
          {
            "img_link": "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/08/19120123/a6113158fb20d9862493f244bddc5fa5.jpg",
            "Name": "Empower Student Loan",
            "InterestRate": "Interest Rate: 3.8% APR",
            "LoanAmount": "Loan Amount: $10,000 - $100,000",
            "EligibilityCriteria": "Eligibility: Undergraduate and graduate students from low-income families. No cosigner required if the student has a part-time job.",
            "Description": "The Empower Student Loan is tailored for undergraduate and graduate students from low-income families. It features competitive interest rates and does not require a cosigner if the student can demonstrate a stable part-time income.",
            "Deadline": "Deadline: 30th Sep, 2024",
            "link": "https://www.icicibank.com/"
          },
          {
            "img_link": "https://www.logo-designer.co/storage/2017/04/2017-Design-Stack-new-logo-design-State-Bank-of-India.png",
            "Name": "Pathway Education Loan",
            "InterestRate": "Interest Rate: 5.2% APR",
            "LoanAmount": "Loan Amount: $2,000 - $20,000",
            "EligibilityCriteria": "Eligibility: Low-income students enrolled in community colleges or vocational schools. Requires a guarantor.",
            "Description": "The Pathway Education Loan offers financial assistance to low-income students attending community colleges or vocational schools. It includes an easy application process and a deferment option during periods of financial hardship.",
            "Deadline": "Deadline: 15th Nov, 2024",
            "link": "https://www.sbi.co.in/"
          },
          {
            "img_link": "https://companieslogo.com/img/orig/PNB.NS-f0a1e3ee.png?t=1611211975",
            "Name": "NextGen Higher Education Loan",
            "InterestRate": "Interest Rate: 4.0% APR",
            "LoanAmount": "Loan Amount: $8,000 - $80,000",
            "EligibilityCriteria": "Eligibility: Students from low-income backgrounds accepted into STEM programs. Must maintain a minimum GPA of 3.0.",
            "Description": "The NextGen Higher Education Loan is specifically for students from low-income backgrounds pursuing degrees in STEM fields. It provides a low interest rate and rewards academic excellence with potential interest rate reductions.",
            "Deadline": "Deadline: 1st Dec, 2024",
            "link": "https://www.pnbindia.in/"
          },
          {
            "img_link": "https://media.designrush.com/inspiration_images/134937/conversions/_1511454480_993_jpmorgan-mobile.jpg",
            "Name": "Future Vision Student Loan",
            "InterestRate": "Interest Rate: 5.8% APR",
            "LoanAmount": "Loan Amount: $3,000 - $30,000",
            "EligibilityCriteria": "Eligibility: Recent high school graduates pursuing their first undergraduate degree. Requires parental cosigner.",
            "Description": "The Future Vision Student Loan aims to assist recent high school graduates in financing their first undergraduate degree. It provides competitive rates and a grace period for graduates to find employment.",
            "Deadline": "Deadline: 1st Aug, 2024",
            "link": "https://www.samplebank.com/"
          },
          {
            "img_link": "https://t4.ftcdn.net/jpg/01/83/77/65/360_F_183776586_ETr3Lg7pmP2bw0dF2vyNlBaf93eM5TaA.jpg",
            "Name": "Career Start Student Loan",
            "InterestRate": "Interest Rate: 4.2% APR",
            "LoanAmount": "Loan Amount: $2,000 - $15,000",
            "EligibilityCriteria": "Eligibility: Students starting vocational or technical training programs after high school. No cosigner required.",
            "Description": "The Career Start Student Loan is tailored for students entering vocational or technical training programs post-high school. It offers favorable terms and does not require a cosigner for eligible applicants.",
            "Deadline": "Deadline: 15th Oct, 2024",
            "link": "https://www.studentloanprovider.com/"
          }
      ];
      

  return (
    <div className="scholarship-list">
      {loanData.map((loan, index) => (
        <div key={index} className="scholarship-card">
          <img src={loan.img_link} alt={loan.Name} className="scholarship-image" />
          <div className="scholarship-details">
            <h2>{loan.Name}</h2>
            <p>{loan.InterestRate}</p>
            <p>{loan.LoanAmount}</p>
            <p>{loan.EligibilityCriteria}</p>
            <p>{loan.Deadline}</p>
            <button><a href={loan.link} target="_blank" rel="noopener noreferrer" className="loan-button">Apply Now</a></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoanList;
