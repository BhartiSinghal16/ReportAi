import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const severityConfig = {
  normal: {
    label: "Normal",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  low: {
    label: "Below Range",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  high: {
    label: "Above Range",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  critical: {
    label: "Needs Attention",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};