import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './search.css';

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = { summonerName: "" };
  }

  render() {
    return (
      <div className="search col-6 offset-3 form-group">
        <input className="search-bar form-control form-control-lg" type="search" value={this.state.summonerName} onChange={event => this.onInputChange(event.target.value)} />
        <Link to="/{{ this.state.summonerName }}" className="btn btn-ghost" onClick={() => this.onClick(this.state.summonerName)}>Search</Link>
      </div>
    );
  }

  onInputChange(summonerName) {
      this.setState({ summonerName });
  }

  onClick(summonerName) {
      this.props.onInputChange(summonerName);
  }

}

export default Search;
