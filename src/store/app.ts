// appStore.ts
import { create } from "zustand";

// Define the state type
interface AppState {
  openModal: boolean;
  appUser: string;
  setOpenModal: (openModal: boolean) => void;
  setAppUser: (user: string) => void;
}

// Create the store with type annotations
const useAppStore = create<AppState>((set, get) => ({
  openModal: false,
  appUser: "Guest",
  setOpenModal: (openModal) => set({ openModal }),
  setAppUser: (appUser) => set({ appUser }),
}));

export default useAppStore;
