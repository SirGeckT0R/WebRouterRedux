export const ACTION_TYPES = {
  PHOTOS_OF_ALBUM_FETCH_SUCCESS: 'PHOTOS_OF_ALBUM/FETCH/SUCCESS',
  PHOTOS_OF_ALBUM_FETCH_ERROR: 'PHOTOS_OF_ALBUM/FETCH/ERROR',
  PHOTOS_OF_ALBUM_FETCH_START: 'PHOTOS_OF_ALBUM/FETCH/START',
};

export const fetchPhotosOfAlbum = (id) => async (dispatch, state, api) => {
  dispatch({ type: ACTION_TYPES.PHOTOS_OF_ALBUM_FETCH_START });
  try {
    const photos = await api.getPhotosOfAlbum(id);
    dispatch({
      type: ACTION_TYPES.PHOTOS_OF_ALBUM_FETCH_SUCCESS,
      payload: photos,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: ACTION_TYPES.PHOTOS_OF_ALBUM_FETCH_ERROR,
      payload: e.message,
    });
  }
};
