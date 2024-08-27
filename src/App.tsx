import "./App.css";
import { config } from "./components/config";
import Dropdown from "./components/RecursiveDropdown";

function App() {
  return (
    <div className="App">
      <Dropdown data={config} />
    </div>
  );
}

export default App;
