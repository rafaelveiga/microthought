import { useState } from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container px-6 py-6 mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-800">My Micros</h2>
      </div>
    </div>
  );
}

export default App;
