import { Box } from "@chakra-ui/react";
import { InvisibleRow, Row } from "./Row";

export const Canvas: React.FC = () => {
  return (
    <Box p="50px" w="600px" h="900px" bgColor="white">
      <InvisibleRow />
      <Row />
      <InvisibleRow />
      <Row />
      <InvisibleRow />
    </Box>
  );
};
