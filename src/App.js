import React from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    Hats Page
  </div>
)
//this is only for demonstration purpose

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
//by only using the <Route>, page will render more than one component on same page if more than one path matches
//by using <Switch>, page will render only one component of matching path
