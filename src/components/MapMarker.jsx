import React, {PropTypes} from 'react';

import { Marker } from 'react-google-maps';

class MapMarker extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  componentDidMount() {
    this.props.reCenter(this.props.loc.lat, this.props.loc.lng);
  }

  render() {
    return (
      <Marker
        mapHolderRef={ this.props.mapHolderRef }
        position={{
          lat: this.props.loc.lat,
          lng: this.props.loc.lng,
        }}
        // onClick={()=> this.props.handleClick()}
        // onRightclick={() => props.onMarkerRightclick(index)}
      />
    );
  }
} 
// SidebarItem.propTypes = {
//   location: React.PropTypes.object,
// };

export default MapMarker;




