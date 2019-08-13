import React from "react";
import styled from 'styled-components';

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <StyledButton className="numbers">{props.number}</StyledButton>
      }
    </>
  );
};

const StyledButton = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #18437A;
  border: none;
  color: white;
  font-size: 32px;
  box-shadow: 0px 4px 0px 0px rgba(83, 14, 17, 1);
  margin-bottom: 13px;
  margin-right: 26px;

  :nth-child(10) {
    width: 188px;
    height: 80px;
    border-radius:  50px;
  }
`


export default NumberButton;