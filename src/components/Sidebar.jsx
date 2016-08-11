import React from 'react';

const Sidebar = (props) => {

  return (
    <div className="col s4">
      im the sidebar
      <div className="card-panel hoverable"> Hoverable Card Panel</div>
    </div>
  );
};

// Sidebar.propTypes = {
//   children: React.PropTypes.object,
//   isAuth: React.PropTypes.bool,
// };

export default Sidebar;