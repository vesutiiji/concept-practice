import logo from "./logo.svg";
import "./App.css";
import BodyText from "./components/BodyText";

function App() {
  const headerText = {
    mainText: "Hello from React!",
    subText: "Practice Bakayarou~",
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BodyText headerText={headerText}></BodyText>
      </header>
    </div>
  );
}

export default App;
