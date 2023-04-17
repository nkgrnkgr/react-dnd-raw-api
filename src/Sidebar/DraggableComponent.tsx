import { Center, Text } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { ITEM_TYPE_SIZE } from "../constants";

type Props = {
  id: string;
  type: string;
  label: string;
};

export const DraggableComponent: React.FC<Props> = ({ type, label }) => {
  const handleStart = () => {};
  const handleDrag = () => {};
  const handleStop = () => {};

  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <Center
        className="handle"
        w="200px"
        h={ITEM_TYPE_SIZE[type]}
        bgColor="cyan.400"
        p="4"
      >
        <Text>{label}</Text>
      </Center>
    </Draggable>
  );
};
