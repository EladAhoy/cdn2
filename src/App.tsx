import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
