import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import imagem1 from "../../acessets/img-1.jpeg";
import imagem2 from "../../acessets/img-2.jpeg";
import imagem3 from "../../acessets/img-3.jpg";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";



const Container = styled.div`

  flex-direction: column;
  align-items: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 20px auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas */
    padding: 0 10px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Uma coluna para telas muito pequenas */
  }
`;


const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 12px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
  }
`;


const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 1.5em;
  font-family: "Poppins", sans-serif;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
  font-family: "Dancing Script", cursive;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #ff914c;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
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


const Select = styled.select`
  margin-top: 5px;
  padding: 4px 6px;
  min-width: 50px;
  max-width: 100px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-family: "Poppins", sans-serif;
  /* height: 30px; */
  /* line-height: 1; */
`;




const OptionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
`;



const Home = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Conjunto de Lingerie",
      image: imagem1,
      price: "R$ 79,90",
      stock: 10,
      sizes: ["P", "M", "G"],
    },
    {
      id: 2,
      name: "Body Sensual",
      image: imagem2,
      price: "R$ 89,90",
      stock: 5,
      sizes: ["P", "M", "G"],
    },
    {
      id: 3,
      name: "Baby Doll",
      image: imagem3,
      price: "R$ 69,90",
      stock: 8,
      sizes: ["P", "M", "G"],
    },
    {
      id: 4,
      name: "Conjunto de Lingerie",
      image: imagem1,
      price: "R$ 79,90",
      stock: 10,
      sizes: ["P", "M", "G"],
    },
    {
      id: 5,
      name: "Body Sensual",
      image: imagem2,
      price: "R$ 89,90",
      stock: 5,
      sizes: ["P", "M", "G"],
    },
    {
      id: 6,
      name: "Baby Doll",
      image: imagem3,
      price: "R$ 69,90",
      stock: 8,
      sizes: ["P", "M", "G"],
    },
  ];

  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQty, setSelectedQty] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");


  const handleAddToCart = (product) => {
    const size = selectedSize[product.id];
    const quantity = selectedQty[product.id] || 1;

    if (!size) {
      toast.error("Por favor, selecione um tamanho");
      return;
    }

    addToCart(product, quantity, size);
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const numericPrice = parseFloat(
      product.price.replace("R$ ", "").replace(",", ".")
    );

    const priceMatch =
      priceFilter === "all" ||
      (priceFilter === "lt80" && numericPrice < 80) ||
      (priceFilter === "gte80" && numericPrice >= 80);

    return nameMatch && priceMatch;
  });



  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />

          <Select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          >
            <option value="all">Todos os preços</option>
            <option value="lt80">Menor que R$80</option>
            <option value="gte80">R$80 ou mais</option>
          </Select>
        </div>



        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductPrice>
                  Disponível: {product.stock} unidades
                </ProductPrice>

                <OptionsRow>
                  <Label>
                    Tamanho:
                    <Select
                      value={selectedSize[product.id] || ""}
                      onChange={(e) =>
                        setSelectedSize({
                          ...selectedSize,
                          [product.id]: e.target.value,
                        })
                      }
                    >
                      <option value="">Selecione</option>
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </Select>
                  </Label>

                  <Label>
                    Quantidade:
                    <Select
                      value={selectedQty[product.id] || 1}
                      onChange={(e) =>
                        setSelectedQty({
                          ...selectedQty,
                          [product.id]: Number(e.target.value),
                        })
                      }
                    >
                      {[...Array(product.stock).keys()].map((n) => (
                        <option key={n + 1} value={n + 1}>
                          {n + 1}
                        </option>
                      ))}
                    </Select>
                  </Label>
                </OptionsRow>

                <Button onClick={() => handleAddToCart(product)}>
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
