import { Product } from '../types/Product';
import { SetStateAction } from 'react';

export type SetCart = (state: SetStateAction<{ cart: Product[]; totalValue: number; disabledBtn?: boolean }>) => void;

export const addToCart = (setCart: SetCart, newProduct: Product) =>
  setCart((state) => {
    const existingProductIndex = state.cart.findIndex(
      (item) => item.id === newProduct.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingProductIndex].quantity += 1;

      return {
        cart: updatedCart,
        totalValue: state.totalValue + Number(newProduct.price),
        disabledBtn: !state.disabledBtn,
      };
    } else {
      return {
        cart: [...state.cart, { ...newProduct, quantity: 1 }],
        totalValue: state.totalValue + Number(newProduct.price),
      };
    }
  });


export const removeFromCart = (setCart: SetCart, productId: number) =>
  setCart((state) => {
    const removedItem = state.cart.find((item) => item.id === productId);

    if (!removedItem) {
      return state;
    }

    const updatedTotalValue =
      state.totalValue - (removedItem.price * removedItem.quantity || 0);

    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== productId),
      totalValue: updatedTotalValue,
    };
  });


