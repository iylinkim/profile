import React from "react";

const Skill = ({skills}) => {
    const {icon} = skills;
  return <li>
      {icon}
  </li>;
};

export default Skill;
