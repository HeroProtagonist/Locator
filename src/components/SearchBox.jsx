import React from 'react';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    // const updateSearches = {this.props.updateSearches};
    this.state = {
      selection: {},
    };
  }

  componentDidMount() {
    const search = document.getElementById('search');
    const autocomplete = new google.maps.places.Autocomplete(search);
    autocomplete.addListener('place_changed', () => {
      // this.setState({
      //   selection: autocomplete.getPlace()
      // });
      this.props.updateSearches(autocomplete.getPlace());
      search.value = '';
    });
  }

  // userSelect(e) {
  //   console.log(this.autocomplete)

  //   console.log(this.)
  // }

  render() {

    return (
      <div>
        <input id="search" placeholder="Search a location..." />
      </div>
    );
  }
};

// SearchBox.propTypes = {
//   children: React.PropTypes.object,
//   isAuth: React.PropTypes.bool,
// };

export default SearchBox;

// <button onClick={() => console.log(this.state.selection.geometry.location.lat())}> fdasdsa </button>

