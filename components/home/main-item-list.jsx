import MainItem from "./main-item";
import { Box, Grid } from "@chakra-ui/react";
export default function MainItemList(props) {

	const { list, wishlist, setWishlist } = props
  
  return (
    <Box h="100%" w="100%">
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
        rowGap="24px"
      >
        {list.map((item) => (
          <MainItem
            wishlist={wishlist} 
            setWishlist={setWishlist}
            key={item.id}
            title={item.title}
            id={item.id}
            image={item.image}
            description={item.description}
            value={item.value}
            currency={item.currency}
          />
        ))}
      </Grid>
    </Box>
  );
}
