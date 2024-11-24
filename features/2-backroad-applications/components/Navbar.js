import React from 'react';
import Logo from '../images/logo.svg';
import { socialLinks } from '../../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} itemClass="nav-icon" {...link} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
