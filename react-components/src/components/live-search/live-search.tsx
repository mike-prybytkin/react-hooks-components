import React, { useEffect, useState } from 'react';
import { LiveSearchProps } from './types';
import { getLocalStorage, setLocalStorage } from './utils/local-storage';

const LiveSearch = (props: LiveSearchProps) => {
  const [value, setValue] = useState(getLocalStorage());
  const { onSearch } = props;

  useEffect(() => {
    onSearch(value);
    setLocalStorage(value);
  }, [value, onSearch]);

  return (
    <React.Fragment>
      <div className="search-container">
        <form className="search-form">
          <span>&#128269;</span>
          <input
            className="search"
            placeholder={props.placeholderText}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default LiveSearch;
