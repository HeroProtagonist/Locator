import initialState from './initialState';

export default function placeReducer(state = initialState.places, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, action.place];

    case 'UPDATE_SHOW_INFO':
      const newState = [...state];
      newState[action.index] = {
        ...action.clicked,
        ...{ showInfo: !newState[action.index].showInfo },
      };
      console.log(newState)
      return newState;

    default:
      return state;
  }
}
