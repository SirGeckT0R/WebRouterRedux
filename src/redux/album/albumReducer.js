import { ACTION_TYPES } from './actions';

const DEFAULT_STATE = { data: {}, loading: false, error: null };

export default function albumReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.ALBUM_FETCH_START: {
      return { ...state, loading: true };
    }
    case ACTION_TYPES.ALBUM_FETCH_SUCCESS: {
      return { ...state, loading: false, error: null, data: payload };
    }
    case ACTION_TYPES.ALBUM_FETCH_ERROR: {
      return { ...state, loading: false, error: payload };
    }
    default:
      return state;
  }
}
