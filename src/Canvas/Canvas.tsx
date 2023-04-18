import { Box, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dndAtom } from "../store/dnd";
import { itemFamilyAtom } from "../store/item";
import { rowAtomFamily } from "../store/row";
import { InvisibleRow, Row } from "./Row";

export const Canvas: React.FC = () => {
  const [, setRow1Content] = useRecoilState(rowAtomFamily("row-1"));
  const [, setRow2Content] = useRecoilState(rowAtomFamily("row-2"));
  const [, setRow3Content] = useRecoilState(rowAtomFamily("row-3"));

  const [, setItem1Content] = useRecoilState(itemFamilyAtom("item-1"));
  const [, setItem2Content] = useRecoilState(itemFamilyAtom("item-2"));
  const [, setItem3Content] = useRecoilState(itemFamilyAtom("item-3"));
  const [, setItem4Content] = useRecoilState(itemFamilyAtom("item-4"));
  const [, setItemPlaceholderContent] = useRecoilState(
    itemFamilyAtom("PLACEHOLDER")
  );

  const dnd = useRecoilValue(dndAtom);

  useEffect(() => {
    setRow1Content({
      id: "row1",
      itemIds: ["item-1"],
    });
    setRow2Content({
      id: "row2",
      itemIds: ["item-2", "item-3", "item-4"],
    });
    setRow3Content({
      id: "row3",
      itemIds: [],
    });

    setItem1Content({
      id: "item-1",
      label: "item-1",
      type: "S",
    });
    setItem2Content({
      id: "item-2",
      label: "item-2",
      type: "S",
    });
    setItem3Content({
      id: "item-3",
      label: "item-3",
      type: "M",
    });
    setItem4Content({
      id: "item-4",
      label: "item-4",
      type: "L",
    });
    setItemPlaceholderContent({
      id: "PLACEHOLDER",
      label: "Placeholder",
      type: "S",
    });
  }, []);

  return (
    <>
      <Box p="50px" w="700px" h="900px" bgColor="white">
        <InvisibleRow />
        <Row rowId="row-1" />
        <InvisibleRow />
        <Row rowId="row-2" />
        <InvisibleRow />
        <Row rowId="row-3" />
        <InvisibleRow />
      </Box>
      <Divider />
      <pre style={{ width: "200px" }}>{JSON.stringify(dnd, null, 2)}</pre>
    </>
  );
};
