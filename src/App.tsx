import { Center, Flex } from "@chakra-ui/react";
import { Canvas } from "./Canvas/Canvas";
import { SideBar } from "./Sidebar/Sidebar";

export const App: React.FC = () => {
  return (
    <Center w="100vw" h="100vh" bg="gray.100">
      <Flex>
        <SideBar />
        <Canvas />
      </Flex>
    </Center>
  );
};
