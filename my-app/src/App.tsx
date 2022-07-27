import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>}>
          <Route index element={<div></div>} />
          <Route path="blogs" element={<div></div>} />
          <Route path="contact" element={<div></div>} />
          <Route path="*" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
