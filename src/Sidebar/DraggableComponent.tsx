import { Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import { ITEM_TYPE_SIZE } from "../constants";
import { DraggableData } from "react-draggable";

type Props = {
  id: string;
  type: string;
  label: string;
};

export const DraggableComponent: React.FC<Props> = ({ type, label }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleStart = () => {};
  const handleDrag = () => {};
  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const { x, y } = data;
    setPosition({ x, y });
  };

  return (
    <Draggable
      handle=".handle"
      position={{
        ...position,
      }}
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
