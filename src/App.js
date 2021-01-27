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

import {checkUserSession} from "./redux/user/user.actions";

import {selectCurrentUser} from "./redux/user/user.selectors";
import Wishlist from "./pages/wishlist/wishlist.component";

class App extends Component {

    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession();
        // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        //     if (userAuth) {
        //         const userRef = createUserProfileDocument(userAuth);
        //         (await userRef).onSnapshot(snapshot => {
        //             setCurrentUser(
        //                 {
        //                     id: snapshot.id,
        //                     ...snapshot.data()
        //                 }
        //             )
        //         })
        //     } else {
        //         setCurrentUser(userAuth);
        //     }
        //
        // });

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

const dispatchToProps = dispatch => (
    {
        checkUserSession: () => dispatch(checkUserSession())
    }
);

export default connect(mapStateToProps, dispatchToProps)(App);