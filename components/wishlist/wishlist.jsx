import { Flex } from "@chakra-ui/react";
import WishlistItem from "./wishlist-item";

export default function Wishlist(props) {
  const { list } = props;
  return (
    <Flex
      flexDirection="column"
      gap={{ md: "2rem", mob1: "1.4rem", mob2: "1.4rem", basic: "2rem" }}
    >
      {list.map((item) => (
        <WishlistItem
          key={item.id}
          title={item.title}
          id={item.id}
          image={item.image}
          description={item.description}
          value={item.value}
          currency={item.value}
        />
      ))}
    </Flex>
  );
}
