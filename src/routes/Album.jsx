import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackLink from '../components/BackLink';
import ErrorCustom from '../components/ErrorCustom';
import Loading from '../components/Loading';
import useFetchAlbum from '../hooks/useFetchAlbum';
import useFetchPhotosOfAlbum from '../hooks/useFetchPhotosOfAlbum';
import useFetchUser from '../hooks/useFetchUser';
import {
  selectAlbum,
  selectErrorAlbum,
  selectLoadingAlbum,
} from '../redux/album/selectors';
import {
  selectErrorPhotosOfAlbum,
  selectLoadingPhotosOfAlbum,
  selectPhotosOfAlbum,
} from '../redux/photosOfAlbum/selectors';
import {
  selectErrorUser,
  selectLoadingUser,
  selectUser,
} from '../redux/user/selectors';
import getAlbumFieldForVisualization from '../utils/getAlbumFieldForVisualization';
import { isNonExistingPath } from '../utils/isNonExistingPath';
import FieldVisualization from './FieldVisualization';

export default function Album() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { albumId, userId } = useParams();
  const album = useSelector(selectAlbum);
  const loadingAlbum = useSelector(selectLoadingAlbum);
  const errorAlbum = useSelector(selectErrorAlbum);
  useFetchAlbum(albumId, dispatch);

  const user = useSelector(selectUser);
  const loadingUser = useSelector(selectLoadingUser);
  const errorUser = useSelector(selectErrorUser);
  useFetchUser(userId, dispatch);

  const photos = useSelector(selectPhotosOfAlbum);
  const loadingPhotos = useSelector(selectLoadingPhotosOfAlbum);
  const errorPhotos = useSelector(selectErrorPhotosOfAlbum);
  useFetchPhotosOfAlbum(userId, dispatch);

  const visualizationInfo = getAlbumFieldForVisualization(album);

  if (
    (!loadingAlbum && isNonExistingPath(album)) ||
    (!loadingUser && isNonExistingPath(user))
  ) {
    navigate('/404');
  }
  return (
    <ErrorCustom error={errorAlbum}>
      <Loading isLoading={loadingAlbum}>
        <div className='flex flex-col'>
          <BackLink />
          <FieldVisualization element={visualizationInfo} />
          <ErrorCustom error={errorUser}>
            <Loading isLoading={loadingUser}>
              <div className='mx-5 mb-8'>
                <div key={user.id}>
                  <span>Created by:</span>
                  <Link
                    to={`/users/${user.id}`}
                    className='px-2 underline hover:text-cyan-400'>
                    {user.name}
                  </Link>
                </div>
              </div>
            </Loading>
          </ErrorCustom>
          <ErrorCustom error={errorPhotos}>
            <Loading isLoading={loadingPhotos}>
              <div className='grid grid-cols-3 gap-y-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {photos.map((photo) => {
                  return (
                    <div
                      className='mx-5 hover:scale-110 transition-transform'
                      key={photo.id}>
                      <img
                        src={photo.url}
                        height='400px'
                        width='400px'
                        alt={photo.title}
                        title={photo.title}
                      />
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
