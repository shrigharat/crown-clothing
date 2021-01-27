import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-up.styles.scss';
import React from "react";
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        const {signUpStart} = this.props;

        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Provided  passwords do not match!');
            return;
        }

        signUpStart({email, password, displayName});

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })


    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                    />
                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
}

const dispatchToProps = dispatch => (
    {
        signUpStart: userCredential => dispatch(signUpStart(userCredential))
    }
);

export default connect(null, dispatchToProps)(SignUp);