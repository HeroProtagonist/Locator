import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import MapView from './MapView.jsx';
import SearchBox from './SearchBox.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searches: [],
    };
  }

  updateSearches(search) {
    this.setState({
      searches: [...this.state.searches, search],
    });
  }

  updateInfoWindow(clicked, index) {
    console.log(clicked, index);
    const newState = [...this.state.searches];
    newState[index] = { ...clicked, ...{ showInfo: !newState[index].showInfo } };
    this.setState({
      searches: newState,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col s4">
            <SearchBox updateSearches={(search) => this.updateSearches(search)} />
            <Sidebar
              searches={this.state.searches}
              updateInfoWindow={(clicked, index) => this.updateInfoWindow(clicked, index)}
            />
          </div>
          <div className="col s8">
            <MapView
              searches={this.state.searches}
              updateInfoWindow={(clicked, index) => this.updateInfoWindow(clicked, index)}
            />
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
