import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import products from "../../data";

const ProjectList = () => {
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
      <button>Show More</button>
    </div>
  );
};

export default ProjectList;
