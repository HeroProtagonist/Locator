import React from 'react';
import SidebarItem from './Sidebar/SidebarItem.jsx';

const Sidebar = ({ searches, handleItemClick }) => (
  <div id="sidebar">
    <ul>
      {searches.map((location, i) =>
        <SidebarItem
          key={i}
          location={location}
          index={i}
          handleItemClick={(clicked, index) => handleItemClick(clicked, index)}
        />)}
    </ul>
  </div>
);

Sidebar.propTypes = {
  searches: React.PropTypes.array,
  handleItemClick: React.PropTypes.func,
};

export default Sidebar;
