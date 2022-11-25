import { Link } from 'react-router-dom';
import BackLink from '../components/BackLink';
import ErrorCustom from '../components/ErrorCustom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrorUsers,
  selectLoadingUsers,
  selectUsers,
} from '../redux/users/selectors';
import useFetchUsers from '../hooks/useFetchUsers';
import Loading from '../components/Loading';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoadingUsers);
  const error = useSelector(selectErrorUsers);
  useFetchUsers(dispatch);

  return (
    <ErrorCustom error={error}>
      <Loading isLoading={loading}>
        <div className='text-2xl'>
          <BackLink />
          {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div className='mx-5 py-2 underline hover:text-cyan-400'>
                {user.name}
              </div>
            </Link>
          ))}
        </div>
      </Loading>
    </ErrorCustom>
  );
}
