"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface ContainerProps {
    children: React.ReactNode;
};

export const Container = ({
    children,
}: ContainerProps) => {
    // Will be true when the screen is narrow
    const matches = useMediaQuery("(max-width: 1024px)");
    const {
        collapsed,
        onCollapse,
        onExpand,
    } = useSidebar((state) => state);

    // Encapsulates side effects that should only run when specific conditions change, rather than on every render
    useEffect(() => {
        if (matches) {
            onCollapse();
        } else {
            onExpand();
        }
    }, [matches, onCollapse, onExpand]);
    // Include all values that are used in the useEffect is a best practice to ensure that the correct functions are called

    return (
        <div className={cn(
            "flex-1",
            collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60"
        )}>
            {children}
        </div>
    );
};