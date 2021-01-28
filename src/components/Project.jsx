import React from "react";

const Project = ({projects}) => {
  const {title, icon, descriptions, bakColor} = projects;
  return (
    <li>
      <h4>{title}</h4>
      <p>{descriptions}</p>
      {icon}
    </li>
  );
};

export default Project;
