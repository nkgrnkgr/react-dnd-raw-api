import { Center, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ITEM_TYPE_SIZE } from "../constants";
import { itemFamilyAtom } from "../store/item";

type Props = {
  itemId: string;
};

export const CanvasItem: React.FC<Props> = ({ itemId }) => {
  const item = useRecoilValue(itemFamilyAtom(itemId));

  return (
    <Center w="200px" bgColor="cyan.400" h={ITEM_TYPE_SIZE[item.type]}>
      <Text>{item.label}</Text>
    </Center>
  );
};
