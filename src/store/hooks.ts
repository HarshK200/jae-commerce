import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppStore, RootState, AppDispatch } from "@/store/store";

export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
