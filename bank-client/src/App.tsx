import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './components/containers/pages/register';
import { ChangePassword } from './components/containers/pages/changePassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChangePassword />
      </header>
    </div>
  );
}

export default App;
