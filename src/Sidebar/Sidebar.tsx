import { Box, VStack } from "@chakra-ui/react";
import { DraggableWrapper } from "./DraggableWrapper";
import { SidebarItem } from "./SidebarItem";

export const SideBar: React.FC = () => {
  return (
    <Box w="300px" h="900px" bgColor="gray.300">
      <VStack mt="4" mb="4">
        <DraggableWrapper>
          <SidebarItem label="item1" type="S" />
        </DraggableWrapper>
        <DraggableWrapper>
          <SidebarItem label="item2" type="M" />
        </DraggableWrapper>
        <DraggableWrapper>
          <SidebarItem label="item3" type="L" />
        </DraggableWrapper>
      </VStack>
    </Box>
  );
};
