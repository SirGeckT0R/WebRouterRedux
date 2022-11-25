export const ACTION_TYPES = {
  ALBUMS_FETCH_SUCCESS: 'ALBUMS/FETCH/SUCCESS',
  ALBUMS_FETCH_ERROR: 'ALBUMS/FETCH/ERROR',
  ALBUMS_FETCH_START: 'ALBUMS/FETCH/START',
};

export const fetchAlbums = () => async (dispatch, state, api) => {
  dispatch({ type: ACTION_TYPES.ALBUMS_FETCH_START });
  try {
    const albums = await api.getAlbums();
    dispatch({ type: ACTION_TYPES.ALBUMS_FETCH_SUCCESS, payload: albums });
  } catch (e) {
    console.error(e);
    dispatch({ type: ACTION_TYPES.ALBUMS_FETCH_ERROR, payload: e.message });
  }
};
