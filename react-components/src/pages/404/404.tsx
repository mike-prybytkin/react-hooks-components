import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <h1>Ошибка 404!</h1>
      <Link to="/">На домашнюю страницу</Link>
    </>
  );
};

export default Page404;
