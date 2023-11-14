import { Product } from '../types/Product';
import { SetCart } from './cartOperations';

export const increaseQuantity = (setCart: SetCart, item: Product) =>
  setCart((state) => {
    const updatedCart = state.cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    return {
      ...state,
      cart: updatedCart,
      totalValue: state.totalValue + Number(item.price),
    };
  });

export const decreaseQuantity = (setCart: SetCart, item: Product) =>
  setCart((state) => {
    if (item.quantity > 1) {

      const updatedCart = state.cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      return {
        ...state,
        cart: updatedCart,
        totalValue: state.totalValue - Number(item.price),
      };
    } 
      return state;
    
  });