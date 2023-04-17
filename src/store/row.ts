import { atomFamily } from "recoil";

export type RowContent = {
  id: string;
  itemIds: string[];
};

export const rowAtomFamily = atomFamily<RowContent, string>({
  key: "item",
  default: (id) => ({
    id,
    itemIds: [],
  }),
});
