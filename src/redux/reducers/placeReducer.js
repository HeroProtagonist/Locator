import initialState from './initialState';

export default function placeReducer(state = initialState.places, action) {
  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, action.place];

    case 'REMOVE_PLACE':
      return state.filter((place, index) => {
        if (index !== action.index) {
          return place;
        }
      });

    case 'UPDATE_SHOW_INFO':
      return state.map((place, index) => {
        if (action.index === index) {
          return {
            ...place,
            ...{ showInfo: !place.showInfo },
          };
        }
        return place;
      });

    default:
      return state;
  }
}
