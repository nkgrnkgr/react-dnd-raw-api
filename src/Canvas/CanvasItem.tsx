import { Center, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ITEM_TYPE_SIZE } from "../constants";
import { DndContent, dndAtom } from "../store/dnd";
import { itemFamilyAtom } from "../store/item";

type Props = {
  itemId: string;
};

export const CanvasItem: React.FC<Props> = ({ itemId }) => {
  const item = useRecoilValue(itemFamilyAtom(itemId));
  const dnd = useRecoilValue(dndAtom);
  const placeholderShown = shouldShowPlaceholder(dnd, itemId);

  const width = placeholderShown ? "400px" : "200px";
  const bgColor = placeholderShown ? "red.200" : "cyan.400";

  return (
    <Center w={width} h={ITEM_TYPE_SIZE[item.type]} bgColor={bgColor}>
      {placeholderShown && (
        <Text w="200px" textAlign="center">
          PlaceHolder
        </Text>
      )}
      {shouldReplacePlaceholder(dnd, itemId) ? (
        <Text w="200px" textAlign="center">
          PlaceHolder
        </Text>
      ) : (
        <Text w="200px" textAlign="center">
          {item.label}
        </Text>
      )}
    </Center>
  );
};

const shouldReplacePlaceholder = (dnd: DndContent, itemId: string) =>
  dnd.draggingItemId === itemId;

const shouldShowPlaceholder = (dnd: DndContent, itemId: string) => {
  const { draggingItemId, overItemId } = dnd;

  if (draggingItemId === itemId) {
    return false;
  }

  if (overItemId === itemId) {
    return true;
  }

  return false;
};
