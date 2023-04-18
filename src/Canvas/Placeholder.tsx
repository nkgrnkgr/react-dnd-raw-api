import { Box } from "@chakra-ui/react";
import { ITEM_TYPE_SIZE } from "../constants";

export const PLACEHOLDER_ID = "PLACEHOLDER";

export const PlaceHolder: React.FC = () => {
  return <Box bgColor="cyan" w="200px" h={ITEM_TYPE_SIZE["S"]}></Box>;
};
