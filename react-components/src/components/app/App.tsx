import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import { ICard } from 'share/types';
import { IAppState } from './types';

class App extends React.Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      currentData: [],
    };
    this.onSearch = this.onSearch.bind(this);
  }

  async componentDidMount() {
    const URL = 'https://fakestoreapi.com/products?limit=20';
    this.setState({ isLoading: true });
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((json: ICard[]) =>
          this.setState({
            data: json,
            isLoading: false,
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  onSearch(cards: ICard[]) {
    this.setState({
      currentData: cards,
    });
  }

  render() {
    return (
      <div className="App">
        <Header cards={this.state.data} onSearch={this.onSearch} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main cards={this.state.currentData} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/notFound" element={<Page404 />} />
            <Route path="/*" element={<Navigate to="/notFound" />} />
          </Routes>
          {this.state.isLoading && <p className="main__message_loading">Loading ...</p>}
          {this.state.currentData.length === 0 && !this.state.isLoading && (
            <p className="main__message_not-found">Sorry, item not found...</p>
          )}
        </main>
      </div>
    );
  }
}

export default App;
