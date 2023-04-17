import { Box } from "@chakra-ui/react";

export const Row: React.FC = () => {
  return <Box w="500px" minH="50px" bgColor="gray.300"></Box>;
};

export const InvisibleRow: React.FC = () => {
  return <Box w="500px" minH="10px" bgColor="gray.100"></Box>;
};
