import initialState from './initialState';

export default function errorReducer(state = initialState.error, action) {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return action.display;

    default:
      return state;
  }
}
