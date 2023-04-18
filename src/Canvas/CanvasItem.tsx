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

  return (
    <Center w={width}>
      {placeholderShown && <PlaceHolder itemType={item.type} />}
      {shouldReplacePlaceholder(dnd, itemId) ? (
        <PlaceHolder itemType={item.type} />
      ) : (
        <Text
          w="200px"
          h={ITEM_TYPE_SIZE[item.type]}
          bgColor="cyan.400"
          textAlign="center"
        >
          {item.label}
        </Text>
      )}
    </Center>
  );
};

const PlaceHolder: React.FC<{ itemType: string }> = ({ itemType }) => {
  return (
    <Text
      w="200px"
      h={ITEM_TYPE_SIZE[itemType]}
      textAlign="center"
      bgColor="red.200"
    >
      PlaceHolder
    </Text>
  );
};

const shouldReplacePlaceholder = (dnd: DndContent, itemId: string) =>
  dnd.overItemId === itemId && dnd.draggingItemId === itemId;

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
