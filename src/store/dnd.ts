import { atom } from "recoil";

export type DndContent = {
  draggingItemId: string | null;
  overItemId: string | null;
};

export const dndAtom = atom<DndContent>({
  key: "dnd",
  default: {
    draggingItemId: null,
    overItemId: null,
  },
});
