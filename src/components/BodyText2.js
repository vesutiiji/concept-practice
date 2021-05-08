import ComponentButton2 from "./ComponentButton2";
import React, { useEffect, useState } from "react";

const BodyText2 = (props) => {
  const [mainText, setMainText] = useState();
  const [subText, setSubtext] = useState();

  useEffect(() => {
    setMainText(props.headerText.mainText);
    setSubtext(props.headerText.subText);
  }, []);
  return (
    <div>
      <h1>{mainText}</h1>
      <h2>{subText}</h2>
      <ComponentButton2 setMainText={setMainText} setSubText={setSubtext} />
    </div>
  );
};
export default BodyText2;
