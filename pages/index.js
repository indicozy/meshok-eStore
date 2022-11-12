import { Box, useColorModeValue} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Main from '../components/Main/Main';
import TopBar from '../components/TopBar/TopBar'
import MobilePanel from '../components/MobilePanel/MobilePanel'
export default function Home() {

  const dm_bg = useColorModeValue('white', 'black');
  return (
    <Box h="100vh" pos="relative" bgColor={dm_bg} p="0">
      <Header />
      <Box pt={{ md: '70px', basic: '135px' }}>
        <TopBar />
        <Main />
        <MobilePanel />
      </Box>
    </Box>
  );
}
