import React from 'react';
import { Button } from '@material-ui/core';
import { auth } from '../Firebase';
const SignOut = () => {
  return (
    <div>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
