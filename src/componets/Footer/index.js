import styled from "styled-components";

const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #ff914c;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-align: center;
  padding: 0 10px;
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <p>
        © {new Date().getFullYear()} Seja Livre — Todos os direitos reservados.
      </p>
    </ContainerFooter>
  );
};

export default Footer;
