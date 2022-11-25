export const ACTION_TYPES = {
  ALBUM_FETCH_SUCCESS: 'ALBUM/FETCH/SUCCESS',
  ALBUM_FETCH_ERROR: 'ALBUM/FETCH/ERROR',
  ALBUM_FETCH_START: 'ALBUM/FETCH/START',
};

export const fetchAlbum = (id) => async (dispatch, state, api) => {
  dispatch({ type: ACTION_TYPES.ALBUM_FETCH_START });
  try {
    const album = await api.getAlbum(id);
    dispatch({ type: ACTION_TYPES.ALBUM_FETCH_SUCCESS, payload: album });
  } catch (e) {
    console.error(e);
    dispatch({ type: ACTION_TYPES.ALBUM_FETCH_ERROR, payload: e.message });
  }
};
