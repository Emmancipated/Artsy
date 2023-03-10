import { createReducer } from "@reduxjs/toolkit";
import { 
    AddProduct,
    RemoveProduct,
    AddQuantity,
    RemoveQuantity,
 } from "../actions";

//The initial state of the app
const initialState = {
    products: {
        items: [],
    }
}

//The product reducer
export const ProductReducer = createReducer(initialState.products.items, (builder) => {
    builder
    .addCase(AddProduct, (state, action) => {
        const items = state.find((product) => product.id === action.payload.id); //check state if we have any as same as payload id
        if (items) {
            items.quantity += action.payload.quantity; //if found, increase its quantity
        } else {
            state.push(action.payload); //if not, add the the item to state
        }
    })
    .addCase(RemoveProduct, (state, action) => {
    //returns the items in state except the clicked item
    return state.filter(product => product.id !== action.payload);
    })                  
    .addCase(AddQuantity, (state, action) => {
        const itemId = state.find((itemId)=> itemId.id === action.payload);
        if(itemId) {
            itemId.quantity++;// find the selected items and increase the quantity
        } 
    }) 
    .addCase(RemoveQuantity, (state, action) => {
        const itemId = state.find((itemId)=> itemId.id === action.payload)
        if(itemId && itemId.quantity > 1) { // checks if the value of the selected item is more than one,
            itemId.quantity--; //if yes, decrease the quantity by one, else return a list of -
        } else { // items in state except the selected item
          return state.filter(product => product.id !== action.payload);  
        }  
    })
});
