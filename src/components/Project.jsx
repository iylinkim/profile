import React from "react";

const Project = ({ projects }) => {
  const { title, icon, descriptions, bakColor } = projects;
  return (
    <li className={`project ${bakColor}`}>
      <a href="#" title={title}>
        <h4>{title}</h4>
        <p className="project_icon">{icon}</p>
        <p className="project_desc">{descriptions}</p>
      </a>
    </li>
  );
};

export default Project;
