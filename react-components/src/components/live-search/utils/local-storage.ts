const getLocalStorage = () => {
  return localStorage.getItem('searchValue') ?? '';
};

const setLocalStorage = (searchFieldText: string) => {
  localStorage.setItem('searchValue', searchFieldText);
};

export { getLocalStorage, setLocalStorage };
