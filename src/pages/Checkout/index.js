import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import Header from "../../componets/Header";
import { useNavigate } from "react-router-dom";
import bird from "../../acessets/backgroud.png"
import { toast } from "react-toastify";
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;

  strong {
    background-color: #ff914c;
  }
`;

const Select = styled.select`


  margin-top: 5px;
  padding: 4px 6px;
  min-width: 50px;
  max-width: 100px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-family: "Poppins", sans-serif;

  &:focus {
    outline: none;
    border-color: #ff914c;
  }
`;

const Button = styled.button`
  background: #ff914c;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;
  font-weight: bold;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;

  &:hover {
    background: #d14334;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 10px;
  font-size: 1.5em;

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

const OptionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 1rem;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    align-items: center;
  }
`;


export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [entrega, setEntrega] = useState("retirada");
  const [pagamento, setPagamento] = useState("pix");
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(
      item.price.replace("R$", "").replace(",", ".").trim()
    );
    return acc + price * item.quantity;
  }, 0);

  const formatCurrency = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

 const enviarPedido = () => {
   
   if (!entrega || !pagamento) {
     toast.error("Por favor, preencha as opções de entrega e pagamento.");
     return;
   }

   if (cart.length === 0) {
     toast.warn("Seu carrinho está vazio.");
     return;
   }

   let mensagem = "*Resumo do Pedido - Seja Livre 🧡:*\n\n";

   cart.forEach((item) => {
     mensagem += `• ${item.name} - Qtd: ${item.quantity} - ${item.price}\n`;
   });

   mensagem += `\n*Total:* ${formatCurrency(total)}\n`;
   mensagem += `\n*Entrega:* ${entrega}`;
   mensagem += `\n*Pagamento:* ${pagamento}`;
   mensagem += `\n\nAguardo sua confirmação! 💌`;

  const numero = process.env.REACT_APP_WHATSAPP_NUMBER;


   if (!numero) {
     toast.error("Número do WhatsApp não configurado corretamente.");
     return;
   }

   const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

   clearCart(); // 🧹 Limpa o carrinho
   window.open(link, "_blank"); // Abre o WhatsApp

   toast.success("Obrigada pela sua compra! Entraremos em contato em breve 🧡");
   navigate("/"); // Redireciona para a home
 };

  return (
    <>
      <Header />
      <Container>
        <TitleWrapper>
          <img src={bird} alt="Borboletinha" />
          <h1>Finalizar Pedido</h1>
        </TitleWrapper>

        <Section>
          <h2>Itens:</h2>
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} - Qtd: {item.quantity} - {item.price}
            </p>
          ))}
          <strong>Total: {formatCurrency(total)}</strong>
        </Section>
        <OptionsRow>
          <Label>
            Forma de Entrega:
            <Select onChange={(e) => setEntrega(e.target.value)}>
              <option value="retirada">Retirada</option>
              <option value="facilitar">Facilitar Entrega</option>
              <option value="combinar">A Combinar</option>
            </Select>
          </Label>

          <Label>
            Forma de Pagamento:
            <Select onChange={(e) => setPagamento(e.target.value)}>
              <option value="pix">Pix</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
            </Select>
          </Label>
        </OptionsRow>
       

        <Button onClick={enviarPedido}>Enviar Pedido via WhatsApp</Button>
      </Container>
    </>
  );
}
