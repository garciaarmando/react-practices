/* eslint-disable no-fallthrough */
import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
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

export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        product => product.id === action.payload
      );
      // console.log(newItem);
      let itemInCart = state.cart.find(item => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map(item =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
};
