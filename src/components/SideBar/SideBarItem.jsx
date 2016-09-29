import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateShowInfo, removePlace } from '../../redux/actions/placeActions';
import updateCenter from '../../redux/actions/mapActions';

const SidebarItem = (props) => (
  <div
    className="card-panel hoverable teal lighten-2 side-item"
    onClick={() => {
      props.updateShowInfo(props.location, props.index);
      props.updateCenter(props.location.lat, props.location.lng);
    }}
  >
    <li> {props.location.name}
      <span
        className="close"
        onClick={(e) => {
          props.removePlace(props.index);
          e.stopPropagation();
        }}
      > X
      </span>
    </li>
  </div>
);

function mapDispatchToProps(dispatch) {
  return {
    updateShowInfo: bindActionCreators(updateShowInfo, dispatch),
    updateCenter: bindActionCreators(updateCenter, dispatch),
    removePlace: bindActionCreators(removePlace, dispatch),
  };
}

SidebarItem.propTypes = {
  location: React.PropTypes.object,
  updateShowInfo: React.PropTypes.func,
  updateCenter: React.PropTypes.func,
  removePlace: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default connect(null, mapDispatchToProps)(SidebarItem);
