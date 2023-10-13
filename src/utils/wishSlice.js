import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishlist: [],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,

    reducers: {
        addWishItem(state, action) {
            state.wishlist.push(action.payload)
        },

        deleteWishItem(state, action) {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
        },

        clearWishList(state) {
            state.wishlist = []
        }
    }
})


export const { addWishItem, deleteWishItem, clearWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;




