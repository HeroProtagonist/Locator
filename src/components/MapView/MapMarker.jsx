import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Marker, InfoWindow } from 'react-google-maps';
import { updateCenter } from '../../redux/actions/mapActions';
import { updateShowInfo } from '../../redux/actions/placeActions';

class MapMarker extends React.Component {

  componentDidMount() {
    this.props.updateCenter(this.props.loc.lat, this.props.loc.lng);
  }

  renderInfoWindow(location, index) {
    return (
      <InfoWindow
        onCloseclick={() => this.props.updateShowInfo(location, index)}
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
        onClick={() => {
          this.props.updateShowInfo(this.props.loc, this.props.index);
          this.props.updateCenter(this.props.loc.lat, this.props.loc.lng);
        }}
      >
      {this.props.loc.showInfo ? this.renderInfoWindow(this.props.loc, this.props.index) : null}
      </Marker>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCenter: bindActionCreators(updateCenter, dispatch),
    updateShowInfo: bindActionCreators(updateShowInfo, dispatch),
  };
}

MapMarker.propTypes = {
  index: React.PropTypes.number,
  mapHolderRef: React.PropTypes.object,
  loc: React.PropTypes.object,
  updateCenter: React.PropTypes.func,
  updateInfoWindow: React.PropTypes.func,
  updateShowInfo: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(MapMarker);
