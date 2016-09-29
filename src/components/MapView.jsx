import React from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
import MapMarker from './MapView/MapMarker.jsx';

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
  places: React.PropTypes.array,
  center: React.PropTypes.object,
};

export default connect(mapStateToProps)(MapView);
