import {WishListActionTypes} from "./wishlist.types";
import {addItem} from "./wishlist.utils";

const INITIAL_STATE = {
    wishlistItems: {}
}

const wishlistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WishListActionTypes.ADD_ITEM_TO_WISHLIST:
            return {
                wishlistItems: addItem(state.wishlistItems, action.payload)
            };
        default:
            return state;
    }
}

export default wishlistReducer;
