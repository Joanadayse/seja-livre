import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom"; 
import Header from "../../componets/Header";
import bird from "../../acessets/backgroud.png"

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1.5em;
  font-weight: bold;

  img {
    width: 150px;
    height: 150px;
  }

  h1 {
    margin: 20px 10px;
    font-family: "Dancing Script", cursive;
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
  

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;

  &:hover {
    background: darkred;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 10px;

  h1 {
    font-family: "Dancing Script", cursive;
    margin: 0;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    transform: scaleX(-1) rotate(-20deg);
    
  }
`;

const Total = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
`;



const FinalizarButton = styled(Link)`
  display: block;
  background-color: #ff914c;
  color: white;
  padding: 12px 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;
`;


const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
 
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

const ItemName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ItemDetails = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: 601px) {
    justify-content: flex-start;
    width: auto;
  }
`;

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  console.log(cart); // 👈 veja o que está vindo

  const formatCurrency = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(
      item.price.replace("R$", "").replace(",", ".").trim()
    );
    const quantity = Number(item.quantity);
    return acc + price * quantity;
  }, 0);


  return (
    <>
      <Header />

      <Container>
        <TitleWrapper>
          <img src={bird} alt="Borboletinha" />
          <h1>Suas Seja Livre</h1>
        </TitleWrapper>

        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemDetails>
                    <span>{formatCurrency(item.price)}</span>
                    <span>Qtd: {item.quantity}</span>
                  </ItemDetails>
                </ItemInfo>
                <ButtonWrapper>
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    Remover
                  </RemoveButton>
                </ButtonWrapper>
              </CartItem>
            ))}
            <Total>Total: {formatCurrency(total)}</Total>
            <FinalizarButton to="/checkout">Finalizar Pedido</FinalizarButton>
          </>
        )}
      </Container>
    </>
  );
}
