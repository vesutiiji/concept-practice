import ComponentButton3 from "./ComponentButton3";
import React, { useEffect, useState } from "react";

const BodyText3 = (props) => {
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
      <ComponentButton3 setMainText={setMainText} setSubText={setSubText} />
    </div>
  );
};

export default BodyText3;
