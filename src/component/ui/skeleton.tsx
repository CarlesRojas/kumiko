import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
    return <div data-slot="skeleton" className={cn("animate-pulse rounded-md bg-neutral-800", className)} {...props} />;
}

export { Skeleton };
