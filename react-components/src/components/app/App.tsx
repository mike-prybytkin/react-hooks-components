import React, { useEffect, useState, useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import mockText from 'mocks/text';
import Form from 'pages/form/form';
import { IFetchData } from './types';
import { IProductCard } from 'share/types';

const App = () => {
  const [data, setData] = useState<IProductCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<unknown>('');
  const [querySearch, setQuerySearch] = useState('');
  const [queryPage, setQueryPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const cardsLimit = 20;

  const getFetchUrl = useCallback(() => {
    const BASE_URL = `https://rickandmortyapi.com/api/character/`;
    return `${BASE_URL}?name=${querySearch}&page=${queryPage}`;
  }, [querySearch, queryPage]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(getFetchUrl());
        const fetchData: IFetchData = await response.json();

        setData(fetchData.results);
        setAllPages(fetchData.info.pages);
        setIsLoading(false);
      } catch (error) {
        setFetchError(error);
        setData([]);
        setIsLoading(false);
        setQueryPage(1);
      }
    }
    fetchData();
  }, [getFetchUrl]);

  useEffect(() => {
    console.log(fetchError);
  }, [fetchError]);

  const updateQuery = (queryPage: number) => {
    setQueryPage(queryPage);
  };

  const onSearch = (querySearch: string) => {
    setQuerySearch(querySearch);
  };

  return (
    <div className="App" data-testid="app">
      <Header onSearch={onSearch} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                cards={data}
                heading={mockText.headingMain}
                queryPage={queryPage}
                allPages={allPages}
                cardsLimit={cardsLimit}
                updateQuery={updateQuery}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutUs heading={mockText.headingAboutUs} message={mockText.pageNotReady} />}
          />
          <Route
            path="/form"
            element={
              <Form
                heading={mockText.headingForm}
                noCreatedUserMessage={mockText.notCreatedUserInForm}
              />
            }
          />
          <Route
            path="/notFound"
            element={
              <Page404 heading={mockText.heading404} backToHomelinkText={mockText.linkBackToHome} />
            }
          />
          <Route path="/*" element={<Navigate to="/notFound" />} />
        </Routes>
        {isLoading && <p className="main__message_loading">{mockText.loading}</p>}
      </main>
    </div>
  );
};

export default App;
