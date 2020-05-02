import {useEffect} from 'react';

import {
  setError,
  setOffers,
  setCity,
  setIsAuthorizationRequired,
} from '../../reducer/actions';
import {api, sendRequest} from '../../api/api';
import {TDispatch, TOffer} from '../../reducer/types';

export const useFetchedOffers = (dispatch: TDispatch): void => {
  const onFailure = (): void => {
    setError({
      message: `Offers are not available right now. Please, try again later`,
    }, dispatch);
  };
  const onSuccess = (data: Array<TOffer>, innerDispatch: TDispatch): void => {
    setOffers(data, innerDispatch);
    setCity(data[0].city.name, innerDispatch);
  };
  useEffect(() => {
    api.interceptors.response.use(null, (response) => {
      if (response.status === 401) {
        setIsAuthorizationRequired(true, dispatch);
      }
    });
    sendRequest({
      url: `/hotels`,
      onSuccess,
      onFailure,
      dispatch,
      method: `get`,
    });
  }, []);
};
