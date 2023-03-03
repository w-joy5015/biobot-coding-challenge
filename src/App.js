import logo from './logo.svg';
import './App.css';
// import { SearchKit } from "./components/SearchKit.js";
import { AutoComplete } from './components/AutoComplete.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find some Biobot kits!
        </p>
        <AutoComplete />
      </header>
    </div>
  );
}

export default App;
