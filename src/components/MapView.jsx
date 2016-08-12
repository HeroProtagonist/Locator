import React, {PropTypes} from 'react';

import GoogleMap from 'google-map-react';


class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.7835896,
        lng: -122.4092149,
      },
      zoom: 12,
    };
  }

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyBtvqbjCwpoz-DA7_kIEe06UTI3s16DtH8',
          language: 'en',
        }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >

      </GoogleMap>
    );
  }
}

// MapView.propTypes = {
//   children: React.PropTypes.object,
//   isAuth: React.PropTypes.bool,
// };

export default MapView;