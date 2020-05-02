import {setFavorite} from "../reducer/actions";
import {useAppContext} from "../reducer/reducer";

type TUseFavorite = {
  addFavHandler: (id: number) => () => void;
}

export const useFavorite = (): TUseFavorite => {
  const {dispatch} = useAppContext();
  const addFavHandler = (id: number) => (): void => setFavorite(id, dispatch);
  return {
    addFavHandler,
  };
};
