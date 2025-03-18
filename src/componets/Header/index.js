
import styled from "styled-components";
import logo from "../../acessets/seja-livre.png"
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";


const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ff914c;
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza a logo */
  padding: 10px 20px;
  position: relative;
`;

const Logo = styled.img`
  height: 200px;
`;

const CartIcon = styled(Link)`
  position: absolute;
  right: 10%;
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: 10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 5px 8px;
  font-size: 0.8rem;
`;

const Header = () => {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo seja livre" />
      <CartIcon to="/carrinho">
        <IoCartOutline size={32} />
        {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
      </CartIcon>
    </HeaderContainer>
  );
};

export default  Header;