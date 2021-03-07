import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './components/containers/pages/register';
import { ChangePassword } from './components/containers/pages/changePassword';
import AccountsPage from './components/containers/pages/accounts-page';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import NavBarApp from './components/ui-component/nav-bar';
import AccountPage from './components/containers/pages/account-page';
import { Login } from './components/containers/pages/login';



function App() {
  return (
    <HashRouter>
      <Router>
        <div className="container">
          <h1 className="jumbotron"> Bank Of Haifa  </h1>
          <div className="row">
            <NavBarApp />
          </div>
          <div className="row">
            <Switch>
              <Route key="CreateAccount" path="/CreateAccount">
                <Register />
              </Route>
              <Route key="accountPage" path="/account-page/:accountId">
                <AccountPage />
              </Route>
              <Route key="change-password" path="/change-password">
                <ChangePassword />
              </Route>
              <Route key="login" path="/login">
                <Login />
              </Route>
              <Route key="home" path="/">
                <AccountsPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </HashRouter>
  );
}

export default App;
