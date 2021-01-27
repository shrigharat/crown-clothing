import React, {Component} from "react";
import {connect} from "react-redux";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        const {emailSignInStart} = this.props;
        event.preventDefault();
        const {email, password} = this.state;

        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name] : value});
    }

    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in using email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        required
                        value={this.state.email}
                        name="email"
                        label='Email'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        required
                        value={this.state.password}
                        name="password"
                        label='Password'
                        handleChange={this.handleChange}
                    />

                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

const dispatchToProps = dispatch => (
    {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
    }
);

export default connect(null, dispatchToProps)(SignIn);