import { Product } from "./Product"

export type StoreState = {
    isOpen: boolean
    cart: Product[],
    totalValue: number
    disabledBtn: boolean
    
    toggleSidebar: () => void
    setCart: (cart: Product) => void
    removeItemFromCart: (productId: number) => void;
    increaseQuantity: (item: Product) => void
    decreaseQuantity: (item: Product) => void
}