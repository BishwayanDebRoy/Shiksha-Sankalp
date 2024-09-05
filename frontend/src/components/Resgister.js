// import { useState } from "react";
// import { useRegister } from "./hooks/useRegister";
// import './Register.css';

// const Register = () => {
//   const { register, error, isLoading } = useRegister();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mode, setMode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [geolocation, setGeolocation] = useState('');
//   const [course, setCourse] = useState('');
//   const [field, setField] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await register(name, email, mode, phoneNumber, geolocation, course, field);
//   };

//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Registration Form</title>
//       <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css" rel="stylesheet" />
//       <div style={{ padding: "10%" }}>
//         <h1 style={{ fontSize: "200%", textAlign: "center", marginBottom: "4%" }}>Registration Form</h1>
//         <form onSubmit={handleSubmit}>
//           <h1>Personal Info:</h1>
//           <div className="relative z-0 w-full mb-6 group">
//             <input
//               value={name}
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               id="name"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Full Name
//             </label>
//           </div>

//           <div className="relative z-0 w-full mb-6 group">
//             <input
//               value={email}
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               id="email"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="email"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Email Address
//             </label>
//           </div>

//           <div className="wrap-input100">
//             <label>Mode:</label>
//             <br />
//             <select
//               value={mode}
//               onChange={(e) => setMode(e.target.value)}
//               id="mode"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             >
//               <option value="" selected>Choose mode</option>
//               <option value="online">Online</option>
//               <option value="offline">Offline</option>
//             </select>
//           </div>

//           <div className="relative z-0 w-full mb-6 group">
//             <input
//               value={phoneNumber}
//               type="text"
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               id="phoneNumber"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="phoneNumber"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Phone Number
//             </label>
//           </div>

//           <div className="relative z-0 w-full mb-6 group">
//             <input
//               value={geolocation}
//               type="text"
//               onChange={(e) => setGeolocation(e.target.value)}
//               id="geolocation"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="geolocation"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Geolocation
//             </label>
//           </div>

//           <div className="wrap-input100">
//             <label>Course:</label>
//             <br />
//             <select
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               id="course"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             >
//               <option value="" selected>Choose course</option>
//               <option value="ug">UG</option>
//               <option value="pg">PG</option>
//               <option value="global">Global</option>
//             </select>
//           </div>

//           <div className="wrap-input100">
//             <label>Field:</label>
//             <br />
//             <select
//               value={field}
//               onChange={(e) => setField(e.target.value)}
//               id="field"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             >
//               <option value="" selected>Choose field</option>
//               <option value="engineering">Engineering</option>
//               <option value="medical">Medical</option>
//               <option value="law">Law</option>
//               <option value="arts">Arts</option>
//               <option value="science">Science</option>
//               <option value="commerce">Commerce</option>
//             </select>
//           </div>

//           <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Register
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;


import { useState } from "react";
import { useRegister} from "./hooks/useRegister";
import './Register.css';

const Register = () => {
  const { register, error, isLoading } = useRegister();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [geolocation, setGeolocation] = useState('');
  const [course, setCourse] = useState('');
  const [field, setField] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await register(name, email, mode, phoneNumber, geolocation, course, field);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Registration Form</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css" rel="stylesheet" />
      <div style={{ padding: "10%" }}>
        <h1 style={{ fontSize: "200%", textAlign: "center", marginBottom: "4%" }}>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <h1>Personal Info:</h1>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>

          <div className="wrap-input100">
            <label>Mode:</label>
            <br />
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              id="mode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" selected>Choose mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              value={phoneNumber}
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phoneNumber"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              value={geolocation}
              type="text"
              onChange={(e) => setGeolocation(e.target.value)}
              id="geolocation"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="geolocation"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Geolocation
            </label>
          </div>

          <div className="wrap-input100">
            <label>Course:</label>
            <br />
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              id="course"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" selected>Choose course</option>
              <option value="ug">UG</option>
              <option value="pg">PG</option>
              <option value="global">Global</option>
            </select>
          </div>

          <div className="wrap-input100">
            <label>Field:</label>
            <br />
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              id="field"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" selected>Choose field</option>
              <option value="engineering">Engineering</option>
              <option value="medical">Medical</option>
              <option value="law">Law</option>
              <option value="arts">Arts</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
            </select>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Register;
