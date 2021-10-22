import React from "react";
import Amplify from "aws-amplify";
import {
  withAuthenticator,
  AmplifySignOut
} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {

  return  (
    <div className="App">
      <AmplifySignOut />
    </div>
    )
  

};

export default withAuthenticator(AuthStateApp);
