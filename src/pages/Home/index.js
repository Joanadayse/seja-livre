import styled from "styled-components";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import imagem1 from "../../acessets/img-1.jpeg";
import imagem2 from "../../acessets/img-2.jpeg";
import imagem3 from "../../acessets/img-3.jpg";
import backgroundImage from "../../acessets/backgroud.png"
import { useCart } from "../../context/CartContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

const ProductCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  

`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 1.5em;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #ff914c;
  font-weight: bolder;
`;

const Button = styled.button`
  background: #ff914c;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 5px;
  font-weight: bold;
 

  &:hover {
    background: #d14334;
  }
`;

const Home = () => {

    const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Conjunto de Lingerie",
      image: imagem1,
      price: "R$ 79,90",
    },
    {
      id: 2,
      name: "Body Sensual",
      image: imagem2,
      price: "R$ 89,90",
    },
    {
      id: 3,
      name: "Baby Doll",
      image: imagem3,
      price: "R$ 69,90",
    },
    {
      id: 1,
      name: "Conjunto de Lingerie",
      image: imagem1,
      price: "R$ 79,90",
    },
    {
      id: 2,
      name: "Body Sensual",
      image: imagem2,
      price: "R$ 89,90",
    },
    {
      id: 3,
      name: "Baby Doll",
      image: imagem3,
      price: "R$ 69,90",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <Button onClick={() => addToCart(product)}>
                  Adicionar ao Carrinho
                </Button>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
