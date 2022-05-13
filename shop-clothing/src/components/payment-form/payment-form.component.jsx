import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {PaymentFormContainer, FormContainer} from './payment-form.styles';

const PaymentForm = () => {

    // const paymentHandler = async (e) => {
    //     e.preventDefault();
    // }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;