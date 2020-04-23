import {useState, useCallback} from 'react';

import {setSort} from '../../reducer/actions';

export const useSortOptions = (dispatch) => {
  const [isOpened, setOpened] = useState(false);

  const dropdownClickHandler = useCallback(() => {
    setOpened(!isOpened);
  }, [isOpened]);

  const sortOptionClickHandler = (sorting) => () => {
    setSort(sorting, dispatch);
    setOpened(false);
  };

  return {
    className: isOpened
      ? `opened`
      : `closed`,
    dropdownClickHandler,
    sortOptionClickHandler,
  };
};
