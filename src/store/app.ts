// appStore.ts
import { create } from "zustand";

// Define the state type
interface AppState {
  openModal: boolean;
  isOpenProjectDrawer: boolean;
  isFinishedOnboarding: boolean;
  appUser: string;
  setOpenModal: (openModal: boolean) => void;
  setOpenProjectDrawer: (openDrawer: boolean) => void;
  setFinishedOnboarding: (isFinishedOnboarding: boolean) => void;
  setAppUser: (user: string) => void;
}

// Create the store with type annotations
const useAppStore = create<AppState>((set, get) => ({
  openModal: false,
  isOpenProjectDrawer: false,
  isFinishedOnboarding: false,
  appUser: "Guest",
  setOpenModal: (openModal) => set({ openModal }),
  setOpenProjectDrawer: (isOpenProjectDrawer) => set({ isOpenProjectDrawer }),
  setFinishedOnboarding: (isFinishedOnboarding) => set({ isFinishedOnboarding }),
  setAppUser: (appUser) => set({ appUser }),
}));

export default useAppStore;
