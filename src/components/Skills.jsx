import React, {useEffect, useState} from "react";
import Skill from "./Skill";

const Skills = props => {
  const [skills, setSkills] = useState({
    0: {
      name: "html",
      icon: <i class='fab fa-html5'></i>,
    },
    1: {
      name: "css",
      icon: <i class='fab fa-css3-alt'></i>,
    },
    2: {
      name: "javascript",
      icon: <i class="fab fa-js-square"></i>,
    },
    3: {
      name: "react",
      icon: <i class="fab fa-react"></i>,
    },
  });

  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {Object.keys(skills).map(key => {
          return <Skill skills={skills[key]} />;
        })}
      </ul>
    </div>
  );
};

export default Skills;
