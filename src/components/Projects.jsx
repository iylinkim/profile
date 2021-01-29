import React, {useEffect, useState} from "react";
import Project from "./Project";

const Projects = props => {
  const [projects, setProjects] = useState({
    0: {
      title: "Goods-maker",
      icon: <i class='fas fa-boxes'></i>,
      descriptions: "you can make your own goods",
      bakColor: "#6D6C6D",
    },
    1: {
      title: "Youtube-clone",
      icon: <i class="fab fa-youtube"></i>,
      descriptions: "Make Youtube web better",
      bakColor: "#6D6C6D",
    },
  });

  return (
    <div className='works_wrap'>
      <h3 className='title'>Recent projects</h3>
      <ul className='projects_list'>
        {Object.keys(projects).map(key => {
          return <Project projects={projects[key]} />;
        })}
      </ul>
    </div>
  );
};

export default Projects;
