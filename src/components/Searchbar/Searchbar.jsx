import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class Searchbar extends Component  {
  state = {
    searchQuery: '',
  };

  handleSearchChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleFormSubmit = (e) => {
    const { searchQuery } = this.state;
    e.preventDefault();

    if(searchQuery.trim() === '') {
      toast.error(`Введіть текст`);
      return;
    }
    this.props.onSubmit(searchQuery)
    this.reset();
  }

  reset = () => {
    this.setState({searchQuery: ''});
  }

  render() {
    const {searchQuery} = this.state;
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleFormSubmit}  className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
  
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={searchQuery}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    )
  };
  
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string
};