import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMicros from "./pages/MyMicros";
import "./index.css";
import NewMicro from "./pages/NewMicro";
import Header from "./components/Header";
import MicroDetail from "./pages/MicroDetail";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { API_BASE_URL } from "./utils/constants";

const client = new ApolloClient({
  uri: API_BASE_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App bg-gray-100">
          <Header />

          <div className="container mx-auto px-6 py-6">
            <Routes>
              <Route path="/" element={<MyMicros />} />
              <Route path="/new" element={<NewMicro />} />
              <Route path="/:microId/:microSlug" element={<MicroDetail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
