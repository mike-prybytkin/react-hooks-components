import AboutUs from 'pages/AboutUs/AboutUs';
import Page404 from 'pages/404/404';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/404" element={<Page404 />} />
    </Routes>
  );
}

export default App;
