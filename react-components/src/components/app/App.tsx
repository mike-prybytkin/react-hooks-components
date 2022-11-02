import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import { IAppState } from './types';
import mockText from 'mocks/text';
import Form from 'pages/form/form';
import { IFetchData } from './types';

class App extends React.Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      fetchError: '',
      querySearch: '',
    };
  }

  async fetchData() {
    const URL = `https://rickandmortyapi.com/api/character/?name=${this.state.querySearch}`;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(URL);
      const fetchData: IFetchData = await response.json();
      this.setState({
        data: fetchData.results,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        fetchError: error,
      });
    }
  }

  onSearch = (querySearch: string) => {
    this.setState({
      querySearch: querySearch,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Readonly<unknown>, prevState: Readonly<IAppState>): void {
    if (prevState.querySearch !== this.state.querySearch) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="App" data-testid="app">
        <Header onSearch={this.onSearch} />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<Main cards={this.state.data} heading={mockText.headingMain} />}
            />
            <Route
              path="/about"
              element={
                <AboutUs heading={mockText.headingAboutUs} message={mockText.pageNotReady} />
              }
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
                <Page404
                  heading={mockText.heading404}
                  backToHomelinkText={mockText.linkBackToHome}
                />
              }
            />
            <Route path="/*" element={<Navigate to="/notFound" />} />
          </Routes>
          {this.state.isLoading && <p className="main__message_loading">{mockText.loading}</p>}
        </main>
      </div>
    );
  }
}

export default App;
