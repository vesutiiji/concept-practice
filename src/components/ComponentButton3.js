const ComponentButton3 = (props) => {
  const clickHandler = () => {
    props.setMainText("Don't give up!!!");
    props.setSubText(
      "Steady is fine, as long as you learn, but don't give up!"
    );
  };
  return <button onClick={clickHandler}>Click Here!</button>;
};

export default ComponentButton3;
