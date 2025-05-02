import React from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center mt-5">
          <small>Coded by Jarouschka Buis</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
