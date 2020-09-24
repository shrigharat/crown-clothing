import React, {Component} from "react";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handelChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name] : value});
    }

    render() {
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
                        handleChange={this.handelChange}
                    />
                    <FormInput
                        type="password"
                        required
                        value={this.state.password}
                        name="password"
                        label='Password'
                        handleChange={this.handelChange}
                    />

                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignIn;