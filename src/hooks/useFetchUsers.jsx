import { useEffect } from 'react';
import { fetchUsers } from '../redux/users/actions';

export default function useFetchUsers(dispatch) {
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
}
