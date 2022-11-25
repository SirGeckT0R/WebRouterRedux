import { useEffect } from 'react';
import { fetchUser } from '../redux/user/actions';

export default function useFetchUser(id, dispatch) {
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);
}
