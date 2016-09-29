import initialState from './initialState';

export default function placeReducer(state = initialState.places, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return state;

    default:
      return state;
  }
}
