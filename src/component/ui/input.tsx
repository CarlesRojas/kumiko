import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

function Input({ className, type, ...props }: ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-9 w-full min-w-0 rounded-md border border-neutral-800 bg-neutral-800/30 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-neutral-50 selection:text-neutral-900 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-50 placeholder:text-neutral-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-neutral-300 focus-visible:ring-[3px] focus-visible:ring-neutral-300/50",
                "aria-invalid:border-red-900 aria-invalid:ring-red-900/40",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
