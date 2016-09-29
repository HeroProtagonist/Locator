import React from 'react';
import { connect } from 'react-redux';
import SidebarItem from './Sidebar/SidebarItem.jsx';

const Sidebar = (props) => (
  <div id="sidebar">
    <ul>
      {props.places.map((location, i) =>
        <SidebarItem
          key={i}
          location={location}
          index={i}
        />)}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  places: state.places,
});

Sidebar.propTypes = {
  places: React.PropTypes.array,
  handleItemClick: React.PropTypes.func,
};

export default connect(mapStateToProps)(Sidebar);
