import styled from "styled-components";
import logo from "../../acessets/seja-livre.png";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";


const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ff914c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  position: relative;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const RightSection = styled.div` 
  align-items: center;
  position: relative;
  font-size: large;

  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const Logo = styled.img`
  height: 80px;
  object-fit: contain;
  transition: transform 0.3s;

  @media (max-width: 600px) {
    height: 60px;
  }
`;

const CartIcon = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
  font-size: 0.75rem;
`;

const Header = () => {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <LeftSection></LeftSection>

      <CenterSection>
        <Logo src={logo} alt="logo seja livre" />
      </CenterSection>

      <RightSection>
        <Link to="/sobre">Sobre</Link>
        <Link to="/">Início</Link>
        <CartIcon to="/carrinho">
          <IoCartOutline size={28} />
          {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
        </CartIcon>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
