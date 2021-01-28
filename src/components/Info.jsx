import React from "react";

const Info = props => (
  <div class='info_wrap'>
    <p class='profile_img'>
      <img src='/images/profile.png' alt='profile' />
    </p>
    <h2 className='profile_name'>Iylin Kim</h2>
    <h3 className='profile_desc'>Front-End Developer</h3>
    <p className='links'>
      <a href='#'>
        <i class='fab fa-github'></i>
      </a>
    </p>
  </div>
);

export default Info;
