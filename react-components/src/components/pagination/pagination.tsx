import React, { useContext, useState, useEffect, useCallback } from 'react';
import mockText from 'mocks/text';
import { StoreProviderContext } from 'components/store/store-provider';

const Pagination = () => {
  const context = useContext(StoreProviderContext);
  const { queryPage, allPages, updateQuery } = context;
  const [arrayForButtons, setArrayForButtons] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const preparingArrayButtons = useCallback(() => {
    const newArray = [];
    for (let i = 1; i <= allPages; i++) {
      newArray.push(i);
    }
    setArrayForButtons(newArray);
  }, [allPages]);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const changePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pageNumber = Number(event.currentTarget.textContent);
    updateQuery(pageNumber);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    preparingArrayButtons();
  }, [queryPage, allPages, preparingArrayButtons]);

  useEffect(() => {
    updateQuery(currentPage);
  }, [currentPage, updateQuery]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === allPages;

  return allPages > 1 ? (
    <div className="pagination-wrapper">
      <button className="pagination-prev-button" onClick={prevPage} disabled={isFirstPage}>
        {mockText.prevButton}
      </button>
      <div className="numerical-buttons-wrapper">
        {arrayForButtons.map((numButton) => {
          return (
            <button
              key={numButton}
              className={numButton === currentPage ? 'numerical-button active' : 'numerical-button'}
              onClick={changePage}
            >
              {numButton}
            </button>
          );
        })}
      </div>
      <button className="pagination-next-button" onClick={nextPage} disabled={isLastPage}>
        {mockText.nextButton}
      </button>
    </div>
  ) : null;
};

export default Pagination;
