import React, {PropTypes} from 'react';

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

  renderInfoWindow(location, index) {
  console.log(location,index)
  // on close reset state

      return (
        
        //You can nest components inside of InfoWindow!
        <InfoWindow
          onCloseclick={ this.props.updateInfoWindow.bind(this, location, index) }
        >
          <div> {location.name} </div>
        </InfoWindow>
      )
  }

  handleRecenter(marker) {
    this.setState({
      center: {
        lat: marker.lat,
        lng: marker.lng,
      },
    });
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
              defaultCenter={{lat: 37.7835890, lng: -122.4092149}}
              // center={this.state.center}
              // onClick={props.onMapClick}
            >
              {this.props.searches.map((location, i) => {
                // this.handleRecenter(location);
                return (
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
                );
              })}
            </GoogleMap>
          }
        />
    );
  }
}

export default MapView;
