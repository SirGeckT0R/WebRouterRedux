import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import Api from '../utils/API';
import albumReducer from './album/albumReducer';
import albumsReducer from './albums/albumsReducer';
import albumsOfUserReducer from './albumsOfUser/albumsOfUserReducer';
import photosOfAlbumReducer from './photosOfAlbum/photosOfAlbumReducer';
import userReducer from './user/userReducer';
import usersReducer from './users/usersReducer';

export default createStore(
  combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    user: userReducer,
    albumsUser: albumsOfUserReducer,
    album: albumReducer,
    photosAlbum: photosOfAlbumReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(Api)))
  // window.__REDUX_DEVTOOLS_EXTENSIONS__?.()
);
