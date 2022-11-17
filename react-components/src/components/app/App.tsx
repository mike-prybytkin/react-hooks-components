import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import mockText from 'mocks/text';
import Form from 'pages/form/form';
import { IFetchData, IAppContext } from './types';
import { StoreProviderContext } from 'components/store/store-provider';
import API from 'api/api';

export const AppContext = createContext({} as IAppContext);

const App = () => {
  const context = useContext(StoreProviderContext);
  const { setData, querySearch, queryPage, setQueryPage, setAllPages, isLoading, setIsLoading } =
    context;

  const [fetchError, setFetchError] = useState<unknown>('');

  const getFetchData = useCallback(() => {
    return API(querySearch, queryPage);
  }, [querySearch, queryPage]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchData: IFetchData = await getFetchData();
        setData(fetchData.results);
        setAllPages(fetchData.info.pages);
        setIsLoading(false);
      } catch (error) {
        setFetchError(error);
        setData([]);
        setIsLoading(false);
        setQueryPage(1);
      }
    };
    fetchData();
  }, [getFetchData, setAllPages, setData, setIsLoading, setQueryPage]);

  useEffect(() => {
    console.log(fetchError);
  }, [fetchError]);

  return (
    <div className="App" data-testid="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main heading={mockText.headingMain} />} />
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
