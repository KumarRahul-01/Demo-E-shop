const Reducer = (state, action) => {
  if (action.type === "ADD") {
    const existProductInCart = state.cartData.some(
      (product) => product.id === action.payload.id
    );
    // console.log(existProductInCart);
    if (existProductInCart) {
      const updateCartProduct = state.cartData.map((product) => {
        // console.log(product);
        return product.id === action.payload.id
          ? { ...product, qty: product.qty + 1 }
          : product;
      });
      // console.log(updateCartProduct);
      return {
        ...state,
        cartData: updateCartProduct,
      };
    } else {
      return {
        cartData: [...state.cartData, { ...action.payload, qty: 1 }],
      };
    }
  }
  if (action.type === "DEL") {
    return {
      cartData: state.cartData.filter((item) => {
        return item.id !== action.payload;
      }),
    };
  }
  if (action.type === "INC") {
    return {
      cartData: state.cartData.filter((items) => {
        return items.id === action.payload ? (items.qty += 1) : items;
      }),
    };
  }
  if (action.type === "DEC") {
    return {
      cartData: state.cartData.map((items) => {
        if (items.id === action.payload && items.qty > 1) {
          return { ...items, qty: items.qty - 1 };
        } else {
          return items;
        }
        // return items.id===action.payload?(items.qty-=1):items
      }),
    };
  }
};
export default Reducer;
