/* eslint-disable no-fallthrough */

import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
    products: [
        { id: 1, name: "Sonos ARC", price: 970 },
        { id: 2, name: "Keychron K2 HS", price: 150 },
        { id: 3, name: "XBOX Series X Hallo Edition", price: 725 },
        { id: 4, name: "Dell UltraWide", price: 822 },
        { id: 5, name: "WiFi Mesh", price: 145 },
        { id: 6, name: "Smart TV Samsung QN90A", price: 1700 },
    ],
    cart: [],
};

export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                let newItem = state.products.find(
                    product => product.id === action.payload
                );
                // console.log(newItem);
                let itemInCart = state.cart.find(item => item.id === newItem.id);

                return itemInCart ?
                    {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id === newItem.id ?
                            {...item, quantity: item.quantity + 1 } :
                            item
                        ),
                    } :
                    {...state, cart: [...state.cart, {...newItem, quantity: 1 }] };
            }
        case REMOVE_ONE_FROM_CART:
            {
                let itemToDelete = state.cart.find(item => item.id === action.payload);

                return itemToDelete.quantity > 1 ?
                    {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id === action.payload ?
                            {...item, quantity: item.quantity - 1 } :
                            item
                        ),
                    } :
                    {
                        ...state,
                        cart: state.cart.filter(item => item.id !== action.payload),
                    };
            }
        case REMOVE_ALL_FROM_CART:
            {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                };
            }
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
};