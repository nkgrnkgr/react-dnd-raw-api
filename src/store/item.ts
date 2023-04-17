import { atomFamily } from "recoil";

export type ItemContent = {
  id: string;
  type: string;
  label: string;
};

export const itemFamilyAtom = atomFamily<ItemContent, string>({
  key: "item",
  default: (id) => ({
    id,
    type: "S",
    label: "",
  }),
});
