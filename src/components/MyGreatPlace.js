import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import locationIcon from '../images/location.png'

export default class MyGreatPlace extends Component {
  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={locationIcon} />
    );
  }
}

// This code refers to a github repository:
// https://github.com/google-map-react/old-examples/blob/master/web/flux/components/examples/x_options/my_great_place.jsx