import React from "react";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "aws-config";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText="My Custom Sign In Text"
        slot="sign-in"
      ></AmplifySignIn>
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
