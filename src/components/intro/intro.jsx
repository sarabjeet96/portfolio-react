import React from "react";
import "./intro.css";
import Me from "../../img/Me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, My name is</h2>
          <h1 className="i-name">Sarabjeet Somnal</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Traveller</div>
            </div>
          </div>
          <p className="i-desc">
            I am a software developer interested in front-end development and
            curious to learn new technologies.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
