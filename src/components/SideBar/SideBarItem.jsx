import React from 'react';

const SidebarItem = ({ location }) => (
  <div className="card-panel hoverable">
    <li> {location.name} </li>
  </div>
);

SidebarItem.propTypes = {
  location: React.PropTypes.object,
};

export default SidebarItem;

