import { useRecoilValue } from "recoil";
import { dndAtom } from "../store/dnd";

export const useDndOperator = () => {
  const dnd = useRecoilValue(dndAtom);
  return dnd;
};
