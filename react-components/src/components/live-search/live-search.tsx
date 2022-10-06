import React from 'react';
import { ILiveSearchState } from './types';

class LiveSearch extends React.Component<unknown, ILiveSearchState> {
  state = {
    value: '' || localStorage.getItem('searchValue') || undefined,
  };

  searchTextChange = (event: React.ChangeEvent) => {
    if (event.target) {
      this.setState({ value: (event.target as HTMLInputElement).value });
    }
  };

  setLocalStorage(searchFieldText: string | undefined) {
    localStorage.setItem('searchValue', searchFieldText || '');
  }

  render() {
    this.setLocalStorage(this.state.value);

    return (
      <div className="search-container">
        <form className="search-form">
          <input
            className="search"
            placeholder="&#128269; Search..."
            value={this.state.value}
            onChange={this.searchTextChange}
          />
        </form>
      </div>
    );
  }
}

export default LiveSearch;
