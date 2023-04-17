import { Center, Text } from "@chakra-ui/react";
import { ITEM_TYPE_SIZE } from "../constants";

type Props = {
  type: string;
  label: string;
};

export const CanvasItem: React.FC<Props> = ({ type, label }) => {
  return (
    <Center w="200px" h={ITEM_TYPE_SIZE[type]} bgColor="cyan.400" p="4">
      <Text>{label}</Text>
    </Center>
  );
};
