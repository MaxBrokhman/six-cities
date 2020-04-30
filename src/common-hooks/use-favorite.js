import {setFavorite} from "../reducer/actions";
import {useAppContext} from "../reducer/reducer";

export const useFavorite = () => {
  const {dispatch} = useAppContext();
  const addFavHandler = (id) => () => setFavorite(id, dispatch);
  return {
    addFavHandler,
  };
};
