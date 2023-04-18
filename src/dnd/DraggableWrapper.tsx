import { Box } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

type Props = {
  children: React.ReactNode;
};

export const DraggableWrapper: React.FC<Props> = ({ children }) => {
  const [{ display }, drag] = useDrag(() => ({
    type: "FIELD",
    collect: (monitor) => ({
      display: monitor.isDragging() ? "none" : "block",
    }),
  }));
  return (
    <Box h="max-content" ref={drag} sx={{ display, cursor: "move" }}>
      {children}
    </Box>
  );
};
