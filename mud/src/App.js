import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserContext from './contexts/UserContext';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import Game from './components/Game/Game';
import './App.css';

function App() {

  const [ user, setUser ] = useState(() => (localStorage.user ? JSON.parse(localStorage.user) : null));

  const getUser = currentUser => {
		setUser(currentUser);
  };
  
  useEffect(
		() => {
			user && localStorage.setItem('user', JSON.stringify(user));
		},
		[ user ]
  );
  
  return (
    <UserContext.Provider value={{user, setUser, getUser}}>
    <div className="App">
      <h1>MUD</h1>
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <PrivateRoute path='/games' component={Game} />
    </div>
    </UserContext.Provider>
  );
}

export default App;
