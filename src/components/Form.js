import React from "react";

const Form = props => {
  const onButtonClick = () => {
    props.history.go(-1);
  };

  return (
    <>
      <h1>Form</h1>
      <button onClick={onButtonClick}>Go Back</button>
    </>
  );
};

export default Form;
