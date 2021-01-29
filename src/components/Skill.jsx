import React from "react";

const Skill = ({skills}) => {
    const {icon,name} = skills;
  return <li className='skill'>
      <p className='skill_icon'>{icon}</p>
  </li>;
};

export default Skill;
