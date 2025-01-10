import { create } from "zustand";

interface SidebarStore {
    collapsed: boolean;
    onExpand: () => void;
    onCollapse: () => void;
};

// create expects a function as its argument, and this function is called the "store initializer"
// Zustand internally defines the signature of this function, which includes the set parameter
// Returns a hook that allows you to read the current state and subscribe to changes
export const useSidebar = create<SidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}));