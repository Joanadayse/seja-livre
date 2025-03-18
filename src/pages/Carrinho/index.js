import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import logo from "../../acessets/seja-livre.png"
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


const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;

  img {
    width: 150px;
    height: 150px;
  }

  h1{
    margin: 20px 10px;

  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: darkred;
  }
`;


export default function Cart() {
    const { cart, removeFromCart } = useCart();
  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="logo seja livre" />
      </HeaderContainer>

      <Container>
        <h1>Suas Seja Livre</h1>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id}>
              <span>{item.name}</span>
              <img src={item.image} />
              <span>{item.price}</span>
              <span>Qtd: {item.quantity}</span>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remover
              </RemoveButton>
            </CartItem>
          ))
        )}
      </Container>
    </>
  );

}
