import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    cartItems: [],
    amount: 0,
    total:0,
    isLoading:true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialstate,
});

/* console.log(cartSlice); */

export default cartSlice.reducer;