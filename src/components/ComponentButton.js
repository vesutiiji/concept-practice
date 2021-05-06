const ComponentButton = (props) => {
  const clickHandler = () => {
    props.setMainText("Keep Practicing...");
    props.setSubText("dummy.");
  };

  return <button onClick={clickHandler}>Click Here</button>;
};

export default ComponentButton;
