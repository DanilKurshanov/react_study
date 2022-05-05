import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {CartIconContainer, ShoppingIcon, ItemIcon} from "./cart-icon.styles";


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemIcon>{cartCount}</ItemIcon>
        </CartIconContainer>
    )
};

export default CartIcon;