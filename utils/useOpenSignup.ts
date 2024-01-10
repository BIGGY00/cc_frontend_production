import { create } from "zustand";

export interface StateType {
  openSignup: boolean;
  setOpenSignup: (value: boolean) => void;
}

const useOpenSignup = create<StateType>((set) => ({
  openSignup: false,
  setOpenSignup: (value) => set({ openSignup: value }),
}));

export default useOpenSignup;
