import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems:(state, actions)=>{
        const newItem = action.payload
        const existingItem = state.cartItems.find(
            (item) => item.id === newItem.id,
        );

        state.totalAmount++

        if (!existingItem) {
            state.cartItems.push({
                id: newItem.id,
                productName: newItem.productName,
                image: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
        }

        else{
            state.totalAmount = state.cartItems.reduce((total, item)=> total+Number)
        }

    },
  },
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer

//00.12.21 