import useStore from "../../store/store";
import Cart from "../Cart/Cart";
import { CartFinish, CartResults, CartTable, CartTotal, SidebarWrapper, ToggleButton } from "./Sidebar.styled";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {

  const { isOpen, toggleSidebar, cart, totalValue } = useStore();

  return (
    <SidebarWrapper isopen={isOpen ? 'true' : undefined}>
     <h1>Carrinho <span>de compras</span></h1>
    <ToggleButton onClick={toggleSidebar}>
      <CloseIcon />
    </ToggleButton>
    
    <CartTable>
      {cart.length === 0 && (
        <p>Carrinho de compras vazio.</p>
      )}
      {cart.map((product) => (
        <Cart
        key={product.id}
        product={product}
        />
      ))}
    </CartTable>

    <CartTotal>
      <CartResults>
      <p>Total:</p>
      <span>R${totalValue}</span>
      </CartResults>
      
      <CartFinish>
        <button>Finalizar Compra</button>
      </CartFinish>
    </CartTotal>
  </SidebarWrapper>
  )
}

export default Sidebar