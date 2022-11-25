export const ACTION_TYPES = {
  USER_FETCH_SUCCESS: 'USER/FETCH/SUCCESS',
  USER_FETCH_ERROR: 'USER/FETCH/ERROR',
  USER_FETCH_START: 'USER/FETCH/START',
};

export const fetchUser = (id) => async (dispatch, state, api) => {
  dispatch({ type: ACTION_TYPES.USER_FETCH_START });
  try {
    const user = await api.getUser(id);
    dispatch({ type: ACTION_TYPES.USER_FETCH_SUCCESS, payload: user });
  } catch (e) {
    console.error(e);
    dispatch({ type: ACTION_TYPES.USER_FETCH_ERROR, payload: e.message });
  }
};
