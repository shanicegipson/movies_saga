import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route} from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import DetailsPage from '../Pages/DetailsPage/DetailsPage';
import EditPage from '../Pages/EditPage/EditPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
    <div>
      <header className="App-header">
       <h1>Movie Info</h1>
      </header>
    
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/details/:id" component={DetailsPage} />
        <Route exact path="/edit" component={EditPage} />
      </Router >
    </div>
    );
  }
}

export default App;
