import {useState, useCallback} from 'react';

import {setSort} from '../../reducer/actions';
import {TDispatch} from '../../reducer/types';

type TUseSortOptions = {
  className: string;
  dropdownClickHandler: () => void;
  sortOptionClickHandler: (sorting: string) => () => void;
}

export const useSortOptions = (dispatch: TDispatch): TUseSortOptions => {
  const [isOpened, setOpened] = useState(false);

  const dropdownClickHandler = useCallback(() => {
    setOpened(!isOpened);
  }, [isOpened]);

  const sortOptionClickHandler = (sorting: string) => (): void => {
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
