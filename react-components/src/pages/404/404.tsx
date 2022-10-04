import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>Ошибка 404!</h1>
        <Link className="back-to-home-link" to="/">
          На домашнюю страницу
        </Link>
      </div>
    );
  }
}

export default Page404;
