import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const DraggableWrapper: React.FC<Props> = ({ children }) => {
  return <Box draggable="true">{children}</Box>;
};
