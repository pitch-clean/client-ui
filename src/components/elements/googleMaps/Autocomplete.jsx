// react
import React, { Component } from 'react';
// utils
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// constants
const styles = {
  root: {
    '& .Mui-focused.Mui-focused': {
      color: '#333',
    }
  },
  helperText: {
    lineHeight: 0,
    marginBottom: `8px`,
  },
};

/**
 * main
 */
class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  UNSAFE_componentDidMount({ map, mapApi } = this.props) {
    const options = {
      // restrict your search to a specific type of result
      types: ['address']
      // restrict your search to a specific country, or an array of countries
      // componentRestrictions: { country: ['gb', 'us'] },
    };
    this.autoComplete = new mapApi.places.Autocomplete(this.searchInput, options);
    this.autoComplete.addListener('place_changed', this.onPlaceChanged);
    this.autoComplete.bindTo('bounds', map);
  }

  UNSAFE_componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map, addplace } = this.props) => {
    const place = this.autoComplete.getPlace();

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addplace(place);
    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = '';
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <TextField
          fullWidth
          className={classes.root}
          inputRef={ref => {
            this.searchInput = ref;
          }}
          margin="dense"
          onFocus={this.clearSearchBox}
          label={'Location'}
        />
      </>
    );
  }
}

export default withStyles(styles)(AutoComplete);
