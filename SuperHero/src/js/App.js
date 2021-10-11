import React from 'react';
import LoginModel from './LoginModel';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../context/Auth';
import PrivateRoute from '../presenters/PrivateRoute';
import YourScores from '../presenters/yourScores';
import AllScores from '../presenters/allScores';
import PageNotFound from '../view/PageNotFound';
import Item from '../presenters/BuildQuiz';
import Header from '../presenters/Header';
import Home from '../presenters/Home';

function App() {
 
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={LoginModel}/>
          <PrivateRoute exact path="/home" component={Home}/>
          <PrivateRoute exact path="/quizitem/:id" component={Item}/>
          <PrivateRoute exact path="/scoreboard" component={AllScores}/>
          <PrivateRoute exact path="/myscores" component={YourScores}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
    
  );
};

export default App;