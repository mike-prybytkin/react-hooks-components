import { IFetchData } from 'components/app/types';

const API = async (querySearch = '', queryPage = 1) => {
  const BASE_URL = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(`${BASE_URL}?name=${querySearch}&page=${queryPage}`);
  const fetchData: IFetchData = await response.json();
  return fetchData;
};

export default API;
