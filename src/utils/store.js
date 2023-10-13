import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../utils/cartSlice'
import wishlistReducer from '../utils/wishSlice'
import searchReducer from '../utils/searchSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        search: searchReducer,
    }
})

export default store;