import { Box } from "@chakra-ui/react";
import { DragPreviewImage, useDrag } from "react-dnd";

type Props = {
  children: React.ReactNode;
};

export const DraggableWrapper: React.FC<Props> = ({ children }) => {
  const [{ display }, drag, preview] = useDrag(() => ({
    type: "FIELD",
    collect: (monitor) => ({
      display: monitor.isDragging() ? "none" : "block",
    }),
  }));
  return (
    <>
      <DragPreviewImage connect={preview} src="overlay.png" />
      <Box h="max-content" ref={drag} sx={{ display, cursor: "move" }}>
        {children}
      </Box>
    </>
  );
};
