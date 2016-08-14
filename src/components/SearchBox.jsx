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

      const name = selected.name;
      const website = selected.website;
      const address = selected.formatted_address;
      const phoneNumber = selected.formatted_phone_number;
      const lat = selected.geometry.location.lat();
      const lng = selected.geometry.location.lng();

      const place = {
        name,
        website,
        address,
        phoneNumber,
        lat,
        lng,
        showInfo: false,
      };

      this.props.updateSearches(place);
      search.value = '';
    });
  }

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
