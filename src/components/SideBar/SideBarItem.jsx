import React from 'react';

const SidebarItem = ({ location, updateInfoWindow, index }) => (
  <div
    className="card-panel hoverable"
    onClick={() => updateInfoWindow(location, index) }
  >
    <li> {location.name} </li>
  </div>
);

SidebarItem.propTypes = {
  location: React.PropTypes.object,
};

export default SidebarItem;

