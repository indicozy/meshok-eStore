import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Box fontFamily="heading" fontSize="2rem" fontWeight="bold">
        e-store
      </Box>
    </Link>
  );
}
