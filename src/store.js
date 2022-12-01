import create from "zustand";

const useStore = create((set) => ({
  team: 0,
  setTeam: (team) => set({ team }),
}));

export default useStore;
