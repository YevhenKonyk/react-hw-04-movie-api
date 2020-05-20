/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string,
  };

  static defaultProps = {
    searchQuery: '',
  };

  state = {
    query: this.props.searchQuery,
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  clearForm = () => {
    this.setState({ query: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch({ ...this.state });
    this.clearForm();
  };

  render() {
    const { query } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            name="query"
            value={query}
            placeholder="Enter the movie name"
            onChange={this.handleInputChange}
            className={styles.input}
          />

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={query.length === 0}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
