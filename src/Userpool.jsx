import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-west-1_VSRFHHDvQ",
  ClientId: "6ogfj1on281l8jhltjhjr8tf9"
};

export default new CognitoUserPool(poolData);
