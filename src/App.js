import logo from './logo.svg';
import './App.css';
import { SearchKit } from "./components/SearchKit.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find a kit by id number:
        </p>
        <SearchKit />
      </header>
    </div>
  );
}

export default App;
