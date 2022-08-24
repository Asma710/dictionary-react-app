import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary dictionary="sunset" />
        </header>
        <footer className="App-footer">
          <a href="https://github.com/Asma710/dictionary-react-app">
            code open sourced
          </a>
          <strong> Coded by Asma Mohamed Lamin</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
