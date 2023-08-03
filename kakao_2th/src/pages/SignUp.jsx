import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AuthTemplate from "../components/templates/auth-template/AuthTemplate.jsx";
import Form from "../components/organisms/form/Form.jsx";
import Button from "../components/atoms/button/Button.jsx";

import FORM_INFO from "../constants/FORM_INFO.js";
import FORM_DEFAULT from "../constants/FORM_DEFAULT.js";
import routes from "../constants/routes.js";
import authAPI from "../api/authAPI.js";

const Styled = {
  ErrorMessage: styled.div`
    color: red;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  `,
};

function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSignUpSubmit = async (data) => {
    try {
      await authAPI.signUp(data);
      navigate(routes.home);
    } catch (e) {
      setErrorMessage(e.response.data.error.message);
    }
  };

  return (
    <AuthTemplate title="회원가입">
      <Form
        style={{ width: "100%", maxWidth: "440px" }}
        defaultValues={FORM_DEFAULT.SIGN_UP}
        inputInformations={FORM_INFO.SIGN_UP}
        onError={(e) => console.log(e)}
        onSubmit={onSignUpSubmit}
      >
        <Button type="submit" style={{ width: "100%", margin: "0.5rem 0 1rem" }}>
          회원가입
        </Button>
        {errorMessage && (
          <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
        )}
      </Form>
    </AuthTemplate>
  );
}

export default SignUp;
