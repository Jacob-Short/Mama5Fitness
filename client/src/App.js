import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Eyebrow from './components/layout/Eyebrow';
import Landing from './components/layout/Landing';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import About from './components/layout/About';
import "./App.css";
const App = () => (
  <Router>
  <Fragment>
    <Eyebrow />
    <Route exact path='/' component={ Landing } />
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/about' component={About} />
      </Switch>
    </section>
  </Fragment>
  </Router>
);

export default App;
