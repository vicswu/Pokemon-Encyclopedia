import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
class App extends Component {
  render () {
    return(
    	<Router>
      <div class="App"> 
       <NavBar />
       <div class = "container">
       <Switch>
       <Route exact path = "/" component={Dashboard} />
       <Route exact path = "/pokemon/:pokemonIndex" component={Pokemon} />
       <Dashboard />
       </Switch>
       </div>
       </div>
       </Router>);
  }
}

export default App;