import {
  Box,
  Icon,
  Button,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { sidebar_buttons } from "../../dummy-data";
import { useRouter } from "next/router";
import Link from "next/link";


export default function SideBar() {
  const router = useRouter();

  const dm_hover = useColorModeValue("second_white", "second_black");
  const dm_text = useColorModeValue("black", "white");
  const dm_bg = useColorModeValue("white", "black");
  const dm_text_hover = useColorModeValue("black", "teal_100");

  return (
    <Box
      maxW="25%"
      minW="25%"
      letterSpacing=".02em"
      display={{ md: "block", basic: "none" }}
    >
      <UnorderedList
        listStyleType="none"
        p="0"
        m="0"
        position="relative"
        right="0.5rem"
        color={dm_text}
      >
        {sidebar_buttons.map((item, ind) => (
          <ListItem>
             <Button
                w="100%"
                key={ind}
                py="0.6rem"
                borderRadius="25px"
                pl="0.5rem"
                pr="0.2rem"
                bgColor={dm_bg}
                _hover={{
                  boxShadow: "xs",
                  bgColor: dm_hover,
                  color: dm_text_hover,
                }}
                justifyContent="flex-start"
                onClick={() => router.push(item.link)}
              >
              <Link href={item.link}>
             
                <Icon mr=".5rem" fontSize="1.7rem">
                  {item.icon}
                </Icon>
                {item.title}</Link>
              </Button>
            
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
