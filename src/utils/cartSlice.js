import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },

        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },

        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.price
        },

        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.price

            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
        },

        clearCart(state) {
            state.cart = []
        }
    }
})


export const { addItem, deleteItem, decreaseItemQuantity,
    increaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


