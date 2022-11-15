import { Flex } from "@chakra-ui/react";
import CartItem from "./cart-item";

export default function CartItemList(props) {
  const { list } = props;

  return (
    <Flex
      flexDirection="column"
      gap={{ md: "2rem", mob1: "1.4rem", mob2: "1.4rem", basic: "2rem" }}
    >
      {list.map((item) => (
        <CartItem
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
