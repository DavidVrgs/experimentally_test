export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_IS_SIDEBAR_OPEN = "SET_IS_SIDEBAR_OPEN"

export const setProducts = products => ({ type: SET_PRODUCTS, products });
export const setIsSidebarOpen = isSidebarOpen => ({ type: SET_IS_SIDEBAR_OPEN, isSidebarOpen });