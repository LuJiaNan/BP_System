import logo from "./logo.svg";
import "./App.css";
import Page from "./pages/test.js";
import Chart from "./pages/chart.js";
import BanPick from "./redux/container";

const { ipcRenderer } = window.electron;

const minWindow = () => {
  ipcRenderer.send("min");
};

const maxWindow = () => {
  ipcRenderer.send("max");
};

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <button id="" onClick={minWindow}>最小化窗口</button>
        <button id="" onClick={maxWindow}>最大化窗口</button>
        <Page/> */}
      {/* <Chart /> */}
      {/* <Button onClcik={minWindow}>最小化窗口</Button> */}
      <BanPick/>
    </div>
  );
}

export default App;
