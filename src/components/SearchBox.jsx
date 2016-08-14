import React from 'react';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: {},
      error: false,
    };
  }

  componentDidMount() {
    const search = document.getElementById('search');
    const autocomplete = new google.maps.places.Autocomplete(search);
    autocomplete.addListener('place_changed', () => {
      const selected = autocomplete.getPlace();

      if (Object.keys(selected).length <= 1) {
        this.setState({
          error: true,
        });
        console.log('invalid');
        return;
      }

      const name = selected.name;
      const address = selected.formatted_address;
      const phoneNumber = selected.formatted_phone_number;
      const lat = selected.geometry.location.lat();
      const lng = selected.geometry.location.lng();

      const place = {
        name,
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

  removeError() {
    this.setState({
      error: false,
    });
  }

  render() {
    return (
      <div>
        <input id="search" onChange={() => this.removeError()} placeholder="Search a location..." />
        { this.state.error ? (<div id="error"> Invalid Search </div>) : null }
      </div>
    );
  }
}

SearchBox.propTypes = {
  updateSearches: React.PropTypes.func,
};

export default SearchBox;
