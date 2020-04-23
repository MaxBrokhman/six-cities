import React from 'react';

import {useAppContext} from '../../reducer/reducer';
import {useSortOptions} from './hooks';
import {sortOptions} from '../../config';

export const SortingVariants = () => {
  const {state, dispatch} = useAppContext();
  const {
    className,
    dropdownClickHandler,
    sortOptionClickHandler,
  } = useSortOptions(dispatch);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={dropdownClickHandler}>
        {state.sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlink="href=#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${className}`}>
        {
          Object.keys(sortOptions).map((option) => {
            const optionClass = option === state.sort
              ? `places__option--active`
              : ``;
            return (
              <li
                className={`places__option ${optionClass}`}
                tabIndex="0"
                key={option}
                onClick={sortOptionClickHandler(option)}
              >
                {option}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
};
