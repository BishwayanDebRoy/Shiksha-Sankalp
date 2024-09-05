import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const MentorReviewForm = () => {
  const [mentorName, setMentorName] = useState('');
  const [menteeName, setMenteeName] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      mentorName,
      menteeName,
      sessionDate,
      review,
    };
    console.log(reviewData);
    // Here you can send the data to your server or handle it as required
  };

  return (
    <Container maxWidth="sm">
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
          <TextField
            label="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit Review
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default MentorReviewForm;
