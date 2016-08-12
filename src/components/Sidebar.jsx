import React from 'react';
import SidebarItem from './Sidebar/SidebarItem.jsx';

const Sidebar = ({ searches }) => (
  <div>
    <ul>
      {searches.map((location, i) => <SidebarItem key={i} location={location} />)}
    </ul>
  </div>
);

Sidebar.propTypes = {
  searches: React.PropTypes.array,
};

export default Sidebar;
