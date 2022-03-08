import React from 'react'
import './footer.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import GithubLight from "../../img/github-lt.png";
import GithubDark from "../../img/github-dk.png";
import LinkedInLight from "../../img/linkedin-lt.png";
import LinkedInDark from "../../img/linkedin-dk.png";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="f-info" style={{backgroundColor: darkMode && "#333"}}>
            <a href='https://www.linkedin.com/in/sarabjeet-singh-somnal-4605841a0/'>
              <img className="f-icon" src={ darkMode ? LinkedInDark : LinkedInLight} alt="" />
            </a>
            <a href='https://github.com/sarabjeet96'>
              <img className="f-icon" src={ darkMode ? GithubDark : GithubLight} alt="" />
            </a>
    </div>
    
  )
}

export default Footer;