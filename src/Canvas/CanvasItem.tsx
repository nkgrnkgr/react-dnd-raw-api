import { Center, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ITEM_TYPE_SIZE } from "../constants";
import { dndAtom } from "../store/dnd";
import { itemFamilyAtom } from "../store/item";

type Props = {
  itemId: string;
};

export const CanvasItem: React.FC<Props> = ({ itemId }) => {
  const item = useRecoilValue(itemFamilyAtom(itemId));
  const dnd = useRecoilValue(dndAtom);

  const width = dnd.overItemId === itemId ? "400px" : "200px";
  const bgColor = dnd.overItemId === itemId ? "red.200" : "cyan.400";

  return (
    <Center w={width} h={ITEM_TYPE_SIZE[item.type]} bgColor={bgColor}>
      {dnd.overItemId === itemId && (
        <Text w="200px" textAlign="center">
          PlaceHolder
        </Text>
      )}
      <Text w="200px" textAlign="center">
        {item.label}
      </Text>
    </Center>
  );
};
