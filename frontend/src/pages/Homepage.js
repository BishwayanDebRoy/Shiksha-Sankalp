// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Grid, Box, Button } from '@mui/material';
// import styled from 'styled-components';
// import Students from "../assets/students.svg";
// import { LightPurpleButton } from '../components/buttonStyles';


// const Homepage = () => {
//     return (
//         <StyledContainer>
//             <Grid container spacing={0}>
//                 <Grid item xs={12} md={6}>
//                     <img src={Students} alt="students" style={{ width: '100%' }} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                 <div>
//       <h1>If you want to join our organization go to the link below</h1>
//       <Link to="/usersignup">
//         <button className="connect-button">Connect with Us</button>
//       </Link>
//     </div>
//                     <StyledPaper elevation={3}>
//                         <StyledTitle>
//                             Welcome to
//                             <br />
//                             School Management
//                             <br />
//                             System
//                         </StyledTitle>
//                         <StyledText>
//                             Streamline school management, class organization, and add students and faculty.
//                             Seamlessly track attendance, assess performance, and provide feedback.
//                             Access records, view marks, and communicate effortlessly.
//                         </StyledText>
//                         <StyledBox>
//                             <StyledLink to="/choose">
//                                 <LightPurpleButton variant="contained" fullWidth>
//                                     Login
//                                 </LightPurpleButton>
//                             </StyledLink>
//                             <StyledLink to="/chooseasguest">
//                                 <Button variant="outlined" fullWidth
//                                     sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
//                                 >
//                                     Login as Guest
//                                 </Button>
//                             </StyledLink>
//                             <StyledText>
//                                 Don't have an account?{' '}
//                                 <Link to="/Adminregister" style={{color:"#550080"}}>
//                                     Sign up
//                                 </Link>
//                             </StyledText>
//                         </StyledBox>
//                     </StyledPaper>
//                 </Grid>
//             </Grid>
//         </StyledContainer>
//     );
// };

// export default Homepage;

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const StyledPaper = styled.div`
//   padding: 24px;
//   height: 100vh;
// `;

// const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content:center;
//   gap: 16px;
//   padding: 24px;
// `;

// const StyledTitle = styled.h1`
//   font-size: 3rem;
//   color: #252525;
//   /* font-family: "Manrope"; */
//   font-weight: bold;
//   padding-top: 0;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledText = styled.p`
//   /* color: #550080; */
//   margin-top: 30px;
//   margin-bottom: 30px; 
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from '../assets/students.svg';
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <StyledImage src={Students} alt="students" />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledContent>
            <StyledHeader>
              If you want to join our organization go to the link below
            </StyledHeader>
            <StyledLink to="/usersignup">
              <StyledButton className="connect-button">
                Connect with Us
              </StyledButton>
            </StyledLink>
            <div>  </div>
            <StyledLink to="/chatbot">
              <StyledButton className="connect-button">
                Need Help? Ask Our Chatbot.
              </StyledButton>
            </StyledLink>
            <StyledPaper>
              <StyledTitle>
                Welcome to
                <br />
                Shiksha Sankalp


              </StyledTitle>
              <StyledText>
                Streamline school management, class organization, and add students and faculty.
                Seamlessly track attendance, assess performance, and provide feedback.
                Access records, view marks, and communicate effortlessly.
              </StyledText>
              <StyledBox>
                <StyledLink to="/choose">
                  <LightPurpleButton variant="contained" fullWidth>
                    Login
                  </LightPurpleButton>
                </StyledLink>
                <StyledLink to="/chooseasguest">
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                  >
                    Login as Guest
                  </Button>
                </StyledLink>
                <StyledFooterText>
                  Don't have an account?{' '}
                  <StyledLink to="/Adminregister">
                    Sign up
                  </StyledLink>
                </StyledFooterText>
                <div></div>
                <StyledFooterText>
                  Want to Donate to our Host?{' '}
                  <StyledLink to="https://docs.google.com/forms/d/e/1FAIpQLSfelm3GpdOEc8ENpcmFAvFuOm4hG0JJbGc6Qj3nMp95rUwBYQ/viewform?usp=sf_link ">
                    Donate
                  </StyledLink>
                </StyledFooterText>
              </StyledBox>
            </StyledPaper>
          </StyledContent>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledContent = styled.div`
  padding: 20px;
`;

const StyledHeader = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #252525;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #7f56da;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
  color: #252525;
`;

const StyledFooterText = styled(StyledText)`
  margin-top: 20px;
  color: #550080;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;