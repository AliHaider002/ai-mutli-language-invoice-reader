import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Invoice_reader from "./pages/invoice_reader";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice/reader" element={<Invoice_reader />} />
      </Routes>
    </>
  );
}

export default App;
