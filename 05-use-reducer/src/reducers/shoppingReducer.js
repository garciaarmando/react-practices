import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Sonos ARC", price: 970 },
    { id: 2, name: "Keychron K2 HS", price: 150 },
    { id: 3, name: "Series X HE", price: 725 },
    { id: 4, name: "Dell UltraWide", price: 822 },
    { id: 5, name: "WiFi Mesh", price: 145 },
    { id: 6, name: "Samsung QN90A", price: 1700 },
  ],
  cart: [],
};

export const shoppingReucer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
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
