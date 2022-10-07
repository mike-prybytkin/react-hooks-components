import React from 'react';
import CreateCards from 'components/create-cards/create-cards';
import { ICard } from 'share/types';
import { ILiveSearchState } from './types';
import { ILiveSearchProps } from './types';

class LiveSearch extends React.Component<ILiveSearchProps, ILiveSearchState> {
  filterData: ICard[];

  constructor(props: ILiveSearchProps) {
    super(props);
    this.filterData = [];
    this.state = {
      value: localStorage.getItem('searchValue') ?? '',
    };
  }

  searchTextChange = (event: React.ChangeEvent) => {
    if (event.target) {
      this.setState({ value: (event.target as HTMLInputElement).value });
    }
  };

  setLocalStorage(searchFieldText: string) {
    localStorage.setItem('searchValue', searchFieldText);
  }

  getFilterData() {
    this.filterData = this.props.data.filter((item: ICard) => {
      return item.title.toLowerCase().includes(this.state.value?.toLowerCase());
    });
  }

  render() {
    this.getFilterData();
    this.setLocalStorage(this.state.value);
    return (
      <React.Fragment>
        <CreateCards {...this.filterData} />
        <div className="search-container">
          <form className="search-form">
            <span>&#128269;</span>
            <input
              className="search"
              placeholder="Search..."
              value={this.state.value}
              onChange={this.searchTextChange}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LiveSearch;
