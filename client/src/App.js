import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Router path="/register" component={Register} />
    </div>
  );
}

export default App;
