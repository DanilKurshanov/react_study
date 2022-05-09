import { useContext,  } from "react";
import {useDispatch, useSelector} from "react-redux";

// import { CartContext } from "../../contexts/cart.context";
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {CartIconContainer, ShoppingIcon, ItemIcon} from "./cart-icon.styles";


const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemIcon>{cartCount}</ItemIcon>
        </CartIconContainer>
    )
};

export default CartIcon;