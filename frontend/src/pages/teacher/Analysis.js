// import React, { useState } from 'react';
// import './analysis.css';
// import { TextField, Button, Typography, Container, Box } from '@mui/material';

// const Analysis = () => {
//   const [inputText, setInputText] = useState('');
//   const [sentimentResult, setSentimentResult] = useState(null);

//   const [mentorName, setMentorName] = useState('');
//   const [menteeName, setMenteeName] = useState('');
//   const [sessionDate, setSessionDate] = useState('');
//   const [review, setReview] = useState('');
//   const apiKey = 'uPRJGKxHlywl5ldtKE7iriXnAEDFYlXZ';

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const reviewData = {
//       mentorName,
//       menteeName,
//       sessionDate,
//       review,
//     };
//     console.log(reviewData);
//     // Here you can send the data to your server or handle it as required
//   };


//   const handleAnalysisSubmit = () => {
//     const myHeaders = new Headers();
//     myHeaders.append('apikey', apiKey);

//     const requestOptions = {
//       method: 'POST',
//       redirect: 'follow',
//       headers: myHeaders,
//       body: JSON.stringify({
//         content_type: 'text',
//         language: 'en',
//         text: inputText,
//       }),
//     };

//     fetch('https://api.apilayer.com/sentiment/analysis', requestOptions)
//       .then((response) => response.json())
//       .then((result) => setSentimentResult(result))
//       .catch((error) => console.log('error', error));
//   };

//   return (

    
//     <div className='parent-container'>
//         <Container maxWidth="sm">
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Mentor Review Form
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Mentor Name"
//             value={mentorName}
//             onChange={(e) => setMentorName(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Mentee Name"
//             value={menteeName}
//             onChange={(e) => setMenteeName(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Session Date"
//             type="date"
//             value={sessionDate}
//             onChange={(e) => setSessionDate(e.target.value)}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             required
//           />
//           <TextField
//             label="Review"
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//             required
//           />
//           <Box sx={{ mt: 2 }}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit Review
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Container>
//     <div className='analysis1'>
//       <label className='bll'>Enter text:</label>
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleAnalysisSubmit} >Analyze Sentiment</button>

//       {sentimentResult && (
//         <div >
//           <h2 className='bll'>Sentiment Analysis Result:</h2>
//           <p className='bll'>Content Type: {sentimentResult.content_type}</p>
//           <p className='bll'>Language: {sentimentResult.language}</p>
//           <p className='bll'>Sentiment: {sentimentResult.sentiment}</p>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Analysis;

import React, { useState } from 'react';
import './analysis.css';
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material';

const Analysis = () => {
  const [inputText, setInputText] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);

  const [mentorName, setMentorName] = useState('');
  const [menteeName, setMenteeName] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const apiKey = 'uPRJGKxHlywl5ldtKE7iriXnAEDFYlXZ';

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      mentorName,
      menteeName,
      sessionDate,
    };
    console.log(reviewData);
    // Here you can send the data to your server or handle it as required
  };

  const handleAnalysisSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append('apikey', apiKey);

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: JSON.stringify({
        content_type: 'text',
        language: 'en',
        text: inputText,
      }),
    };

    fetch('https://api.apilayer.com/sentiment/analysis', requestOptions)
      .then((response) => response.json())
      .then((result) => setSentimentResult(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <div className='parent-container'>
      <Container maxWidth="sm">
        <Paper elevation={3} className="container">
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Mentor Review Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Mentor Name"
                value={mentorName}
                onChange={(e) => setMentorName(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Mentee Name"
                value={menteeName}
                onChange={(e) => setMenteeName(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Session Date"
                type="date"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit Review
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Paper elevation={3} className="container analysis1">
          <Box>
            <Typography variant="h5" component="h2" gutterBottom className='bll'>
              Enter text:
            </Typography>
            <TextField
              value={inputText}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleAnalysisSubmit} variant="contained" color="primary">
              Analyze Sentiment
            </Button>

            {sentimentResult && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom className='bll'>
                  Sentiment Analysis Result:
                </Typography>
                <Typography className='bll'>Content Type: {sentimentResult.content_type}</Typography>
                <Typography className='bll'>Language: {sentimentResult.language}</Typography>
                <Typography className='bll'>Sentiment: {sentimentResult.sentiment}</Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Analysis;
