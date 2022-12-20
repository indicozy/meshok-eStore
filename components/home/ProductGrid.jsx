import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
function ProductGrid(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const res = response.data;
        console.log(res);
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Grid
      w="100%"
      templateColumns={{
        basic: "1fr",
        mob3: "repeat(2, 1fr)",
        mob2: "repeat(3, 1fr)",
        mob1: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        fl: "repeat(4, 1fr)",
      }}
      columnGap="1rem"
      rowGap="1.5rem"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

export default ProductGrid;
