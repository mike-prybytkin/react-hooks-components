const API = async (querySearch = '', queryPage = 1) => {
  const BASE_URL = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(`${BASE_URL}?name=${querySearch}&page=${queryPage}`);
  return await response.json();
};

export default API;
