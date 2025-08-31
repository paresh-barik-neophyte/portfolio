import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;