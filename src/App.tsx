import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from "./pages/Page1";

function App() {
  return (
    <div className="App" style={{background: '#bdc3c7', height: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
