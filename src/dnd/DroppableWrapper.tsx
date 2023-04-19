import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { useRecoilState } from "recoil";
import { rowAtomFamily } from "../store/row";
import { PLACEHOLDER_ID } from "../Canvas/CanvasItem";

type Props = {
  rowId: string;
  children: React.ReactNode;
};

export const DroppableWrapper: React.FC<Props> = ({ children, rowId }) => {
  const [rowContent, setRowContent] = useRecoilState(rowAtomFamily(rowId));

  const [{ isOver, cursorOffset }, drop] = useDrop(() => ({
    accept: "FIELD",
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        cursorOffset: monitor.getClientOffset(),
      };
    },
  }));

  useEffect(() => {
    if (isOver) {
      const index = getIndexForInsert(cursorOffset);
      if (index > -1) {
        const itemIds = [...rowContent.itemIds];
        itemIds.splice(index, 0, PLACEHOLDER_ID);
        setRowContent({
          ...rowContent,
          itemIds,
        });
      }
    } else {
      const filtered = rowContent.itemIds.filter(
        (itemId) => itemId !== PLACEHOLDER_ID
      );
      setRowContent({
        ...rowContent,
        itemIds: filtered,
      });
    }
  }, [isOver, cursorOffset]);

  return (
    <Box ref={drop} h="max-content" bgColor={isOver ? "red.200" : "gray.300"}>
      {children}
    </Box>
  );
};

const TOOLBOX_SIZE = 200;
const CANVAS_PADDING_LEFT = 50;

const getIndexForInsert = (cursor: { x: number; y: number } | null) => {
  if (cursor) {
    const x = cursor.x - TOOLBOX_SIZE - CANVAS_PADDING_LEFT;
    if (x < 200) {
      return 0;
    }
    if (x < 400) {
      return 1;
    }
    if (x < 600) {
      return 2;
    }
    return 3;
  }
  return -1;
};
