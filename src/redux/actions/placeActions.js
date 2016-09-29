export const updateSearches = place => ({
  type: 'ADD_PLACE',
  place,
});

export const updateShowInfo = (clicked, index) => ({
  type: 'UPDATE_SHOW_INFO',
  clicked,
  index,
});

