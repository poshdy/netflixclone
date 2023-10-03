import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useMovieModalStore = {
  isOpen: boolean;
  data: (MOVIE & TVSHOW) | null;
  onOpen: (payload: any) => void;
  onClose: () => void;
};

export const useMovieModal = create<useMovieModalStore>()(
  devtools((set) => ({
    isOpen: false,
    data: null,
    onOpen: (payload) => set({ isOpen: true, data: payload }),
    onClose: () => set({ isOpen: false }),
  }))
);
