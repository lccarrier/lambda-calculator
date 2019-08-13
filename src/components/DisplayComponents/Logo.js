import React from "react";
import styled from 'styled-components';

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (

    <div className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
   
  );
};



export default Logo;
