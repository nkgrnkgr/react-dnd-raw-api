import { Box, Flex } from "@chakra-ui/react";
import { CanvasItem } from "./CanvasItem";
import { DraggableAndDroppableWrapper } from "./DraggableAndDroppableWrapper";

const DEFAULT_COLOR = "gray.300";

type ItemProps = {
  id: string;
  type: string;
  label: string;
};

type Props = {
  items: ItemProps[];
};

export const Row: React.FC<Props> = ({ items }) => {
  return (
    <Flex w="100%" minH="100px" bgColor={DEFAULT_COLOR}>
      {items.map((item) => (
        <DraggableAndDroppableWrapper key={item.id}>
          <CanvasItem type={item.type} label={item.label} />
        </DraggableAndDroppableWrapper>
      ))}
    </Flex>
  );
};

export const InvisibleRow: React.FC = () => {
  return <Box w="100%" minH="10px" bgColor="gray.100"></Box>;
};
