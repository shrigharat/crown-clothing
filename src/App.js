import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import Wishlist from "./pages/wishlist/wishlist.component";

class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapshot => {
                    setCurrentUser(
                        {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    )
                })
            } else {
                setCurrentUser(userAuth);
            }

        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/checkout' component={CheckoutPage}/>
                    <Route path='/sign-in' exact
                           render={
                               () => {
                                   return this.props.currentUser ?
                                       <Redirect to='/'/>
                                       :
                                       <SignAndSignUpPage/>
                               }
                           }/>
                    <Route path='/wishlist' component={Wishlist}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser
    }
);

const dispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, dispatchToProps)(App);
