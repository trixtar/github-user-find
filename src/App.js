import React, { Component } from 'react';
import SearchBox from './components/search-box';
import SearchResults from './components/search-results';
import './App.css';

export default class App extends Component {
  
  query = '';
  constructor(props) {
    super(props);
    this.getResults = this.getResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  state = {
    results: [],
  }

  componentWillUnmount() {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
  }

  getResults = (query) => {
    console.log(query);
    if (!query) {
      this.setState({results: []});
      return;
    }
    // update url from user query
    const url = `https://api.github.com/search/users?q=${query}`
    // get all query results @ github user search endpoint
    fetch(url)
      .then(data => data.json())
      .then(res => {
        if (res && res.items && query === this.query) this.setState({results: res.items.slice(0,10)});
      })
      .catch(err => console.log(err));
  }

  handleChange = (e) => {
    // reset timeout (if any)
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    // store search query
    this.query = e.target.value;
    this.searchTimeout = setTimeout(() => {
      // fire query only after user stops typing
      this.getResults(this.query);
    }, 700);
  }

  render() {
    console.log('results', this.state.results);
    return (
      <div className='container app'>
        <SearchBox onChange={this.handleChange} />
        <SearchResults users={this.state.results} />
      </div>
    );
  }
}
