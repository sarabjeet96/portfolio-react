import React from "react";
import "./about.css";
import { ThemeContext } from '../../context'
import { useContext } from "react";
import img from "../../img/sarabjeet-card.jpg";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" style={{border: darkMode && "3px solid white"}}></div>
        <div className="a-card">
          <img src={img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Who I Am</h1>
        <p className="a-sub">a bit about me:</p>
        <p className="a-desc">
          I am a software developer based in dehradun. I am passionate about
          coding and curious to learn new things. I have completed my gradution
          in bachelor of technology IT from DIT university, dehradun.
        </p>
      </div>
    </div>
  );
};

export default About;
