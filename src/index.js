import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import AprendePag from "./Components/AprendePag"
import HerramientasPag from "./Components/HerramientaPag"
import ContactoPag from "./Components/ContactoPag"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aprende" element={<AprendePag />} />
      <Route path="/herramientas" element={<HerramientasPag />} />
      <Route path="/contacto" element={<ContactoPag />} />

    </Routes>
  </BrowserRouter>
);