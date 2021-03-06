import ComponentButton1 from "./ComponentButton1";
import React, { useEffect, useState } from "react";

const BodyText1 = (props) => {
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
      <ComponentButton1 setMainText={setMainText} setSubText={setSubText} />
    </div>
  );
};

export default BodyText1;
