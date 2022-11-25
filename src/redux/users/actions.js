export const ACTION_TYPES = {
  USERS_FETCH_SUCCESS: 'USERS/FETCH/SUCCESS',
  USERS_FETCH_ERROR: 'USERS/FETCH/ERROR',
  USERS_FETCH_START: 'USERS/FETCH/START',
};

export const fetchUsers = () => async (dispatch, state, api) => {
  dispatch({ type: ACTION_TYPES.USERS_FETCH_START });
  try {
    const users = await api.getUsers();
    dispatch({ type: ACTION_TYPES.USERS_FETCH_SUCCESS, payload: users });
  } catch (e) {
    console.error(e);
    dispatch({ type: ACTION_TYPES.USERS_FETCH_ERROR, payload: e.message });
  }
};
