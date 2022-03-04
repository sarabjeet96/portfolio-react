import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import products from "../../data";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let button;
  if(darkMode) {
    button = <button className="btn-dark">Show More</button>;
  }else {
    button = <button className="btn">Show More</button>;  
  }
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some Things I’ve Built</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
          {button}
    </div>
  );
};

export default ProjectList;
