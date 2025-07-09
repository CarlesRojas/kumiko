import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const buttonVariants = cva(
    "font-code inline-flex cursor-pointer items-center justify-center gap-3 rounded-lg text-sm whitespace-nowrap transition-all focus-visible:z-10 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-wood-400 hover:bg-wood-200 focus-visible:bg-wood-200 font-bold tracking-wide text-black uppercase",
                ghost: "inset-ring-wood-500/80 bg-transparent font-semibold text-white hover:opacity-70 focus-visible:inset-ring-2",
                input: "to-wood-500/10 bg-neutral-800 from-indigo-500/10 font-bold uppercase hover:bg-gradient-to-r",
                secondary:
                    "bg-wood-100/15 hover:bg-wood-500/50 focus-visible:bg-wood-500/50 font-semibold backdrop-blur-sm",
            },
            size: {
                default:
                    "h-10 min-h-10 w-fit px-5 [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_0.75rem,100%_100%,0_100%)]",
                icon: "h-10 max-h-10 min-h-10 w-10 max-w-10 min-w-10 [clip-path:polygon(0_0,calc(100%-0.75rem)_0,100%_0.75rem,100%_100%,0_100%)]",
                ghost: "h-10 min-h-10 w-fit px-5",
                iconGhost: "h-10 max-h-10 min-h-10 w-10 max-w-10 min-w-10",
                fit: "h-fit w-fit",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
