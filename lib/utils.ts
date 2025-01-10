import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges CSS class names returned by clsx (truthy values), resolving any conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
