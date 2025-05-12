import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer className="App-footer">
        <p>
          This App was coded by{" "}
          <a href="https://github.com/Jo-Sa80" target="_blank" rel="noreferrer">
            Johanna Sandvoß
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/Jo-Sa80/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://johannasweatherappreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
