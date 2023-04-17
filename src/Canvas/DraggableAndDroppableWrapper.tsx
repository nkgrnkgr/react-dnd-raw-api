import { Box } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { dndAtom } from "../store/dnd";

type Props = {
  children: React.ReactNode;
  itemId: string;
};

export const DraggableAndDroppableWrapper: React.FC<Props> = ({
  children,
  itemId,
}) => {
  const [dnd, setDnd] = useRecoilState(dndAtom);

  return (
    <Box
      onDragStart={() => {
        setDnd({
          ...dnd,
          draggingItemId: itemId,
        });
      }}
      onDragEnd={() => {
        setDnd({
          ...dnd,
          draggingItemId: null,
        });
      }}
      onDragEnter={() => {
        setDnd({
          ...dnd,
          overItemId: itemId,
        });
      }}
      onDragLeave={() => {
        setDnd({
          ...dnd,
          overItemId: null,
        });
      }}
      onDragOver={(e) => {
        if (e.preventDefault) {
          e.preventDefault();
        }
        return false;
      }}
      h="max-content"
      sx={{
        cursor: "move",
      }}
      draggable="true"
    >
      {children}
    </Box>
  );
};
