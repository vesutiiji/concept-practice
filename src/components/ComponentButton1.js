const ComponentButton1 = (props) => {
  const clickHandler = () => {
    props.setMainText("Finally...");
    props.setSubText("Practice a lot more~ baka~");
  };
  return <button onClick={clickHandler}>Click Me!</button>;
};

export default ComponentButton1;
