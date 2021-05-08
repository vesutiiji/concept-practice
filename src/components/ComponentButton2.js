const ComponentButton2 = (props) => {
  const clickHandler = () => {
    props.setMainText("Almost there!");
    props.setSubText("Ganbare!");
  };

  return <button onClick={clickHandler}>Click Me~</button>;
};

export default ComponentButton2;
