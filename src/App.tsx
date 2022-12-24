import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cone1 from "./pages/Cone1";
import Cone2 from "./pages/Cone2";
import Cube1 from "./pages/Cube1";
import Cube2 from "./pages/Cube2";
import Cylinder1 from "./pages/Cylinder1";
import Cylinder2 from "./pages/Cylinder2";
import Home from "./pages/Home";
import Prism1 from "./pages/Prism1";
import Prism2 from "./pages/Prism2";
import Pyramid1 from "./pages/Pyramid1";
import Pyramid2 from "./pages/Pyramid2";
import Sphere1 from "./pages/Sphere1";
import Sphere2 from "./pages/Sphere2";


function App() {
  return (
    <div className="App" style={{background: '#bdc3c7', minHeight: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/cone' element={<Cone1/>}/>
          <Route path='/cone-2' element={<Cone2/>}/>
          <Route path='/cube' element={<Cube1/>}/>
          <Route path='/cube-2' element={<Cube2/>}/>
          <Route path='/cylinder' element={<Cylinder1/>}/>
          <Route path='/cylinder-2' element={<Cylinder2/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/prism' element={<Prism1/>}/>
          <Route path='/prism-2' element={<Prism2/>}/>
          <Route path='/pyramid' element={<Pyramid1/>}/>
          <Route path='/pyramid-2' element={<Pyramid2/>}/>
          <Route path='/sphere' element={<Sphere1/>}/>
          <Route path='/sphere-2' element={<Sphere2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
