
import styled from "styled-components";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import butterfly from "../../acessets/img.png"


const Container = styled.div`
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
  font-family: "Playfair Display", serif;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

const BorboletaFixa = styled.img`
  position: fixed;
  bottom: 0;
  width: 500px; 
  z-index: -1;
  opacity: 0.5; 
  pointer-events: none;

  @media (max-width: 768px) {
    width: 120px;
  }
`;


const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ff914c;
  font-family: "Dancing Script", cursive;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-family: "Poppins", sans-serif;
`;

const Sobre = () => {
  return (
    <>
      <Header />
      <BorboletaFixa src={butterfly} alt="Borboleta decorativa" />
      <Container>
        <Title>Sobre a Seja Livre</Title>
        <Text>
          A Seja Livre nasceu com o propósito de valorizar a liberdade, a
          autoestima e a sensualidade feminina através de peças íntimas
          confortáveis, bonitas e acessíveis. Cada peça é escolhida com carinho
          para que você se sinta livre para ser quem é – sem padrões, sem
          regras, só você.
        </Text>
        <Text>
          Aqui, acreditamos que a lingerie é muito mais que roupa. É uma forma
          de expressão. Um presente pra você mesma.
        </Text>
        <Text>
          Seja bem-vinda ao nosso cantinho. Sinta-se à vontade para explorar,
          experimentar e se apaixonar! 🧡
        </Text>
      </Container>
    </>
  );
};

export default Sobre;
