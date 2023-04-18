import { Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { dndAtom } from "../store/dnd";

type Props = {
  children: React.ReactNode;
  itemId: string;
};
const dragImage = document.createElement("img");
dragImage.src = "overlay.png";

export const DraggableAndDroppableWrapper: React.FC<Props> = ({
  children,
  itemId,
}) => {
  const [dnd, setDnd] = useRecoilState(dndAtom);

  return (
    <Flex
      onDragStart={(e) => {
        e.dataTransfer.setDragImage(dragImage, 50, 25);

        setDnd({
          ...dnd,
          draggingItemId: itemId,
        });
      }}
      onDragEnd={() => {
        setDnd({
          draggingItemId: null,
          overItemId: null,
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
    </Flex>
  );
};
