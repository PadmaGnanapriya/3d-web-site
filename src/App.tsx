import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <div className="App" style={{background: '#bdc3c7', height: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page1/>} />
          <Route path='/page2' element={<Page2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
