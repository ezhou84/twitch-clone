"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

 interface WrapperProps {
    children: React.ReactNode;
 };

 export const Wrapper = ({
    children,
 }: WrapperProps) => {
    // When you call the hook, you can pass a selector function that takes the entire state as an argument
    // This function allows you to extract specific pieces of state or actions
    // Here, the function passed to useSidebar returns the entire state, and we destructure it and just get the collapsed property
    // useSidebar is a client-side hook, so it must be called within a Client Component, so you must add "use client"
    // The state managed by useSidebar (e.g. whether the sidebar is collapsed or expanded) is dynamic and can change based on user interactions
    // This dynamic behavior is inherently a client-side concern
    const { collapsed } = useSidebar((state) => state);

    return (
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    )
 }