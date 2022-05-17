import React from 'react-dom';
import NavBar from './NavBar';
import { Paper, Box, Typography } from '@mui/material';
import headshot from '../images/headshot.jpg';
import '../styles/Home.css';

function Home() {
  
  // https://projecteuler.net/profile/Rainny_Day.png

  return (
    <div>
      <NavBar />
      <Paper className="homeBody" elevation={3}>
        <Box style={{ display: 'flex', alignItems: 'flex-start', color: '#363636' }}>
          <img src={headshot} className="headshot" />
          <div className="headshotContent">
            <Typography variant="h4">Casey Kerrick</Typography>
            <Typography variant="h6" style={{ color: 'gray' }}>(He/They)</Typography>
          </div>
          
        </Box>
      </Paper>
    </div>
  );
}

export default Home;
