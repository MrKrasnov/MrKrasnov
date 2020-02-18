import React from 'react';
//import photo
import PhotoProfile from '../img/photo-profile.jpg';

function Header() {
    return (
      <header>
          <div className="container">
            <div className="header">  
              <img src={PhotoProfile} alt="profile" className="header-photo"/>
            </div>
          </div>
      </header>
    );
  }

export default Header;