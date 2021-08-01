import React from 'react';

import { SET_PRODUCTS, SET_IS_SIDEBAR_OPEN } from '../actions';

export const initialState = {
    products: [],
    isSidebarOpen: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, ...action };
        case SET_IS_SIDEBAR_OPEN:
            return { ...state, ...action };
        default:
            return state;
    }
};

export const Context = React.createContext()


