import React from "react";

import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

import { AuthenticationContainer } from "./authentication.styles";

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}

export default Authentication;
