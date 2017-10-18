import React from 'react';

const SignedIn = () => 'Welcome!'
const SignedOut = () => 'Please sign in'

const Header = ({signedIn = false}) => {
  return (
    <div>
      {
        signedIn ?  <SignedIn /> :< SignedOut />
      }
    </div>
  );
};

export default Header;