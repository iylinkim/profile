import React, {useEffect, useState} from "react";
import Project from "./Project";

const Projects = props => {
  const [projects, setProjects] = useState({
    0: {
      title: "Goods-maker",
      icon: <i class='fas fa-boxes'></i>,
      descriptions: "you can make your own goods",
      bakColor: "gold",
    },
    1: {
      title: "Youtube-clone",
      icon: <i class="fab fa-youtube"></i>,
      descriptions: "Make Youtube web better",
      bakColor: "skyblue",
    },
  });

  return (
    <div>
      <h3>Recent projects</h3>
      <ul>
        {Object.keys(projects).map(key => {
          return <Project projects={projects[key]} />;
        })}
      </ul>
    </div>
  );
};

export default Projects;
<h1>Projects</h1>;
