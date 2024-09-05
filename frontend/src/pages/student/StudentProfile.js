// import React from 'react'
// import styled from 'styled-components';
// import { Card, CardContent, Typography, Grid, Box, Avatar, Container, Paper } from '@mui/material';
// import { useSelector } from 'react-redux';

// const StudentProfile = () => {
//   const { currentUser, response, error } = useSelector((state) => state.user);

//   if (response) { console.log(response) }
//   else if (error) { console.log(error) }

//   const sclassName = currentUser.sclassName
//   const studentSchool = currentUser.school

//   return (
//     <>
//       <Container maxWidth="md">
//         <StyledPaper elevation={3}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Avatar alt="Student Avatar" sx={{ width: 150, height: 150 }}>
//                   {String(currentUser.name).charAt(0)}
//                 </Avatar>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="h5" component="h2" textAlign="center">
//                   {currentUser.name}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="subtitle1" component="p" textAlign="center">
//                   Student Roll No: {currentUser.rollNum}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="subtitle1" component="p" textAlign="center">
//                   Class: {sclassName.sclassName}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="center">
//                 <Typography variant="subtitle1" component="p" textAlign="center">
//                   School: {studentSchool.schoolName}
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </StyledPaper>
//         <Card>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Personal Information
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Date of Birth:</strong> January 1, 2000
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Gender:</strong> Male
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Email:</strong> john.doe@example.com
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Phone:</strong> (123) 456-7890
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Address:</strong> 123 Main Street, City, Country
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="subtitle1" component="p">
//                   <strong>Emergency Contact:</strong> (987) 654-3210
//                 </Typography>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </Container>
//     </>
//   )
// }

// export default StudentProfile

// const StyledPaper = styled(Paper)`
//   padding: 20px;
//   margin-bottom: 20px;
// `;


import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid, Box, Avatar, Container, Paper, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const StudentProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response); }
  else if (error) { console.log(error); }

  const sclassName = currentUser.sclassName;
  const studentSchool = currentUser.school;

  const [isMarathi, setIsMarathi] = useState(false);

  const toggleLanguage = () => {
    setIsMarathi(!isMarathi);
  };

  return (
    <>
      <Container maxWidth="md">
        <Button variant="contained" onClick={toggleLanguage} sx={{ mb: 2 }}>
          {isMarathi ? 'Switch to English' : 'मराठीत स्विच करा'}
        </Button>
        <StyledPaper elevation={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Avatar alt="Student Avatar" sx={{ width: 150, height: 150 }}>
                  {String(currentUser.name).charAt(0)}
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="h5" component="h2" textAlign="center">
                  {currentUser.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  {isMarathi ? 'विद्यार्थी क्रमांक:' : 'Student Roll No:'} {currentUser.rollNum}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  {isMarathi ? 'वर्ग:' : 'Class:'} {sclassName.sclassName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  {isMarathi ? 'शाळा:' : 'School:'} {studentSchool.schoolName}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </StyledPaper>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {isMarathi ? 'वैयक्तिक माहिती' : 'Personal Information'}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>{isMarathi ? 'जन्मतारीख:' : 'Date of Birth:'}</strong> {isMarathi ? '1 जानेवारी 2000' : 'January 1, 2000'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>{isMarathi ? 'लिंग:' : 'Gender:'}</strong> {isMarathi ? 'पुरुष' : 'Male'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>{isMarathi ? 'ईमेल:' : 'Email:'}</strong> john.doe@example.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>{isMarathi ? 'फोन:' : 'Phone:'}</strong> (123) 456-7890
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>{isMarathi ? 'पत्ता:' : 'Address:'}</strong> 123 Main Street, City, Country
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" component="p">
                  <strong>{isMarathi ? 'आपत्कालीन संपर्क:' : 'Emergency Contact:'}</strong> (987) 654-3210
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default StudentProfile;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;
