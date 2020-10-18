import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import ProductDetail from "../product-detail/product-detail.component";

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            {/*<Route exact path={`${match.path}/product`} component={ProductDetail}/>*/}
        </Switch>
    </div>
);

export default ShopPage;