import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import MapView from './MapView.jsx';
import SearchBox from './SearchBox.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="row">
          <section className="col s4">
            <SearchBox />
            <Sidebar />
          </section>
          <section className="col s8">
            <MapView />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
