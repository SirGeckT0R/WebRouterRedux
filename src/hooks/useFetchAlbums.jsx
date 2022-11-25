import { useEffect } from 'react';
import { fetchAlbums } from '../redux/albums/actions';

export default function useFetchAlbums(dispatch) {
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);
}
