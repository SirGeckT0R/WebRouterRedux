import { useEffect } from 'react';
import { fetchAlbum } from '../redux/album/actions';

export default function useFetchAlbum(id, dispatch) {
  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, [dispatch, id]);
}
