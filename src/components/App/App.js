import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route} from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import DetailsPage from '../Pages/DetailsPage/DetailsPage';

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
        <Route exact path="/movie/:id" component={DetailsPage} />
      </Router >
    </div>
    );
  }
}

export default App;
