import React from 'react-dom';
import NavBar from './NavBar';
import { Paper, Box, Typography } from '@mui/material';
import headshot from '../images/headshot.jpg';
import linkedinLogo from '../images/linkedin-logo.png';
import githubLogo from '../images/github-logo.png';
import cheriBerry from '../images/cheriberry.png';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <NavBar />
      <Paper className="homeBody" elevation={3}>
        <Box className="introductionBox">
          <img src={headshot} className="headshot" />
          <div className="headshotContent">
            <Typography variant="h4">Casey Kerrick</Typography>
            <Typography style={{ color: 'gray' }}>He/They | Minneapolis, MN | Not currently available for hire</Typography>
            <Typography variant="h6">I am a Software Engineering Consultant with 4+ years of experience and a strong background in communication and problem solving. I worked as a full stack developer for various clients, including several Fortune 500 companies. I&apos;m comfortable working with both small and large Agile teams, and am very experienced with pair programming, team collaboration, and team problem solving. I have experience communicating directly with clients in order to gather requirements and write stories, and I specialize in writing complex, efficient algorithms.</Typography>
          </div>
        </Box>
        <div className="horizontalLine"></div>
        <Box className="appBox">
          <img src="https://projecteuler.net/profile/Rainny_Day.png" />
          <img className="cheriberry" src={cheriBerry} />
          <a href="https://www.linkedin.com/in/casey-kerrick-13036a7b/" target="_blank" rel="noreferrer noopener"><img style={{ height: '60px', width: 'auto', borderRadius: '4px' }} src={linkedinLogo} /></a>
          <img className="cheriberry" src={cheriBerry} />
          <a href="https://github.com/CaseyKerrick" target="_blank" rel="noreferrer noopener"><img style={{ height: '60px', width: 'auto' }} src={githubLogo} /></a>
        </Box>
      </Paper>
    </div>
  );
}

export default Home;
