import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BackLink from '../components/BackLink';
import ErrorCustom from '../components/ErrorCustom';
import Loading from '../components/Loading';
import useFetchAlbums from '../hooks/useFetchAlbums';
import {
  selectAlbums,
  selectErrorAlbums,
  selectLoadingAlbums,
} from '../redux/albums/selectors';

export default function Albums() {
  const dispatch = useDispatch();
  const albums = useSelector(selectAlbums);
  const loading = useSelector(selectLoadingAlbums);
  const error = useSelector(selectErrorAlbums);
  useFetchAlbums(dispatch);

  return (
    <ErrorCustom error={error}>
      <Loading isLoading={loading}>
        <div className='text-2xl'>
          <BackLink />
          {albums.map((album) => (
            <div className='mx-5 flex items-center gap-3' key={album.id}>
              <img
                src='./img/album-icon.png'
                alt='album-img'
                width='20px'
                height='20px'
              />
              <Link to={`/users/${album.userId}/albums/${album.id}`}>
                <div className='py-2 underline hover:text-cyan-400 first-letter:capitalize'>
                  {album.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Loading>
    </ErrorCustom>
  );
}
