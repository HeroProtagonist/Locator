import initialState from './initialState';

export default function errorReducer(state = initialState.error, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return state;

    default:
      return state;
  }
}
