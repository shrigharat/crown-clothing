export const addItem = (wishlistItems, itemToAdd) => {
    console.log(wishlistItems);
    let newWishlist = {
        ...wishlistItems
    };
    if (wishlistItems.hasOwnProperty(`${itemToAdd.id}`)) {
        delete newWishlist[itemToAdd.id];
        return newWishlist;
    } else {
        newWishlist[itemToAdd.id] = itemToAdd;
        return newWishlist;
    }
}