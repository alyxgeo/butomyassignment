import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    search: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,

    reducers: {
        searchInput(state, action) {
            state.search = action.payload
        },


    }
})


export const { searchInput } = searchSlice.actions;

export default searchSlice.reducer;




