import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlace } from '../redux/actions/placeActions';
import updateError from '../redux/actions/errorActions';

class SearchBox extends React.Component {

  componentDidMount() {
    const search = document.getElementById('search');
    const autocomplete = new google.maps.places.Autocomplete(search);
    autocomplete.addListener('place_changed', () => {
      const selected = autocomplete.getPlace();

      if (Object.keys(selected).length <= 1) {
        this.props.updateError(true);
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

      this.props.addPlace(place);
      search.value = '';
    });
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(autocomplete);
  }

  render() {
    return (
      <div>
        <input
          id="search"
          onChange={() => this.props.updateError(false)}
          placeholder="Search a location..."
        />
        { this.props.error ? (<div id="error"> Invalid Search </div>) : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

function mapDispatchToProps(dispatch) {
  return {
    addPlace: bindActionCreators(addPlace, dispatch),
    updateError: bindActionCreators(updateError, dispatch),
  };
}

SearchBox.propTypes = {
  error: React.PropTypes.bool,
  addPlace: React.PropTypes.func,
  updateError: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
