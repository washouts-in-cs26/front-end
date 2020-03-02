import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Register from './components/register/Register';
import Controls from './components/controls/Controls';
import Login from './components/login/Login';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Route path="/register" component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/home' component={Home}/>
      <Route path="/move" component={Controls} />
    </div>
  );
}

export default App;
