import React from 'react-dom';
import NavBar from './NavBar';
import { Paper } from '@mui/material';
import resume from '../images/resume.pdf';
import '../styles/Resume.css';

function Resume() {
  return (
    <div>
      <NavBar />
      <Paper className="resumeBody" elevation={3}>
        <iframe className="resume" src={resume}></iframe>
      </Paper>
      <br />
    </div>
  );
}

export default Resume;