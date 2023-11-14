import { create }  from 'zustand'
import { addToCart, removeFromCart } from './cartOperations'
import { decreaseQuantity, increaseQuantity } from './cartActions'
import { StoreState } from '../types/Store';

const useStore = create<StoreState>((set) => ({
    isOpen: false,
    cart: [],
    totalValue: 0,
    disabledBtn: false,

    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),

    setCart: (newProduct) => addToCart(set, newProduct),
    
    removeItemFromCart: (productId) => removeFromCart(set, productId),

    increaseQuantity: (item) => increaseQuantity(set, item),
    
    decreaseQuantity: (item) => decreaseQuantity(set, item)
  }));
  
  export default useStore;
  