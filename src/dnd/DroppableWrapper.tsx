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

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FIELD",
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
  }));

  useEffect(() => {
    if (isOver) {
      setRowContent({
        ...rowContent,
        itemIds: [...rowContent.itemIds, PLACEHOLDER_ID],
      });
    } else {
      const filtered = rowContent.itemIds.filter(
        (itemId) => itemId !== PLACEHOLDER_ID
      );
      setRowContent({
        ...rowContent,
        itemIds: filtered,
      });
    }
  }, [isOver]);

  return (
    <Box ref={drop} h="max-content" bgColor={isOver ? "red.200" : "gray.300"}>
      {children}
    </Box>
  );
};
