import React, { useState, useEffect } from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'; 

import firebase from './firebase'; 

import Login from './containers/Login';
import UserProfile from './containers/UserProfile';
import Signup from './containers/Signup';
import Logout from './containers/Logout';
import Header from './components/Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [user, setUser ] = useState({})

  useEffect(() => { 
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(err => console.log('err', err))
  })

  useEffect(() => { 
    firebase
      .auth()
      .onAuthStateChanged( user => {
        if (user) { 
          setLoggedIn(true); 
          setUser(user);
        }
        else { 
          setLoggedIn(false); 
          setUser({})
        }
      })
  }, [])

  function signupFunction(e) {
    e.preventDefault(); 
    let email = e.currentTarget.createAccountEmail.value;  
    let password = e.currentTarget.createAccountPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => { 
        setLoggedIn(true);
      })
      .catch(err => console.log('err', err)); 
  }

  function loginFunction(e) { 
    e.preventDefault(); 
    let email = e.currentTarget.loginEmail.value;  
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setLoggedIn(true);
      })
      .catch(err => console.log('err', err));
  }

  function logoutFunction(e) {
    e.preventDefault(); 
    firebase
      .auth()
      .signOut()
      .then(res => { 
        setLoggedIn(false); 
      })
      .catch(err => console.log('err', err)); 
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router> 
        <Route exact path='/'>
          {loggedIn ? <UserProfile user={user}/> : <Redirect to="/login"/>}
        </Route> 
        <Route exact path='/login'>
          {!loggedIn ? <Login loginFunction={loginFunction}/> : <Redirect to="/" />}
        </Route>
        <Route path='/sign-up'>
          {!loggedIn ? <Signup signupFunction={signupFunction}/> : <Redirect to="/" />}
        </Route>
        <Route path='/log-out'>
          {!loggedIn ? <Redirect to="/login"/>:<Logout /> }
        </Route> 
      </Router>
    </div>
  );
}

export default App;
