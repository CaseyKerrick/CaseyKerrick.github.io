import React from 'react-dom';
import { AppBar, Toolbar, Avatar, Button } from '@mui/material';
import '../styles/NavBar.css';

// #53CBFF

function NavBar() {
  const pages = [
    // { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Blog', url: '/blog' },
  ];
  
  return (
    <AppBar>
      <Toolbar className="toolbar">
        <Avatar alt="Red videogame berry" src="/favicon.png" />
        <div className="navButton">
          <Button
            fullWidth
            variant="text"
            href='/'
            style={{ fontSize: '17px', lineHeight: '21px', color: '#fff', fontWeight: '600' }}
          >
            Home
          </Button>
        </div>
        {
          pages && pages.map(page => (
            <div key={page.label}>
              <span className="temp">|</span>
              <div className="navButton" key={page.label}>
                <Button
                  fullWidth
                  variant="text"
                  href={page.url}
                  style={{ fontSize: '17px', lineHeight: '21px', color: '#fff', fontWeight: '600' }}
                >
                  {page.label}
                </Button>
              </div>
            </div>
          ))
        }
      </Toolbar>
    </AppBar>
    
    //   <AppBar>
    //     <Toolbar>
    //       <Avatar alt="Red videogame berry" src="/favicon.png" />
    //       <div className="navButton">
    //         <Button fullWidth variant="contained">Home</Button>
    //       </div>
    //       <Button className="navButton" classes="navButton" variant="text">About</Button>
    //       <Button classes="navButton" variant="contained">Blog</Button>
    //     </Toolbar>
    //   </AppBar>

    //   <div>
    //     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    //   </div>
    // </div>
    

  );
}

export default NavBar;
