import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import {AuthenticatingContainer} from './authenticating.styles';

const Authenticating = () => {

  return (
      <AuthenticatingContainer>
          <SignInForm />
          <SignUpForm />
      </AuthenticatingContainer>
  );
};

export default Authenticating;