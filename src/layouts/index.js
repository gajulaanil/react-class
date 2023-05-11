import React from "react";
import { Outlet } from "react-router";

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="react-project_layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
