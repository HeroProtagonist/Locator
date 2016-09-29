import React from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
import MapMarker from './MapView/MapMarker.jsx';
// { searches, center, updateInfoWindow, handleItemClick, handleRecenter }
const MapView = (props) => (
  <GoogleMapLoader
    containerElement={
      <div
        style={{
          width: '100%',
          height: 525,
        }}
      />
    }
    googleMapElement={
      <GoogleMap
        defaultZoom={12}
        center={props.center}
      >

      {props.places.map((location, index) => (
        <MapMarker
          mapHolderRef={this}
          loc={location}
          index={index}
          key={index}
          updateInfoWindow={(loc, ind) => updateInfoWindow(loc, ind)}
          handlePinClick={() => handleItemClick(location, index)}
          reCenter={(lat, lng) => handleRecenter(lat, lng)}
        />))
      }
      </GoogleMap>
    }
  />
);

const mapStateToProps = (state) => ({
  center: state.map,
  places: state.places,
});

MapView.propTypes = {
  searches: React.PropTypes.array,
  center: React.PropTypes.object,
  updateInfoWindow: React.PropTypes.func,
  handleItemClick: React.PropTypes.func,
  handleRecenter: React.PropTypes.func,
};

export default connect(mapStateToProps)(MapView);
