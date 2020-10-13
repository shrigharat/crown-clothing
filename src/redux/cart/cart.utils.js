export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    if(existingItem) {
        return cartItems.map(
            cartItem =>
                cartItem.id === itemToAdd.id ?
                    {...cartItem, quantity: cartItem.quantity+1}
                    :
                    cartItem
        )
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const clearCartItem = (cartItems, itemToClear) => (
    cartItems.filter(cartItem => cartItem.id !== itemToClear.id)
);

export const removeCartItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);
    let quantity = existingItem.quantity;
    if(quantity>1) {
        return cartItems.map(
            cartItem => cartItem.id === itemToRemove.id? {
                ...cartItem,
                quantity: cartItem.quantity-1
            } : cartItem
        )
    } else if(quantity===1){
        return clearCartItem(cartItems, itemToRemove);
    }
}