import ComponentButton from "./ComponentButton";
import React, { useEffect, useState } from "react";

const BodyText = (props) => {
  const [mainText, setMainText] = useState();
  const [subText, setSubText] = useState();
  useEffect(() => {
    setMainText(props.headerText.mainText);
    setSubText(props.headerText.subText);
  }, []);

  return (
    <div>
      <h1>{mainText}</h1>
      <h2>{subText}</h2>
      <ComponentButton setMainText={setMainText} setSubText={setSubText} />
    </div>
  );
};

export default BodyText;

// if no array will run at when component goes live or when components gets updated
// if there is NO array will only run when component is created
// if there is filled array

// let mainText = "";
//
// const setMainText = (newText) => {
//   mainText = newText;
// };
