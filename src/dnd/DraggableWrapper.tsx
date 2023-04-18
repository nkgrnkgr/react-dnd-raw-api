import { Box } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

type Props = {
  children: React.ReactNode;
};

export const DraggableWrapper: React.FC<Props> = ({ children }) => {
  const [{ opacity }, drag] = useDrag(() => ({
    type: "FIELD",
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  return (
    <Box h="max-content" ref={drag} sx={{ opacity, cursor: "move" }}>
      {children}
    </Box>
  );
};
