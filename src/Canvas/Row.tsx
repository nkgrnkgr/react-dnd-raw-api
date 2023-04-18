import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { dndAtom } from "../store/dnd";
import { itemFamilyAtom } from "../store/item";
import { rowAtomFamily } from "../store/row";
import { CanvasItem } from "./CanvasItem";
import { DraggableAndDroppableWrapper } from "./DraggableAndDroppableWrapper";
import { PLACEHOLDER_ID, PlaceHolder } from "./Placeholder";

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
  useDnD(rowId);

  return (
    <Flex w="100%" minH="100px" bgColor={DEFAULT_COLOR}>
      {items.map((item) => (
        <DraggableAndDroppableWrapper itemId={item.id} key={item.id}>
          {item.id === PLACEHOLDER_ID ? (
            <PlaceHolder />
          ) : (
            <CanvasItem itemId={item.id} />
          )}
        </DraggableAndDroppableWrapper>
      ))}
    </Flex>
  );
};

export const InvisibleRow: React.FC = () => {
  return <Box w="100%" minH="10px" bgColor="gray.100"></Box>;
};

const useDnD = (rowId: string) => {
  const dnd = useRecoilValue(dndAtom);
  const [rowContent, setRowContent] = useRecoilState(rowAtomFamily(rowId));
  const index = rowContent.itemIds.findIndex(
    (itemId) => itemId === dnd.overItemId
  );

  if (index > -1) {
    const itemIds = [...rowContent.itemIds];
    itemIds.splice(index, 0, PLACEHOLDER_ID);
    setRowContent({
      ...rowContent,
      itemIds: rowContent.itemIds,
    });
  }
};
