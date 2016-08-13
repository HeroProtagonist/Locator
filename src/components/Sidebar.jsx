import React from 'react';
import SidebarItem from './Sidebar/SidebarItem.jsx';

const Sidebar = ({ searches, updateInfoWindow }) => (
  <div id="sidebar">
    <ul>
      {searches.map((location, i) => <SidebarItem
        key={i}
        location={location}
        index={i}
        updateInfoWindow={(clicked, index) => updateInfoWindow(clicked, index) } />)}
    </ul>
  </div>
);

Sidebar.propTypes = {
  searches: React.PropTypes.array,
};

export default Sidebar;
