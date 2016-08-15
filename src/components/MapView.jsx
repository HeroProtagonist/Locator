import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
import MapMarker from './MapView/MapMarker.jsx';

const MapView = ({ searches, center, updateInfoWindow, handleItemClick, handleRecenter }) => (
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
        center={center}
      >

      {searches.map((location, index) => (
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

MapView.propTypes = {
  searches: React.PropTypes.array,
  center: React.PropTypes.object,
  updateInfoWindow: React.PropTypes.func,
  handleItemClick: React.PropTypes.func,
  handleRecenter: React.PropTypes.func,
};

export default MapView;
