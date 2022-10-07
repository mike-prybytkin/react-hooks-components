import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/notFound" element={<Page404 />} />
            <Route path="/*" element={<Navigate to="/notFound" />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
