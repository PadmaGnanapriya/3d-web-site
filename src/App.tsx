import React, {Suspense, useEffect, useState} from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const Cube1 = React.lazy(() => import("./pages/Cube1"));
const Cube2 = React.lazy(() => import("./pages/Cube2"));
const Cylinder1 = React.lazy(() => import("./pages/Cylinder1"));
const Cylinder2 = React.lazy(() => import("./pages/Cylinder2"));
const Home = React.lazy(() => import("./pages/Home"));
const Pyramid1 = React.lazy(() => import("./pages/Pyramid1"));
const Pyramid2 = React.lazy(() => import("./pages/Pyramid2"));
const Sphere1 = React.lazy(() => import("./pages/Sphere1"));
const Sphere2 = React.lazy(() => import("./pages/Sphere2"));
const Feedback = React.lazy(() => import("./pages/Feedback"));

function App() {
  const [language, setLanguage] = useState('EN');
  const onChangeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  }

  useEffect(() => {
    const language = localStorage.getItem('lang');
    if (language) {
      setLanguage(language);
    }
  }, [])

  return (
    <div className="App" style={{background: '#bdc3c7', minHeight: '100vh'}}>
      <div className="header">
        <a href="/" title="Click to navigate to home">&#x2302; Home</a>
        <select className="language-select" onChange={(e) => onChangeLanguage(e.target.value)} value={language}>
          <option value="EN">English</option>
          <option value="SI">සිංහල</option>
          <option value="TM">தமிழ்</option>
        </select>
      </div>
      <div className="bottom-div">
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path='/cube' element={<Cube1 language={language}/>}/>
              <Route path='/cube-2' element={<Cube2 language={language}/>}/>
              <Route path='/cylinder' element={<Cylinder1 language={language}/>}/>
              <Route path='/cylinder-2' element={<Cylinder2 language={language}/>}/>
              <Route path='/' element={<Home language={language}/>}/>
              <Route path='/pyramid' element={<Pyramid1 language={language}/>}/>
              <Route path='/pyramid-2' element={<Pyramid2 language={language}/>}/>
              <Route path='/sphere' element={<Sphere1 language={language}/>}/>
              <Route path='/sphere-2' element={<Sphere2 language={language}/>}/>
              <Route path='/feedback' element={<Feedback language={language}/>}/>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
