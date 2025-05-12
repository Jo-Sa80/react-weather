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
          <a href="https://github.com/Jo-Sa80" target="_blank">
            Johanna Sandvoß
          </a>{" "}
          and is open sourced on{" "}
          <a href="https://github.com/Jo-Sa80/react-weather" target="_blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://johannasweatherappreact.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
