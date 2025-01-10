import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface HintProps {
    label: string,
    children: React.ReactNode;
    asChild?: boolean,
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
};

export const Hint = ({
    label,
    children,
    asChild,
    side,
    align,
}: HintProps) => {
    // asChild prop is used to control how the TooltipTrigger component's children are rendered
    // When asChild is set to true, it will render its children directly as the specified component without wrapping them in an additional element
    // When asChild is set to false, it will wrap its children in a default HTML element, like a <span>
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent 
                    className="text-black bg-white" 
                    side={side}
                    align={align}
                >
                    <p className="font-semibold">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}