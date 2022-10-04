import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Colortheme from "./Colortheme";
import Dark from "./Dark";
import React from 'react';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/color" element={<Colortheme />}/>
          <Route path="/dark" element={<Dark />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
