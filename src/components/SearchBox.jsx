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
      const selected = autocomplete.getPlace();
// console.log(selected.photos[0]);
      const name = selected.name;
      const website = selected.website;
      const address = selected.formatted_address;
      const phoneNumber = selected.formatted_phone_number;
      const lat = selected.geometry.location.lat();
      const lng = selected.geometry.location.lng();

      // let photo;
      // if (selected.photos) {
      //   photo = selected.photos[0].getUrl();
      // }

      const place = {
        name,
        website,
        address,
        phoneNumber,
        lat,
        lng,
        showInfo: false,
        // photos,
      };

      this.props.updateSearches(place);
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
}

SearchBox.propTypes = {
  updateSearches: React.PropTypes.func,
};

export default SearchBox;

// <button onClick={() => console.log(this.state.selection.geometry.location.lat())}> fdasdsa </button>

// formatted_address
// formatted_phone_number
// photos.getUrl() -< if exist
// website 
// name
// geometry.location.lat()
// .lng()
