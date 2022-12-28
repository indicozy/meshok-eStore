import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { useQuery } from "react-query";

const fetchProducts = async () => {
  const res = await fetch("https://next-e-store-c85lhy3pm-sogeking7.vercel.app");
  return res.json();
};
function ProductGrid(props) {
  const [products, setProducts] = useState([]);
  const { data, isLoading, error, isSuccess } = useQuery(
    "products",
    fetchProducts
  );
  console.log(data);
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
      {error && <b>Error fetching data</b>}
      {isLoading && <b>Loading...</b>}

      {isSuccess &&
        data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </Grid>
  );
}

export default ProductGrid;
