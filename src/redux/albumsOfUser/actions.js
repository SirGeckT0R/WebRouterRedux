export const ACTION_TYPES = {
  ALBUMS_OF_USER_FETCH_SUCCESS: 'ALBUMS_OF_USER/FETCH/SUCCESS',
  ALBUMS_OF_USER_FETCH_ERROR: 'ALBUMS_OF_USER/FETCH/ERROR',
  ALBUMS_OF_USER_FETCH_START: 'ALBUMS_OF_USER/FETCH/START',
};

export const fetchAlbumsOfUser = (id) => async (dispatch, state, api) => {
  dispatch({ type: ACTION_TYPES.ALBUMS_OF_USER_FETCH_START });
  try {
    const albums = await api.getAlbumsOfUser(id);
    dispatch({
      type: ACTION_TYPES.ALBUMS_OF_USER_FETCH_SUCCESS,
      payload: albums,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: ACTION_TYPES.ALBUMS_OF_USER_FETCH_ERROR,
      payload: e.message,
    });
  }
};
