import { Box } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const DraggableWrapper: React.FC<Props> = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Box
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      sx={{
        cursor: "move",
        opacity: isDragging ? "0.5" : "1.0",
      }}
      draggable="true"
    >
      {children}
    </Box>
  );
};
