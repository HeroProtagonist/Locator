import React from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import MapMarker from './MapMarker.jsx';


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


  handleRecenter(lat, lng) {
    console.log(lat,lng)
    this.setState({
      center: {
        lat,
        lng,
      },
    });
  }

  renderInfoWindow(location, index) {
  // console.log(location,index)
  // on close reset state
console.log(location);
    return (
      <InfoWindow
        onCloseclick={this.props.updateInfoWindow.bind(this, location, index)}
      >
        <div className="info">
          <strong> {location.name} </strong>
          <div>
            {location.address}
          </div>
          <div>
            {location.phoneNumber}
          </div>
        </div>
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
            // defaultCenter={{ lat: 37.7835890, lng: -122.4092149 }}
            center={this.state.center}
            // onClick={props.onMapClick}
          >

          {this.props.searches.map((location, i) => (
            <MapMarker 
              mapHolderRef={this} 
              loc={location} 
              i={i} 
              key={i} 
              onClick = {() => this.handlePinClick(location, i)}
              reCenter={(lat, lng) => this.handleRecenter(lat, lng)} 
            >
              {location.showInfo ? this.renderInfoWindow(location, i) : null}
            </MapMarker>
        ))}
{/*}            {this.props.searches.map((location, i) => (
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
            )} */}
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
