import React from 'react';

const SidebarItem = ({ location, handleItemClick, index }) => (
  <div
    className="card-panel hoverable"
    onClick={() => handleItemClick(location, index)}
  >
    <li> {location.name} </li>
  </div>
);

SidebarItem.propTypes = {
  location: React.PropTypes.object,
  handleItemClick: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default SidebarItem;

