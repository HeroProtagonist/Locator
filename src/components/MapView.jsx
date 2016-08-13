import React from 'react';

import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';


class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.7835890,
        lng: -122.4092149,
      },
    };
  }

  handlePinClick(location, index) {
    this.props.updateInfoWindow(location, index);
  }


  handleRecenter(marker) {
    this.setState({
      center: {
        lat: marker.lat,
        lng: marker.lng,
      },
    });
  }

  renderInfoWindow(location, index) {
  // console.log(location,index)
  // on close reset state

    return (
      <InfoWindow
        onCloseclick={this.props.updateInfoWindow.bind(this, location, index)}
      >
        <div> {location.name} </div>
      </InfoWindow>
    );
  }

  render() {
    return (
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
            // ref={(map) => console.log(map)}
            defaultZoom={12}
            defaultCenter={{ lat: 37.7835890, lng: -122.4092149 }}
            // center={this.state.center}
            // onClick={props.onMapClick}
          >
            {this.props.searches.map((location, i) => (
              <Marker
                key={i}
                position={{
                  lat: location.lat,
                  lng: location.lng,
                }}
                info={location}
                onClick={() => this.handlePinClick(location, i)}
              >
                {location.showInfo ? this.renderInfoWindow(location, i) : null}
              </Marker>
              )
            )}
          </GoogleMap>
        }
      />
    );
  }
}

MapView.propTypes = {
  updateInfoWindow: React.PropTypes.func,
  searches: React.PropTypes.array,
};

export default MapView;
