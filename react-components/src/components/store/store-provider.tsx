import React, { createContext, useState, ReactNode } from 'react';
import { IStoreProviderContext } from './types';
import { IProductCard } from 'share/types';
import { getLocalStorage } from 'components/live-search/utils/local-storage';

const StoreProviderContext = createContext({} as IStoreProviderContext);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const [data, setData] = useState<IProductCard[]>([]);
  const [querySearch, setQuerySearch] = useState(getLocalStorage());
  const [queryPage, setQueryPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const cardsLimit = 20;
  const [isLoading, setIsLoading] = useState(true);

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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StoreProviderContext.Provider>
  );
};

export { StoreProvider, StoreProviderContext };
