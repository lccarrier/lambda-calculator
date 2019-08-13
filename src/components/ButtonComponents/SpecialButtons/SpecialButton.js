import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className="specials">{props.special}</button>
    </>
  );
};

export default SpecialButton;