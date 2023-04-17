import { Box, Flex } from "@chakra-ui/react";
import { selector, useRecoilValue } from "recoil";
import { itemFamilyAtom } from "../store/item";
import { rowAtomFamily } from "../store/row";
import { CanvasItem } from "./CanvasItem";
import { DraggableAndDroppableWrapper } from "./DraggableAndDroppableWrapper";

const DEFAULT_COLOR = "gray.300";

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
    <Flex w="100%" minH="100px" bgColor={DEFAULT_COLOR}>
      {items.map((item) => (
        <DraggableAndDroppableWrapper itemId={item.id} key={item.id}>
          <CanvasItem itemId={item.id} />
        </DraggableAndDroppableWrapper>
      ))}
    </Flex>
  );
};

export const InvisibleRow: React.FC = () => {
  return <Box w="100%" minH="10px" bgColor="gray.100"></Box>;
};
