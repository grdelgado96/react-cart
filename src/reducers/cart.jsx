export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || []; // get cart from localStorage or empty array

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

//update localStorage with state
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      // Check if the product is already in the cart
      const productInCartIndex = state.findIndex(
        (item) => item.id === payload.id
      );

      if (productInCartIndex >= 0) {
        // If the product is already in the cart, update the quantity
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }
      // If the product is not in the cart, add it with quantity = 1
      const newState = [...state, { ...payload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== payload.id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
  }
  return state;
};
