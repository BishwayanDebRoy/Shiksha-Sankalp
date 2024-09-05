// import * as React from 'react';
// import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';

// import HomeIcon from '@mui/icons-material/Home';
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
// import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
// import AssignmentIcon from '@mui/icons-material/Assignment';

// const StudentSideBar = () => {
//     const location = useLocation();
//     return (
//         <>
//             <React.Fragment>
//                 <ListItemButton component={Link} to="/">
//                     <ListItemIcon>
//                         <HomeIcon color={location.pathname === ("/" || "/Student/dashboard") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Home" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Student/subjects">
//                     <ListItemIcon>
//                         <AssignmentIcon color={location.pathname.startsWith("/Student/subjects") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Subjects" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Student/attendance">
//                     <ListItemIcon>
//                         <ClassOutlinedIcon color={location.pathname.startsWith("/Student/attendance") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Attendance" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Student/complain">
//                     <ListItemIcon>
//                         <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Student/complain") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Complain" />
//                 </ListItemButton>
//             </React.Fragment>
//             <Divider sx={{ my: 1 }} />
//             <React.Fragment>
//                 <ListSubheader component="div" inset>
//                     User
//                 </ListSubheader>
//                 <ListItemButton component={Link} to="/Student/profile">
//                     <ListItemIcon>
//                         <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Student/profile") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Profile" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/logout">
//                     <ListItemIcon>
//                         <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Logout" />
//                 </ListItemButton>
//             </React.Fragment>
//         </>
//     )
// }

// export default StudentSideBar


import React, { useState } from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const StudentSideBar = () => {
    const location = useLocation();
    const [isMarathi, setIsMarathi] = useState(false);

    const toggleLanguage = () => {
        setIsMarathi(!isMarathi);
    };

    return (
        <>
            <Button variant="contained" onClick={toggleLanguage} sx={{ mb: 2, ml: 2 }}>
                {isMarathi ? 'Switch to English' : 'मराठीत स्विच करा'}
            </Button>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon color={location.pathname === ("/" || "/Student/dashboard") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={isMarathi ? 'मुख्यपृष्ठ' : 'Home'} />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/subjects">
                    <ListItemIcon>
                        <AssignmentIcon color={location.pathname.startsWith("/Student/subjects") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={isMarathi ? 'विषय' : 'Subjects'} />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/attendance">
                    <ListItemIcon>
                        <ClassOutlinedIcon color={location.pathname.startsWith("/Student/attendance") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={isMarathi ? 'उपस्थिती' : 'Attendance'} />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/complain">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Student/complain") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={isMarathi ? 'तक्रार' : 'Complain'} />
                </ListItemButton>

                <ListItemButton component={Link} to="/Student/internship">
    <ListItemIcon>
        <WorkOutlineIcon color={location.pathname.startsWith("/Student/internship") ? 'primary' : 'inherit'} />
    </ListItemIcon>
    <ListItemText primary={isMarathi ? 'इंटर्नशिप' : 'Internship'} />
</ListItemButton>

<ListItemButton component={Link} to="/Student/loan">
    <ListItemIcon>
        <MonetizationOnIcon color={location.pathname.startsWith("/Student/loan") ? 'primary' : 'inherit'} />
    </ListItemIcon>
    <ListItemText primary={isMarathi ? 'कर्ज' : 'Loan'} />
</ListItemButton>

<ListItemButton component={Link} to="/Student/scholarship">
    <ListItemIcon>
        <SchoolIcon color={location.pathname.startsWith("/Student/scholarship") ? 'primary' : 'inherit'} />
    </ListItemIcon>
    <ListItemText primary={isMarathi ? 'शिष्यवृत्ती' : 'Scholarship'} />
</ListItemButton>

<ListItemButton component={Link} to="/Student/calendar">
    <ListItemIcon>
        <CalendarMonthIcon color={location.pathname.startsWith("/Student/calendar") ? 'primary' : 'inherit'} />
    </ListItemIcon>
    <ListItemText primary={isMarathi ? 'कॅलेंडर' : 'Calendar'} />
</ListItemButton>
<ListItemButton component={Link} to="/Student/meet">
    <ListItemIcon>
        <VideoCameraFrontIcon color={location.pathname.startsWith("/Student/meet") ? 'primary' : 'inherit'} />
    </ListItemIcon>
    <ListItemText primary= 'Meet' />
</ListItemButton>

            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    {isMarathi ? 'वापरकर्ता' : 'User'}
                </ListSubheader>
                <ListItemButton component={Link} to="/Student/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Student/profile") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={isMarathi ? 'प्रोफाइल' : 'Profile'} />
                </ListItemButton>
                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={isMarathi ? 'बाहेर पडा' : 'Logout'} />
                </ListItemButton>
            </React.Fragment>
        </>
    );
};

export default StudentSideBar;
