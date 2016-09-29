export const addPlace = place => ({
  type: 'ADD_PLACE',
  place,
});

export const removePlace = index => ({
  type: 'REMOVE_PLACE',
  index,
});

export const updateShowInfo = (clicked, index) => ({
  type: 'UPDATE_SHOW_INFO',
  clicked,
  index,
});

