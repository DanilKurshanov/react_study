import {createContext, useState, useEffect, useReducer} from "react";

import {createAction} from "../utils/reducer/reducer.utils";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    onAuthStateChangedListener
} from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const INITIAL_STATE = {
    currentUser: null,
};

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
    console.log('dispatched', action)
    const {type, payload} = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

export const UserProvider = ({children}) => {

    // const [currentUser, setCurrentUser] = useState(null);

    const [ {currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
      dispatch(
          createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    )};

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubcride = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubcride;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}