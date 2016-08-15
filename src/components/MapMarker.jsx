import React from 'react';

import { Marker, InfoWindow } from 'react-google-maps';

class MapMarker extends React.Component {

  componentDidMount() {
    this.props.reCenter(this.props.loc.lat, this.props.loc.lng);
  }

  renderInfoWindow(location, index) {
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
      <Marker
        mapHolderRef={this.props.mapHolderRef}
        position={{
          lat: this.props.loc.lat,
          lng: this.props.loc.lng,
        }}
        onClick={() => this.props.handlePinClick(this.props.loc, this.props.index)}
      >
      {this.props.loc.showInfo ? this.renderInfoWindow(this.props.loc, this.props.index) : null}
      </Marker>
    );
  }
}

MapMarker.propTypes = {
  reCenter: React.PropTypes.func,
  mapHolderRef: React.PropTypes.object,
  handlePinClick: React.PropTypes.func,
  loc: React.PropTypes.object,
  updateInfoWindow: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default MapMarker;
