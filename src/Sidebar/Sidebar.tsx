import { Box, VStack } from "@chakra-ui/react";
import { DraggableComponent } from "./DraggableComponent";

export const SideBar: React.FC = () => {
  return (
    <Box w="300px" h="900px" bgColor="gray.300">
      <VStack mt="4" mb="4">
        <DraggableComponent id="1" label="Item1" type="S" />
        <DraggableComponent id="2" label="Item2" type="M" />
        <DraggableComponent id="3" label="Item3" type="L" />
      </VStack>
    </Box>
  );
};
