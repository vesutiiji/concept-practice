import logo from "./logo.svg";
import "./App.css";
import BodyText3 from "./components/BodyText3";
function App() {
  const headerText = {
    mainText: "Hello from React!",
    subText: "Practice Bakayarou~",
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BodyText3 headerText={headerText}></BodyText3>
      </header>
    </div>
  );
}

export default App;
