import React, { useState } from "react";
import {connect} from "react-redux";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setUserCredentials] = useState(
        {
            email: '',
            password: ''
            }
        );

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }


    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in using email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    required
                    value={email}
                    name="email"
                    label='Email'
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    required
                    value={password}
                    name="password"
                    label='Password'
                    handleChange={handleChange}
                />

                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With
                        Google</CustomButton>
                </div>
            </form>
        </div>
    );

}

const dispatchToProps = dispatch => (
    {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    }
);

export default connect(null, dispatchToProps)(SignIn);