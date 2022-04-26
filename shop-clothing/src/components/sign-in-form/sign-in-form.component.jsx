import {useState} from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handlerSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password or email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:
                    console.log(error)
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div className={'sign-in-container'}>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handlerSubmit}>
                <FormInput
                    label={'Email'}
                    type='email'
                    onChange={handleChange}
                    name={'email'}
                    value={email}

                    required
                />
                <FormInput
                    label={'Password'}
                    type='password'
                    onChange={handleChange}
                    name={'password'}
                    value={password}
                    autoComplete="new-password"
                    required
                />
                <div className={'buttons-container'}>
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType={'google'} type='button' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;