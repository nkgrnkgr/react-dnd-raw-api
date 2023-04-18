import { Center, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ITEM_TYPE_SIZE } from "../constants";
import { itemFamilyAtom } from "../store/item";

type Props = {
  itemId: string;
};

export const CanvasItem: React.FC<Props> = ({ itemId }) => {
  const item = useRecoilValue(itemFamilyAtom(itemId));

  if (item.id === "PLACEHOLDER") {
    return (
      <Center w="200px" bgColor="tomato" h="50px">
        <Text>Placeholder</Text>
      </Center>
    );
  }

  return (
    <Center w="200px" bgColor="cyan.400" h={ITEM_TYPE_SIZE[item.type]}>
      <Text>{item.label}</Text>
    </Center>
  );
};
