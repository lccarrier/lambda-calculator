import React from "react";
import styled from "styled-components";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <StyledButton className="operators">{props.operator}</StyledButton>
      }
    </>
  );
};

const StyledButton = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #237293;
  border: none;
  color: white;
  font-size: 32px;
  box-shadow: 0px 4px 0px 0px rgba(83, 14, 17, 1);
  margin-bottom: 13px;
`

export default OperatorButton;