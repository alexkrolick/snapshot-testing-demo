import React from 'react';

const SignedIn = () => <span data-test-signedin>'Welcome!'</span>
const SignedOut = () => <span data-test-signedout>'Please sign in'</span>

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