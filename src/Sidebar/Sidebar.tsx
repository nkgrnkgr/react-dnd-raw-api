import { Box, VStack } from "@chakra-ui/react";
import { DraggableWrapper } from "./Draggable";
import { Item } from "./Item";

export const SideBar: React.FC = () => {
  return (
    <Box w="300px" h="900px" bgColor="gray.300">
      <VStack mt="4" mb="4">
        <DraggableWrapper>
          <Item label="item1" type="S" />
        </DraggableWrapper>
        <DraggableWrapper>
          <Item label="item2" type="M" />
        </DraggableWrapper>
        <DraggableWrapper>
          <Item label="item3" type="L" />
        </DraggableWrapper>
      </VStack>
    </Box>
  );
};
