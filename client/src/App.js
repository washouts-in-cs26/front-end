import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Register from './components/register/Register';
import Controls from './components/controls/Controls';

function App() {
  return (
    <div className="App">
      <Route path="/register" component={Register} />
      <Route path="/move" component={Controls} />
    </div>
  );
}

export default App;
