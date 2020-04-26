import {useEffect} from 'react';

import {
  setError,
  setOffers,
  setCity,
} from '../../reducer/actions';
import {sendRequest} from '../../api/api';

export const useFetchedOffers = (dispatch) => {
  const onFailure = () => {
    setError({
      message: `Offers are not available right now. Please, try again later`,
    }, dispatch);
  };
  const onSuccess = (data, innerDispatch) => {
    setOffers(data, innerDispatch);
    setCity(data[0].city.name, innerDispatch);
  };
  useEffect(() => {
    sendRequest({
      url: `/hotels`,
      onSuccess,
      onFailure,
      dispatch,
      method: `get`,
    });
  }, []);
};
