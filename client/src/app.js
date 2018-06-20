import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import Search from './components/search';
import HeadNav from './components/head_nav';
import User from './components/user';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  // <div className="App">
  // <HeadNav/>
  // <Search onInputChange={this.sumSearch}/>

  // </div>
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <HeadNav />
                    <Route exact path="/" component={Search} />
                    <Route path="/user" component={User} />
                </div>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
