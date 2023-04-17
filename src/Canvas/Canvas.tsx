import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { InvisibleRow, Row } from "./Row";

type ItemProps = {
  id: string;
  type: string;
  label: string;
};

const ROW_1_ITEMS: ItemProps[] = [
  {
    id: "item-1",
    type: "S",
    label: "item-1 S",
  },
];

const ROW_2_ITEMS: ItemProps[] = [
  {
    id: "item-2",
    type: "S",
    label: "item-2 S",
  },
  {
    id: "item-3",
    type: "M",
    label: "item-3 S",
  },
  {
    id: "item-4",
    type: "L",
    label: "item-4 S",
  },
];

const ROW_3_ITEMS: ItemProps[] = [];

export const Canvas: React.FC = () => {
  const [row1Items, setRow1Items] = useState(ROW_1_ITEMS);
  const [row2Items, setRow2Items] = useState(ROW_2_ITEMS);
  const [row3Items, setRow3Items] = useState(ROW_3_ITEMS);

  return (
    <Box p="50px" w="700px" h="900px" bgColor="white">
      <InvisibleRow />
      <Row items={row1Items} />
      <InvisibleRow />
      <Row items={row2Items} />
      <InvisibleRow />
      <Row items={row3Items} />
      <InvisibleRow />
    </Box>
  );
};
