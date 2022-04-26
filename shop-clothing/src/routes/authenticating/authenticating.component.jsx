import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authenticating.styles.scss';

const Authenticating = () => {

  return (
      <div className={'authenticating-container'}>
          <SignInForm />
          <SignUpForm />
      </div>
  );
};

export default Authenticating;