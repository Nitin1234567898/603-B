import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalAmount += action.payload.price;
        },
        removeItem: (state, action) => {
            const removed = state.items.find(item => item.id === action.payload);
            if (removed) state.totalAmount -= removed.price;
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;