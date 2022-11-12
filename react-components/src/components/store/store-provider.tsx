import React, { createContext, useState, ReactNode } from 'react';
import { IStoreProviderContext } from './types';
import { IProductCard } from 'share/types';

const StoreProviderContext = createContext({} as IStoreProviderContext);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const [data, setData] = useState<IProductCard[]>([]);
  const [querySearch, setQuerySearch] = useState('');
  const [queryPage, setQueryPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const cardsLimit = 20;

  const updateQuery = (queryPage: number) => {
    setQueryPage(queryPage);
  };

  const onSearch = (querySearch: string) => {
    setQuerySearch(querySearch);
  };

  return (
    <StoreProviderContext.Provider
      value={{
        data,
        setData,
        querySearch,
        setQuerySearch,
        queryPage,
        setQueryPage,
        allPages,
        setAllPages,
        cardsLimit,
        onSearch,
        updateQuery,
      }}
    >
      {children}
    </StoreProviderContext.Provider>
  );
};

export { StoreProvider, StoreProviderContext };
