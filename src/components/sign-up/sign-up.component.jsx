import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-up.styles.scss';
import React, {useState} from "react";
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

const SignUp = ({signUpStart}) => {

    const [userCredentails, setUserCredentials] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );

    const {displayName, email, password, confirmPassword} = userCredentails;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Provided  passwords do not match!');
            return;
        }

        signUpStart({email, password, displayName});

        setUserCredentials({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })


    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentails, [name]: value});
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                />
                <CustomButton type='submit'>
                    Sign Up
                </CustomButton>
            </form>
        </div>
    );

}

const dispatchToProps = dispatch => (
    {
        signUpStart: userCredential => dispatch(signUpStart(userCredential))
    }
);

export default connect(null, dispatchToProps)(SignUp);