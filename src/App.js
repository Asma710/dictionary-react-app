import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary />
        </header>
        <footer className="App-footer">
          <a href="https://github.com/Asma710/dictionary-react-app">
            code open sourced
          </a>
          coded by Asma Mohamed Lamin
        </footer>
      </div>
    </div>
  );
}

export default App;
