import axios from 'axios';
import LiveSearch from 'components/live-search/live-search';
import React from 'react';
import { ICard } from 'share/types';

class FetchService extends React.Component<unknown, { data: ICard[]; isLoading: boolean }> {
  constructor(props: ICard[]) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get<ICard[]>('https://fakestoreapi.com/products?limit=20');
    this.setState({
      data: response.data,
      isLoading: false,
    });
  }

  render() {
    return <LiveSearch {...this.state} />;
  }
}

export default FetchService;
