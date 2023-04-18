import { Box } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

type Props = {
  children: React.ReactNode;
};

export const DroppableWrapper: React.FC<Props> = ({ children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FIELD",
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
  }));

  return (
    <Box ref={drop} h="max-content" bgColor={isOver ? "red.200" : "gray.300"}>
      {children}
    </Box>
  );
};
