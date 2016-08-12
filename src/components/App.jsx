import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import MapView from './MapView.jsx';
import SearchBox from './SearchBox.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s4">
            <SearchBox />
            <Sidebar />
          </div>
          <div className="col s8">
            <div
              style={{
                width: '100%',
                height: 400,
              }}
            >
              <MapView />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

// App.propTypes = {
//   children: React.PropTypes.object,
//   isAuth: React.PropTypes.bool,
// };

export default App;
