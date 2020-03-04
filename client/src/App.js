import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Register from './components/register/Register';
import Controls from './components/controls/Controls';
import Login from './components/login/Login';
import Home from './components/home/home';
import NavBar from './components/nav/NavBar'
import Map from './components/map/map'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path="/register" component={Register} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home}/>
      <Route path="/move" component={Controls} />
      <Route path='/map' component={Map} />
    </div>
  );
}

export default App;
