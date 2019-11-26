import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const messageType = {
  autor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export class Message extends Component {
  static propTypes = messageType;

  render() {
    const { author, text } = this.props;

    return (
      <li>{author}: {text}</li>
    )
  }
}