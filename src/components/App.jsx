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
      mapCenter: {
        lat: 37.7835890,
        lng: -122.4092149,
      },
    };
  }

  updateSearches(search) {
    this.setState({
      searches: [...this.state.searches, search],
    });
  }

  handleItemClick(location, index) {
    this.handleRecenter(location.lat, location.lng);
    this.updateInfoWindow(location, index);
  }

  handleRecenter(lat, lng) {
    this.setState({
      mapCenter: {
        lat,
        lng,
      },
    });
  }

  updateInfoWindow(clicked, index) {
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
              handleItemClick={(clicked, index) => this.handleItemClick(clicked, index)}
            />
          </div>
          <div className="col s8">
            <MapView
              center={this.state.mapCenter}
              handleRecenter={(lat, lng) => this.handleRecenter(lat, lng)}
              handleItemClick={(location, index) => this.handleItemClick(location, index)}
              searches={this.state.searches}
              updateInfoWindow={(clicked, index) => this.updateInfoWindow(clicked, index)}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
