import React, { useState } from 'react';

import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Signup from './Components/Signup';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
// import app from './firebase/firebase.config';
import UserContextProvider from './Context/UserContext';
import { Toaster } from "react-hot-toast";

// const auth = getAuth(app)

const App = () => {



  // const googleProvider = new GoogleAuthProvider();
  // const [user, setUser] = useState({})


  // const handleGoogleLogin = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then(result => {
  //       const signInUser = result.user;
  //       setUser(signInUser)

  //     })
  // }

  // const handleLogOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({})
  //     }).catch((error) => {

  //     });
  // }

  return (
    <>

      <UserContextProvider>
        <div className='dark:bg-slate-900 dark:text-white'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Courses />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>

        <div>
          <Toaster />
          {/* {
            user.uid ? <button onClick={handleLogOut}>Sign out</button> : <button onClick={handleGoogleLogin}>Login</button>
          }

          {
            user.uid && <div>
              <h4>Name:{user.displayName}</h4>
              <p>Email:{user.email}</p>
              <img src={user.photoURL} alt={user.displayName} />
            </div>
          } */}

        </div >
      </UserContextProvider>
    </>
  );
};

export default App;