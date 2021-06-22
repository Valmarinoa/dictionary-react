import logo from "./tempologo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header fixed-top">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <div className="footerContainer">
        <footer className="text-center">
          Opensource code by Valentina Marino
        </footer>
      </div>
    </div>
  );
}
