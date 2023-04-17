import { Box } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const DraggableAndDroppableWrapper: React.FC<Props> = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isOver, setIsOver] = useState(false);

  return (
    <Box
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onDragEnter={() => setIsOver(true)}
      onDragLeave={() => setIsOver(false)}
      onDragOver={(e) => {
        if (e.preventDefault) {
          e.preventDefault();
        }
        return false;
      }}
      h="max-content"
      sx={{
        cursor: "move",
        opacity: isDragging ? "0.5" : "1.0",
        color: isOver ? "red" : "black",
      }}
      draggable="true"
    >
      {children}
    </Box>
  );
};
