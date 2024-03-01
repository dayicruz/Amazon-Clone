import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./UI/Header/Header";
import { HomePage } from "./components";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
