// import React, { useState } from 'react';
// import { Box, Typography, Select, MenuItem, FormControl, InputLabel, Link } from '@mui/material';

// const queries = {
//     register: {
//         label: "संस्थेसोबत नोंदणी करा",
//         link: "/user_registration",
//     },
//     scholarships: {
//         label: "शिष्यवृत्त्यांबद्दल माहिती",
//         link: "/scholarships",
//     },
//     jobs: {
//         label: "नोकरी/इंटर्नशिपबद्दल माहिती",
//         link: "/jobs",
//     },
//     loans: {
//         label: "कर्जाबद्दल माहिती",
//         link: "/loans",
//     }
// };

// const Chatbot = () => {
//     const [selectedQuery, setSelectedQuery] = useState('');

//     const handleChange = (event) => {
//         setSelectedQuery(event.target.value);
//     };

//     return (
//         <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1, maxWidth: 400, margin: 'auto' }}>
//             <Typography variant="h5" gutterBottom>चॅटबॉट</Typography>
//             <FormControl fullWidth>
//                 <InputLabel>तुमचा प्रश्न निवडा</InputLabel>
//                 <Select
//                     value={selectedQuery}
//                     onChange={handleChange}
//                     label="तुमचा प्रश्न निवडा"
//                 >
//                     {Object.entries(queries).map(([key, { label }]) => (
//                         <MenuItem key={key} value={key}>{label}</MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//             {selectedQuery && (
//                 <Box sx={{ marginTop: 2 }}>
//                     <Typography variant="body1">
//                         कृपया येथे जा:
//                         <Link href={queries[selectedQuery].link} target="_blank" rel="noopener" sx={{ marginLeft: 1 }}>
//                             {queries[selectedQuery].label}
//                         </Link>
//                     </Typography>
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default Chatbot;
import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, Link } from '@mui/material';
import styled from 'styled-components';

const queries = {
    register: {
        label: "संस्थेसोबत नोंदणी करा",
        link: "/user_registration",
    },
    scholarships: {
        label: "शिष्यवृत्त्यांबद्दल माहिती",
        link: "/Student/scholarship",
    },
    jobs: {
        label: "नोकरी/इंटर्नशिपबद्दल माहिती",
        link: "/Student/internship",
    },
    loans: {
        label: "कर्जाबद्दल माहिती",
        link: "/Student/loan",
    }
};

const PageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1e3c72 30%, #2a5298 90%);
    font-family: 'Roboto', sans-serif;
    padding: 20px;
`;

const ChatbotContainer = styled(Box)`
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 15px;
    max-width: 500px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const Title = styled(Typography)`
    font-weight: bold;
    color: #1565c0;
    margin-bottom: 20px;
    font-size: 2rem;
`;

const StyledLink = styled(Link)`
    margin-left: 5px;
    color: #1565c0;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #0d47a1;
    }
`;

const Chatbot = () => {
    const [selectedQuery, setSelectedQuery] = useState('');

    const handleChange = (event) => {
        setSelectedQuery(event.target.value);
    };

    return (
        <PageContainer>
            <ChatbotContainer>
                <Title variant="h4" gutterBottom>चॅटबॉट</Title>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>तुमचा प्रश्न निवडा</InputLabel>
                    <Select
                        value={selectedQuery}
                        onChange={handleChange}
                        label="तुमचा प्रश्न निवडा"
                    >
                        {Object.entries(queries).map(([key, { label }]) => (
                            <MenuItem key={key} value={key}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {selectedQuery && (
                    <Box sx={{ marginTop: 3 }}>
                        <Typography variant="body1">
                            कृपया येथे जा:
                            <StyledLink href={queries[selectedQuery].link} target="_blank" rel="noopener">
                                {queries[selectedQuery].label}
                            </StyledLink>
                        </Typography>
                    </Box>
                )}
            </ChatbotContainer>
        </PageContainer>
    );
};

export default Chatbot;
