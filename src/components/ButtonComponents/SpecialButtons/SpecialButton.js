import React from "react";
import styled from 'styled-components';

const SpecialButton = props => {
  return (
    <>
      <StyledButton className="specials">{props.special}</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #225C9D;
  border: none;
  color: white;
  font-size: 32px;
  box-shadow: 0px 4px 0px 0px rgba(83, 14, 17, 1);
  margin-bottom: 13px;
  margin-right: 25px;
`

export default SpecialButton;