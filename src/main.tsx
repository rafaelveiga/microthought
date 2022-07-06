import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMicros from "./pages/MyMicros";
import "./index.css";
import NewMicro from "./pages/NewMicro";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="App bg-gray-100">
      <Header />

      <div className="container mx-auto px-6 py-6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MyMicros />} />
            <Route path="/new" element={<NewMicro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
