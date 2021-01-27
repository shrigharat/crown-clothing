import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import ProductDetail from "../product-detail/product-detail.component";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import {Spinner} from "../../components/with-spinner/with-spinner.component";
import {selectCollectionIsFetching, selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStart } = this.props;
        fetchCollectionStart();
    }

    render() {
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route exact path={`${match.path}`} component={ !isCollectionsLoaded ? Spinner : CollectionsOverview }/>
                    <Route exact path={`${match.path}/:collectionId`} component={ !isCollectionsLoaded ? Spinner : CollectionPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector(
    {
        isCollectionFetching: selectCollectionIsFetching,
        isCollectionsLoaded: selectIsCollectionsLoaded
    }
);

const dispatchToProps = dispatch => (
    {
        fetchCollectionStart: () => dispatch(fetchCollectionsStart())
    }
);

export default connect(mapStateToProps, dispatchToProps)(ShopPage);