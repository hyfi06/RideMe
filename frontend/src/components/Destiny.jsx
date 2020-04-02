import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import * as destinyActions from '../actions/destinyActions';
import '../assets/styles/components/Origin.scss';

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        this.props.destinyRequest(latLng);
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <span className='label'>Elige tu destino</span>
            <input
              className
              {...getInputProps({
                placeholder: 'Ingresa tu destino',
                className: 'location-search-input'
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Cargando...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#0b2239', cursor: 'pointer' }
                  : { backgroundColor: '#69E781', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.destinyReducer;
};

export default connect(mapStateToProps, destinyActions)(Destiny);
