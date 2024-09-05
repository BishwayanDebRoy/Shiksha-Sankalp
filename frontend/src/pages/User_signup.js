

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';// Updated to use correct package name
// import './user_signup.css'; // Assuming you have some CSS for styling

// const UserSignup = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();


//         emailjs
//       .sendForm('service_pz0d4f9', 'template_qa64b3p', form.current, {
//         publicKey: 'mNdVg35iqS7y-chUY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };


//   return (
//     <div className="signup-container">
//       <h2>User Signup</h2>
//       <form ref={form} onSubmit={sendEmail} className="signup-form">
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="user_name" required />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="user_email" required />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input type="text" name="user_phone" required />
//         </div>

//         <div className="form-group">
//           <label>Role</label>
//           <input type="text" name="user_role"  required />
//         </div>



//         <div className="form-group">
//           <label>Stream</label>
//           <input type="text" name="user_stream"  required />
//         </div>
//         <div className="form-group">
//           <label>Message</label>
//           <textarea name="message" required />
//         </div>

//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default UserSignup;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './user_signup.css'; // Assuming you have some CSS for styling

const UserSignup = () => {
  const form = useRef();
  const [isMarathi, setIsMarathi] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm('service_pz0d4f9', 'template_qa64b3p', form.current, {
    //     publicKey: 'mNdVg35iqS7y-chUY',
    //   })
    emailjs
      .sendForm('service_k7d590k', 'template_gsciu2r', form.current, {
        publicKey: 'gytasH1WPEcNd7WK8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const toggleLanguage = () => {
    setIsMarathi(!isMarathi);
  };

  return (
    <div className="signup-container">
      <h2>{isMarathi ? 'वापरकर्ता साइनअप' : 'User Signup'}</h2>
      <button onClick={toggleLanguage}>
        {isMarathi ? 'Switch to English' : 'मराठीत स्विच करा'}
      </button>
      <form ref={form} onSubmit={sendEmail} className="signup-form">
        <div className="form-group">
          <label>{isMarathi ? 'नाव' : 'Name'}</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label>{isMarathi ? 'ईमेल' : 'Email'}</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label>{isMarathi ? 'फोन नंबर' : 'Phone Number'}</label>
          <input type="text" name="user_phone" required />
        </div>
        <div className="form-group">
          <label>{isMarathi ? 'भूमिका' : 'Role'}</label>
          <input type="text" name="user_role" required />
        </div>
        <div className="form-group">
          <label>{isMarathi ? 'प्रवाह' : 'Stream'}</label>
          <input type="text" name="user_stream" required />
        </div>
        <div className="form-group">
          <label>{isMarathi ? 'संदेश' : 'Message'}</label>
          <textarea name="message" required />
        </div>
        <button type="submit">{isMarathi ? 'पाठवा' : 'Send'}</button>
      </form>
    </div>
  );
};

export default UserSignup;

