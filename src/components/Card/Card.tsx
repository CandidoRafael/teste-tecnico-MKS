import { Product } from "../../types/Product"
import { TextLimit } from "../TextLimit/TextLimit"
import { CardButton, CardContainer, CardImage, CardTitle } from "./Card.styled"

import useStore from "../../store/store";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ product }: { product: Product }) => {

  const { setCart, cart } = useStore()
  
  return (
    <CardContainer key={product.id}>
      <CardImage src={product.photo} alt="imagem produto" />
      <CardTitle>
       <h1>{product.name}</h1>
       <span>R${product.price}</span>
      </CardTitle>
    
      <TextLimit text={product.description} limit={89} />

    
      <CardButton onClick={() => setCart(product)} disabled={cart.some((item) => item.id === product.id)}>
        {cart.some((item) => item.id === product.id) ? (
          <>
            <AddShoppingCartIcon />
            Adicionado
          </>
        ) : (
          <>
          <ShoppingBagIcon />
          Comprar
          </>
        )}
      </CardButton>

    </CardContainer>
  )
}

export default Card