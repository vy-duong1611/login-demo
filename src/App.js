import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4" id="pond">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
}
export default App;
