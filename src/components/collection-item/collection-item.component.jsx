import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.actions";
import {addItemToWishlist} from "../../redux/wishlist/wishlist.actions";
import {createStructuredSelector} from "reselect";
import {selectWishlistItems} from "../../redux/wishlist/wishlist.selectors";

const CollectionItem = ({item, addItemToCart, addItemToWishlist, wishlistItems, history, match}) => {
    const {id, name, price, imageUrl} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div onClick={() => addItemToWishlist(item)}>
                {
                    isItemInWishlist(wishlistItems, item) ?
                        <i className="fas fa-heart selected"></i>
                        :
                        <i className="far fa-heart unselected"></i>
                }
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItemToCart(item)}>Add to cart</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    {
        wishlistItems: selectWishlistItems
    }
);

const dispatchToProps = dispatch => (
    {
        addItemToCart: item => dispatch(addItem(item)),
        addItemToWishlist: item => dispatch(addItemToWishlist(item))
    }
);

const isItemInWishlist = (itemList, itemToCheck) => {
    return itemList.hasOwnProperty(`${itemToCheck.id}`)
}

export default withRouter(connect(mapStateToProps, dispatchToProps)(CollectionItem));