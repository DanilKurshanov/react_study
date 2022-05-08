import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import {AuthenticatingContainer} from './authentication.styles';

const Authentication = () => {

  return (
      <AuthenticatingContainer>
          <SignInForm />
          <SignUpForm />
      </AuthenticatingContainer>
  );
};

export default Authentication;