import React from "react";

import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

import "./authentication.styles.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
