import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layouts";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const ReactProject = () => {
  const sayhello = () => {
    console.log("Hello World!");
  };
  const printName = (fun) => {
    if (typeof fun === "function") {
      fun();
    }
  };

  printName(sayhello);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactProject;
