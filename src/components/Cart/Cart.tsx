import useStore from "../../store/store";
import { Product } from "../../types/Product"
import { CartClose, CartPrice, CartQtd, CartWrapper } from "./Cart.styled"
import CloseIcon from '@mui/icons-material/Close';

const Cart = ({ product }: { product: Product }) => {

    const { 
      removeItemFromCart,
      decreaseQuantity,
      increaseQuantity
    } = useStore()

    return (
    <CartWrapper>

     <CartClose onClick={() => removeItemFromCart(product.id)}>
      <CloseIcon />
     </CartClose>

     <img src={product.photo}  alt="imagem produto" />
     <h2>{product.name}</h2>

     <CartQtd>
      <span>Qtd:</span>
       <div>
        <button onClick={() => decreaseQuantity(product)}>-</button>
         <p>{product.quantity}</p>
         <button onClick={() => increaseQuantity(product)}>+</button>
       </div>
     </CartQtd>

     <CartPrice>
        R${product.price}
     </CartPrice>

    </CartWrapper>
  )
}

export default Cart