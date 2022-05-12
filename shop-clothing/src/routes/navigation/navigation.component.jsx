import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import CartIcon from "../../components/card-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as CrwnLogo} from "../../assets/086 crown.svg";


// import {CartContext} from "../../contexts/cart.context";
import {selectIsCartOpen} from '../../store/cart/cart.selector'
import {selectCurrentUser} from '../../store/user/user.selector';


// import {signOutUser} from '../../utils/firebase/firebase.utils';
import {signOutStart} from "../../store/user/user.action";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';



const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    // const { isCartOpen } = useContext(CartContext);

    const signOutUser = () => dispatch(signOutStart());


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;