import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateShowInfo } from '../../redux/actions/placeActions';
// { location, handleItemClick, index }
const SidebarItem = (props) => (
  <div
    className="card-panel hoverable teal lighten-2 side-item"
    onClick={() => props.updateShowInfo(props.location, props.index)}
  >
    <li> {props.location.name} </li>
  </div>
);

const mapStateToProps = (state) => ({
  center: state.map,
});

function mapDispatchToProps(dispatch) {
  return {
    updateShowInfo: bindActionCreators(updateShowInfo, dispatch),
  };
}

SidebarItem.propTypes = {
  location: React.PropTypes.object,
  handleItemClick: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarItem);
