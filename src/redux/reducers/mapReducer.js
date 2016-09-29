import initialState from './initialState';

export default function mapReducer(state = initialState.mapCenter, action) {
  switch (action.type) {
    case 'UPDATE_CENTER':
      return { ...state, ...action.center };

    default:
      return state;
  }
}
