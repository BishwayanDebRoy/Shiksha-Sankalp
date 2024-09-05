// import React, { useEffect } from "react";
// import {
//   selectIsConnectedToRoom,
//   useHMSActions,
//   useHMSStore,
// } from "@100mslive/react-sdk";
// //import "./App.css";
// import JoinForm from "./JoinForm";
// import Conference from "./Conference";
// import Footer from "./Footer";

// const VideoChat = () => {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   const hmsActions = useHMSActions();

//   useEffect(() => {
//     window.onunload = () => {
//       if (isConnected) {
//         hmsActions.leave();
//       }
//     };
//   }, [hmsActions, isConnected]);

//   return (
//     <div >
//       {isConnected ? (
//         <>
//           <Conference />
//           <Footer />
//         </>
//       ) : (
//         <JoinForm />
//       )}
//     </div>
//   );
// };

// export default VideoChat;
