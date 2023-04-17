import { Box } from "@chakra-ui/react";
import { ITEM_TYPE_SIZE } from "../constants";

type Props = {
  type: string;
};

export const PlaceHolder: React.FC<Props> = ({ type }) => {
  return <Box color="cyan" w="200px" h={ITEM_TYPE_SIZE[type]}></Box>;
};
