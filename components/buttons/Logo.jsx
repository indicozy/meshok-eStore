import { Box } from "@chakra-ui/react";

import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Box fontFamily="heading" fontSize="2rem" fontWeight="bold">
        e-store
      </Box>
    </Link>
  );
}

export default Logo;
