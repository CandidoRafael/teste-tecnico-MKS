import useStore from "../../store/store";
import { Cart, Logo, Nav } from "./Navbar.styled"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

  const { toggleSidebar, cart } = useStore()
  
  return (
    <Nav>
      <Logo>MKS<span>Sistemas</span></Logo>
      <Cart>
        <i data-testid="cart-icon" onClick={toggleSidebar}>
          <ShoppingCartIcon  />
        </i>
        <span>{cart.length}</span>
      </Cart>
    </Nav>
  )
}

export default Navbar