import React, { Component } from 'react';
import './App.css';
import RegisterForm from './pages/RegisterForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import HomePage from './pages/Home';
import Error from './pages/Error';
import Navigation from './components/Navigation';
import AuthPage from './pages/AuthPage';


// const CheckAuth = () => {
//   const token = localStorage.getItem('cool-jwt') 
// }

// const AuthRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={props => (
//     checkAuth() ? (
//       <Component {...props} />
//       ) : (<Redirect to ={{ pathname: '/login'}} />
//       )
//       )} />
// )



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route exact path ="/" component = {HomePage} />
            <Route exact path ="/new" component = {RegisterForm} /> 
            <Route exact path ="/in" component = {LoginForm} />
            <Route exact path ="/auth" component = {AuthPage} />
            <Route component = {Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
