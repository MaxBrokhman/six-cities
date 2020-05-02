import {
  useCallback,
  useState,
  useEffect,
  SyntheticEvent,
} from 'react';

type TUseReviewPosting = {
  submitHandler: (evt: SyntheticEvent) => void;
  btnCaption: string;
}

export const useReviewPosting = (): TUseReviewPosting => {
  const [timer, setTimer] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const submitHandler = useCallback((evt) => {
    clearTimeout(timer);
    evt.preventDefault();
    setTimer(setTimeout(() => {
      setLoaded(true);
    }, 1000));
  }, []);
  useEffect(() => {
    return (): void => {
      setLoaded(false);
      clearTimeout(timer);
    };
  }, []);
  const btnCaption = isLoaded
    ? `Done!`
    : `Submit`;
  return {
    submitHandler,
    btnCaption,
  };
};
