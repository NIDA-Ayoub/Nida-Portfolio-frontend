import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<ProjectDetails/>} />
      </Routes>
    </div>
  );
};

export default App;