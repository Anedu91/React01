import React from "react";

import Form from "../../components/Form";
import LoginLayout from "../../components/LoginLayout";

function SingUp(props) {
  return (
    <LoginLayout>
      <h1>Sign Up</h1>
      <Form signup={true} />
    </LoginLayout>
  );
}

export default SingUp;
