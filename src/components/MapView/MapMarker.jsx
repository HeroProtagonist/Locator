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
        onCloseclick={ () => this.props.updateShowInfo(location, index) }
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
        onClick={() => this.props.updateShowInfo(this.props.loc, this.props.index)}
      >
      {this.props.loc.showInfo ? this.renderInfoWindow(this.props.loc, this.props.index) : null}
      </Marker>
    );
  }
}

const mapStateToProps = (state) => ({
  center: state.map,
});

function mapDispatchToProps(dispatch) {
  return {
    updateCenter: bindActionCreators(updateCenter, dispatch),
    updateShowInfo: bindActionCreators(updateShowInfo, dispatch),
  };
}

MapMarker.propTypes = {
  reCenter: React.PropTypes.func,
  mapHolderRef: React.PropTypes.object,
  handlePinClick: React.PropTypes.func,
  loc: React.PropTypes.object,
  updateInfoWindow: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
