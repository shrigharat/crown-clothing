import {WishListActionTypes} from "./wishlist.types";

export const addItemToWishlist = (item) => (
    {
        type: WishListActionTypes.ADD_ITEM_TO_WISHLIST,
        payload: item
    }
);