import React from "react";
import {connect} from "react-redux";

import './wishlist.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectWishlistItems} from "../../redux/wishlist/wishlist.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const getItems = (wishlistItems) => {
    let itemArray = [];
    for(let key in wishlistItems) {
        itemArray.push(wishlistItems[key]);
    }
    return itemArray;
}

const Wishlist = ({wishlistItems}) => (
    <div className='wishlist-page'>
        <h2 className='title'>
            Your Wishlist
        </h2>
        <div className='wishlist-container'>
            {
                getItems(wishlistItems)
                    .map(
                        item => (
                            <CollectionItem item={item}/>
                        )
                    )
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        wishlistItems: selectWishlistItems
    }
);

export default connect(mapStateToProps)(Wishlist);