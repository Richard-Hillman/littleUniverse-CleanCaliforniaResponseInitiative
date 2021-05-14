import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ContactMePage from '../pages/ContactMePage';
import listOfPartnersPage from '../pages/ListOfPartnersPage';
import listOfBenefitsPage from '../pages/ListOfBenefitsPage';
import AboutMePage from '../pages/AboutMePage';

export default function App() {
  return (
    <>
      <Router>

        <Switch>

        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/contact" component={ ContactMePage } />
        <Route exact path="/partners" component={ listOfPartnersPage } />
        <Route exact path="/benefits" component={ listOfBenefitsPage } />
        <Route exact path="/about" component={ AboutMePage } />

        </Switch>

      </Router>
    </>
  );
}