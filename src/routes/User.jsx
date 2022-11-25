import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackLink from '../components/BackLink';
import ErrorCustom from '../components/ErrorCustom';
import Loading from '../components/Loading';
import useFetchAlbumsOfUser from '../hooks/useFetchAlbumsOfUser';
import useFetchUser from '../hooks/useFetchUser';
import {
  selectAlbumsOfUser,
  selectErrorAlbumsOfUser,
  selectLoadingAlbumsOfUser,
} from '../redux/albumsOfUser/selectors';
import {
  selectErrorUser,
  selectLoadingUser,
  selectUser,
} from '../redux/user/selectors';
import getUserFieldForVisualization from '../utils/getUserFieldForVisualization';
import { isNonExistingPath } from '../utils/isNonExistingPath';
import FieldVisualization from './FieldVisualization';

export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userId } = useParams();
  const user = useSelector(selectUser);
  const loadingUser = useSelector(selectLoadingUser);
  const errorUser = useSelector(selectErrorUser);
  useFetchUser(userId, dispatch);

  const albums = useSelector(selectAlbumsOfUser);
  const loadingAlbums = useSelector(selectLoadingAlbumsOfUser);
  const errorAlbums = useSelector(selectErrorAlbumsOfUser);
  useFetchAlbumsOfUser(userId, dispatch);

  if (!loadingUser && isNonExistingPath(user)) {
    navigate('/404');
  }
  const visualizationInfo = getUserFieldForVisualization(user);
  return (
    <ErrorCustom error={errorUser}>
      <Loading isLoading={loadingUser}>
        <div className='flex flex-col gap-6'>
          <BackLink />
          <FieldVisualization element={visualizationInfo} />
          <ErrorCustom error={errorAlbums}>
            <Loading isLoading={loadingAlbums}>
              <div className='mx-5 flex flex-col'>
                <div className='text-2xl'>Albums</div>
                {albums.map((album) => {
                  return (
                    <div key={album.id} className='flex items-center gap-3 '>
                      <img
                        src='../img/album-icon.png'
                        alt='album-img'
                        width='20px'
                        height='20px'
                      />
                      <Link
                        to={`/users/${album.userId}/albums/${album.id}`}
                        className='text-1xl py-2 underline hover:text-cyan-400 first-letter:capitalize'>
                        {album.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Loading>
          </ErrorCustom>
        </div>
      </Loading>
    </ErrorCustom>
  );
}
