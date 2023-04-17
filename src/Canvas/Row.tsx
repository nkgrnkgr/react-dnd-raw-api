import { Box } from "@chakra-ui/react";
import { useState } from "react";

const DEFAULT_COLOR = "gray.300";

export const Row: React.FC = () => {
  const [bgColor, setBgColor] = useState(DEFAULT_COLOR);

  const handleDragEnter = () => {
    console.log("called a");
    setBgColor("cyan");
  };
  const handleDragLeave = () => {
    console.log("called b");
    setBgColor(DEFAULT_COLOR);
  };

  return (
    <Box
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      w="500px"
      minH="50px"
      bgColor={bgColor}
    ></Box>
  );
};

export const InvisibleRow: React.FC = () => {
  return <Box w="500px" minH="10px" bgColor="gray.100"></Box>;
};
