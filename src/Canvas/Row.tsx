import { Box, Flex } from "@chakra-ui/react";
import { selector, useRecoilValue } from "recoil";
import { itemFamilyAtom } from "../store/item";
import { rowAtomFamily } from "../store/row";
import { CanvasItem } from "./CanvasItem";
import { DraggableWrapper } from "../dnd/DraggableWrapper";
import { DroppableWrapper } from "../dnd/DroppableWrapper";

type Props = {
  rowId: string;
};

const createRowItemSelector = (rowId: string) =>
  selector({
    key: `rowItem-${rowId}`,
    get: ({ get }) => {
      const rowContent = get(rowAtomFamily(rowId));
      const items = rowContent.itemIds.map((itemId) =>
        get(itemFamilyAtom(itemId))
      );
      return items;
    },
  });

export const Row: React.FC<Props> = ({ rowId }) => {
  const items = useRecoilValue(createRowItemSelector(rowId));

  return (
    <DroppableWrapper rowId={rowId}>
      <Flex w="100%" minH="100px">
        {items.map((item) => (
          <DraggableWrapper key={item.id}>
            <CanvasItem key={item.id} itemId={item.id} />
          </DraggableWrapper>
        ))}
      </Flex>
    </DroppableWrapper>
  );
};

export const InvisibleRow: React.FC = () => {
  return <Box w="100%" minH="10px" bgColor="gray.100"></Box>;
};
