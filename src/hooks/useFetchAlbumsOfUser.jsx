import { useEffect } from 'react';
import { fetchAlbumsOfUser } from '../redux/albumsOfUser/actions';

export default function useFetchAlbumsOfUser(id, dispatch) {
  useEffect(() => {
    dispatch(fetchAlbumsOfUser(id));
  }, [dispatch, id]);
}
