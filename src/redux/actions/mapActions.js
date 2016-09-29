const updateCenter = (lat, lng) => ({
  type: 'UPDATE_CENTER',
  center: {
    lat,
    lng,
  },
});

export default updateCenter;
