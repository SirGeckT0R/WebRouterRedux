import { useEffect } from 'react';
import { fetchPhotosOfAlbum } from '../redux/photosOfAlbum/actions';

export default function useFetchPhotosOfAlbum(id, dispatch) {
  useEffect(() => {
    dispatch(fetchPhotosOfAlbum(id));
  }, [dispatch, id]);
}
