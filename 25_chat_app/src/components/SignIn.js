import React from 'react';
import firebase from 'firebase';
import { auth } from '../Firebase';
import { Button } from '@material-ui/core';
const Signin = () => {
  function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={googleSignIn} variant='contained' color='primary'>
        Sign In With Google
      </Button>
    </div>
  );
};

export default Signin;
